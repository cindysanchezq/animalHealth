import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animal-register',
  templateUrl: './animal-register.component.html',
  styleUrls: ['./animal-register.component.css']
})
export class AnimalRegisterComponent {
  animalForm: FormGroup;
  caretakers: string[] = ['Juan', 'María', 'Pedro']; // Ejemplo de lista de cuidadores

  constructor(private fb: FormBuilder, private router: Router) {
    this.animalForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      species: ['', Validators.required],
      habitat: ['', Validators.required],
      food: ['', Validators.required],
      caretaker: ['', Validators.required],
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.animalForm.valid) {
      // Mostrar SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Animal registrado',
        showConfirmButton: false,
        timer: 2000
      });

      // Redirigir a la página de Home después de 2 segundos
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos requeridos',
        showConfirmButton: true
      });
    }
  }

}
