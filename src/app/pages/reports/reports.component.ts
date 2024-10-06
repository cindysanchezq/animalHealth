import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  selectedAnimal: any = null;
  tipoReporte: string = '';
  reporteGenerado: boolean = false;
  conceptoMedico: string = '';

  // Lista de animales con sus visitas y otros datos
  animals = [
    {
      id: 'tom',
      name: 'Tom',
      raza: 'Gato',
      edad: 4,
      sexo: 'Macho',
      chip: '12345',
      peso: '4kg',
      rh: 'A+',
      vacunas: 'Rabia, Leucemia Felina',
      imageUrl: '../../../assets/tom.jpeg',
      visits: [
        {
          consulta: 'Consulta General',
          fecha: '10/01/2024',
          motivo: 'Revisión general',
          diagnostico: 'Salud estable',
          tratamiento: 'Ninguno',
          examenes: ['Examen de Sangre', 'Radiografía de Tórax', 'Ultrasonido Abdominal']
        },
        {
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
      id: 'max',
      name: 'Max',
      raza: 'Perro',
      edad: 6,
      sexo: 'Macho',
      chip: '67890',
      peso: '10kg',
      rh: 'O+',
      vacunas: 'Parvovirus, Moquillo',
      imageUrl: '../../../assets/max.jpg',
      visits: [
        {
          consulta: 'Consulta General',
          fecha: '05/01/2024',
          motivo: 'Vacunación',
          diagnostico: 'Salud estable',
          tratamiento: 'Vacunado contra parvovirus',
          examenes: ['Prueba de Parvovirus', 'Examen Físico General']
        },
        {
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

  // Método para generar el reporte
  generarReporte() {
    this.tipoReporte = (document.getElementById('tipoReporte') as HTMLSelectElement).value;
    const animalId = (document.getElementById('animal') as HTMLSelectElement).value;
    this.selectedAnimal = this.animals.find(animal => animal.id === animalId);

    if (this.selectedAnimal) {
      // Marcar como generado el reporte
      this.reporteGenerado = true;

      // Asignar el concepto médico basado en la salud del animal
      this.conceptoMedico = this.generarConceptoMedico(this.selectedAnimal);

      // Mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: 'Reporte generado exitosamente',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  // Método para generar el concepto médico
  generarConceptoMedico(animal: any): string {
    if (animal.peso && animal.vacunas && animal.edad) {
      return `El animal ${animal.name} se encuentra en un buen estado de salud general, con las vacunas al día y sin problemas de peso aparentes.`;
    } else {
      return `El animal ${animal.name} necesita atención adicional debido a posibles problemas de salud.`;
    }
  }

  // Simulación de descarga del reporte
  descargarReporte() {
    // Aquí puedes implementar la lógica para generar y descargar el reporte como PDF
    Swal.fire({
      icon: 'info',
      title: 'Descargar Reporte',
      text: 'El reporte está listo para ser descargado.',
      confirmButtonText: 'Ok'
    });
  }
}