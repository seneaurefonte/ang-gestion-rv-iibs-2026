import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone: true
})
export class DisabledDirective {
  @Input() set appDisabled(disabled: boolean) {
    if (disabled) {
      this.el.nativeElement.style.opacity = '0.5';
      this.el.nativeElement.style.pointerEvents = 'none';
      this.el.nativeElement.style.cursor = 'not-allowed';
    } else {
      this.el.nativeElement.style.opacity = '1';
      this.el.nativeElement.style.pointerEvents = 'auto';
      this.el.nativeElement.style.cursor = 'auto';
    }
  }

  constructor(private el: ElementRef) {}
}
