import { Component } from '@angular/core';

@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.css']
})
export class HealthRecordComponent {
  searchVisible = true;
  selectedAnimal: any = null;

  // Lista de animales con sus visitas
  animals = [
    {
      id: 1,
      name: 'Tom',
      raza: 'Gato',
      sexo: 'Macho',
      edad: 4,
      chip: '12345',
      peso: '4kg',
      rh: 'A+',
      padres: 'Katy Gomez',
      imageUrl: '../../../assets/tom.jpeg',
      visits: [
        { id: 1, consulta: 'Consulta General', fecha: '10/01/2024', motivo: 'Revisión general' },
        { id: 2, consulta: 'Consulta Especialista', fecha: '15/02/2024', motivo: 'Problemas digestivos' }
      ]
    },
    {
      id: 2,
      name: 'Max',
      raza: 'Perro',
      sexo: 'Macho',
      edad: 6,
      chip: '67890',
      peso: '10kg',
      rh: 'O+',
      padres: 'Alex Castro',
      imageUrl: '../../../assets/max.jpg',
      visits: [
        { id: 1, consulta: 'Consulta General', fecha: '05/01/2024', motivo: 'Vacunación' },
        { id: 2, consulta: 'Consulta Especialista', fecha: '20/03/2024', motivo: 'Problemas de movilidad' }
      ]
    }
  ];

  filteredAnimals = this.animals;

  // Filtrar animales basado en la búsqueda
  filterAnimals(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredAnimals = this.animals.filter(animal =>
      animal.name.toLowerCase().includes(query) || animal.id.toString().includes(query)
    );
  }

  // Seleccionar un animal y mostrar su historial de visitas
  selectAnimal(animal: any) {
    this.selectedAnimal = animal;
    this.filteredAnimals = []; // Ocultar la lista después de seleccionar
    this.searchVisible = false; // Ocultar el campo de búsqueda
  }
}
