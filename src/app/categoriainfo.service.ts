import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseUrl ="http://localhost:8080/api/v1";
  
  constructor(private http: HttpClient){}

  getAllCategorias(){
    return this.http.get(`${this.baseUrl}/categories`)
  }

  getCategoriaById(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/category/${id}`)
  }


}