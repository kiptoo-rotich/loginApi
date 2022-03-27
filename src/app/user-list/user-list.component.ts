import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.usersList();
  }

  UsersList = JSON.parse(localStorage.getItem("UsersList"));

  usersList() {
    this.authService.all_users().subscribe((listing) => {
      if (listing) {
        localStorage.setItem("UsersList", JSON.stringify(listing.data))
        this.toastr.warning("Kindly refresh page if users didn't display")
      } else {
        this.toastr.warning("No data");
      }
    });
  }
}
