import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



  constructor(private route: Router,
              private api: ApiServiceService) { }

  ngOnInit() {
  }

  enter(){
    this.route.navigateByUrl("weather");
    
  }

}
