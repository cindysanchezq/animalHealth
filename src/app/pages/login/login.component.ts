import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importa el Router para la navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializar el formulario reactivo
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica de autenticación si es necesario
      console.log('Iniciando sesión...');

      // Redirigir al usuario a la página de Home
      this.router.navigate(['/home']);
    } else {
      // Si el formulario es inválido, muestra un mensaje en la consola
      console.log('Formulario inválido');
    }
  }
}
