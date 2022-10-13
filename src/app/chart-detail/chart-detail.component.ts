import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { Luminaria } from '../models/luminaria.model';
import { LuminariesService } from '../services/luminaries.services';
// const IndicatorsCore = require('highcharts/indicators/indicators');
// IndicatorsCore(Highcharts);
// const IndicatorZigZag = require('highcharts/indicators/zigzag');
// IndicatorZigZag(Highcharts);

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css'],
})
export class ChartDetailComponent implements OnInit {
  Highcharts = Highcharts;
  pieChartOptions: any;
  listLuminariesMap: Luminaria[] = [];

  constructor(public luminariesService: LuminariesService) {
    this.listLuminariesMap = this.luminariesService.getLuminariesInMap();
    console.log('list', this.listLuminariesMap);

    if (this.listLuminariesMap && this.listLuminariesMap.length > 0) {
      const sumTipolampara = this.listLuminariesMap.reduce(
        (previousValue, currentValue) => {
          let sum = previousValue;
          if (currentValue.tipo_lampara) {
            sum++;
          }
          return sum;
        },
        0
      );
      this.pieChartOptions = {
        chart: {
          renderTo: 'container',
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
        },
        credits: {
          enabled: false,
        },
        title: {
          text: 'Tipos soporte',
        },
        subtitle: {
          text: 'N° total luminarias ' + this.listLuminariesMap.length,
        },
        tooltip: {
          pointFormat: '<b>{point.percentage}%</b>',
          percentageDecimals: 1,
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              color: '#000000',
              connectorColor: '#000000',
              formatter: function () {
                return '<b>hola</b>:12  %';
              },
            },
          },
        },
        series: [
          {
            type: 'pie',
            name: '',
            data: [
              ['Tipo Soporte', 45.0],
              ['Tipo Lumunaria', 26.8],
              ['Tipo Lampara', sumTipolampara],
            ],
          },
        ],
      };
    }
  }

  ngOnInit(): void {}
}
