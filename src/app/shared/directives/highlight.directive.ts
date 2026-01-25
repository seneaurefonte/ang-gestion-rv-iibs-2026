import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() highlightColor: string = 'yellow';
  @Input() textColor: string = 'black';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor, this.textColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('transparent', 'inherit');
  }

  private highlight(bgColor: string, textColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = textColor;
  }
}
