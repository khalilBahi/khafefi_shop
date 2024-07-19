import { Component } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { Product } from '../Entity/Porduct.Entity';

@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css']
})
export class ListeProductComponent {
  listProduct:Product[]
  constructor(private service:CrudService, private router:Router){}
  ngOnInit():void{
    this.service.getProduct().subscribe(product=>{
      this.listProduct=product})
  
  
    }
    DeleteProduct(product: Product){
      if(confirm("Voulez vous supprimer ce message de product avec l'ID " +product.id+ "?")) {
       
        this.service.onDeleteProduct(product.id).subscribe(() => {
          this.router.navigate(['/ListeProduct']).then(() => {
            window.location.reload()
          })
        })
     
    }
  }
}
