import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';
import { Product } from '../Entity/Product.Entity';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  listOffre: Product[];
  IsloggedIn: boolean;
  messageCommand = "";

  constructor(private service: CrudService, private router: Router) { }

  reserver(event: any) {
    this.messageCommand = `<div class="alert alert-primary" role="alert">
      Veuillez patienter ...
    </div>`;
    console.log(event);
  
    let rq: any = {};
    rq.idClient = this.service.getUserInfo()?.id;
    rq.idProduct = event.id;
  
    if (!rq.idClient) {
      this.messageCommand = `<div class="alert alert-warning" role="alert">
        Erreur, Veuillez réssayer !! (Invalid User ID)
      </div>`;
      console.error("Invalid User ID");
      return;
    }
  
    console.log(rq, "what we senddddd");
    this.service.reserverFromApi(rq).subscribe((data: any) => {
      this.router.navigate(['/mesreservations']); // Navigate to /mesreservations on success
  
      this.messageCommand = `<div class="alert alert-success" role="alert">
        Réservé avec succès
      </div>`;
    }, err => {
      this.messageCommand = `<div class="alert alert-warning" role="alert">
        Erreur, Veuillez réssayer !! 
      </div>`;
    });
  
    setTimeout(() => {
      this.messageCommand = "";
    }, 3000);
  }
  
  connexion() {
    this.router.navigate(['/LoginClient']);
  }

  ngOnInit(): void {
    this.service.getProduct().subscribe(product => {
      this.listOffre = product;
      this.IsloggedIn = this.service.isLoggedIn();
    });
  }
}