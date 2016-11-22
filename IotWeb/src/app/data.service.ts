import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

export interface TemperatureHumidity {
        time: Date;
        temperature: number;
        humidity: number;
    }

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getValues():Observable<TemperatureHumidity[]>{
       return this.http.get("http://localhost:5000/api/values")
               .map((r: Response) => r.json() as TemperatureHumidity[])
               .catch(this.handleError);
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
