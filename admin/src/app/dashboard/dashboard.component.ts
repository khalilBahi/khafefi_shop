import { Component } from '@angular/core';
import { CrudService } from '../Service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalAdmins:number=0
  totalClient :number=0
  totalProduct :number=0
constructor(private service:CrudService){}
ngOnInit(): void {
  this.service.getAdmin().subscribe(admin => {
    this.totalAdmins = admin.length;
  });

  this.service.getClient().subscribe(client => {
    this.totalClient = client.length;
  });

  this.service.getProduct().subscribe(product => {
    this.totalProduct = product.length;
  });
}}
