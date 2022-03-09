import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IStats } from '../../../../core/models';

@Component({
  selector: 'pv-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() title?: string;
  @Input() loading?: boolean;
  @Input() data?: IStats[] | null = [];

  constructor() {}

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
    },
  };
  moths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];

  ngOnChanges(changes: SimpleChanges) {
    this.loadStats();
  }

  loadStats() {
    if (this.data && this.data.length) {
      const minorMonth =
        this.data.map((item) => item.month).reduce((a, b) => (a < b ? a : b)) -
        1;
      const mayorMonth = this.data
        .map((item) => item.month)
        .reduce((a, b) => (a > b ? a : b));
      const totals = this.data.map((stat) => stat.total);
      this.basicData = {
        labels: this.moths.slice(minorMonth, mayorMonth),
        datasets: [
          {
            data: totals,
            borderColor: this.charBarColor,
          },
        ],
      };
    }
  }
  ngOnInit(): void {
    this.loadStats();
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
          color: 'red',
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
        },
      },
      scales: {
        x: {
          grid: {
            color: '#fff',
          },
        },
        y: {
          grid: {
            color: '#fff',
          },
        },
      },
    };
  }
}
