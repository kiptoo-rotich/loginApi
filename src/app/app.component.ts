import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   ngOnInit() {
  }

  authenticated = this.authService.isAuthenticated()

  title = 'app';
  constructor(private authService:AuthServiceService,private toastr:ToastrService){}
  
  logout(){
    this.authService.logout()
    this.toastr.warning("Logged out");
    location.reload()
  }
  getLocation() {
    this.toastr.warning(
      "If co-ordinates doesn't show, kindly refresh the page."
    );
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          localStorage.setItem(
            "current_latitude",
            JSON.stringify(position.coords.latitude)
          ),
            localStorage.setItem(
              "current_longitude",
              JSON.stringify(position.coords.longitude)
            );
        }
        (error: Error) => console.log(error);
      });
    } else {
      this.toastr.warning("Geolocation is not supported by this browser.");
    }
  }

 
}
