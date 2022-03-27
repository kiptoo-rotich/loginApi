import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup
  constructor(private authService:AuthServiceService,private router: Router,private toastr:ToastrService,private users:AppComponent) { }
  initForm(){this.formGroup=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirm_password: new FormControl('',[Validators.required]),

  })}
  ngOnInit() {
    this.initForm();
  }
  
  Token=JSON.parse(localStorage.getItem("Token"));

  regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  registerProcess(){
    if(this.formGroup.valid){
      let parameters={
        email:this.formGroup.value.email,
        password:this.formGroup.value.password
      }
      this.authService.createUser(parameters).subscribe(register=>{
        if(this.formGroup.value.password.match(this.regularExpression)){
          if(this.formGroup.value.password===this.formGroup.value.confirm_password){
            localStorage.setItem("Token",JSON.stringify(register))
            this.toastr.success("User created successfully!")
            let id=JSON.stringify(this.Token.id)
            this.authService.userdata(id).subscribe(log=>{
            this.users.getLocation();
            localStorage.setItem("User", JSON.stringify(log.data));
            this.router.navigate([""]);
            this.toastr.success("Login successfull");
            })
          }else{
            this.toastr.warning("Passwords does not match!");
          }
          }else{
            this.toastr.warning("Password should contain 8 or more combination of alphanumeric and special characters.")
        }
        })
      }else{
        this.toastr.warning("Kindly provide a valid email address and password with 8 or more characters.")
    }
  }

}
