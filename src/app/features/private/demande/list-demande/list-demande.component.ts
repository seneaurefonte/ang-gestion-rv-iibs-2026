import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginationComponent, StatusBadgeComponent } from '@shared';
import { IDemandeService, DEMANDE_SERVICE_TOKEN } from '../services';
import { DemandRV, DemandRVFilter, StatutDemande } from '../models/demande.model';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PaginationComponent, StatusBadgeComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {
  demandes: DemandRV[] = [];
  filteredDemandes: DemandRV[] = [];
  
  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;

  // Filtres
  filterStatus: StatutDemande | '' = '';
  filterSpecialite: string = '';

  // Const pour les statuts
  StatutDemande = StatutDemande;

  constructor(@Inject(DEMANDE_SERVICE_TOKEN) private demandeService: IDemandeService) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  /**
   * Charge les demandes avec les filtres appliqués
   */
  loadDemandes(): void {
    const filters: DemandRVFilter = {
      statut: this.filterStatus as StatutDemande | '',
      specialite: this.filterSpecialite,
      page: this.currentPage,
      limit: this.itemsPerPage
    };

    this.demandeService.getDemandes(filters).subscribe({
      next: (response) => {
        this.demandes = response.data;
        this.totalPages = response.totalPages;
        this.totalItems = response.totalItems;
        this.currentPage = response.currentPage;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des demandes:', error);
      }
    });
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
}
