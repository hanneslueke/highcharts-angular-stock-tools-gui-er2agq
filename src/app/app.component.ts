import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';

import exporting from 'highcharts/modules/exporting';

exporting(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    exporting: {
      fallbackToExportServer: false,
    },
    series: [
      {
        type: 'line',
        pointInterval: 24 * 3600 * 1000,
        data: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6],
      },
    ],
  };
}
