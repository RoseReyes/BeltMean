import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  
  onUpdatePetClick(id){
    let editPetsObservable = this._httpService.editPet(id, this.updatePet);
    editPetsObservable.subscribe(data => {
    console.log(data, "updateAuthor");
    
        if(data['errors']){
          this.editError = data['errors'];
          console.log(this.editError, "One errormessage");
        }
        else {
          console.log(this.updatePet._id);
          this._router.navigate(['/view', this.updatePet._id]);
        }
    })
  }
}
