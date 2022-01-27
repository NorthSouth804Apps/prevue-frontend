import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() {
  }

  charBarColor = '#FF53A4';
  basicData: any;
  basicOptions: any;
  width: any;
  height: any;
  gradient: any;
  plugin: any = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart: any) => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#FFF';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: this.charBarColor,
        },
      ]
    };

    this.basicOptions = {
      plugins: {
        title: {
          text: 'This is the title',
        }
      },
      elements: {
        point: {
          borderColor: '#000',
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
        line: {
          borderWidth: 5,
          borderCapStyle: 'round',
          borderJoinStyle: 'bevel',
        }
      },
      legend: {
        display: false,
      },
      scales: {
        x: {
          grid: {
            color: '#fff'
          }
        },
        y: {
          grid: {
            color: '#fff'
          }
        },
      },
    };
  }

}
