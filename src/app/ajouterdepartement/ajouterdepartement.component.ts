import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../servicess/departement.service';
import { Departement } from '../models/departement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterdepartement',
  templateUrl: './ajouterdepartement.component.html',
  styleUrls: ['./ajouterdepartement.component.css']
})
export class AjouterdepartementComponent implements OnInit{
dpt: Departement = new Departement
constructor(private servicedpt: DepartementService, private router:Router){}


  ngOnInit(): void {

  }
  ajouterdepartement(){
    this.servicedpt.ajouteDepartement(this.dpt).subscribe({
    next:data=>{
      alert("departement ajouter avec succes")
      this.router.navigate([''])
    },error:err=>{
      console.log(err);

    }
    })
  }
}
