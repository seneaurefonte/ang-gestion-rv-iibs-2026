import { Component } from '@angular/core';
import { HearderPublicComponent } from '../../layouts/public/hearder-public/hearder-public.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [HearderPublicComponent,RouterOutlet],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {

}
