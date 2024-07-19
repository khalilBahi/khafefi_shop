import { Component } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Contact } from '../Entity/Contact.Entity';
import { Router } from '@angular/router';
import { ListeAdminComponent } from '../liste-admin/liste-admin.component';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent {
  listContact:Contact[]
  constructor(private service:CrudService, private router:Router){}
  ngOnInit():void{
    this.service.getContact().subscribe(contact=>{
      this.listContact=contact})
  
  
    }
    DeleteContact(contact: Contact){
      if(confirm("Voulez vous supprimer ce message de contact avec l'ID " +contact.idC+ "?")) {
       
        this.service.onDeleteContact(contact.idC).subscribe(() => {
          this.router.navigate(['/ListeContact']).then(() => {
            window.location.reload()
          })
        })
     
    }
  }
}
