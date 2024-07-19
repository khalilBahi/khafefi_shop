import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-mesreservation',
  templateUrl: './mesreservation.component.html',
  styleUrls: ['./mesreservation.component.css']
})
export class MesreservationComponent implements OnInit {

  listReservation:any=[]
  constructor(private service:CrudService , private router : Router) { }
  
  ngOnInit(): void {
    this.service.getAllReservationbyClientId().subscribe((data:any)=>{
      console.log(data)
      this.listReservation=data;
    })
  }

}
