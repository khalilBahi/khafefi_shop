import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  IsloggedIn:boolean
  totalAdmins:number=0
  constructor(private service:CrudService,private router:Router) { }

  ngOnInit(): void {
    this.IsloggedIn=this.service.isLoggedIn();

  }
  logout(){
    console.log("loginout")
      
    localStorage.clear()
    
      this.router.navigate(['/']).then(()=>{
        window.location.reload()
      })
  }
  connexion(){
    this.router.navigate(['/LoginClient']).then(()=>{
      window.location.reload()
    })

  }


}
