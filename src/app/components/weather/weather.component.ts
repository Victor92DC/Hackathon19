import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public dataWeather;
  public subscribeTimer;
  public timeLeft;

  constructor(private api: ApiServiceService) { }

  ngOnInit() {

    this.api.getAllInfo().subscribe( data =>{
      this.dataWeather = data;
    });

    const source = timer(1000, 5000);
    const abc = source.subscribe(val => {
      this.api.getAllInfo().subscribe( data =>{
        this.dataWeather = data;
      });
    });

  }

}
