import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() type: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Input() message: string = '';
  @Input() dismissible: boolean = true;
  @Input() autoClose: number | null = null;
  
  @Output() closed = new EventEmitter<void>();

  ngOnInit() {
    if (this.autoClose) {
      setTimeout(() => this.close(), this.autoClose);
    }
  }

  close() {
    this.closed.emit();
  }

  getIcon(): string {
    const icons: { [key: string]: string } = {
      success: '✓',
      danger: '✕',
      warning: '⚠',
      info: 'ℹ'
    };
    return icons[this.type];
  }
}
