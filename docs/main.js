(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticate.guard */ "./src/app/authenticate.guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    },
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_authenticate_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticateGuard"]]
    },
    {
        path: 'list',
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"],
        canActivate: [_authenticate_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticateGuard"]]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_authenticate_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticateGuard"]]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\n    <div>\n\n    </div>\n    <div *ngIf=\"authenticated; else elseBlock\">\n        <a class=\"navbar-brand\" routerLink=\"home\" routerLinkActive='active'>Home</a>\n        <a class=\"navbar-brand\" routerLink=\"list\">Users</a>\n        <a class=\"navbar-brand\" routerLink=\"\" routerLinkActive='active'>Profile</a>\n        <button class=\"btn btn-outline-danger my-2 my-sm-0\" (click)=\"logout()\">Logout</button>\n    </div>\n    <ng-template #elseBlock>\n        <div>\n            <a class=\"navbar-brand\" routerLink=\"login\" routerLinkActive='active'>Login</a>\n        </div>\n    </ng-template>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        this.authenticated = this.authService.isAuthenticated();
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.toastr.warning("Logged out");
        location.reload();
    };
    AppComponent.prototype.getLocation = function () {
        this.toastr.warning("If co-ordinates doesn't show, kindly refresh the page.");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    localStorage.setItem("current_latitude", JSON.stringify(position.coords.latitude)),
                        localStorage.setItem("current_longitude", JSON.stringify(position.coords.longitude));
                }
                (function (error) { return console.log(error); });
            });
        }
        else {
            this.toastr.warning("Geolocation is not supported by this browser.");
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot()
            ],
            providers: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/auth-service.service.ts ***!
  \*****************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem("User")));
        this.User = this.currentUserSubject.asObservable();
    }
    AuthServiceService.prototype.login = function (email, password) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "register", { email: email, password: password });
    };
    AuthServiceService.prototype.userdata = function (id) {
        id = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "users/" + id);
        return id;
    };
    AuthServiceService.prototype.all_users = function () {
        var data1$ = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?page=1");
        var data$ = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?page=2");
        var final_data$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(data$, data1$);
        return final_data$;
    };
    AuthServiceService.prototype.createUser = function (data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "register", data);
    };
    Object.defineProperty(AuthServiceService.prototype, "token", {
        get: function () {
            return localStorage.getItem("Token");
        },
        enumerable: true,
        configurable: true
    });
    AuthServiceService.prototype.update = function (id, data) {
        return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "users/" + id, data);
    };
    AuthServiceService.prototype.delete = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/" + id);
    };
    AuthServiceService.prototype.isAuthenticated = function () {
        var token = this.token;
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthServiceService.prototype.logout = function () {
        localStorage.removeItem("User");
        localStorage.removeItem("Token");
        localStorage.removeItem("current_longitude");
        localStorage.removeItem("current_latitude");
        localStorage.removeItem("updatedUser");
        localStorage.removeItem("UsersList");
        this.currentUserSubject.next(null);
        this.router.navigate(["login"]);
    };
    AuthServiceService.prototype.handleUser = function (response) {
        var expireDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        this.autoLogout(+response.expiresIn * 1000);
    };
    AuthServiceService.prototype.autoLogout = function (expDate) {
        var _this = this;
        setTimeout(function () {
            _this.logout();
        }, 2000);
    };
    AuthServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthServiceService);
    return AuthServiceService;
}());



/***/ }),

/***/ "./src/app/authenticate.guard.ts":
/*!***************************************!*\
  !*** ./src/app/authenticate.guard.ts ***!
  \***************************************/
/*! exports provided: AuthenticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateGuard", function() { return AuthenticateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateGuard = /** @class */ (function () {
    function AuthenticateGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthenticateGuard.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthenticateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthenticateGuard);
    return AuthenticateGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    border-radius: 50%;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" id=\"data\" #userData>\n    <div *ngIf=\"updatedUser; else elseBlock\">\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <img src=\"{{updatedUser.data.avatar}}\" alt=\"\" width=\"100%\" height=\"100%\">\n            </div>\n            <div class=\"col-9\">\n                <p>\n                    Name: <b>{{updatedUser.first_name.username}}</b>\n                </p>\n                <p>\n                    Email: <i><b>{{updatedUser.data.email}}</b></i>\n                </p>\n                <p>\n                    Job: <i><b>{{updatedUser.first_name.job}}</b></i>\n                </p>\n\n                <button class=\"btn btn-md btn-danger mr-2\" (click)=\"deleteUpdates()\">Delete updates</button>\n                <button type=\"button\" class=\"btn btn-md btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Update</button>\n            </div>\n        </div>\n    </div>\n    <ng-template #elseBlock>\n        <div class=\"row\">\n            <div class=\"col-3\">\n                <img src=\"{{data.avatar}}\" alt=\"\" width=\"100%\" height=\"100%\">\n            </div>\n            <div class=\"col-9\">\n                <p>\n                    Full name: <b>{{data.first_name}} {{data.last_name}}</b>\n                </p>\n                <p>\n                    Email: <i><b>{{data.email}}</b></i>\n                </p>\n                <button class=\"btn btn-md btn-danger mr-2\" (click)=\"deleteUpdates()\">Delete updates</button>\n                <button type=\"button\" class=\"btn btn-md btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Update</button>\n            </div>\n        </div>\n    </ng-template>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Update profile</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n                </div>\n                <form [formGroup]=\"formGroup\" (ngSubmit)=\"updateProfile()\">\n\n                    <div class=\"modal-body\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Name\" required>\n                        <input type=\"text\" class=\"form-control mt-2\" formControlName=\"job\" placeholder=\"Job\" required>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"submit\"[disabled]=\"!formGroup.valid\" class=\"btn btn-primary\">Save changes</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, toastr, sweet) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.sweet = sweet;
        this.data = JSON.parse(localStorage.getItem("User"));
        this.updatedUser = JSON.parse(localStorage.getItem("updatedUser"));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    DashboardComponent.prototype.deleteUpdates = function () {
        if (this.updatedUser) {
            localStorage.removeItem("updatedUser");
            location.reload();
        }
        else {
            this.toastr.warning("You have no updates yet.");
        }
    };
    DashboardComponent.prototype.updateProfile = function () {
        var _this = this;
        var jobId = this.data.id;
        var job = this.formGroup.value;
        var first_name = this.data.first_name;
        this.authService.update(jobId, job).subscribe(function (updated) {
            console.log(updated);
            var update = {
                data: _this.data,
                job: _this.formGroup.value.job,
                first_name: _this.formGroup.value,
            };
            localStorage.setItem("updatedUser", JSON.stringify(update));
            window.location.reload();
        });
        this.toastr.success("Profile update successfully");
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <p><i>Your token: <b><i>{{Token}}</i></b>\n        </i>\n    </p>\n    <p>User: <i><b>{{User.id}}</b></i></p>\n    <p>Latitude: <i><b>{{current_latitude}}</b></i></p>\n    <p>Longitude: <i><b>{{current_longitude}}</b></i></p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.Token = localStorage.getItem("Token");
        this.User = JSON.parse(localStorage.getItem("User"));
        this.current_latitude = JSON.parse(localStorage.getItem("current_latitude"));
        this.current_longitude = JSON.parse(localStorage.getItem("current_longitude"));
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h3 class=\"text-center\">Login</h3>\n            </div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"formGroup\" (ngSubmit)=\"loginProcess()\">\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><img src=\"./../../assets/icons8-user-50.png\" alt=\"\"width=\"100%\"></span>\n                        </div>\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required>\n                    </div>\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><img src=\"../../assets/icons8-password-30.png\" alt=\"\"width=\"100%\"></span>\n                        </div>\n                        <input [type]=\"fieldTextType ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" />\n                        <div class=\"input-group-text\">\n                            <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !fieldTextType,'fa-eye': fieldTextType}\" (click)=\"toggleFieldTextType()\"></i>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" [disabled]=\"!formGroup.valid\" value=\"Login\" class=\"btn float-right\" />\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"d-flex justify-content-center links\">\n                    Don't have an account?\n                    <a routerLink=\"/signup\">Sign Up</a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastr, userList) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.userList = userList;
        this.toDisplay = false;
        this.toDisplay1 = true;
        this.Token = JSON.parse(localStorage.getItem("Token"));
    }
    LoginComponent.prototype.initForm = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.toggleFieldTextType = function () {
        this.fieldTextType = !this.fieldTextType;
    };
    LoginComponent.prototype.getLocation = function () {
        this.toastr.warning("If co-ordinates doesn't show, kindly refresh the page.");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    localStorage.setItem("current_latitude", JSON.stringify(position.coords.latitude)),
                        localStorage.setItem("current_longitude", JSON.stringify(position.coords.longitude));
                }
                (function (error) { return console.log(error); });
            });
        }
        else {
            this.toastr.warning("Geolocation is not supported by this browser.");
        }
    };
    LoginComponent.prototype.toggleData = function () {
        this.toDisplay = !this.toDisplay;
        this.toDisplay1 = !this.toDisplay1;
    };
    LoginComponent.prototype.loginProcess = function () {
        var _this = this;
        if (this.formGroup.valid) {
            this.authService.login(this.formGroup.value.email, this.formGroup.value.password).subscribe(function (result) {
                if (result.token) {
                    _this.authService.userdata(result.id).subscribe(function (results) {
                        _this.getLocation();
                        localStorage.setItem("Token", result.token);
                        localStorage.setItem("User", JSON.stringify(results.data));
                        _this.router.navigate([""]);
                        _this.toastr.success("Login successfull");
                        console.log(_this.userList);
                    });
                }
                else {
                    _this.toastr.warning("Login failed");
                }
            });
        }
        else {
            this.toastr.warning("Invalid email address");
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notFound {\n    background-color: red;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    border-radius: 10px;\n    width: 50%;\n    box-shadow: 0px 0px 5px 5px;\n    margin: 0px auto;\n    padding: 1% 2% 1% 2%;\n    color: white;\n}\n\nh4 {\n    font-size: 40px;\n}\n\np {\n    font-size: 25px;\n}\n\n.container {\n    margin-top: 10%;\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"notFound\">\n        <h4>Oops! Sorry</h4>\n        <p>We couldn't find what you are looking for. Kindly recheck your url.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"d-flex justify-content-center\">\n        <div class=\"card\" id=\"card\">\n            <div class=\"card-header\">\n                <h3>Sign Up</h3>\n            </div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"formGroup\" (ngSubmit)=\"registerProcess()\">\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><img src=\"./../../assets/icons8-user-50.png\" alt=\"\"\n                                    width=\"100%\" /></span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" />\n                    </div>\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><img src=\"../../assets/icons8-password-30.png\" alt=\"\"\n                                    width=\"100%\" /></span>\n                        </div>\n                        <input [type]=\"fieldTextType ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" minlength=\"8\" />\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                                <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !fieldTextType,'fa-eye': fieldTextType}\" (click)=\"toggleFieldTextType()\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><img src=\"../../assets/icons8-password-30.png\" alt=\"\"\n                                    width=\"100%\" /></span>\n                        </div>\n                        <input [type]=\"fieldTextType ? 'text' : 'password'\" class=\"form-control\" placeholder=\"Confirm password\" formControlName=\"confirm_password\" minlength=\"8\" />\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\">\n                                <i class=\"fa\" [ngClass]=\"{'fa-eye-slash': !fieldTextType, 'fa-eye': fieldTextType }\" (click)=\"toggleFieldTextType()\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" [disabled]=\"!formGroup.valid\" value=\"Signup\" class=\"btn float-right\" />\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"d-flex justify-content-center links\">\n                    Don't have an account?<a routerLink=\"/\">Sign In</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, toastr, users) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.users = users;
        this.Token = JSON.parse(this.authService.token);
        this.regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    }
    SignupComponent.prototype.initForm = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignupComponent.prototype.toggleFieldTextType = function () {
        this.fieldTextType = !this.fieldTextType;
    };
    SignupComponent.prototype.registerProcess = function () {
        var _this = this;
        if (this.formGroup.valid) {
            var parameters = {
                email: this.formGroup.value.email,
                password: this.formGroup.value.password,
            };
            this.authService.createUser(parameters).subscribe(function (register) {
                if (_this.formGroup.value.password.match(_this.regularExpression)) {
                    if (_this.formGroup.value.password ===
                        _this.formGroup.value.confirm_password) {
                        localStorage.setItem("Token", JSON.stringify(register));
                        _this.toastr.success("User created successfully!");
                        var id = JSON.stringify(_this.Token.id);
                        _this.authService.userdata(id).subscribe(function (log) {
                            _this.users.getLocation();
                            localStorage.setItem("User", JSON.stringify(log.data));
                            _this.router.navigate([""]);
                            _this.toastr.success("Login successfull");
                        });
                    }
                    else {
                        _this.toastr.warning("Passwords does not match!");
                    }
                }
                else {
                    _this.toastr.warning("Password should contain 8 or more combination of alphanumeric and special characters.");
                }
            });
        }
        else {
            this.toastr.warning("Kindly provide a valid email address and password with 8 or more characters.");
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")],
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td>img {\n    border-radius: 50%;\n}"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row mt-5\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Id</th>\n                    <th scope=\"col\">Image</th>\n                    <th scope=\"col\">First</th>\n                    <th scope=\"col\">Last</th>\n                    <th scope=\"col\">Email</th>\n                </tr>\n            </thead>\n            <tr *ngFor=\"let item of UsersList | paginate: { itemsPerPage: 4, currentPage: page, totalItems:totalLength }\">\n                <th scope=\"row\">{{item.id}}</th>\n                <td><img src=\"{{item.avatar}}\" alt=\"\" width=\"25%\" height=\"25%\"></td>\n                <td>{{item.first_name}}</td>\n                <td>{{item.last_name}}</td>\n                <td>{{item.email}}</td>\n            </tr>\n        </table>\n    </div>\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n\n</div>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        this.UsersList = JSON.parse(localStorage.getItem("UsersList"));
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.usersList();
    };
    UserListComponent.prototype.usersList = function () {
        var _this = this;
        this.authService.all_users().subscribe(function (listing) {
            if (listing) {
                var list = listing[1].data.concat(listing[0].data);
                _this.totalLength = list.length;
                localStorage.setItem("UsersList", JSON.stringify(list));
                // this.toastr.warning("Kindly refresh page if users didn't display")
            }
            else {
                _this.toastr.warning("No data");
            }
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-user-list",
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")],
        }),
        __metadata("design:paramtypes", [_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthServiceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://reqres.in/api/',
    apiUrl: 'https://reqres.in/api/users/',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kiptoo/Documents/Study/TopUp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map