(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{current_user.username}}'s Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item lines=\"none\">\n  <ion-row class=\"ion-padding bottom\">\n    <!-- Avatar -->\n    <ion-col>\n      <img [src]=\"current_user.image\" class=\"avatar\"/>\n    </ion-col>\n    <!-- Information about user -->\n    <ion-col class=\"ion-text-center\">\n      <h6>{{current_user.posts}}</h6>\n      <p><strong>Posts</strong></p>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <h6>{{current_user.followers}}</h6>\n      <p><strong>Followers</strong></p>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <h6>{{current_user.following}}</h6>\n      <p><strong>Following</strong></p>\n    </ion-col>\n\n    <ion-col *ngIf=\"!following()\">\n      <ion-button expand=\"block\" (click)=\"follow()\">‏‏‎ ‎‏‏‎ ‎follow‏‏‎ ‎‏‏‎ ‎</ion-button>\n    </ion-col>\n    <ion-col *ngIf=\"following()\">\n      <ion-button fill=\"outline\" expand=\"block\" (click)=\"unfollow()\">‏‏‎ ‎‏‏‎ ‎follow‏‏‎ing ‎‏‏‎ ‎</ion-button>\n    </ion-col>\n  </ion-row>\n  </ion-item>\n  <!-- Profile info -->\n  <div class=\"padding\">\n    <p><b>{{current_user.fullname}}</b></p>\n    <p>{{current_user.status}}</p>\n  </div>\n\n\n\n  <div *ngIf=\"!following()\">\n    <div *ngIf=\"current_user.privateStat === 'true'\" class=\"ion-padding\">\n      <h4 class=\"ion-text-center\">{{current_user.fullname}}'s Profile is private, follow to see posts</h4>\n    </div>\n\n    <div *ngIf=\"current_user.privateStat === 'false'\">\n      <div>\n        <ion-segment [(ngModel)]=\"profile_segment\">\n          <ion-segment-button value=\"grid\">\n            <ion-icon name=\"apps\"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value=\"list\">\n            <ion-icon name=\"browsers-sharp\"></ion-icon>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div [ngSwitch]=\"profile_segment\">\n        <ion-list *ngSwitchCase=\"'grid'\">\n          <ion-grid>\n            <ion-row>\n              <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let i of posts\">\n                <img [src]=\"i.image\">\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n\n        <ion-list *ngSwitchCase=\"'list'\">\n          <ion-card *ngFor=\"let post of posts\">\n            <ion-card-header>\n                <ion-item lines=\"none\">\n                  <ion-avatar>\n                    <img [src]=\"post.userimg\">\n                  </ion-avatar>\n                <h6 style=\"font-weight: bold\">‏‏‎ ‎‏‏‎ ‎{{post.username}}</h6>\n                </ion-item>\n            </ion-card-header>\n        \n            <img [src]=\"post.image\">\n        \n            <ion-buttons>\n              <ion-button *ngIf=\"!liked(post)\" (click)=\"like(post)\">\n                <ion-icon name=\"heart-outline\"></ion-icon>\n              </ion-button>\n              <ion-button *ngIf=\"liked(post)\" (click)=\"unlike(post)\">\n                <ion-icon class=\"border\" name=\"heart\" color=\"danger\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"comment(post)\">\n                <ion-icon name=\"chatbubble-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n\n            <ion-card-content>\n              <p>{{post.likes?.length}} Likes</p>\n              <p *ngIf=\"ifCaption(post)\"><b>{{post.username}}</b>‏‏‎ ‎{{post.caption}}</p>\n              \n              <ion-label class=\"color\" *ngIf=\"commentSize(post)\" (click)=\"comment(post)\"> View all {{post.comments?.length}} comments...</ion-label>\n              <ion-list lines=\"none\" *ngFor=\"let item of post.comments.slice(0,1)\">\n                <p><b>‏‏‎{{item.username}}</b>‏‏‎ ‎{{item.comment}} </p>\n              </ion-list>\n            </ion-card-content>\n            <ion-label>‏‏‎ ‎{{post.posted | date: 'MM/dd/yyyy'}}</ion-label>\n          </ion-card>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"following()\">\n    <div>\n      <ion-segment [(ngModel)]=\"profile_segment\">\n        <ion-segment-button value=\"grid\">\n          <ion-icon name=\"apps\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"list\">\n          <ion-icon name=\"browsers-sharp\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]=\"profile_segment\">\n      <ion-list *ngSwitchCase=\"'grid'\">\n        <ion-grid>\n          <ion-row>\n            <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let i of posts\">\n              <img [src]=\"i.image\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n\n      <ion-list *ngSwitchCase=\"'list'\">\n        <ion-card *ngFor=\"let post of posts\">\n          <ion-card-header>\n              <ion-item lines=\"none\">\n                <ion-avatar>\n                  <img [src]=\"post.userimg\">\n                </ion-avatar>\n              <h6 style=\"font-weight: bold\">‏‏‎ ‎‏‏‎ ‎{{post.username}}</h6>\n              </ion-item>\n          </ion-card-header>\n      \n          <img [src]=\"post.image\">\n      \n          <ion-buttons>\n            <ion-button *ngIf=\"!liked(post)\" (click)=\"like(post)\">\n              <ion-icon name=\"heart-outline\"></ion-icon>\n            </ion-button>\n            <ion-button *ngIf=\"liked(post)\" (click)=\"unlike(post)\">\n              <ion-icon class=\"border\" name=\"heart\" color=\"danger\"></ion-icon>\n            </ion-button>\n            <ion-button (click)=\"comment(post)\">\n              <ion-icon name=\"chatbubble-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      \n          <ion-card-content>\n            <p>{{post.likes?.length}} Likes</p>\n            <p *ngIf=\"ifCaption(post)\"><b>{{post.username}}</b>‏‏‎ ‎{{post.caption}}</p>\n            \n            <ion-label class=\"color\" *ngIf=\"commentSize(post)\" (click)=\"comment(post)\"> View all {{post.comments?.length}} comments...</ion-label>\n            <ion-list lines=\"none\" *ngFor=\"let item of post.comments.slice(0,1)\">\n              <p><b>‏‏‎{{item.username}}</b>‏‏‎ ‎{{item.comment}} </p>\n            </ion-list>\n          </ion-card-content>\n          <ion-label>‏‏‎ ‎{{post.posted | date: 'MM/dd/yyyy'}}</ion-label>\n        </ion-card>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function() { return UserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.page */ "./src/app/user/user.page.ts");




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserPageRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/user/user.page.ts");







let UserPageModule = class UserPageModule {
};
UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })
], UserPageModule);



/***/ }),

/***/ "./src/app/user/user.page.scss":
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: peachpuff;\n}\n\nion-content {\n  --ion-background-color: peachpuff;\n}\n\n.padding {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 20px;\n}\n\n.lines {\n  border-bottom: 1px solid grey;\n  border-top: 1px solid grey;\n}\n\n.bottom {\n  padding-bottom: 0px;\n}\n\n.avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 600px !important;\n  max-height: 600px !important;\n  border-radius: 30px;\n}\n\nion-card-header {\n  padding: 0;\n}\n\nion-card-content {\n  color: black;\n}\n\n.black {\n  color: black;\n}\n\n.color {\n  color: grey;\n}\n\n.size {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 30px !important;\n  max-height: 30px !important;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL3VzZXIvdXNlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXIvdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksNkJBQUE7RUFDQSwwQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7QUNJSjs7QURGQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBRUEsbUJBQUE7QUNJSjs7QURGQTtFQUNJLFVBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURIQTtFQUNFLFlBQUE7QUNNRjs7QURKQTtFQUNJLFdBQUE7QUNPSjs7QURMRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDUUo7O0FETEU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbn1cbi5wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmxpbmVze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xufVxuLmJvdHRvbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5hdmF0YXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNjAwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplXG5cbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuaW9uLWNhcmQtY29udGVudHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5ibGFjayB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5jb2xvciB7XG4gICAgY29sb3I6IGdyZXk7XG59XG4gIC5zaXplIHtcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMzBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxuICAgIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgfSIsImlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmxpbmVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xufVxuXG4uYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ibGFjayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbG9yIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5zaXplIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/user.page.ts":
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let UserPage = class UserPage {
    constructor(route, router, userService, alertController, toastController) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        this.postId = [];
        this.posts = [];
        this.profile_segment = "grid";
        var self = this;
        setTimeout(() => {
            var postRef = this.db.collection("users").doc(self.current_user.id);
            postRef.get().then(function (doc) {
                var user = doc.data();
                self.postId = user.posts;
            });
            setTimeout(() => {
                for (let id of self.postId) {
                    var ref = this.db.collection("posts").doc(id);
                    ref.get().then(function (doc) {
                        var post = doc.data();
                        self.posts.push({ caption: post.caption, comments: post.comments,
                            id: post.id, image: post.image, likes: post.likes, posted: post.posted,
                            userimg: post.userimg, username: post.username, pid: doc.id });
                    });
                }
            }, 300);
        }, 50);
        this.userService.getObservable().subscribe((data) => {
            this.followingUser = this.userService.following;
        });
        this.followingUser = this.userService.following;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.current_user = param;
        });
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
    follow() {
        var self = this;
        var bool = true;
        var currUser = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
        var userRef = this.db.collection("users").doc(self.current_user.id);
        userRef.onSnapshot(doc => {
            var user = doc.data();
            var userFriend = user.followers;
            for (let item of userFriend) {
                if (item.uid == currUser) {
                    bool = false;
                }
            }
        });
        setTimeout(function () {
            if (bool) {
                self.followToast();
                self.userService.follow(self.current_user);
            }
            else {
                self.alreadyToast();
            }
        }, 1000);
    }
    alreadyToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'danger',
                message: 'Follow request already sent',
                position: 'bottom',
                duration: 1000
            });
            toast.present();
        });
    }
    followToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'success',
                message: 'Follow request sent',
                position: 'bottom',
                duration: 1000
            });
            toast.present();
        });
    }
    following() {
        var self = this;
        var bool = false;
        for (let item of this.followingUser) {
            if (item.uid == self.current_user.uid) {
                bool = true;
            }
        }
        return bool;
    }
    unfollow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            const alert = yield this.alertController.create({
                header: 'Unfollow',
                message: 'Please confirm unfollow',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Confirm',
                        role: 'confirm',
                        handler: () => {
                            self.userService.unfollow(this.current_user);
                            self.unfollowToast();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    unfollowToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'success',
                message: 'User unfollowed',
                position: 'bottom',
                duration: 1000
            });
            toast.present();
        });
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
    like(post) {
        this.userService.like(post);
        var arr = post.likes;
        arr.push(this.userService.userDoc);
    }
    comment(post) {
        this.router.navigate(["/comments", post]);
    }
    unlike(post) {
        this.userService.unlike(post);
        var arr = post.likes;
        const index = arr.indexOf(this.userService.userDoc, 0);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
};
UserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user.page.scss */ "./src/app/user/user.page.scss")).default]
    })
], UserPage);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map