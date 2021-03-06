(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["followers-followers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>followers</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-item class=\"ion-text-center\">\n    <ion-label>\n        <h6 class=\"ion-text-center\">Requests</h6>\n        <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let user of requests\">\n          <ion-label>\n            <ion-avatar>\n              <img  [src]=\"user.image\">\n            </ion-avatar>\n          </ion-label>\n    \n          <ion-label>\n            {{user.username}}\n          </ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=reqAccept(user)><ion-icon name=\"checkmark-outline\"></ion-icon></ion-button>\n            <ion-button (click)=reqReject(user)><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-list>\n    </ion-label>\n  </ion-item>\n  </ion-card>\n\n\n  <ion-item *ngFor=\"let user of followers\">\n    <ion-label class=\"ion-text-wrap\">\n      <ion-avatar>\n        <img [src]=\"user.image\"/>\n      </ion-avatar>\n    </ion-label>\n    <ion-label>\n      {{user.username}}\n    </ion-label>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/followers/followers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/followers/followers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FollowersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPageRoutingModule", function() { return FollowersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _followers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./followers.page */ "./src/app/followers/followers.page.ts");




const routes = [
    {
        path: '',
        component: _followers_page__WEBPACK_IMPORTED_MODULE_3__["FollowersPage"]
    }
];
let FollowersPageRoutingModule = class FollowersPageRoutingModule {
};
FollowersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FollowersPageRoutingModule);



/***/ }),

/***/ "./src/app/followers/followers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/followers/followers.module.ts ***!
  \***********************************************/
/*! exports provided: FollowersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPageModule", function() { return FollowersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _followers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./followers-routing.module */ "./src/app/followers/followers-routing.module.ts");
/* harmony import */ var _followers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./followers.page */ "./src/app/followers/followers.page.ts");







let FollowersPageModule = class FollowersPageModule {
};
FollowersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _followers_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowersPageRoutingModule"]
        ],
        declarations: [_followers_page__WEBPACK_IMPORTED_MODULE_6__["FollowersPage"]]
    })
], FollowersPageModule);



/***/ }),

/***/ "./src/app/followers/followers.page.scss":
/*!***********************************************!*\
  !*** ./src/app/followers/followers.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dHZpa3BhdGVsL2Nsb25lL3NyYy9hcHAvZm9sbG93ZXJzL2ZvbGxvd2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGxvd2Vycy9mb2xsb3dlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb2xsb3dlcnMvZm9sbG93ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/followers/followers.page.ts":
/*!*********************************************!*\
  !*** ./src/app/followers/followers.page.ts ***!
  \*********************************************/
/*! exports provided: FollowersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersPage", function() { return FollowersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let FollowersPage = class FollowersPage {
    constructor(userService, toastController) {
        this.userService = userService;
        this.toastController = toastController;
        this.followers = [];
        this.requests = [];
        this.allfollowers = [];
        this.userService.getObservable().subscribe((data) => {
            this.allfollowers = this.userService.followers;
            this.followers = [];
            this.requests = [];
            for (let friend of this.allfollowers) {
                if (friend.status == "req") {
                    this.requests.push(friend);
                }
                else {
                    this.followers.push(friend);
                }
            }
        });
        this.allfollowers = this.userService.followers;
        this.followers = [];
        this.requests = [];
        for (let friend of this.allfollowers) {
            if (friend.status == "req") {
                this.requests.push(friend);
            }
            else {
                this.followers.push(friend);
            }
        }
    }
    ngOnInit() {
    }
    reqAccept(user) {
        var self = this;
        console.log("Accepted");
        const index = self.allfollowers.indexOf(user);
        if (index > -1) {
            self.allfollowers.splice(index, 1);
        }
        self.acceptToast();
        self.userService.reqAccept(user);
    }
    reqReject(user) {
        var self = this;
        console.log("Rejected");
        const index = self.allfollowers.indexOf(user);
        if (index > -1) {
            self.allfollowers.splice(index, 1);
        }
        self.rejectToast();
        self.userService.reqReject(user);
    }
    acceptToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'success',
                message: 'Friend Request Accepted',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        });
    }
    rejectToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'danger',
                message: 'Friend Request Rejected',
                position: 'bottom',
                duration: 2000
            });
            toast.present();
        });
    }
};
FollowersPage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
FollowersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-followers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./followers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./followers.page.scss */ "./src/app/followers/followers.page.scss")).default]
    })
], FollowersPage);



/***/ })

}]);
//# sourceMappingURL=followers-followers-module-es2015.js.map