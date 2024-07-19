import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { Command } from '../Entity/Command.Entity';

@Component({
  selector: 'app-liste-command',
  templateUrl: './liste-command.component.html',
  styleUrls: ['./liste-command.component.css']
})
export class ListeCommandComponent {
  listcommand:Command[]
  constructor(private service:CrudService, private router:Router){}
  ngOnInit():void{
    this.service.getCommand().subscribe(command=>{
      this.listcommand=command})
  
  
    }

}
