import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  /**
   * Valide qu'un email est valide
   */
  static email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(control.value) ? null : { invalidEmail: true };
    };
  }

  /**
   * Valide qu'un champ est un nombre
   */
  static number(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      return /^-?\d+(\.\d+)?$/.test(control.value) ? null : { invalidNumber: true };
    };
  }

  /**
   * Valide qu'un champ n'est que des lettres
   */
  static lettersOnly(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      return /^[a-zA-Z\s]*$/.test(control.value) ? null : { lettersOnly: true };
    };
  }

  /**
   * Valide qu'un mot de passe est assez fort
   */
  static strongPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const password = control.value;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumeric = /[0-9]/.test(password);
      const hasMinLength = password.length >= 8;

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasMinLength;
      return passwordValid ? null : { weakPassword: true };
    };
  }

  /**
   * Valide qu'un champ correspond à un autre champ
   */
  static match(fieldName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const field = control.parent?.get(fieldName);
      return field && control.value === field.value ? null : { notMatching: true };
    };
  }

  /**
   * Valide une date minimale
   */
  static minDate(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const controlDate = new Date(control.value);
      return controlDate >= minDate ? null : { minDate: true };
    };
  }

  /**
   * Valide une date maximale
   */
  static maxDate(maxDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      const controlDate = new Date(control.value);
      return controlDate <= maxDate ? null : { maxDate: true };
    };
  }
}
