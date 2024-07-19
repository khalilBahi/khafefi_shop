import { Injectable } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Entity/Porduct.Entity';
import { Client } from '../Entity/Client.Entity';
import { Contact } from '../Entity/Contact.Entity';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Command } from '../Entity/Command.Entity';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  helper=new JwtHelperService();
  loginUserUrl="http://localhost:8081/admin/login"
  apiUrl="http://localhost:8081"
  constructor(private http:HttpClient) { }
  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);

  }
  isLoggedIn(){
  
    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  addadmin(admin:Admin){
    return this.http.post<any>(this.apiUrl, admin);
  }
  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl +"/admin");
  }
  onDeleteAdmin(id : number){
    const url =`${this.apiUrl+"/admin"}/${id}` 
    return this.http.delete(url )
  }
  addproduct(product:Product){
    return this.http.post<any>(this.apiUrl+"/product", product);
  }
  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl +"/product");
  }
  onDeleteProduct(id : number){
    const url =`${this.apiUrl+"/product"}/${id}` 
    return this.http.delete(url )
  }
  getClient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl +"/client");
  }
  getCommand(): Observable<Command[]>{
    return this.http.get<Command[]>(this.apiUrl +"/command");
  }
  onDeleteClient(id : number){
    const url =`${this.apiUrl+"/client"}/${id}` 
    return this.http.delete(url )
  }
  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl +"/contact");
  }
  onDeleteContact(idC : number){
    const url =`${this.apiUrl+"/contact"}/${idC}` 
    return this.http.delete(url )
  }
  userDetails(){
    let token:any=localStorage.getItem('myToken'); 
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
   findAdminById(id : number): Observable<Admin> {
    const url = `${this.apiUrl + "/admin"}/${id}`;
    return this.http.get<Admin>(url)
  }
  updateAdmin(id:number,admin: Admin) {
    const url = `${this.apiUrl+"/admin"}/${id}`
    return this.http.put<any>(url,admin);
  }
}