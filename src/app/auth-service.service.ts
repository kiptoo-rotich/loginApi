import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, forkJoin, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: "root",
})

export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<any>;
  public User: Observable<any>;
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("User"))
    );
    this.User = this.currentUserSubject.asObservable();
  }
  login(email:string, password:string): Observable<any> {
    return this.http.post(`${environment.baseUrl}register`,{email, password});
  }

  userdata(id): Observable<any> {
    id = this.http.get(`${environment.baseUrl}users/` + id);
    return id;
  }

  all_users(): Observable<any> {
    let data1$=this.http.get(`${environment.apiUrl}?page=1`)
    let data$=this.http.get(`${environment.apiUrl}?page=2`)
    let final_data$=forkJoin(data$,data1$)
    return final_data$;
  }

  createUser(data) {
    return this.http.post(`${environment.baseUrl}register`, data);
  }

  get token(){
    return localStorage.getItem("Token");
  }

  update(id, data) {
    return this.http.patch(`${environment.baseUrl}users/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${environment.baseUrl}/${id}`);
  }

  public isAuthenticated(): boolean {
    const token = this.token;
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("User");
    localStorage.removeItem("Token");
    localStorage.removeItem("current_longitude");
    localStorage.removeItem("current_latitude");
    localStorage.removeItem("updatedUser");
    localStorage.removeItem("UsersList");
    this.currentUserSubject.next(null);
    this.router.navigate(["login"]);
  }

  private handleUser(response: AuthResponseData) {
    const expireDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    this.autoLogout(+response.expiresIn * 1000);
  }

  autoLogout(expDate: number) {
    setTimeout(() => {
      this.logout();
    }, 2000);
  }
}
