import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../models/departement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  localUrl: string ='http://localhost:8080/api/v1/departement'
  constructor(private http:HttpClient) { }

  ajouteDepartement(dpt:Departement):Observable<Departement>{
  return this.http.post<Departement>(`${this.localUrl}/save`, dpt);
  }

  listDepartement():Observable<Departement[]>{
    return this.http.get<Departement[]>(`${this.localUrl}/liste`);
  }
  deletDepartement(iddp:number){
    return this.http.delete(`${this.localUrl}/delete/${iddp}`)
  }

  chercherDepById(iddp: number):Observable<Departement>{
     return this.http.get<Departement>(`${this.localUrl}/finById/${iddp}`);
  }
}
