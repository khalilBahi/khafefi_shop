import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../Entity/Client.Entity';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-registre-client',
  templateUrl: './registre-client.component.html',
  styleUrls: ['./registre-client.component.css']
})
export class RegistreClientComponent implements OnInit {

  messageCommande=""
  clientForm:FormGroup
  
  userFile: any;
  public imagePath: any;
  emailURL: any
  newProduit=new Client()
  public message!: string;
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
    let formControls = {
      firstName: new FormControl('',[
        Validators.required,
      Validators.minLength(4)]),
      lastName: new FormControl('',[
          Validators.required,]),
      email: new FormControl('',[
        Validators.required,
      Validators.email]),
      mdp: new FormControl('',[
        Validators.required,]),
     adress: new FormControl('',[
          Validators.required,])}
     this.clientForm = this.fb.group(formControls)
   }
  get firstName() {return this.clientForm.get('firstName');} 
  get lastName() {return this.clientForm.get('lastName');} 
  get email() { return this.clientForm.get('email');}
  get mdp() {return this.clientForm.get('mdp');}
  get adress() {return this.clientForm.get('adress');}
   addNewClient() {
    let data = this.clientForm.value;
    console.log(data);
    let client = new Client(
     undefined, data.firstName,data.lastName,data.email,data.mdp,data.adress);
    console.log(client);
    
    if (
      data.firstName == 0 ||
      data.lastName == 0 ||
      data.email == 0||
      data.mdp == 0||
      data.adresse == 0
    ) {
      this.messageCommande=`<div class="alert alert-danger" role="alert">
      remplir votre champ 
    </div>`
    
    } else {
    this.services.addclient(client).subscribe(
      res=>{
        console.log(res);
        this.messageCommande=`<div class="alert alert-success" role="alert">
        avec success
      </div>`
        
        this.router.navigate(['/LoginClient']).then(()=>{window.location.reload()})
        ;
      },
       err=>{
        this.messageCommande=`<div class="alert alert-warning" role="alert">
        EMAIL EXISTE deja!!!! 
      </div>`
  
      })
      setTimeout(() => {
        this.messageCommande=""
      }, 3000);
    
    }
  }



  ngOnInit(): void {
  }

}
