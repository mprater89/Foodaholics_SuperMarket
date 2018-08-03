import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ChartComponent } from 'angular2-highcharts/index';
import { ConsumerService } from './services/consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ConsumerService
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  webevents = [];
  connection;
  webevent;
  options: Object;
  chart: Object;
  title = 'app';

  @ViewChild('chartVar') refObj: any;

  constructor(private consumerService: ConsumerService) { }

  ngOnInit() {
    this.renderChart();
    this.connection = this.consumerService.getLiveData().subscribe(webevent => {
      this.webevents.push(webevent);
      // message["y"] = +message["y"];
      this.refObj.chart.series[0].addPoint(webevent, false);
      this.refObj.chart.redraw();
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  renderChart() {
    this.options = {

      rangeSelector: {
        buttons: [{
          count: 1,
          type: 'minute',
          text: '1M'
        }, {
          count: 5,
          type: 'minute',
          text: '5M'
        }, {
          type: 'all',
          text: 'All'
        }],
        inputEnabled: false,
        selected: 0
      },

      title: {
        text: 'Live Food Trends'
      },
      xAxis: {
        opposite: true
      },
      yAxis: { opposite: true },
      exporting: {
        enabled: false
      },

      series: [{
        name: 'Live data',
        data: []
      }
      ]

    };
  }

  loadChart(chartInstance) {
    this.chart = chartInstance;
  }
}
