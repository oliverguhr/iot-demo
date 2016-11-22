import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { TemperatureHumidity, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  data: Observable<TemperatureHumidity[]>;
  options: any;
  chart:any;
  constructor(private dataService: DataService) {
      this.options = {
            title : { text : 'Temperature and Humidity' },
            series: [
                {
                  name: 'Temperature',
                  data: [],
                  tooltip:
                    {
                      valueSuffix: ' °C'
                    }
                },
                {
                  name: 'Humidity',
                  data: [],
                  tooltip:
                    {
                      valueSuffix: ' %'
                    }
                }
            ]
        };
  }

  ngOnInit(){
    this.data = this.dataService.getValues();

    this.data.subscribe( x => this.updateChart(x));
  }

  updateChart(chartData: TemperatureHumidity[]) {
    this.chart.series[0].setData(chartData.map(x => x.temperature));

    this.chart.series[1].setData(chartData.map(x => x.humidity));
  }

   saveInstance(chartInstance) {
        this.chart = chartInstance;
    }
}
