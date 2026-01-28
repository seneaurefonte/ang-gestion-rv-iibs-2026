import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent, StatusBadgeComponent } from '@shared';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, PaginationComponent, StatusBadgeComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css'
})
export class ListDemandeComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 2;

  ngOnInit(): void {
    // Initialiser les données
  }

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('Page changée à:', page);
  }
}
