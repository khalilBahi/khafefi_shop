import { Component } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { Client } from '../Entity/Client.Entity';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent {
  listClient:Client[]
  constructor(private service:CrudService, private router:Router){}
  ngOnInit():void{
    this.service.getClient().subscribe(client=>{
      this.listClient=client})
  
  
    }
    DeleteClient(client: Client){
      if(confirm("Voulez vous supprimer ce message de client avec l'ID " +client.id+ "?")) {
       
        this.service.onDeleteClient(client.id).subscribe(() => {
          this.router.navigate(['/ListeClient']).then(() => {
            window.location.reload()
          })
        })
     
    }
  }
}
