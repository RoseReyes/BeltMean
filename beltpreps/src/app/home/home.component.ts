import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  Header ='Pet Shelter';
  SubHeader='These pets are looking for a home!';
   allPets;
   constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
   this.getPets();
  }

  getPets(){
    let getPetsObservable = this._httpService.getPet()
    getPetsObservable.subscribe(data =>{ 
      console.log("Displayed all data", data);
      this.allPets = data;
    })
  }

}
