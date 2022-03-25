import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup: FormGroup
  constructor(private authService:AuthServiceService,private router: Router,private toastr:ToastrService) { }
  initForm(){this.formGroup=new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  })}

  ngOnInit() {
    this.initForm();
  }

  getLocation() {
    this.toastr.warning("If co-ordinates doesn't show, kindly refresh the page.");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          localStorage.setItem("current_latitude",position.coords.latitude),
          localStorage.setItem("current_longitude",position.coords.longitude)
      }(error: PositionError) => console.log(error));
    } else {
      this.toastr.warning("Geolocation is not supported by this browser.");
    }
  }

  loginProcess(){
    if(localStorage.getItem("User")){
      this.router.navigate([''])
      this.toastr.success("Login successfull");
    }else{
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        console.log(this.formGroup.value.password)
        console.log(result)
        if(result.id){
          this.authService.userdata(result.id).subscribe(results=>{
            console.log(results)
            // if(this.formGroup.value)
            localStorage.setItem("Token",result.token)
            localStorage.setItem("User",JSON.stringify(results.data));
            this.getLocation();
            this.router.navigate(['']);
            this.toastr.success("Login successfull");
          })
        }else{
          this.toastr.error("Login failed");
        }
      })
    }else{
      this.toastr.warning("Provide both email and password");
    }
  }
  }
}
