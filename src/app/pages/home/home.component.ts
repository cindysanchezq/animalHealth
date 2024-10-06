import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  userName: string = 'María'; // Puedes obtener este valor dinámicamente

  // Se ejecutará después de que la vista esté completamente inicializada
  ngAfterViewInit(): void {
    this.loadChart();
  }

  loadChart(): void {
    const canvas = document.getElementById('animalChart') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Perros', 'Gatos', 'Aves', 'Otros'],
            datasets: [{
              label: 'Cantidad de Animales',
              data: [12, 19, 3, 5],
              backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545']
            }]
          }
        });
      }
    }
  }
}
