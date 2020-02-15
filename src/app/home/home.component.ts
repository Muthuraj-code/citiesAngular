import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  states: Object;
  uniquState: Object;


  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getStates().subscribe(data=>{
      this.states=data;
      console.log(this.states);
    })

  }

  getValues(key){
    console.log(key);


  }

}
