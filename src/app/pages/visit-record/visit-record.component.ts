import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visit-record',
  templateUrl: './visit-record.component.html',
  styleUrls: ['./visit-record.component.css']
})
export class VisitRecordComponent implements OnInit {
  selectedAnimal: any = null;
  visitDetails: any = null;

  // Lista de animales con sus visitas (puedes obtener esto del servicio o API en el futuro)
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
        { 
          id: 1, 
          consulta: 'Consulta General', 
          fecha: '10/01/2024', 
          motivo: 'Revisión general', 
          diagnostico: 'Salud estable', 
          tratamiento: 'Ninguno',
          examenes: ['Examen de Sangre', 'Radiografía de Tórax', 'Ultrasonido Abdominal']
        },
        { 
          id: 2, 
          consulta: 'Consulta Especialista', 
          fecha: '15/02/2024', 
          motivo: 'Problemas digestivos', 
          diagnostico: 'Gastroenteritis leve', 
          tratamiento: 'Medicamento antidiarreico',
          examenes: ['Examen de Heces', 'Endoscopia']
        }
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
        { 
          id: 1, 
          consulta: 'Consulta General', 
          fecha: '05/01/2024', 
          motivo: 'Vacunación', 
          diagnostico: 'Salud estable', 
          tratamiento: 'Vacunado contra parvovirus',
          examenes: ['Prueba de Parvovirus', 'Examen Físico General']
        },
        { 
          id: 2, 
          consulta: 'Consulta Especialista', 
          fecha: '20/03/2024', 
          motivo: 'Problemas de movilidad', 
          diagnostico: 'Displasia de cadera', 
          tratamiento: 'Tratamiento con antiinflamatorios',
          examenes: ['Radiografía de Caderas', 'Análisis de Movimiento']
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const animalId = Number(this.route.snapshot.paramMap.get('idAnimal'));
    const visitId = Number(this.route.snapshot.paramMap.get('idVisita'));

    this.loadVisitDetails(animalId, visitId);
  }

  // Cargar los detalles de la visita basados en los IDs del animal y la visita
  loadVisitDetails(animalId: number, visitId: number) {
    const animal = this.animals.find(a => a.id === animalId);
    if (animal) {
      this.selectedAnimal = animal;
      this.visitDetails = animal.visits.find(v => v.id === visitId);
    }
  }

  // Prevenir el comportamiento por defecto de los enlaces
  preventLinkDefault(event: Event) {
    event.preventDefault(); // Evita que el enlace realice la navegación por defecto
  }

  goBack() {
    this.router.navigate(['/healthRecord']);
  }
}
