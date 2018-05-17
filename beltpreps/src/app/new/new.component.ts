import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
Header = 'Pet Shelter';
SubHeader = 'Know of a pet needing a home?';
newPets: any;
error;
  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) {
    this.newPets = {petname:"", pettype:"", description:"", skillone:"", skilltwo:"", skillthree:""};
  }
  
  ngOnInit() {
  }

  onCreatePetClick(){
    let createPetObservable = this._httpService.postPet(this.newPets);
    createPetObservable.subscribe(data=>{
    console.log(data);
        if(data['errors']){
          this.error = data['errors'];
          console.log(this.error, "One errormessage");
        }
        else {
          this._router.navigate(['/']);
        }
      })
      
  }
}

