import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pv-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() title?: string;

  constructor() {
  }

  charBarColor = '#FF53A5';
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
          data: [40, 50, 60, 81, 90, 100],
          borderColor: this.charBarColor,
        },
      ]
    };

    this.basicOptions = {
      plugins: {
        title: {
          text: 'This is the title',
        },
        legend: {
          display: false,
        },
      },
      elements: {
        dataLabels: {
          color: 'red'
        },
        point: {
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
        line: {
          borderWidth: 5,
          borderCapStyle: 'round',
          borderJoinStyle: 'bevel',
        },
        tick: {
          color: 'red',
        }
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
