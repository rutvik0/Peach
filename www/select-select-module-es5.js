function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-select-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSelectSelectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Select user to chat</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!selected()\" (click)=\"startChat()\">Chat</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar style=\"--background:#ffe3ca\" (ionInput)=\"filterList($event)\"></ion-searchbar>\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let user of users\">\n      <ion-label class=\"ion-text-wrap\">\n        <ion-avatar>\n          <img [src]=\"user.image\"/>\n        </ion-avatar>\n      </ion-label>\n      <ion-label>\n        {{user.username}}\n      </ion-label>\n      <ion-checkbox [disabled]=\"userSelect(user)\" slot=\"end\" (ionChange)=\"select(user)\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/select/select-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/select/select-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SelectPageRoutingModule */

  /***/
  function srcAppSelectSelectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPageRoutingModule", function () {
      return SelectPageRoutingModule;
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


    var _select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select.page */
    "./src/app/select/select.page.ts");

    var routes = [{
      path: '',
      component: _select_page__WEBPACK_IMPORTED_MODULE_3__["SelectPage"]
    }];

    var SelectPageRoutingModule = function SelectPageRoutingModule() {
      _classCallCheck(this, SelectPageRoutingModule);
    };

    SelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/select/select.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/select/select.module.ts ***!
    \*****************************************/

  /*! exports provided: SelectPageModule */

  /***/
  function srcAppSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPageModule", function () {
      return SelectPageModule;
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


    var _select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-routing.module */
    "./src/app/select/select-routing.module.ts");
    /* harmony import */


    var _select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select.page */
    "./src/app/select/select.page.ts");

    var SelectPageModule = function SelectPageModule() {
      _classCallCheck(this, SelectPageModule);
    };

    SelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPageRoutingModule"]],
      declarations: [_select_page__WEBPACK_IMPORTED_MODULE_6__["SelectPage"]]
    })], SelectPageModule);
    /***/
  },

  /***/
  "./src/app/select/select.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/select/select.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSelectSelectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL3NlbGVjdC9zZWxlY3QucGFnZS5zY3NzIiwic3JjL2FwcC9zZWxlY3Qvc2VsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0L3NlbGVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/select/select.page.ts":
  /*!***************************************!*\
    !*** ./src/app/select/select.page.ts ***!
    \***************************************/

  /*! exports provided: SelectPage */

  /***/
  function srcAppSelectSelectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPage", function () {
      return SelectPage;
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

    var SelectPage = /*#__PURE__*/function () {
      function SelectPage(userService) {
        _classCallCheck(this, SelectPage);

        this.userService = userService;
        this.users = [];
        this.allfollowers = [];
        this.chatUser = [];
        this.initializeList();
      }

      _createClass(SelectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initializeList",
        value: function initializeList() {
          var _this = this;

          this.userService.getObservable().subscribe(function (data) {
            _this.allfollowers = _this.userService.followers;
            _this.users = [];

            var _iterator = _createForOfIteratorHelper(_this.allfollowers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var friend = _step.value;

                if (friend.status != "req") {
                  _this.users.push(friend);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          this.allfollowers = this.userService.followers;
          this.users = [];

          var _iterator2 = _createForOfIteratorHelper(this.allfollowers),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var friend = _step2.value;

              if (friend.status != "req") {
                this.users.push(friend);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "filterList",
        value: function filterList(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var val;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.initializeList();
                    val = event.target.value;

                    if (val && val.trim() != '') {
                      this.users = this.users.filter(function (user) {
                        return user.username.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1;
                      });
                    }

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selected",
        value: function selected() {
          var bool = false;

          if (this.chatUser.length != 0) {
            bool = true;
          }

          return bool;
        }
      }, {
        key: "userSelect",
        value: function userSelect(user) {
          var bool = false;

          if (this.chatUser.length != 0 && !this.chatUser.includes(user)) {
            bool = true;
          }

          return bool;
        }
      }, {
        key: "select",
        value: function select(user) {
          var self = this;

          if (this.chatUser.includes(user)) {
            var index = self.chatUser.indexOf(user);

            if (index > -1) {
              self.chatUser.splice(index, 1);
            }
          } else {
            this.chatUser.push(user);
          }
        }
      }, {
        key: "startChat",
        value: function startChat() {
          var uid = this.chatUser[0].uid;
          console.log(uid);
          this.userService.createChat(this.chatUser);
        }
      }]);

      return SelectPage;
    }();

    SelectPage.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    SelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./select.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./select.page.scss */
      "./src/app/select/select.page.scss"))["default"]]
    })], SelectPage);
    /***/
  }
}]);
//# sourceMappingURL=select-select-module-es5.js.map