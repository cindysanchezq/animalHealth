import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // Para redirigir a home

@Component({
  selector: 'app-clinical-history',
  templateUrl: './clinical-history.component.html',
  styleUrls: ['./clinical-history.component.css']
})
export class ClinicalHistoryComponent {
  clinicalForm: FormGroup;
  
  // Lista de animales de ejemplo con información completa
  animals = [
    {
      id: 1,
      name: 'Tom',
      raza: 'Gato',
      edad: 4,
      sexo: 'Macho',
      chip: '12345',
      peso: '4kg',
      rh: 'A+',
      imageUrl: '../../../assets/tom.jpeg', // URL de la imagen del animal
      padres:'Katy Gomez'
    },
    {
      id: 2,
      name: 'Max',
      raza: 'Perro',
      edad: 6,
      sexo: 'Macho',
      chip: '67890',
      peso: '4kg',
      rh: 'O+',
      imageUrl: '../../../assets/max.jpg', // URL de la imagen del animal
      padres:'Alex Castro'
    }
  ]; 

  filteredAnimals = this.animals;
  selectedAnimal: any = null;
  searchVisible = true; // Bandera para controlar la visibilidad del campo de búsqueda

  constructor(private fb: FormBuilder, private router: Router) {
    this.clinicalForm = this.fb.group({
      peso: ['', Validators.required],
      rh: ['', Validators.required],
      vacunas: ['', Validators.required],
      enfermedades: [''],
      examenes: [''],
      tratamientos: ['']
    });
  }

  // Filtrar animales basado en la búsqueda
  filterAnimals(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredAnimals = this.animals.filter(animal =>
      animal.name.toLowerCase().includes(query) || animal.id.toString().includes(query)
    );
  }

  // Seleccionar un animal de la lista y actualizar el formulario
  selectAnimal(animal: any) {
    this.selectedAnimal = animal;
    this.filteredAnimals = []; // Ocultar la lista después de seleccionar
    this.searchVisible = false; // Ocultar el campo de búsqueda

    // Actualizar el formulario con los valores del animal seleccionado
    this.clinicalForm.patchValue({
      peso: animal.peso,
      rh: animal.rh,
      vacunas: animal.vacunas,
      enfermedades: animal.enfermedades,
      examenes: animal.examenes,
      tratamientos: animal.tratamientos
    });
  }



  // Método para guardar el registro
  onSubmit() {
    if (this.clinicalForm.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Registro guardado',
        showConfirmButton: false,
        timer: 2000
      });
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete los campos requeridos',
        showConfirmButton: true
      });
    }
  }
}
