import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { }

  getPet(){
    return this._http.get('/public');
  }

  postPet(newPets){
    return this._http.post('/public',newPets);
  }

  editPet(id:String, updateAuthor){
    return this._http.put('/public/'+ id + '',updateAuthor);
  }

  onePet(id:String){
    return this._http.get('/onepublic/'+id+'');
  }

  deletePet(id:String){
    return this._http.delete('/newpublic/'+ id +'');
  }
  
  votePet(id: String, quote){
    return this._http.post('/updatepublic/'+ id, quote);
  }
}
