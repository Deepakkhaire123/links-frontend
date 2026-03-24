import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Datahandlers {
  
  constructor(private http : HttpClient){}

  baseUrl= environment.apiUrl;

   getAlllinks() :Observable<any>{
     return this.http.get(`${this.baseUrl}link/all`,);
   }

   updateLink(data : any) :Observable<any>{
    let token = localStorage.getItem("token")
     return this.http.post(`${this.baseUrl}link/update`,data,{
      headers: {
        Authorization: `Bearer ${token}`
      }
     });
   }

   login(email:any , password :any) :Observable<any>{
     return this.http.post(`${this.baseUrl}auth/login`,{email:email , password :password});
   }

   addWhatsapp(number:any):Observable<any>{
    const token = localStorage.getItem("token");
     return this.http.post(`${this.baseUrl}whatsapp`,{number:number},{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
   }
   userProfile():Observable<any>{
    const token = localStorage.getItem("token");
    return  this.http.get(`${this.baseUrl}user/profile`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
   }
}
