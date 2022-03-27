import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthServiceService } from "../auth-service.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService,
    private userList: UserListComponent
  ) {}
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {
    this.initForm();
  }
  
  fieldTextType: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
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

  toDisplay = false;
  toDisplay1 = true;

  toggleData() {
    this.toDisplay = !this.toDisplay;
    this.toDisplay1 = !this.toDisplay1;
  }

  Token = JSON.parse(localStorage.getItem("Token"));

  loginProcess() {
    if (this.formGroup.valid) {

      this.authService.login(this.formGroup.value.email,this.formGroup.value.password).subscribe((result) => {
        if (result.token) {
          this.authService.userdata(result.id).subscribe((results) => {
            this.getLocation();
            localStorage.setItem("Token", result.token);
            localStorage.setItem("User", JSON.stringify(results.data));
            this.router.navigate([""]);
            this.toastr.success("Login successfull");
          });
        } else {
          this.toastr.error("Login failed");
        }
      });
    } else {
      this.toastr.warning("Provide both email and password");
    }
  }
}
