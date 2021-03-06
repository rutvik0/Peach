(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chatList()\"><ion-icon name=\"chatbubbles-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor=\"let post of followingPosts\">\n    <ion-card-header>\n        <ion-item lines=\"none\">\n          <ion-avatar>\n            <img [src]=\"post.userimg\">\n          </ion-avatar>\n        <h6 style=\"font-weight: bold\">‏‏‎ ‎‏‏‎ ‎{{post.username}}</h6>\n        </ion-item>\n    </ion-card-header>\n\n    <img [src]=\"post.image\">\n\n    <ion-buttons>\n      <ion-button *ngIf=\"!liked(post)\" (click)=\"like(post)\">\n        <ion-icon name=\"heart-outline\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"liked(post)\" (click)=\"unlike(post)\">\n        <ion-icon class=\"border\" name=\"heart\" color=\"danger\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"comment(post)\">\n        <ion-icon name=\"chatbubble-outline\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!saved(post)\" (click)=\"bookmark(post)\"><ion-icon name=\"bookmark-outline\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"saved(post)\" (click)=\"unsave(post)\"><ion-icon name=\"bookmark\"></ion-icon></ion-button>\n    </ion-buttons>\n\n    <ion-card-content>\n      <p>{{post.likes?.length}} Likes</p>\n      <p *ngIf=\"ifCaption(post)\"><b>{{post.username}}</b>‏‏‎ ‎{{post.caption}}</p>\n      \n      <ion-label class=\"color\" *ngIf=\"commentSize(post)\" (click)=\"comment(post)\"> View all {{post.comments?.length}} comments...</ion-label>\n      <ion-list lines=\"none\" *ngFor=\"let item of post.comments.slice(0,1)\">\n        <p><b>‏‏‎{{item.username}}</b>‏‏‎ ‎{{item.comment}} </p>\n      </ion-list>\n    </ion-card-content>\n    <ion-label>‏‏‎ ‎{{post.posted | date: 'MM/dd/yyyy'}}</ion-label>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-header {\n  padding: 0;\n}\n\nion-card-content {\n  color: black;\n}\n\n.black {\n  color: black;\n}\n\n.color {\n  color: grey;\n}\n\n.size {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 30px !important;\n  max-height: 30px !important;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dHZpa3BhdGVsL2Nsb25lL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QURERTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDSUo7O0FEREU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG4uY29sb3Ige1xuICAgIGNvbG9yOiBncmV5O1xufVxuICAuc2l6ZSB7XG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgfVxuXG4gIC5jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIH0iLCJpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb2xvciB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uc2l6ZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "../node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





let HomePage = class HomePage {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.following = [];
        this.followingPosts = [];
        this.id = "";
        this.save = [];
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        setTimeout(() => {
            var self = this;
            this.userService.getObservable().subscribe((data) => {
                this.following = [];
                this.save = [];
                this.save = this.userService.saved;
                self.following = this.userService.followingPosts;
                self.id = this.userService.userDoc;
                self.followingPosts = self.following;
                self.followingPosts.sort((a, b) => (a.posted < b.posted) ? 1 : -1);
            });
            this.following = [];
            this.save = [];
            this.save = this.userService.saved;
            self.following = this.userService.followingPosts;
            self.id = this.userService.userDoc;
            self.followingPosts = self.following;
            self.followingPosts.sort((a, b) => (a.posted < b.posted) ? 1 : -1);
        }, 1000);
    }
    liked(post) {
        var self = this;
        var bool = false;
        for (let user of post.likes) {
            if (user == self.id) {
                bool = true;
            }
        }
        return bool;
    }
    saved(post) {
        var self = this;
        var bool = false;
        if (this.save.includes(post.pid)) {
            bool = true;
        }
        return bool;
    }
    commentSize(post) {
        var bool = false;
        var comments = post.comments;
        if (comments.length !== 0) {
            bool = true;
        }
        return bool;
    }
    ifCaption(post) {
        var bool = false;
        var caption = post.caption;
        if (caption.length !== 0) {
            bool = true;
        }
        return bool;
    }
    ngOnInit() {
    }
    bookmark(post) {
        this.userService.bookmark(post);
    }
    unsave(post) {
        this.userService.unsave(post);
    }
    like(post) {
        this.userService.like(post);
        var arr = post.likes;
        arr.push(this.id);
    }
    comment(post) {
        this.router.navigate(["/comments", post]);
    }
    unlike(post) {
        this.userService.unlike(post);
        var arr = post.likes;
        const index = arr.indexOf(this.id, 0);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    chatList() {
        this.router.navigate(["/chatlist"]);
    }
};
HomePage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map