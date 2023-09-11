import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../servicess/employee.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartementService } from '../servicess/departement.service';
import { Departement } from '../models/departement';
import { error, log } from 'console';
import { FormationService } from '../servicess/formation.service';
import { Formation } from '../models/formation';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  @ViewChild('closeModalBtn') closeModalBtn!: ElementRef;
  @ViewChild('closeUpdateModalBtn') closeUpdateModalBtn!: ElementRef;

  showModal!:boolean
  oneEmployee:any
  listFormation:any
  formationModal: Formation = new Formation()
  emplModel: Employee = new Employee();
  idEmployee!: number
  //emplModeldate:Viewmodlbydate = new Viewmodlbydate();
  listDepartements!: Departement[];
  submitted: boolean = false;
  employees!: Employee[];
  emplFormGroup!: FormGroup;
  emplFormGroup2!: FormGroup;
  emplFormGroupFormation!: FormGroup;
  employe: Employee = new Employee();
  constructor(
    private serviceemp: EmployeeService,
    private servicedep: DepartementService,
    private servicefrm: FormationService
  ) {}

  ngOnInit(): void {
    this.getAllDepartement();

    this.emplFormGroup = new FormGroup({
      fullname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      departement: new FormControl('', Validators.required),
    });
    this.emplFormGroup2 = new FormGroup({
      fullname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      departement: new FormControl('', Validators.required),
    });


    this.emplFormGroupFormation = new FormGroup({
      intitule: new FormControl('', Validators.required),
      organisme: new FormControl('', Validators.required),
      tuteur: new FormControl('', Validators.required),
      dtDebut: new FormControl('', Validators.required),
      dtFin: new FormControl('', Validators.required),
      duree: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });


    this.reloadData();
  }
  reloadData() {
    this.serviceemp.listEmployee().subscribe({
      next: (data) => {
        this.employees = data;
        console.log(this.employees);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Modiferemployee(idemp: number) {}

  deleteData(id: number) {
    if (id != undefined && id != null) {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer ce emp!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le',
      }).then((result: any) => {
        if (result.value) {
          // alert(id);
          this.serviceemp.deletEmployee(id).subscribe((res) => {
            this.reloadData();
          });
          Swal.fire('Supprimé!', 'Votre emp a été supprimé.', 'success');
        }
      });
    }
  }

  addEmployee() {
    this.submitted = true;
    if (this.emplFormGroup.invalid) {
      return;
    }
     console.log(this.emplFormGroup.value)

    this.emplModel.fullname = this.emplFormGroup.value.fullname;
    this.emplModel.age = this.emplFormGroup.value.age;
    this.emplModel.email = this.emplFormGroup.value.email;
    this.emplModel.tel = this.emplFormGroup.value.tel;
    this.emplModel.departement = this.emplFormGroup.value.departement;

    this.serviceemp.ajouterEmployee(this.emplModel).subscribe({

      next: res => {
        this.closeModalBtn.nativeElement.click()
        this.reloadData();
      },
          error:err=>{
            alert("bonjour")
          }
    });

  }

  getAllDepartement() {
    this.servicedep.listDepartement().subscribe({
      next: (data) => {
        this.listDepartements = data;
        console.log(this.listDepartements);
      },
    });
  }

  findByIdEmployee(id:number){

    console.log("employeeById", this.listFormation);
     this.serviceemp.getEmployeeBydi(id).subscribe({
      next:(data)=>{
        this.oneEmployee = data;
        this.listFormation = this.oneEmployee.formations
      console.log(data);
      },error:err=>{
        console.log(err);

      },complete:()=>{

        this.emplFormGroup2.get("fullname")?.setValue(this.oneEmployee.fullname);
        this.emplFormGroup2.get("age")?.setValue(this.oneEmployee.age);
        this.emplFormGroup2.get("email")?.setValue(this.oneEmployee.email);
        this.emplFormGroup2.get("tel")?.setValue(this.oneEmployee.tel);
        this.emplFormGroup2.get("departement")?.setValue(this.oneEmployee.departement.name);
        this.emplFormGroup2.updateValueAndValidity()
      }
     })

    }

    updateEmploye()
    {
      this.submitted = true;
      if(this.emplFormGroup2.invalid)
      {
        return ;
      }
        this.emplModel.fullname = this.emplFormGroup2.value.fullname;
        this.emplModel.age = this.emplFormGroup2.value.age;
        this.emplModel.email = this.emplFormGroup2.value.email;
        this.emplModel.tel = this.emplFormGroup2.value.tel;
        this.emplModel.departement = this.emplFormGroup2.value.departement;
      this.serviceemp.ajouterEmployee(this.emplModel)
      .subscribe({
        next: res => {
          this.closeUpdateModalBtn.nativeElement.click();
          this.emplFormGroup2.reset();
          this.emplModel = new Employee();
          this.reloadData();
        },
            error:err=>{
              alert("bonjour")
            }
      });
    }
    ajouterFormation() {


      this.submitted = true;
      if (this.emplFormGroupFormation.invalid) {
        return;

      }

      console.log("/////////////");

       console.log(this.emplFormGroupFormation.value)

      this.formationModal.intitule = this.emplFormGroupFormation.value.intitule;
      this.formationModal.organisme = this.emplFormGroupFormation.value.organisme;
      this.formationModal.tuteur = this.emplFormGroupFormation.value.tuteur;
      this.formationModal.dtDebut = this.emplFormGroupFormation.value.dtDebut;
      this.formationModal.dtFin = this.emplFormGroupFormation.value.dtFin;
      this.formationModal.duree = this.emplFormGroupFormation.value.duree;
      this.formationModal.image = this.emplFormGroupFormation.value.image;
      this.formationModal.description = this.emplFormGroupFormation.value.description;

      this.servicefrm.ajouterFormation(this.formationModal, this.idEmployee).subscribe({
        next: (res) => {
          this.closeModalBtn.nativeElement.click()
          this.reloadData();
        },
      });
    }

    requipeId(id:number){
    this.idEmployee=id
    }


  }



