import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}
  getStates(){
    return this.http.get('https://indian-cities-api-nocbegfhqg.now.sh/cities');
  }
}
