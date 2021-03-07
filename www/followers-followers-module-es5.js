function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["followers-followers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFollowersFollowersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>followers</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-item class=\"ion-text-center\">\n    <ion-label>\n        <h6 class=\"ion-text-center\">Requests</h6>\n        <ion-list lines=\"none\">\n        <ion-item *ngFor=\"let user of requests\">\n          <ion-label>\n            <ion-avatar>\n              <img  [src]=\"user.image\">\n            </ion-avatar>\n          </ion-label>\n    \n          <ion-label>\n            {{user.username}}\n          </ion-label>\n\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=reqAccept(user)><ion-icon name=\"checkmark-outline\"></ion-icon></ion-button>\n            <ion-button (click)=reqReject(user)><ion-icon name=\"close-circle-outline\"></ion-icon></ion-button>\n          </ion-buttons>\n        </ion-item>\n      </ion-list>\n    </ion-label>\n  </ion-item>\n  </ion-card>\n\n\n  <ion-item *ngFor=\"let user of followers\">\n    <ion-label class=\"ion-text-wrap\">\n      <ion-avatar>\n        <img [src]=\"user.image\"/>\n      </ion-avatar>\n    </ion-label>\n    <ion-label>\n      {{user.username}}\n    </ion-label>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/followers/followers-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/followers/followers-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: FollowersPageRoutingModule */

  /***/
  function srcAppFollowersFollowersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowersPageRoutingModule", function () {
      return FollowersPageRoutingModule;
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


    var _followers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./followers.page */
    "./src/app/followers/followers.page.ts");

    var routes = [{
      path: '',
      component: _followers_page__WEBPACK_IMPORTED_MODULE_3__["FollowersPage"]
    }];

    var FollowersPageRoutingModule = function FollowersPageRoutingModule() {
      _classCallCheck(this, FollowersPageRoutingModule);
    };

    FollowersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FollowersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/followers/followers.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/followers/followers.module.ts ***!
    \***********************************************/

  /*! exports provided: FollowersPageModule */

  /***/
  function srcAppFollowersFollowersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowersPageModule", function () {
      return FollowersPageModule;
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


    var _followers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./followers-routing.module */
    "./src/app/followers/followers-routing.module.ts");
    /* harmony import */


    var _followers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./followers.page */
    "./src/app/followers/followers.page.ts");

    var FollowersPageModule = function FollowersPageModule() {
      _classCallCheck(this, FollowersPageModule);
    };

    FollowersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _followers_routing_module__WEBPACK_IMPORTED_MODULE_5__["FollowersPageRoutingModule"]],
      declarations: [_followers_page__WEBPACK_IMPORTED_MODULE_6__["FollowersPage"]]
    })], FollowersPageModule);
    /***/
  },

  /***/
  "./src/app/followers/followers.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/followers/followers.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFollowersFollowersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL2ZvbGxvd2Vycy9mb2xsb3dlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9mb2xsb3dlcnMvZm9sbG93ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9sbG93ZXJzL2ZvbGxvd2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/followers/followers.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/followers/followers.page.ts ***!
    \*********************************************/

  /*! exports provided: FollowersPage */

  /***/
  function srcAppFollowersFollowersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowersPage", function () {
      return FollowersPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var FollowersPage = /*#__PURE__*/function () {
      function FollowersPage(userService, toastController) {
        var _this = this;

        _classCallCheck(this, FollowersPage);

        this.userService = userService;
        this.toastController = toastController;
        this.followers = [];
        this.requests = [];
        this.allfollowers = [];
        this.userService.getObservable().subscribe(function (data) {
          _this.allfollowers = _this.userService.followers;
          _this.followers = [];
          _this.requests = [];

          var _iterator = _createForOfIteratorHelper(_this.allfollowers),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var friend = _step.value;

              if (friend.status == "req") {
                _this.requests.push(friend);
              } else {
                _this.followers.push(friend);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        this.allfollowers = this.userService.followers;
        this.followers = [];
        this.requests = [];

        var _iterator2 = _createForOfIteratorHelper(this.allfollowers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var friend = _step2.value;

            if (friend.status == "req") {
              this.requests.push(friend);
            } else {
              this.followers.push(friend);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      _createClass(FollowersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reqAccept",
        value: function reqAccept(user) {
          var self = this;
          console.log("Accepted");
          var index = self.allfollowers.indexOf(user);

          if (index > -1) {
            self.allfollowers.splice(index, 1);
          }

          self.acceptToast();
          self.userService.reqAccept(user);
        }
      }, {
        key: "reqReject",
        value: function reqReject(user) {
          var self = this;
          console.log("Rejected");
          var index = self.allfollowers.indexOf(user);

          if (index > -1) {
            self.allfollowers.splice(index, 1);
          }

          self.rejectToast();
          self.userService.reqReject(user);
        }
      }, {
        key: "acceptToast",
        value: function acceptToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      color: 'success',
                      message: 'Friend Request Accepted',
                      position: 'bottom',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "rejectToast",
        value: function rejectToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      color: 'danger',
                      message: 'Friend Request Rejected',
                      position: 'bottom',
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return FollowersPage;
    }();

    FollowersPage.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    FollowersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-followers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./followers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./followers.page.scss */
      "./src/app/followers/followers.page.scss"))["default"]]
    })], FollowersPage);
    /***/
  }
}]);
//# sourceMappingURL=followers-followers-module-es5.js.map