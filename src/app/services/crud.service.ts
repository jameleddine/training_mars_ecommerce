import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl+'produits')
  }

  createNew(data){
    return this.http.post(this.apiUrl+'produits',data)
  }

  getByID(id){
    return this.http.get(this.apiUrl+'produit/'+id)
  }

  updateById(id,data){
    return this.http.put(this.apiUrl+'produit/'+id,data)
  }

  deleteById(id){
    return this.http.delete(this.apiUrl+'produit/'+id)
  }


}
