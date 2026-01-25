import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.css'
})
export class StatusBadgeComponent {
  @Input() text: string = 'Statut';
  @Input() icon: string = 'bi-info-circle';
  @Input() bgClass: string = 'bg-secondary';
  @Input() textClass: string = 'text-white';

  private statusPresets: { [key: string]: any } = {
    en_attente: {
      icon: 'bi-clock-history',
      text: 'En attente',
      bgClass: 'bg-warning',
      textClass: 'text-dark'
    },
    accepte: {
      icon: 'bi-check-circle',
      text: 'Acceptée',
      bgClass: 'bg-success',
      textClass: 'text-white'
    },
    refuse: {
      icon: 'bi-x-circle',
      text: 'Refusée',
      bgClass: 'bg-danger',
      textClass: 'text-white'
    },
    en_cours: {
      icon: 'bi-hourglass-split',
      text: 'En cours',
      bgClass: 'bg-info',
      textClass: 'text-white'
    },
    complet: {
      icon: 'bi-check2-all',
      text: 'Complété',
      bgClass: 'bg-success',
      textClass: 'text-white'
    },
    erreur: {
      icon: 'bi-exclamation-circle',
      text: 'Erreur',
      bgClass: 'bg-danger',
      textClass: 'text-white'
    }
  };

  setStatus(status: string) {
    const preset = this.statusPresets[status];
    if (preset) {
      this.text = preset.text;
      this.icon = preset.icon;
      this.bgClass = preset.bgClass;
      this.textClass = preset.textClass;
    }
  }
}

