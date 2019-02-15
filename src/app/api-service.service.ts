import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }


  public getAllInfo():Observable<any> {
    return this.httpClient
      .get('https://api.init.st/data/pub/buckets/bkt_bqzzv01js2cep4z/events?limit=-2', {responseType: 'text'} );
  }

}

// this.httpClient.get('https://api.init.st/data/pub/buckets/bkt_bqzzv01js2cep4z/events?limit=-2', {responseType: 'text'} ).subscribe(data => {
//   console.log(data);
// });
