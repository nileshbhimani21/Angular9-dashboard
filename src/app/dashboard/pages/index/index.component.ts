import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

declare let $: any;
declare let feather: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, AfterViewInit {
  img: any = '../../../../assets/img/nil_user.svg';
  constructor(private _script: ScriptLoaderService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.createLineChart();
    this.createBarChart();
    this.createPieChart();
    this._script.loadScripts('app-index', [
      '../../../../assets/js/javascript.js',
    ]);
  }
  createLineChart() {
    let linechart = (<HTMLCanvasElement>(
      document.getElementById('linechart')
    )).getContext('2d');
    var chart = new Chart(linechart, {
      type: 'line',
      data: {
        labels: [1, 2, 3],
        datasets: [
          {
            label: 'Community',
            data: [50, 80, 24],
            fill: true,
            borderColor: ' #27AE60',
            borderWidth: 3,
          },
        ],
      },

      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
              },
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: '#3B4144',
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              stacked: false,
            },
          ],
        },
      },
    });
  }
  createBarChart() {
    let barchart = (<HTMLCanvasElement>(
      document.getElementById('barchart')
    )).getContext('2d');
    var chart2 = new Chart(barchart, {
      type: 'bar',
      data: {
        labels: [1, 2, 3],
        datasets: [
          {
            label: 'Community',
            data: [50, 80, 24],
            fill: true,
            backgroundColor: ' #27AE60',
            borderColor: ' #27AE60',
            borderWidth: 3,
          },
        ],
      },

      options: {
        elements: {
          point: {
            radius: 0,
          },
        },
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
              },
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: '#3B4144',
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              stacked: false,
            },
          ],
        },
      },
    });
  }
  createPieChart() {
    let piechart = (<HTMLCanvasElement>(
      document.getElementById('piechart')
    )).getContext('2d');
    var chart3 = new Chart(piechart, {
      type: 'doughnut',
      data: {
        labels: ['Direct', 'Referral', 'Social'],
        datasets: [
          {
            label: 'Community',
            data: [55, 30, 15],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
            hoverBorderColor: 'rgba(234, 236, 244, 1)',
          },
        ],
      },

      options: {
        maintainAspectRatio: true,
        tooltips: {
          backgroundColor: 'rgb(255,255,255)',
          bodyFontColor: '#858796',
          borderColor: '#dddfeb',
          borderWidth: 1,
        },
        legend: {
          display: false,
        },
        cutoutPercentage: 70,
      },
    });
  }
}
