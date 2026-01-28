import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml {
    // bypassSecurityTrustHtml : Marque la chaîne HTML comme fiable et la retourne
    // sans la soumettre aux vérifications de sécurité d'Angular.
    // À utiliser uniquement avec des sources HTML de confiance pour éviter les failles XSS.
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
