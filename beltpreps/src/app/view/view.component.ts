import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Header ='Pet Shelter';
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }
  updatePet: any;
  editError;
  Id;

  ngOnInit() {
    this._route.params.subscribe((params: Params) => (this.Id = params['id']));
    let pets = this._httpService.onePet(this.Id).subscribe(data => {
    this.updatePet = data;
    })
  }

  
  voteUp(qId) {
  let votes = this._httpService.votePet(this.updatePet._id,
    {"voteVal": 1 }).subscribe(data => {
      this.updatePet = data;
    });

    }

  destroyPet(id){
    let deletePetObservable = this._httpService.deletePet(id)
    deletePetObservable.subscribe(data => {
      console.log("Deleted one quote", data);
      if(data['errors']){
        this.editError = data['errors'];
        console.log(this.editError, "One errormessage");
      }
      else {
        this._router.navigate(['/']);
        this.updatePet = data; 
      }
    })
  }




}
