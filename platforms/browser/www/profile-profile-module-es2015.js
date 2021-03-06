(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-item lines=full>\n  <ion-row class=\"ion-padding\">\n    <!-- Avatar -->\n    <ion-col>\n      <img [src]=\"currUser.image\" class=\"avatar\"/>\n    </ion-col>\n    <!-- Information about user -->\n    <ion-col class=\"ion-text-center\">\n      <h6>{{currUser.posts}}</h6>\n      <p><strong>Posts</strong></p>\n    </ion-col>\n    <ion-col (click)=\"goToFollowers()\" class=\"ion-text-center\">\n      <h6>{{currUser.followers}}</h6>\n      <p><strong>Followers</strong></p>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <h6>{{currUser.following}}</h6>\n      <p><strong>Following</strong></p>\n    </ion-col>\n\n    <ion-col>\n      <ion-button size=\"default\" expand=\"block\" class=\"edit-button\" (click)=\"goToEdit()\">Edit your profile</ion-button>\n    </ion-col>\n  </ion-row>\n  </ion-item>\n  <!-- Profile info -->\n  <div class=\"ion-padding\">\n    <p><b>{{currUser.fullname}}</b></p>\n    <p>{{currUser.status}}</p>\n  </div>\n\n  <!-- Segments -->\n  <div>\n    <ion-segment [(ngModel)]=\"profile_segment\">\n      <ion-segment-button value=\"grid\">\n        <ion-icon name=\"apps\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"list\">\n        <ion-icon name=\"browsers-sharp\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"saved\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]=\"profile_segment\">\n    <ion-list *ngSwitchCase=\"'grid'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let i of userPosts\">\n            <img [src]=\"i.image\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'list'\">\n      <ion-card *ngFor=\"let post of userPosts\">\n        <ion-card-header>\n            <ion-item lines=\"none\">\n              <ion-avatar>\n                <img [src]=\"post.userimg\">\n              </ion-avatar>\n            <h6 style=\"font-weight: bold\">‏‏‎ ‎‏‏‎ ‎{{post.username}}</h6>\n            </ion-item>\n        </ion-card-header>\n    \n        <img [src]=\"post.image\">\n    \n        <ion-buttons>\n          <ion-button *ngIf=\"!liked(post)\" (click)=\"like(post)\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </ion-button>\n          <ion-button *ngIf=\"liked(post)\" (click)=\"unlike(post)\">\n            <ion-icon class=\"border\" name=\"heart\" color=\"danger\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"comment(post)\">\n            <ion-icon name=\"chatbubble-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    \n        <ion-card-content>\n          <p>{{post.likes?.length}} Likes</p>\n          <p *ngIf=\"ifCaption(post)\"><b>{{post.username}}</b>‏‏‎ ‎{{post.caption}}</p>\n          <ion-label class=\"color\" *ngIf=\"commentSize(post)\" (click)=\"comment(post)\"> View all {{post.comments?.length}} comments...</ion-label>\n          <ion-list lines=\"none\" *ngFor=\"let item of post.comments.slice(0,1)\">\n            <p><b>‏‏‎{{item.username}}</b>‏‏‎ ‎{{item.comment}} </p>\n          </ion-list>\n        </ion-card-content>\n        <ion-label>‏‏‎ ‎{{post.posted | date: 'MM/dd/yyyy'}}</ion-label>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'saved'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let i of saved\">\n            <img [src]=\"i.image\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    \n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".indent {\n  padding-left: 180px;\n}\n\n.avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 600px !important;\n  max-height: 600px !important;\n  border-radius: 30px;\n}\n\nion-card-header {\n  padding: 0;\n}\n\nion-card-content {\n  color: black;\n}\n\n.black {\n  color: black;\n}\n\n.color {\n  color: grey;\n}\n\n.size {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 30px !important;\n  max-height: 30px !important;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dHZpa3BhdGVsL2Nsb25lL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFDSSxtQkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUVBLG1CQUFBO0FDcEJKOztBRHNCQTtFQUNJLFVBQUE7QUNuQko7O0FEc0JBO0VBQ0ksWUFBQTtBQ25CSjs7QURxQkE7RUFDSSxZQUFBO0FDbEJKOztBRG9CRTtFQUNJLFdBQUE7QUNqQk47O0FEbUJJO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNoQk47O0FEbUJJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNoQk4iLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZS1wcm9maWxlIHtcbi8vICAgICAvKiBQcm9maWxlIGF2YXRhciAqL1xuLy8gICAgIC5hdmF0YXIge1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB9XG4gIFxuLy8gICAgIC8qIFNtYWxsIGZvciBub3RpZmljYXRpb25zICovXG4vLyAgICAgLmJhZGdlLWNvbnRhaW5lciB7XG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgfVxuICBcbi8vICAgICAuaW5mbyB7XG4vLyAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuLy8gICAgIH1cblxuLy8gICAgIC5lZGl0LWJ1dHRvbjphY3RpdmUge1xuLy8gICAgICAgYm9yZGVyLWNvbG9yOiAjZGNlMmVkO1xuLy8gICAgIH1cbi8vICAgfVxuXG4uaW5kZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE4MHB4O1xufVxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQgOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA2MDBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxuICAgIG1heC1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcblxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmJsYWNrIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLmNvbG9yIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICB9XG4gICAgLnNpemUge1xuICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgbWF4LXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXG4gICAgICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgICB9XG4gIFxuICAgIC5jZW50ZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB9IiwiLmluZGVudCB7XG4gIHBhZGRpbmctbGVmdDogMTgwcHg7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb2xvciB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uc2l6ZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ProfilePage = class ProfilePage {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.currUser = {
            'posts': 0,
            'status': "",
            'username': "",
            'image': "",
            'followers': 0,
            'following': 0,
            'fullname': "",
            'privateStat': true
        };
        this.profile_segment = "grid";
        this.userPosts = [];
        this.saved = [];
        this.userService.getObservable().subscribe((data) => {
            this.currUser.posts = this.userPosts.length;
            this.currUser.username = this.userService.username;
            this.userPosts = this.userService.homePosts;
            this.saved = this.userService.savedPosts;
            this.currUser.image = this.userService.image;
            this.currUser.fullname = this.userService.fullname;
            this.currUser.followers = this.userService.followers.length;
            this.currUser.following = this.userService.following.length;
            this.currUser.status = this.userService.status;
            this.currUser.privateStat = this.userService.privateStat;
            this.userPosts.sort((a, b) => (a.posted < b.posted) ? 1 : -1);
        });
        this.saved = this.userService.savedPosts;
        this.userPosts = this.userService.homePosts;
        this.currUser.posts = this.userPosts.length;
        this.currUser.username = this.userService.username;
        this.currUser.image = this.userService.image;
        this.currUser.fullname = this.userService.fullname;
        this.currUser.followers = this.userService.followers.length;
        this.currUser.following = this.userService.following.length;
        this.currUser.status = this.userService.status;
        this.currUser.privateStat = this.userService.privateStat;
        this.userPosts.sort((a, b) => (a.posted < b.posted) ? 1 : -1);
    }
    ngOnInit() {
    }
    goToEdit() {
        this.router.navigate(["/edit"]);
    }
    goToFollowers() {
        this.router.navigate(["/followers"]);
    }
    commentSize(post) {
        var bool = false;
        var comments = post.comments;
        if (comments.length !== 0) {
            bool = true;
        }
        return bool;
    }
    liked(post) {
        var self = this;
        var bool = false;
        for (let user of post.likes) {
            if (user == self.userService.userDoc) {
                bool = true;
            }
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
    like(post) {
        this.userService.like(post);
        var arr = post.likes;
        arr.push(this.userService.userDoc);
    }
    unlike(post) {
    }
    comment(post) {
        this.router.navigate(["/comments", post]);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map