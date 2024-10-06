import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  // Inyectar el servicio Router en el constructor
  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializar el formulario reactivo
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      retypePassword: ['', [Validators.required]],
      name: ['', Validators.required],
      username: ['', Validators.required],
      phoneNumber: ['']
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.registerForm.valid) {
      // Aquí puedes realizar la lógica de creación de cuenta
      Swal.fire({
        icon: 'success',
        title: 'Cuenta creada con éxito',
        showConfirmButton: false,
        timer: 2000 // Duración de 2 segundos
      });

      setTimeout(() => {
        this.router.navigate(['/login']); // Redirigir al login después de la creación
      }, 2000);
    } else {
      // Mostrar un mensaje de error si el formulario no es válido
      Swal.fire({
        icon: 'error',
        title: 'Por favor, completa todos los campos requeridos',
        showConfirmButton: true
      });
    }
  }
}
