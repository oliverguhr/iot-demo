import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { TemperatureHumidity, DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  data: Observable<TemperatureHumidity[]>;
  constructor(private dataService: DataService) {

  }

  ngOnInit(){
    this.data = this.dataService.getValues();
  }
}
