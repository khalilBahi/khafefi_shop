import { Component } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Entity/Porduct.Entity';

@Component({
  selector: 'app-ajouter-product',
  templateUrl: './ajouter-product.component.html',
  styleUrls: ['./ajouter-product.component.css']
})
export class AjouterProductComponent {
  messageCommande=""
  productForm:FormGroup
  imgURL:any;
  userFile: any;
  public imagePath: any;
  emailURL: any
  newProduct=new Product()
  public message!: string;
  constructor(private services : CrudService , private router : Router,private fb:FormBuilder) {
    let formControls = {
      nom: new FormControl('',[
        Validators.required,
      Validators.minLength(4)]),
        image: new FormControl('',[
          Validators.required,]),
    
      description: new FormControl('',[
        Validators.required,
     ]),
      quantite: new FormControl('',[
        Validators.required,]),
     prix: new FormControl('',[
          Validators.required,])}
     this.productForm = this.fb.group(formControls)
   }
  get nom() {return this.productForm.get('nom');} 
  get image() {return this.productForm.get('image');} 
  get description() { return this.productForm.get('description');}
  get quantite() {return this.productForm.get('quantite');}
  get prix() {return this.productForm.get('prix');}
  
   addNewproduct() {
    let data = this.productForm.value;
    console.log(data);
    let product = new Product(
     undefined, data.nom,this.imgURL,data.description,data.quantite,data.prix);
    console.log(product);
    
    if (
      data.nom == 0 ||
      data.image == 0 ||
      data.description == 0||
      data.quantite == 0||
      data.prix == 0
    ) {
      this.messageCommande=`<div class="alert alert-danger" role="alert">
      remplir votre champ 
    </div>`
    
    } else {
      this.services.addproduct(product).subscribe(
        (response) => {
          // Handle successful response here
          console.log('Product added successfully:', response);
          // Optionally, you can navigate to a success page or show a success message
        },
        (error) => {
          // Handle error response here
          console.error('Error adding product:', error);
          // Optionally, you can show an error message to the user
        }
      );
    
    }
  }
 
onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }}}


  ngOnInit(): void {
  }

}
