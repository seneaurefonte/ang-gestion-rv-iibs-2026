import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../../../core/models';
import { AUTH_SERVICE_TOKEN, IAuthService } from 'src/app/core/services/auth.service.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading = false;
  errorMessage: string | null = null;
  submitAttempted = false;

  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private authService: IAuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    this.submitAttempted = true;

    if (form.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const credentials: LoginRequest = {
      email: this.email,
      password: this.password
    };

    const response = this.authService.login(credentials);

    if (response && response.user) {
      form.reset();
      this.submitAttempted = false;
      this.router.navigate(['/private']);
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
      this.isLoading = false;
    }
  }

  isFieldInvalid(field: string, form: NgForm): boolean {
    const control = form?.controls?.[field];
    return !!(control && control.invalid && (control.dirty || control.touched || this.submitAttempted));
  }
}
