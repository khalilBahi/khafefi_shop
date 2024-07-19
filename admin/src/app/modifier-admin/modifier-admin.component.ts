import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../Entity/Admin.Entity';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent {
  messageCommande=""
  updateForm:FormGroup
  
  userFile: any;
  public imagePath: any;
  emailURL: any
  newProduct=new Admin()
  public message!: string;
  id: number;
 
 
  
  constructor(private service : CrudService , private router : Router,private fb:FormBuilder,private root:ActivatedRoute) {
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
     role: new FormControl('',[
          Validators.required,])}
     this.updateForm = this.fb.group(formControls)
   }
  get firstName() {return this.updateForm.get('firstName');} 
  get lastName() {return this.updateForm.get('lastName');} 
  get email() { return this.updateForm.get('email');}
  get mdp() {return this.updateForm.get('mdp');}
  get role() {return this.updateForm.get('role');}
  ngOnInit(): void {
    let idEvent = this.root.snapshot.params['id'];
    this.id = idEvent;
    this.service.findAdminById(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        firstName: event.firstName,
        lastName: event.lastName,
      email :event.email,
    mdp :event.mdp,
  role :event.role });}); }
  updateAdmin() {
    let data = this.updateForm.value;
    let admin =new Admin(
      this.id,
      data.firstName,
      data.lastName,
      data.email,
      data.mdp,
      data.role );
    console.log(admin);
    console.log(data);
    this.service.updateAdmin(this.id,admin).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/ListeAdmin'])}); }

}
