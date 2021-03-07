function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-item lines=full>\n  <ion-row class=\"ion-padding\">\n    <!-- Avatar -->\n    <ion-col>\n      <img [src]=\"currUser.image\" class=\"avatar\"/>\n    </ion-col>\n    <!-- Information about user -->\n    <ion-col class=\"ion-text-center\">\n      <h6>{{currUser.posts}}</h6>\n      <p><strong>Posts</strong></p>\n    </ion-col>\n    <ion-col (click)=\"goToFollowers()\" class=\"ion-text-center\">\n      <h6>{{currUser.followers}}</h6>\n      <p><strong>Followers</strong></p>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <h6>{{currUser.following}}</h6>\n      <p><strong>Following</strong></p>\n    </ion-col>\n\n    <ion-col>\n      <ion-button size=\"default\" expand=\"block\" class=\"edit-button\" (click)=\"goToEdit()\">Edit your profile</ion-button>\n    </ion-col>\n  </ion-row>\n  </ion-item>\n  <!-- Profile info -->\n  <div class=\"ion-padding\">\n    <p><b>{{currUser.fullname}}</b></p>\n    <p>{{currUser.status}}</p>\n  </div>\n\n  <!-- Segments -->\n  <div>\n    <ion-segment [(ngModel)]=\"profile_segment\">\n      <ion-segment-button value=\"grid\">\n        <ion-icon name=\"apps\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"list\">\n        <ion-icon name=\"browsers-sharp\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"saved\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]=\"profile_segment\">\n    <ion-list *ngSwitchCase=\"'grid'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let i of userPosts\">\n            <img [src]=\"i.image\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'list'\">\n      <ion-card *ngFor=\"let post of userPosts\">\n        <ion-card-header>\n            <ion-item lines=\"none\">\n              <ion-avatar>\n                <img [src]=\"post.userimg\">\n              </ion-avatar>\n            <h6 style=\"font-weight: bold\">‏‏‎ ‎‏‏‎ ‎{{post.username}}</h6>\n            </ion-item>\n        </ion-card-header>\n    \n        <img [src]=\"post.image\">\n    \n        <ion-buttons>\n          <ion-button *ngIf=\"!liked(post)\" (click)=\"like(post)\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n          </ion-button>\n          <ion-button *ngIf=\"liked(post)\" (click)=\"unlike(post)\">\n            <ion-icon class=\"border\" name=\"heart\" color=\"danger\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"comment(post)\">\n            <ion-icon name=\"chatbubble-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    \n        <ion-card-content>\n          <p>{{post.likes?.length}} Likes</p>\n          <p *ngIf=\"ifCaption(post)\"><b>{{post.username}}</b>‏‏‎ ‎{{post.caption}}</p>\n          <ion-label class=\"color\" *ngIf=\"commentSize(post)\" (click)=\"comment(post)\"> View all {{post.comments?.length}} comments...</ion-label>\n          <ion-list lines=\"none\" *ngFor=\"let item of post.comments.slice(0,1)\">\n            <p><b>‏‏‎{{item.username}}</b>‏‏‎ ‎{{item.comment}} </p>\n          </ion-list>\n        </ion-card-content>\n        <ion-label>‏‏‎ ‎{{post.posted | date: 'MM/dd/yyyy'}}</ion-label>\n      </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'saved'\">\n      <ion-grid>\n        <ion-row>\n          <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"4\" *ngFor=\"let i of saved\">\n            <img [src]=\"i.image\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    \n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".indent {\n  padding-left: 180px;\n}\n\n.avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 600px !important;\n  max-height: 600px !important;\n  border-radius: 30px;\n}\n\nion-card-header {\n  padding: 0;\n}\n\nion-card-content {\n  color: black;\n}\n\n.black {\n  color: black;\n}\n\n.color {\n  color: grey;\n}\n\n.size {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 30px !important;\n  max-height: 30px !important;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJBO0VBQ0ksbUJBQUE7QUNwQko7O0FEc0JBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSxtQkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxVQUFBO0FDbkJKOztBRHNCQTtFQUNJLFlBQUE7QUNuQko7O0FEcUJBO0VBQ0ksWUFBQTtBQ2xCSjs7QURvQkU7RUFDSSxXQUFBO0FDakJOOztBRG1CSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDaEJOOztBRG1CSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDaEJOIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2UtcHJvZmlsZSB7XG4vLyAgICAgLyogUHJvZmlsZSBhdmF0YXIgKi9cbi8vICAgICAuYXZhdGFyIHtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgfVxuICBcbi8vICAgICAvKiBTbWFsbCBmb3Igbm90aWZpY2F0aW9ucyAqL1xuLy8gICAgIC5iYWRnZS1jb250YWluZXIge1xuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIH1cbiAgXG4vLyAgICAgLmluZm8ge1xuLy8gICAgICAgcGFkZGluZy10b3A6IDRweDtcbi8vICAgICB9XG5cbi8vICAgICAuZWRpdC1idXR0b246YWN0aXZlIHtcbi8vICAgICAgIGJvcmRlci1jb2xvcjogI2RjZTJlZDtcbi8vICAgICB9XG4vLyAgIH1cblxuLmluZGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxODBweDtcbn1cbi5hdmF0YXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNjAwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplXG5cbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5pb24tY2FyZC1jb250ZW50e1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5ibGFjayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5jb2xvciB7XG4gICAgICBjb2xvcjogZ3JleTtcbiAgfVxuICAgIC5zaXplIHtcbiAgICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogMzBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxuICAgICAgbWF4LWhlaWdodDogMzBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplXG4gICAgfVxuICBcbiAgICAuY2VudGVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgfSIsIi5pbmRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDE4MHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNjAwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJsYWNrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnNpemUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(userService, router) {
        var _this = this;

        _classCallCheck(this, ProfilePage);

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
        this.userService.getObservable().subscribe(function (data) {
          _this.currUser.posts = _this.userPosts.length;
          _this.currUser.username = _this.userService.username;
          _this.userPosts = _this.userService.homePosts;
          _this.saved = _this.userService.savedPosts;
          _this.currUser.image = _this.userService.image;
          _this.currUser.fullname = _this.userService.fullname;
          _this.currUser.followers = _this.userService.followers.length;
          _this.currUser.following = _this.userService.following.length;
          _this.currUser.status = _this.userService.status;
          _this.currUser.privateStat = _this.userService.privateStat;

          _this.userPosts.sort(function (a, b) {
            return a.posted < b.posted ? 1 : -1;
          });
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
        this.userPosts.sort(function (a, b) {
          return a.posted < b.posted ? 1 : -1;
        });
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToEdit",
        value: function goToEdit() {
          this.router.navigate(["/edit"]);
        }
      }, {
        key: "goToFollowers",
        value: function goToFollowers() {
          this.router.navigate(["/followers"]);
        }
      }, {
        key: "commentSize",
        value: function commentSize(post) {
          var bool = false;
          var comments = post.comments;

          if (comments.length !== 0) {
            bool = true;
          }

          return bool;
        }
      }, {
        key: "liked",
        value: function liked(post) {
          var self = this;
          var bool = false;

          var _iterator = _createForOfIteratorHelper(post.likes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var user = _step.value;

              if (user == self.userService.userDoc) {
                bool = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return bool;
        }
      }, {
        key: "ifCaption",
        value: function ifCaption(post) {
          var bool = false;
          var caption = post.caption;

          if (caption.length !== 0) {
            bool = true;
          }

          return bool;
        }
      }, {
        key: "like",
        value: function like(post) {
          this.userService.like(post);
          var arr = post.likes;
          arr.push(this.userService.userDoc);
        }
      }, {
        key: "unlike",
        value: function unlike(post) {}
      }, {
        key: "comment",
        value: function comment(post) {
          this.router.navigate(["/comments", post]);
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map