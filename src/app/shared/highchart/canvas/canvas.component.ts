import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent implements AfterViewInit {
 dataPoints:any = [];
  chart:any;
  
  constructor(private http : HttpClient) {  
  }
  
  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:"Bitcoin Closing Price"
    },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Closing Price (in USD)",
      prefix: "$"
    },
    data: [{
      type: "line",
      name: "Closing Price",
      yValueFormatString: "$#,###.00",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }
  
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  
  ngAfterViewInit() {
    this.http.get('https://canvasjs.com/data/gallery/angular/btcusd2021.json', { responseType: 'json' }).subscribe((response: any) => {
      let data = response;
      for(let i = 0; i < data.length; i++){
        this.dataPoints.push({x: new Date(data[i].date), y: Number(data[i].close) });
      }
      this.chart.subtitles[0].remove();
    });
  }
}
