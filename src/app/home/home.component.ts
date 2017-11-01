import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scooters = [];  
  currentContext = this;
  constructor( private http: Http) { }

  fetchData = function() {
    this.http.get("http://localhost:3000/scooters").subscribe(
      (res:Response) => {
        this.scooters = res.json();
      }
    );
  }
  ngOnInit() {
    this.fetchData();
  }

}
