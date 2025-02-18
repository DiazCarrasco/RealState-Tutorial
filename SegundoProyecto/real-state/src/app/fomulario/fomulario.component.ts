import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombreUsuario: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(17)]],
      email: ['', [Validators.required, Validators.email]],
      check: ['', [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario enviado', this.formulario.value);
    } else {
      console.log('Formulario no válido');
      alert('Por favor, complete todos los campos requeridos correctamente.');
    }
  }
}