import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay }   from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import {
  Router, 
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService{
  private currentUserSubject: BehaviorSubject<any>;
  public User: Observable<any>;
  constructor(private http:HttpClient,private router: Router ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('User')));
        this.User = this.currentUserSubject.asObservable();
  }
  login(data):Observable<any>{
    data = this.http.post(`${baseUrl}register`,data);
    return data;
  }

  userdata(id):Observable<any>{
    id=this.http.get(`${baseUrl}users/`+id);
    return id;
  }
  
  isLoggedIn(){
    if  (localStorage.getItem('Token')){
      return true
    }else{
      return false
    }
  }

  logout(){
    localStorage.removeItem('User');
    localStorage.removeItem('Token');
    localStorage.removeItem('current_longitude');
    localStorage.removeItem('current_latitude');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }
  
}
