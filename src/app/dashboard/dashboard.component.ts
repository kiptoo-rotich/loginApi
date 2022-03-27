import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private authService:AuthServiceService,private router: Router,private toastr:ToastrService,private sweet:AppComponent) {  
}

ngOnInit() {this.formGroup=new FormGroup({
  job: new FormControl('',[Validators.required]),
  username: new FormControl('',[Validators.required]),
})
} 

  data=JSON.parse(localStorage.getItem("User"));
  current_latitude=JSON.parse(localStorage.getItem("current_latitude"));
  current_longitude=JSON.parse(localStorage.getItem("current_longitude"));
  updatedUser=JSON.parse(localStorage.getItem("updatedUser"));

  deleteUpdates(){
    if(this.updatedUser){
      localStorage.removeItem("updatedUser");
      location.reload();
    }else{
      this.toastr.warning("You have no updates yet.");
    }
  }
  
  updateProfile(){
    let jobId=this.data.id;
    let job=this.formGroup.value;
    let first_name=this.data.first_name;
    this.authService.update(jobId, job).subscribe(updated=>{
      console.log(updated)
      let update={
        data:this.data,
        job:this.formGroup.value.job,
        first_name:this.formGroup.value,
      }
      localStorage.setItem("updatedUser",JSON.stringify(update));
      window.location.reload();
    })
    this.toastr.success("Profile update successfully");
  }

}
