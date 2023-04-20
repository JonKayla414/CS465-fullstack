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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-trip/add-trip.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-trip/add-trip.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-trip/add-trip.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-trip/add-trip.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\n  <h2 class=\"text-center\">Add Trip</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n\n  <div class=\"form-group\">\n      <label>Code:</label>\n      <input type=\"text\" formControlName=\"code\" placeholder=\"Code\" class=\"form-control\" \n      [ngClass]=\"{ 'is-invalid': submitted && f.code.errors }\">\n          <div *ngIf=\"submitted && f.code.errors\">\n              <div *ngIf=\"f.code.errors.required\">\n              Trip Code is required\n              </div>\n          </div>\n  </div>\n\n  <div class=\"form-group\">\n      <label>Name:</label>\n      <input type=\"text\" formControlName=\"name\"\n      placeholder=\"Name\" class=\"form-control\"\n      [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n      <div *ngIf=\"submitted && f.name.errors\">\n          <div *ngIf=\"f.name.errors.required\">\n          Name is required\n          </div>\n      </div>\n  </div>\n  \n  <div class=\"form-group\">\n      <label>Length:</label>\n      <input type=\"text\" formControlName=\"length\"\n      placeholder=\"Length\" class=\"form-control\"\n      [ngClass]=\"{ 'is-invalid': submitted && f.length.errors }\">\n      <div *ngIf=\"submitted && f.length.errors\">\n          <div *ngIf=\"f.length.errors.required\">\n          Length is required\n          </div>\n      </div>\n  </div> \n\n  <div class=\"form-group\">\n    <label>Start Date:</label>\n    <input type=\"text\" formControlName=\"start\"\n    placeholder=\"Start\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.start.errors }\">\n    <div *ngIf=\"submitted && f.start.errors\">\n        <div *ngIf=\"f.start.errors.required\">\n        Start Date is required\n        </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Resort:</label>\n    <input type=\"text\" formControlName=\"resort\"\n    placeholder=\"Resort\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.resort.errors }\">\n    <div *ngIf=\"submitted && f.resort.errors\">\n        <div *ngIf=\"f.resort.errors.required\">\n        Resort is required\n        </div>\n    </div>\n  </div> \n\n  <div class=\"form-group\">\n    <label>Per Person:</label>\n    <input type=\"text\" formControlName=\"perPerson\"\n    placeholder=\"PerPerson\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.perPerson.errors }\">\n    <div *ngIf=\"submitted && f.perPerson.errors\">\n        <div *ngIf=\"f.perPerson.errors.required\">\n        Per Person Amount is required\n        </div>\n    </div>\n  </div> \n\n  <div class=\"form-group\">\n    <label>Image:</label>\n    <input type=\"text\" formControlName=\"image\"\n    placeholder=\"Image\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.image.errors }\">\n    <div *ngIf=\"submitted && f.image.errors\">\n        <div *ngIf=\"f.image.errors.required\">\n        Image is required\n        </div>\n    </div>\n  </div>  \n\n  <div class=\"form-group\">\n    <label>Description:</label>\n    <input type=\"text\" formControlName=\"description\"\n    placeholder=\"Description\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\n    <div *ngIf=\"submitted && f.description.errors\">\n        <div *ngIf=\"f.description.errors.required\">\n        Description is required\n        </div>\n    </div>\n  </div> \n\n  <button type=\"submit\" class=\"btn btn-info\">Save</button>\n\n</form>\n</div>"

/***/ }),

/***/ "./src/app/add-trip/add-trip.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-trip/add-trip.component.ts ***!
  \************************************************/
/*! exports provided: AddTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTripComponent", function() { return AddTripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trip_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/trip-data.service */ "./src/app/services/trip-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTripComponent = /** @class */ (function () {
    function AddTripComponent(formBuilder, router, tripService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.tripService = tripService;
        this.submitted = false;
    }
    AddTripComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            _id: [],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            resort: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            perPerson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddTripComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.valid) {
            this.tripService.addTrip(this.addForm.value)
                .then(function (data) {
                console.log(data);
                _this.router.navigate(['']);
            });
        }
    };
    Object.defineProperty(AddTripComponent.prototype, "f", {
        // get the form short name to access the form fields
        get: function () { return this.addForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddTripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-trip',
            template: __webpack_require__(/*! ./add-trip.component.html */ "./src/app/add-trip/add-trip.component.html"),
            styles: [__webpack_require__(/*! ./add-trip.component.css */ "./src/app/add-trip/add-trip.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_trip_data_service__WEBPACK_IMPORTED_MODULE_3__["TripDataService"]])
    ], AddTripComponent);
    return AddTripComponent;
}());



/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trip_listing_trip_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip-listing/trip-listing.component */ "./src/app/trip-listing/trip-listing.component.ts");
/* harmony import */ var _add_trip_add_trip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-trip/add-trip.component */ "./src/app/add-trip/add-trip.component.ts");
/* harmony import */ var _edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-trip/edit-trip.component */ "./src/app/edit-trip/edit-trip.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'add-trip', component: _add_trip_add_trip_component__WEBPACK_IMPORTED_MODULE_3__["AddTripComponent"] },
    { path: 'edit-trip', component: _edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_4__["EditTripComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'list-trips', component: _trip_listing_trip_listing_component__WEBPACK_IMPORTED_MODULE_2__["TripListingComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Travlr Admin';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _trip_listing_trip_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-listing/trip-listing.component */ "./src/app/trip-listing/trip-listing.component.ts");
/* harmony import */ var _trip_card_trip_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trip-card/trip-card.component */ "./src/app/trip-card/trip-card.component.ts");
/* harmony import */ var _services_trip_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/trip-data.service */ "./src/app/services/trip-data.service.ts");
/* harmony import */ var _add_trip_add_trip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-trip/add-trip.component */ "./src/app/add-trip/add-trip.component.ts");
/* harmony import */ var _edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-trip/edit-trip.component */ "./src/app/edit-trip/edit-trip.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _trip_listing_trip_listing_component__WEBPACK_IMPORTED_MODULE_6__["TripListingComponent"],
                _trip_card_trip_card_component__WEBPACK_IMPORTED_MODULE_7__["TripCardComponent"],
                _add_trip_add_trip_component__WEBPACK_IMPORTED_MODULE_9__["AddTripComponent"],
                _edit_trip_edit_trip_component__WEBPACK_IMPORTED_MODULE_10__["EditTripComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                _services_trip_data_service__WEBPACK_IMPORTED_MODULE_8__["TripDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-trip/edit-trip.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-trip/edit-trip.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-trip/edit-trip.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-trip/edit-trip.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\n  <h2 class=\"text-center\">Edit Trip</h2>\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n  <div class=\"form-group\">\n      <label>Code:</label>\n      <input type=\"text\" formControlName=\"code\" placeholder=\"Code\" class=\"form-control\" \n      [ngClass]=\"{ 'is-invalid': submitted && f.code.errors }\">\n          <div *ngIf=\"submitted && f.code.errors\">\n              <div *ngIf=\"f.code.errors.required\">\n              Trip Code is required\n              </div>\n          </div>\n  </div>\n\n  <div class=\"form-group\">\n      <label>Name:</label>\n      <input type=\"text\" formControlName=\"name\"\n      placeholder=\"Name\" class=\"form-control\"\n      [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n      <div *ngIf=\"submitted && f.name.errors\">\n          <div *ngIf=\"f.name.errors.required\">\n          Name is required\n          </div>\n      </div>\n  </div>\n  \n  <div class=\"form-group\">\n      <label>Length:</label>\n      <input type=\"text\" formControlName=\"length\"\n      placeholder=\"Length\" class=\"form-control\"\n      [ngClass]=\"{ 'is-invalid': submitted && f.length.errors }\">\n      <div *ngIf=\"submitted && f.length.errors\">\n          <div *ngIf=\"f.length.errors.required\">\n          Length is required\n          </div>\n      </div>\n  </div> \n\n  <div class=\"form-group\">\n    <label>Start Date:</label>\n    <input type=\"text\" formControlName=\"start\"\n    placeholder=\"Start\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.start.errors }\">\n    <div *ngIf=\"submitted && f.start.errors\">\n        <div *ngIf=\"f.start.errors.required\">\n        Start Date is required\n        </div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Resort:</label>\n    <input type=\"text\" formControlName=\"resort\"\n    placeholder=\"Resort\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.resort.errors }\">\n    <div *ngIf=\"submitted && f.resort.errors\">\n        <div *ngIf=\"f.resort.errors.required\">\n        Resort is required\n        </div>\n    </div>\n  </div> \n\n  <div class=\"form-group\">\n    <label>Per Person:</label>\n    <input type=\"text\" formControlName=\"perPerson\"\n    placeholder=\"PerPerson\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.perPerson.errors }\">\n    <div *ngIf=\"submitted && f.perPerson.errors\">\n        <div *ngIf=\"f.perPerson.errors.required\">\n        Per Person Amount is required\n        </div>\n    </div>\n  </div> \n\n  <div class=\"form-group\">\n    <label>Image:</label>\n    <input type=\"text\" formControlName=\"image\"\n    placeholder=\"Image\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.image.errors }\">\n    <div *ngIf=\"submitted && f.image.errors\">\n        <div *ngIf=\"f.image.errors.required\">\n        Image is required\n        </div>\n    </div>\n  </div>  \n\n  <div class=\"form-group\">\n    <label>Description:</label>\n    <input type=\"text\" formControlName=\"description\"\n    placeholder=\"Description\" class=\"form-control\"\n    [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\n    <div *ngIf=\"submitted && f.description.errors\">\n        <div *ngIf=\"f.description.errors.required\">\n        Description is required\n        </div>\n    </div>\n  </div> \n\n  <button type=\"submit\" class=\"btn btn-info\">Save</button>\n\n</form>\n</div>"

/***/ }),

/***/ "./src/app/edit-trip/edit-trip.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-trip/edit-trip.component.ts ***!
  \**************************************************/
/*! exports provided: EditTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTripComponent", function() { return EditTripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trip_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/trip-data.service */ "./src/app/services/trip-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTripComponent = /** @class */ (function () {
    function EditTripComponent(formBuilder, router, tripService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.tripService = tripService;
        this.submitted = false;
    }
    EditTripComponent.prototype.ngOnInit = function () {
        var _this = this;
        // retrieve stashed tripId
        var tripCode = localStorage.getItem("tripCode");
        if (!tripCode) {
            alert("Something wrong, couldn't find where I stashed tripCode!");
            this.router.navigate(['']);
            return;
        }
        console.log('EditTripComponent#onInit found tripCode ' + tripCode);
        // initialize form
        this.editForm = this.formBuilder.group({
            _id: [],
            code: [tripCode, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            resort: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            perPerson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        console.log('EditTripComponent#onInit calling TripDataService#getTrip(\'' + tripCode + '\')');
        this.tripService.getTrip(tripCode)
            .then(function (data) {
            console.log(data);
            // Don't use editForm.setValue() as it will throw console error
            _this.editForm.patchValue(data[0]);
        });
    };
    EditTripComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.editForm.valid) {
            this.tripService.updateTrip(this.editForm.value)
                .then(function (data) {
                console.log(data);
                _this.router.navigate(['']);
            });
        }
    };
    EditTripComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-trip',
            template: __webpack_require__(/*! ./edit-trip.component.html */ "./src/app/edit-trip/edit-trip.component.html"),
            styles: [__webpack_require__(/*! ./edit-trip.component.css */ "./src/app/edit-trip/edit-trip.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_trip_data_service__WEBPACK_IMPORTED_MODULE_3__["TripDataService"]])
    ], EditTripComponent);
    return EditTripComponent;
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

module.exports = "\n<div class=\"container\" *ngIf=\"!isLoggedIn()\">\n  <br/>\n  <h2>Please login to continue</h2>\n</div>"

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
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication */ "./src/app/services/authentication.ts");
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-md-8\">\n  <h2>Login</h2>\n  <form (ngSubmit)=\"onLoginSubmit(evt)\">\n    <div role=\"alert\" *ngIf=\"formErrors\" class=\"alert alert-danger\">{{ formError }}</div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email Address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter email address\" [(ngModel)]=\"credentials.email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"e.g 12+ alphanumerics\" [(ngModel)]=\"credentials.password\">\n    </div>\n    <button type=\"submit\" role=\"button\" class=\"btn-btnprimary\">Sign In!</button>\n  </form>\n  </div>\n </div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication */ "./src/app/services/authentication.ts");
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
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.formError = '';
        this.credentials = {
            name: '',
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        this.formError = '';
        if (!this.credentials.email || !this.credentials.password) {
            this.formError = 'All fields are required, please try again';
        }
        else {
            this.doLogin();
        }
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.authenticationService.login(this.credentials)
            .then(function () { return _this.router.navigateByUrl('#'); })
            .catch(function (message) { return _this.formError = message; });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/images/logo.png\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" datatoggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" ariacontrols=\"navbarNavAltMarkup\" aria-expanded=\"false\" arialabel=\"Toggle navigation\">\n  <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" routerLink=\"list-trips\">Trips<span class=\" sr-only \">(current)</span></a>\n    </div>\n  </div>\n  <div class=\"navbar-end\">\n    <a class=\"navbar-item\" routerLink=\"login\" *ngIf=\"!isLoggedIn()\">\n      <span class=\"has-icon-left\">Log In</span>\n    </a>\n    <a class=\"navbar-item\" (click)=\"onLogout()\" *ngIf=\"isLoggedIn()\">\n      <span class=\"has-icon-left\">Log Out</span>\n    </a>\n  </div>\n </nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication */ "./src/app/services/authentication.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NavbarComponent.prototype.onLogout = function () {
        return this.authenticationService.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.ts":
/*!********************************************!*\
  !*** ./src/app/services/authentication.ts ***!
  \********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
/* harmony import */ var _trip_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip-data.service */ "./src/app/services/trip-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(storage, tripDataService) {
        this.storage = storage;
        this.tripDataService = tripDataService;
    }
    AuthenticationService.prototype.getToken = function () {
        return this.storage.getItem('travlr-token');
    };
    AuthenticationService.prototype.saveToken = function (token) {
        this.storage.setItem('travlr-token', token);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        return this.tripDataService.login(user)
            .then(function (authResp) { return _this.saveToken(authResp.token); });
    };
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        return this.tripDataService.register(user)
            .then(function (authResp) { return _this.saveToken(authResp.token); });
    };
    AuthenticationService.prototype.logout = function () {
        this.storage.removeItem('travlr-token');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token) {
            var payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken();
            var _a = JSON.parse(atob(token.split('.')[1])), email = _a.email, name_1 = _a.name;
            return { email: email, name: name_1 };
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_storage__WEBPACK_IMPORTED_MODULE_1__["BROWSER_STORAGE"])),
        __metadata("design:paramtypes", [Storage,
            _trip_data_service__WEBPACK_IMPORTED_MODULE_2__["TripDataService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/trip-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/trip-data.service.ts ***!
  \***********************************************/
/*! exports provided: TripDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDataService", function() { return TripDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage */ "./src/app/storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TripDataService = /** @class */ (function () {
    function TripDataService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiBaseUrl = "http://localhost:3000/api/";
        this.tripUrl = this.apiBaseUrl + "trips/";
    }
    TripDataService.prototype.getTrips = function () {
        console.log("Inside TripDataService#getTrips");
        return this.http
            .get(this.apiBaseUrl + "trips")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TripDataService.prototype.getTrip = function (tripCode) {
        console.log("Inside TripDataService#getdTrip");
        return this.http
            .get(this.tripUrl + tripCode)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TripDataService.prototype.addTrip = function (formData) {
        console.log("Inside TripDataService#addTrip");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("travlr-token"),
        });
        return this.http
            .post(this.tripUrl, formData, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TripDataService.prototype.updateTrip = function (formData) {
        console.log("Inside TripDataService#updateTrip");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("travlr-token"),
        });
        return this.http
            .put(this.tripUrl + formData.code, formData, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TripDataService.prototype.handleError = function (error) {
        console.error("Something has gone wrong", error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TripDataService.prototype.login = function (user) {
        return this.makeAuthApiCall("login", user);
    };
    TripDataService.prototype.register = function (user) {
        return this.makeAuthApiCall("register", user);
    };
    TripDataService.prototype.makeAuthApiCall = function (urlPath, user) {
        var url = this.apiBaseUrl + "/" + urlPath;
        return this.http
            .post(url, user)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TripDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"])),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            Storage])
    ], TripDataService);
    return TripDataService;
}());



/***/ }),

/***/ "./src/app/storage.ts":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/*! exports provided: BROWSER_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_STORAGE", function() { return BROWSER_STORAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser Storage', {
    providedIn: 'root',
    factory: function () { return localStorage; }
});


/***/ }),

/***/ "./src/app/trip-card/trip-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/trip-card/trip-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-card/trip-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/trip-card/trip-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card m1-4\" style=\"width: 18rem;\">\n  <div class=\"card-header\">{{ trip.name }}</div>\n  <img src=\"assets/images/{{ trip.image }}\" alt=\"trip thumbnail\" class=\"card-img-top\">\n  <div class=\"card-body\">\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{ trip.resort }}</h6>\n    <p class=\"card-subtitle mt-3 mb-3 text-muted\">{{ trip.length }} only \n      {{ trip.perPerson | currency:'USD':true }} per person</p>\n      <p class=\"card-text\" [innerHTML]=\"trip.description\"></p>\n      <div *ngIf=\"isLoggedIn()\">\n        <button (click)=\"editTrip(trip)\" class=\"btn btn-info\">Edit</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/trip-card/trip-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/trip-card/trip-card.component.ts ***!
  \**************************************************/
/*! exports provided: TripCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripCardComponent", function() { return TripCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication */ "./src/app/services/authentication.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripCardComponent = /** @class */ (function () {
    function TripCardComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    TripCardComponent.prototype.ngOnInit = function () {
    };
    TripCardComponent.prototype.editTrip = function (trip) {
        localStorage.removeItem("tripCode");
        localStorage.setItem("tripCode", trip.code);
        this.router.navigate(['edit-trip']);
    };
    TripCardComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('trip'),
        __metadata("design:type", Object)
    ], TripCardComponent.prototype, "trip", void 0);
    TripCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-card',
            template: __webpack_require__(/*! ./trip-card.component.html */ "./src/app/trip-card/trip-card.component.html"),
            styles: [__webpack_require__(/*! ./trip-card.component.css */ "./src/app/trip-card/trip-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], TripCardComponent);
    return TripCardComponent;
}());



/***/ }),

/***/ "./src/app/trip-listing/trip-listing.component.css":
/*!*********************************************************!*\
  !*** ./src/app/trip-listing/trip-listing.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trip-listing/trip-listing.component.html":
/*!**********************************************************!*\
  !*** ./src/app/trip-listing/trip-listing.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn()\">\n  <button (click)=\"addTrip()\" class=\"btn btn-info\">Add Trip</button>\n</div>\n<div class=\"row\">\n  <div *ngFor=\"let trip of trips\">\n      <app-trip-card [trip]=\"trip\" class=\"card-deck mt-2\"></app-trip-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/trip-listing/trip-listing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/trip-listing/trip-listing.component.ts ***!
  \********************************************************/
/*! exports provided: TripListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripListingComponent", function() { return TripListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trip_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/trip-data.service */ "./src/app/services/trip-data.service.ts");
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication */ "./src/app/services/authentication.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripListingComponent = /** @class */ (function () {
    function TripListingComponent(tripDataService, authService, router) {
        this.tripDataService = tripDataService;
        this.authService = authService;
        this.router = router;
    }
    TripListingComponent.prototype.addTrip = function () {
        console.log('Inside TripListingComponent#addTrip');
        this.router.navigate(['add-trip']);
    };
    TripListingComponent.prototype.getTrips = function () {
        var _this = this;
        console.log('Inside TripListingComponent#getTrips');
        this.message = 'Searching for trips';
        this.tripDataService
            .getTrips()
            .then(function (foundTrips) {
            _this.message = foundTrips.length > 0 ? '' : 'No trips found';
            _this.trips = foundTrips;
        });
    };
    TripListingComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    TripListingComponent.prototype.ngOnInit = function () {
        this.getTrips();
    };
    TripListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-listing',
            template: __webpack_require__(/*! ./trip-listing.component.html */ "./src/app/trip-listing/trip-listing.component.html"),
            styles: [__webpack_require__(/*! ./trip-listing.component.css */ "./src/app/trip-listing/trip-listing.component.css")],
            providers: [_services_trip_data_service__WEBPACK_IMPORTED_MODULE_2__["TripDataService"]]
        }),
        __metadata("design:paramtypes", [_services_trip_data_service__WEBPACK_IMPORTED_MODULE_2__["TripDataService"],
            _services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TripListingComponent);
    return TripListingComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jkp/Desktop/snhu/CS465-fullstack/app_admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map