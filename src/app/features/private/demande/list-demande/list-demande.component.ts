import { Component, OnInit, Inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationComponent, StatusBadgeComponent, LoadingComponent, AlertComponent } from '@shared';
import { IDemandeService, DEMANDE_SERVICE_TOKEN } from '../services';
import { DemandRV, DemandRVFilter, DemandRVResponse, StatutDemande } from '../models/demande.model';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PaginationComponent, StatusBadgeComponent, LoadingComponent, AlertComponent,AsyncPipe],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {
  demandes: DemandRV[] = [];
  filteredDemandes: DemandRV[] = [];
  isLoading: boolean = false;
  showAlert: boolean = true;
  demandes$: Observable<DemandRVResponse> = of();
  
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;

  // Filtres
  filterStatus: StatutDemande | '' = '';
  filterSpecialite: string = '';

  // Const pour les statuts
  StatutDemande = StatutDemande;

  constructor(
    @Inject(DEMANDE_SERVICE_TOKEN) private demandeService: IDemandeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Charger les demandes
    this.loadDemandes();
  }

  /**
   * Charge les demandes avec les filtres appliqués
   */
  loadDemandes(): void {
    this.isLoading = true;
    
    // Utiliser le resolver via this.route.data et le pipe async
    this.demandes$ = this.route.data.pipe(
      map(data => {
        const resolvedData = data['demandes'] as DemandRVResponse;
        if (resolvedData) {
          this.demandes = resolvedData.data;
          this.totalPages = resolvedData.totalPages;
          this.totalItems = resolvedData.totalItems;
          this.currentPage = resolvedData.currentPage;
          this.isLoading = false;
        }
        return resolvedData;
      })
    );
  }

  /**
   * Appelé lors du changement de page
   */
  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadDemandes();
  }

  /**
   * Filtre les demandes par statut
   */
  onFilterStatusChange(): void {
    this.currentPage = 1;
    this.loadDemandes();
  }

  /**
   * Filtre les demandes par spécialité
   */
  onFilterSpecialiteChange(): void {
    this.currentPage = 1;
    this.loadDemandes();
  }

  /**
   * Supprime une demande
   */
  deleteDemande(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette demande ?')) {
      this.demandeService.deleteDemande(id).subscribe({
        next: () => {
          this.loadDemandes();
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      });
    }
  }

  /**
   * Formate la date
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  }

  /**
   * Ferme l'alerte
   */
  closeAlert(): void {
    this.showAlert = false;
  }
}
