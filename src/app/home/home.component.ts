import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private authService:AuthServiceService) { }

  Token = localStorage.getItem("Token");
  User = JSON.parse(localStorage.getItem("User"));
  current_latitude=JSON.parse(localStorage.getItem("current_latitude"));
  current_longitude=JSON.parse(localStorage.getItem("current_longitude"));
}

