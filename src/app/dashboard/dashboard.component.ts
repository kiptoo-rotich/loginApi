import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private authService:AuthServiceService,private router: Router,private toastr:ToastrService) {  
}
  data=JSON.parse(localStorage.getItem("User"));
  current_latitude=JSON.parse(localStorage.getItem("current_latitude"));
  current_longitude=JSON.parse(localStorage.getItem("current_longitude"));

    
  ngOnInit() {
 } 

  logout(){
    this.authService.logout()
    this.toastr.warning("Logged out");
  }

}
