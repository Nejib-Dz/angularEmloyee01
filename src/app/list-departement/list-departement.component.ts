import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../servicess/departement.service';
import { Departement } from '../models/departement';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})
export class ListDepartementComponent implements OnInit{

listDepartements!: Departement[]

constructor(private dpservice:DepartementService ){}

ngOnInit(): void {
   this.getAllDepartement()
}

getAllDepartement(){
  this.dpservice.listDepartement().subscribe({
    next:data=>{
  this.listDepartements=data
  console.log(this.listDepartements);

    }
  })

}
}
