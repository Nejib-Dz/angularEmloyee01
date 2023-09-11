import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  localUrl: string ='http://localhost:8080/api/v1/Formations'
  constructor(private http: HttpClient) { }

  ajouterFormation(frm : Formation, id : number):Observable<Formation>{
    return this.http.post<Formation>(`${this.localUrl}/save/${id}`,frm);
   }
  listFormation():Observable<Formation[]>{
    return this.http.get<Formation[]>(`${this.localUrl}/GetAllEmp`)

  }
  deletFormation(id:number):Observable<Formation>{
    return this.http.delete<Formation>(`${this.localUrl}/delet/${id}`)

  }

  getFormationBydi(id:number):Observable<Formation>{
 return this.http.get<Formation>(`${this.localUrl}/byid/${id}`)
  }
}
