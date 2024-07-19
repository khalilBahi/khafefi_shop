import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userDetails:any;
  totalContact:number=0
    constructor(private service: CrudService,private router:Router) { 
     this.userDetails = this.service.userDetails();
    }
   
  
    ngOnInit(): void {
      console.log(this.userDetails);
       this.service.getContact().subscribe(contact =>{
          this.totalContact=contact.length})
    }
    
    logout(){
      console.log("logout");
      localStorage.clear()
      this.router.navigate(['/']).then(()=>window.location.reload());
      
    }
}
