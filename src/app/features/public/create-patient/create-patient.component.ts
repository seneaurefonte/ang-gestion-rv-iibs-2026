import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';


@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
  patientForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private patientService: PatientService) {
    this.patientForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      numero: ['', [Validators.required, Validators.minLength(3)]],
      nom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      prenom: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-()]{9,}$/)]],
      adresse: ['', [Validators.required, Validators.minLength(5)]],
      antecedents: ['', [Validators.maxLength(500)]]
    });
  }

  get f() {
    return this.patientForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.patientForm.valid) {
      const payload = this.patientForm.value;
      this.patientService.createPatient(payload).subscribe({
        next: () => {
          console.log('Patient créé:', payload);
          alert('Patient créé avec succès!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Erreur création patient', err);
          alert('Erreur lors de la création du patient.');
        }
      });
    }
  }
  onReset(): void {
    this.submitted = false;
    this.patientForm.reset();
  }
  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
