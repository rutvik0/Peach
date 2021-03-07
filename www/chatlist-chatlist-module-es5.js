function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chatlist-chatlist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatlist/chatlist.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatlist/chatlist.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatlistChatlistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Chat</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToSelect()\"\n        ><ion-icon name=\"add-outline\"></ion-icon\n      ></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-searchbar style=\"--background:#ffe3ca\" (ionInput)=\"filterList($event)\"></ion-searchbar> -->\n  <ion-list lines=\"full\">\n    <ion-item *ngFor=\"let chat of chats\" (click)=\"goToChat(chat)\">\n      <ion-label class=\"ion-text-wrap\">\n        <img [src]=\"img\" />\n      </ion-label>\n      <ion-label>\n        {{chat.username}}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/chatlist/chatlist-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/chatlist/chatlist-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ChatlistPageRoutingModule */

  /***/
  function srcAppChatlistChatlistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatlistPageRoutingModule", function () {
      return ChatlistPageRoutingModule;
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


    var _chatlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chatlist.page */
    "./src/app/chatlist/chatlist.page.ts");

    var routes = [{
      path: '',
      component: _chatlist_page__WEBPACK_IMPORTED_MODULE_3__["ChatlistPage"]
    }];

    var ChatlistPageRoutingModule = function ChatlistPageRoutingModule() {
      _classCallCheck(this, ChatlistPageRoutingModule);
    };

    ChatlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatlistPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chatlist/chatlist.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chatlist/chatlist.module.ts ***!
    \*********************************************/

  /*! exports provided: ChatlistPageModule */

  /***/
  function srcAppChatlistChatlistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatlistPageModule", function () {
      return ChatlistPageModule;
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


    var _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chatlist-routing.module */
    "./src/app/chatlist/chatlist-routing.module.ts");
    /* harmony import */


    var _chatlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chatlist.page */
    "./src/app/chatlist/chatlist.page.ts");

    var ChatlistPageModule = function ChatlistPageModule() {
      _classCallCheck(this, ChatlistPageModule);
    };

    ChatlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chatlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatlistPageRoutingModule"]],
      declarations: [_chatlist_page__WEBPACK_IMPORTED_MODULE_6__["ChatlistPage"]]
    })], ChatlistPageModule);
    /***/
  },

  /***/
  "./src/app/chatlist/chatlist.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/chatlist/chatlist.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatlistChatlistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL2NoYXRsaXN0L2NoYXRsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdGxpc3QvY2hhdGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUNDSjs7QURDQTtFQUNJLGlDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0bGlzdC9jaGF0bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chatlist/chatlist.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/chatlist/chatlist.page.ts ***!
    \*******************************************/

  /*! exports provided: ChatlistPage */

  /***/
  function srcAppChatlistChatlistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatlistPage", function () {
      return ChatlistPage;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var ChatlistPage = /*#__PURE__*/function () {
      function ChatlistPage(router, userService) {
        var _this = this;

        _classCallCheck(this, ChatlistPage);

        this.router = router;
        this.userService = userService;
        this.chats = [];
        this.img = "/assets/message.png";
        this.userService.getObservable().subscribe(function (data) {
          _this.chats = [];
          _this.chats = _this.userService.chats;
        });
        this.chats = [];
        this.chats = this.userService.chats;
      }

      _createClass(ChatlistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToChat",
        value: function goToChat(chat) {
          this.router.navigate(["/chat", chat]);
        }
      }, {
        key: "goToSelect",
        value: function goToSelect() {
          this.router.navigate(["/select"]);
        }
      }]);

      return ChatlistPage;
    }();

    ChatlistPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    ChatlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chatlist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chatlist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatlist/chatlist.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chatlist.page.scss */
      "./src/app/chatlist/chatlist.page.scss"))["default"]]
    })], ChatlistPage);
    /***/
  }
}]);
//# sourceMappingURL=chatlist-chatlist-module-es5.js.map