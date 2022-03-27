import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { apiUrl, baseUrl } from "src/environments/environment";
import { Router } from "@angular/router";

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
    return this.http.post(`${baseUrl}register`,{email, password});
  }

  userdata(id): Observable<any> {
    id = this.http.get(`${baseUrl}users/` + id);
    return id;
  }

  all_users(): Observable<any> {
    return this.http.get(`${apiUrl}?page=2`);
  }

  createUser(data) {
    return this.http.post(`${baseUrl}register`, data);
  }

  get token(){
    return localStorage.getItem("Token");
  }

  update(id, data) {
    return this.http.patch(`${baseUrl}users/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
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

  autoLogout(expDate: number) {
    setTimeout(() => {
      this.logout();
    }, 2000);
  }
}
