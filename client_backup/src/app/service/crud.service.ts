import { Injectable } from '@angular/core';
import { Client } from '../Entity/Client.Entity';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../Entity/Contact.Entity';
import { Product } from '../Entity/Product.Entity';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginUserUrl="http://localhost:8081/client/login"
  apiUrl="http://localhost:8081"
  constructor(private http:HttpClient) { }
  loginClient(client:Client){
    return this.http.post<any>(this.loginUserUrl, client);

  }
  addclient(client:Client){
    return this.http.post<any>(this.apiUrl+"/client", client);
  }
  addcontact(contact:Contact){
    return this.http.post<any>(this.apiUrl+"/contact", contact);
  }
  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl +"/product");
  }
  isLoggedIn(){
  
    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  reserverFromApi(rq:any){
    return this.http.post<any>( "http://localhost:8081/command" ,rq);
 }
  getUserInfo()
  {
    var token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);
      
    // Other functions
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    //var decoded:any = jwt_decode(token);
    var decoded:any
    return decodedToken?.data
  }
  
  getAllReservationbyClientId(){
    return this.http.get<any>( "http://localhost:8081/command/get-all-by-id-Client/"+this.getUserInfo()?.id );
  }
    
}
