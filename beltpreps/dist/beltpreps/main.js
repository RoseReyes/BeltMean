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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'view/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthorService } from './author.service';

var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
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
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-left\">\n        <h1 class=\"mt-4\">{{ Header }}</h1>\n    </div>\n    <div class=\"row justify-content-md-left\">\n        <h4>Edit this pet</h4>\n    </div>\n    <div class=\"text-danger\" *ngIf = \"editError\"><p>{{editError.petname.message}}</p></div>\n    <div class=\"row justify-content-md-left border border-dark p-4 rounded\">\n      <div class=\"form-group row\" *ngIf =\"updatePet\">   \n      <form (submit) =\"onUpdatePetClick(updatePet._id)\">\n            <div class=\"form-group row\">\n                <label class=\"col-sm-5 col-form-label\">Pet name:</label>\n                <input type=\"text\" class=\"form-control ml-3\" name = \"updatePet.petname\" required minlength=\"3\" [(ngModel)] = \"updatePet.petname\" #petname=\"ngModel\" value ={{updatePet.petname}}/>\n                <div class=\"text-danger ml-3\" [hidden] = \"petname.valid\"><p>*Pet name is required and should be more than 3 characters</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-5 col-form-label\">Pet type:</label>\n                <input type=\"text\" class=\"form-control ml-3\" name = \"updatePet.pettype\" required minlength=\"3\" [(ngModel)] = \"updatePet.pettype\" #pettype=\"ngModel\" value ={{updatePet.pettype}}/>\n                <div class=\"text-danger ml-3\" [hidden] = \"pettype.valid\"><p>*Pet type is required and should be more than 3 characters </p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-5 col-form-label\">Description:</label>\n                <input type=\"text\" class=\"form-control ml-3\" name = \"updatePet.description\" required minlength=\"3\" [(ngModel)] = \"updatePet.description\" #description=\"ngModel\" \n                value ={{updatePet.description}}/>\n                <div class=\"text-danger ml-3\" [hidden] =\"description.valid\"><p>*Pet description is required and should be more than 3 characters</p></div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-sm-5 col-form-label\">Skills(optional):</label>\n            </div>\n            <div class=\"form-group-row\">\n                    <label class=\"col-sm-5 col-form-label\">Skill 1:</label>\n                    <input type=\"text\" class=\"form-control ml-3\" name= \"updatePet.skillone\" minlength=\"3\" [(ngModel)] = \"updatePet.skillone\" #skillone=\"ngModel\"\n                    value ={{updatePet.skillone}}/>\n            </div>\n            <div class=\"form-group-row\">\n                    <label class=\"col-sm-5 col-form-label\">Skill 2:</label>\n                    <input type=\"text\" class=\"form-control ml-3\"\n                    name = \"updatePet.skilltwo\" \n                    minlength=\"3\"\n                    [(ngModel)] = \"updatePet.skilltwo\"\n                    #skilltwo=\"ngModel\"\n                    value ={{updatePet.skilltwo}}/>\n            </div>\n            <div class=\"form-group-row\">\n                    <label class=\"col-sm-5 col-form-label\">Skill 3:</label>\n                    <input type=\"text\" class=\"form-control ml-3\" name = \"updatePet.skillthree\" minlength=\"3\" [(ngModel)] = \"updatePet.skillthree\" #skillthree=\"ngModel\" value ={{updatePet.skillthree}}/>      \n            </div>\n            <div class=\"form-group-row mt-3\">\n                <button class=\"btn btn-primary form-control ml-3\" [disabled] = \"!description.valid || !pettype.valid\" type=\"submit\">Edit pet</button>\n            </div>\n            <div class=\"form-group-row mt-3\">\n                <button class=\"btn btn-primary form-control ml-3\" [routerLink]=\"['/view',updatePet._id]\">Cancel</button>\n            </div>  \n      </form>\n      </div>\n    </div>\n  </div>\n\n\n  "

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.Header = 'Pet Shelter';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return (_this.Id = params['id']); });
        var pets = this._httpService.onePet(this.Id).subscribe(function (data) {
            _this.updatePet = data;
        });
    };
    EditComponent.prototype.onUpdatePetClick = function (id) {
        var _this = this;
        var editPetsObservable = this._httpService.editPet(id, this.updatePet);
        editPetsObservable.subscribe(function (data) {
            console.log(data, "updateAuthor");
            if (data['errors']) {
                _this.editError = data['errors'];
                console.log(_this.editError, "One errormessage");
            }
            else {
                console.log(_this.updatePet._id);
                _this._router.navigate(['/view', _this.updatePet._id]);
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
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

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-left\">\n      <h1 class=\"mt-4\">{{ Header }}</h1>\n  </div>\n  <div class=\"row justify-content-md-left\">\n    <h3>{{ SubHeader }}</h3>\n  </div>\n  <div class=\"row justify-content-md-right\">\n      <a [routerLink]= \"['/new']\">Add a pet to the shelter</a>\n  </div>\n  <br>\n  <div *ngIf = \"allPets\">\n  <div class=\"row justify-content-md-left\">\n      <table class=\"table table-striped table-bordered w-50\">\n          <tr>\n              <th>Name</th>\n              <th>Type</th>\n              <th class=\"text-center\">Actions</th>\n          </tr>\n          <tr *ngFor = \"let pet of allPets\" >\n              <td>{{pet.petname}}</td>\n              <td>{{pet.pettype}}</td>\n              <td>\n                  <button class=\"btn btn-primary ml-3 text-center\" [routerLink] = \"['/view', pet._id]\">Details</button>\n                  <button class=\"btn btn-warning ml-3\" [routerLink] = \"['/edit', pet._id]\">Edit</button>            \n              </td>\n          </tr>\n      </table>  \n  </div>\n</div>\n</div>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(_router, _httpService) {
        this._router = _router;
        this._httpService = _httpService;
        this.Header = 'Pet Shelter';
        this.SubHeader = 'These pets are looking for a home!';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPets();
    };
    HomeComponent.prototype.getPets = function () {
        var _this = this;
        var getPetsObservable = this._httpService.getPet();
        getPetsObservable.subscribe(function (data) {
            console.log("Displayed all data", data);
            _this.allPets = data;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPet = function () {
        return this._http.get('/public');
    };
    HttpService.prototype.postPet = function (newPets) {
        return this._http.post('/public', newPets);
    };
    HttpService.prototype.editPet = function (id, updateAuthor) {
        return this._http.put('/public/' + id + '', updateAuthor);
    };
    HttpService.prototype.onePet = function (id) {
        return this._http.get('/onepublic/' + id + '');
    };
    HttpService.prototype.deletePet = function (id) {
        return this._http.delete('/newpublic/' + id + '');
    };
    HttpService.prototype.votePet = function (id, quote) {
        return this._http.post('/updatepublic/' + id, quote);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-md-left\">\n      <h1 class=\"mt-4\">{{ Header }}</h1>\n  </div>\n  <div class=\"row justify-content-md-left\">\n      <h4>{{ SubHeader }}</h4>\n  </div>\n <div class=\"text-danger\" *ngIf = \"error\"><p>{{error.petname.message}}</p></div>\n  <div class=\"row justify-content-md-left border border-dark p-3 rounded\">\n      <form (submit) =\"onCreatePetClick()\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-5 col-form-label\">Pet name:</label>\n            <input type=\"text\" class=\"form-control ml-3\" name = \"newPets.petname\" required minlength=\"3\" [(ngModel)] = \"newPets.petname\" #petname=\"ngModel\"/>\n            <div class=\"text-danger ml-3\" [hidden] = \"petname.valid\"><p>*The pet must have a name, and should be more than 3 characters</p></div>  \n        </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-5 col-form-label\">Pet type:</label>\n            <input type=\"text\" class=\"form-control ml-3\" name = \"newPets.pettype\" required minlength=\"3\" [(ngModel)] = \"newPets.pettype\" #pettype=\"ngModel\" />\n            <div class=\"text-danger ml-3\" [hidden] = \"pettype.valid\"><p>*The pet must have a type, and should be more than 3 characters</p></div>  \n        </div>\n          <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\">Description:</label>\n              <input type=\"text\" class=\"form-control ml-3\" name = \"newPets.description\" required minlength=\"3\" [(ngModel)] = \"newPets.description\" #description=\"ngModel\"/>\n              <div class=\"text-danger ml-3\" [hidden] = \"description.valid\"><p>*The pet must have a description, and should be more than 3 characters</p></div>\n          </div>\n          <div class=\"form-group row\">\n              <label class=\"col-sm-5 col-form-label\">Skills:</label>\n          </div>\n          <div class=\"form-group-row\">\n              <label class=\"col-sm-5 col-form-label\">Skill 1:</label>\n              <input type=\"text\" class=\"form-control ml-3\" name = \"newAuthors.skillone\" minlength=\"3\" [(ngModel)] = \"newPets.skillone\" #skillone=\"ngModel\"/>\n          </div>\n          <div class=\"form-group-row\">\n              <label class=\"col-sm-5 col-form-label\">Skill 2:</label>\n              <input type=\"text\" class=\"form-control ml-3\" name = \"newPets.skilltwo\" minlength=\"3\" [(ngModel)] = \"newPets.skilltwo\" #skilltwo=\"ngModel\"/>\n          </div>\n          <div class=\"form-group-row\">\n              <label class=\"col-sm-5 col-form-label\">Skill 3:</label>\n              <input type=\"text\" class=\"form-control ml-3\" name = \"newPets.skillthree\" minlength=\"3\" [(ngModel)] = \"newPets.skillthree\" #skillthree=\"ngModel\"/>\n          </div>\n          <div class=\"form-group-row mt-3\">\n              <button class=\"btn btn-primary form-control ml-3\" [disabled] = \"!petname.valid\" type=\"submit\">Add pet</button>\n          </div>\n          <div class=\"form-group-row mt-3\">\n              <button class=\"btn btn-primary form-control ml-3\" routerLink=\"/\">Cancel</button>\n          </div>        \n        </form>\n      </div>\n    </div>\n         \n \n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_router, _httpService) {
        this._router = _router;
        this._httpService = _httpService;
        this.Header = 'Pet Shelter';
        this.SubHeader = 'Know of a pet needing a home?';
        this.newPets = { petname: "", pettype: "", description: "", skillone: "", skilltwo: "", skillthree: "" };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.onCreatePetClick = function () {
        var _this = this;
        var createPetObservable = this._httpService.postPet(this.newPets);
        createPetObservable.subscribe(function (data) {
            console.log(data);
            if (data['errors']) {
                _this.error = data['errors'];
                console.log(_this.error, "One errormessage");
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 100%;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-left\">\n        <h1 class=\"mt-4\">{{ Header }}</h1>\n    </div>\n    <div class=\"row justify-content-md-left\">\n        <a [routerLink]= \"['/']\"> Home </a>\n    </div>\n    <div *ngIf=\"updatePet\" class=\"row justify-content-md-left mt-3\">\n        <strong><h3>Details about {{updatePet.petname}}</h3></strong>\n    </div>\n    <div *ngIf=\"updatePet\" class=\"row justify-content-md-left mt-2\">\n        <strong>Pet Type: </strong> <p class=\"ml-2\">{{updatePet.pettype}}</p>\n    </div>\n    <div *ngIf=\"updatePet\" class=\"row justify-content-md-left\">\n        <strong>Description: </strong> <p class=\"ml-2\">{{updatePet.description}}</p>\n    </div>\n    <div *ngIf=\"updatePet\" class=\"row justify-content-md-left\">\n        <strong>Skills: </strong> \n        <p class=\"ml-2\">{{updatePet.skillone}}</p>\n    </div>\n    <div *ngIf=\"updatePet\" class=\"row justify-content-md-left\">\n        <p>{{updatePet.skilltwo}}</p>\n    </div>\n    <div *ngIf=\"updatePet\" class=\"row justify-content-md-left\">\n          <p>{{updatePet.skillthree}}</p>    \n    </div>\n    <div *ngIf=\"updatePet\" class=\"row justify-content-md-left\">\n        <strong>Likes: {{updatePet.likes}}</strong>\n    </div>\n\n    <div class=\"row justify-content-md-left mt-5\">\n      <button class=\"btn btn-success\" (click) = \"voteUp(updatePet._id)\" onclick=\"this.disabled = true\">Like this pet</button>\n      <button class=\"btn btn-primary ml-3\" (click) = \"destroyPet(updatePet._id)\">Adopt this pet</button>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.Header = 'Pet Shelter';
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return (_this.Id = params['id']); });
        var pets = this._httpService.onePet(this.Id).subscribe(function (data) {
            _this.updatePet = data;
        });
    };
    ViewComponent.prototype.voteUp = function (qId) {
        var _this = this;
        var votes = this._httpService.votePet(this.updatePet._id, { "voteVal": 1 }).subscribe(function (data) {
            _this.updatePet = data;
        });
    };
    ViewComponent.prototype.destroyPet = function (id) {
        var _this = this;
        var deletePetObservable = this._httpService.deletePet(id);
        deletePetObservable.subscribe(function (data) {
            console.log("Deleted one quote", data);
            if (data['errors']) {
                _this.editError = data['errors'];
                console.log(_this.editError, "One errormessage");
            }
            else {
                _this._router.navigate(['/']);
                _this.updatePet = data;
            }
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewComponent);
    return ViewComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! /Users/rose/Desktop/DojoAssignments/MEAN/Angular/beltprep/beltpreps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map