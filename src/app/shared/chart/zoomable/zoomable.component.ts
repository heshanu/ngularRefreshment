import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components globally
Chart.register(...registerables);
@Component({
  selector: 'app-zoomable',
  templateUrl: './zoomable.component.html',
  styleUrl: './zoomable.component.css',
})

export class ZoomableComponent implements AfterViewInit, OnDestroy{
  @ViewChild('chartCanvas') private chartRef!: ElementRef;
  private chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy(); // Prevent memory leaks on page navigation
    }
  }

  private createChart(): void {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            data: [120, 150, 180, 240, 290, 350],
            label: 'Revenue ($)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }
}
