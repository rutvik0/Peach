function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{chat.username}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"innermsg\">\n    <div id=\"chat-container\">\n      <span class=\"line-style\"></span>\n      <hr>\n      <div class=\"message-wrap\">\n        <div *ngFor=\"let msg of messages;let i = index; let first = first; let last = last\" class=\"message\">\n\n          <div class=\"message-left\" *ngIf=\"msg.name !== name\">\n            <div class=\"msg-detail\">\n              <div class=\"msg-content\">\n                <p class=\"line-breaker \">{{msg.message}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"message-right\" *ngIf=\"msg.name === name\">\n            <div class=\"msg-detail\">\n              <div class=\"msg-info\">\n              </div>\n              <div class=\"msg-content\">\n                <p class=\"line-breaker  \">{{msg.message}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"footer\">\n  <ion-row>\n    <ion-textarea minlength=1 cols=1 rows=1 type=\"text\" placeholder=\"Write comment here...\" [(ngModel)]=\"newmessage\"></ion-textarea>\n    <ion-buttons>\n      <ion-button shape=\"round\" (click)=\"send()\"><ion-icon name=\"send-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-row>\n </ion-footer>";
    /***/
  },

  /***/
  "./src/app/chat/chat-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/chat/chat-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ChatPageRoutingModule */

  /***/
  function srcAppChatChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function () {
      return ChatPageRoutingModule;
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


    var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var routes = [{
      path: '',
      component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }];

    var ChatPageRoutingModule = function ChatPageRoutingModule() {
      _classCallCheck(this, ChatPageRoutingModule);
    };

    ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.module.ts":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.module.ts ***!
    \*************************************/

  /*! exports provided: ChatPageModule */

  /***/
  function srcAppChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPageModule", function () {
      return ChatPageModule;
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


    var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat-routing.module */
    "./src/app/chat/chat-routing.module.ts");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/chat/chat.page.ts");

    var ChatPageModule = function ChatPageModule() {
      _classCallCheck(this, ChatPageModule);
    };

    ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]],
      declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })], ChatPageModule);
    /***/
  },

  /***/
  "./src/app/chat/chat.page.scss":
  /*!*************************************!*\
    !*** ./src/app/chat/chat.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea {\n  margin-left: 10px;\n  border-radius: 10px !important;\n  background: #ffe3ca;\n}\n\nion-footer {\n  padding-bottom: 9px;\n  padding-left: 2px;\n}\n\nion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n\n.footer {\n  background-color: peachpuff;\n  background: peachpuff;\n}\n\n.message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n  border-radius: 40px !important;\n}\n\n.message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n}\n\n.message-wrap .message .msg-detail p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  border-radius: 10px !important;\n  padding: 8px;\n  width: auto;\n  max-width: 80%;\n  min-width: 3%;\n}\n\n.message-wrap .message-left .msg-content {\n  float: left;\n  position: relative;\n  background: white;\n  color: black;\n}\n\n.message-wrap .message-right .msg-detail .msg-info {\n  text-align: right;\n}\n\n.message-wrap .message-right .msg-content {\n  float: right;\n  color: #2a2828;\n  background: #eee2df;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dHZpa3BhdGVsL2Nsb25lL3NyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVFO0VBQ0UsaUNBQUE7QUNDSjs7QURFRTtFQUNFLGlDQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FET0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ0pOOztBRE1NO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURLUTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDSFY7O0FES1E7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0hWOztBRFFNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDTlI7O0FEWVE7RUFDRSxpQkFBQTtBQ1ZWOztBRGFNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0YXJlYXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogICNmZmUzY2E7XG4gIH1cblxuXG4gIGlvbi1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbiAgfVxuXG4gIGlvbi1oZWFkZXIge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbiAgICBiYWNrZ3JvdW5kOiBwZWFjaHB1ZmY7XG4gIH1cbiAgXG5cbiAgLm1lc3NhZ2Utd3JhcCB7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4O1xuICAgIFxuICAgIFxuICAgIC5tZXNzYWdlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IDdweCAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNDBweCAhaW1wb3J0YW50O1xuXG4gICAgICAubXNnLWRldGFpbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAubXNnLWNvbnRlbnQge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMyU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm1lc3NhZ2UtbGVmdCB7XG4gICAgICAubXNnLWNvbnRlbnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlLXJpZ2h0IHtcbiAgICAgIC5tc2ctZGV0YWlsIHtcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogNjBweDtcbiAgICAgICAgLm1zZy1pbmZvIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1zZy1jb250ZW50IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBjb2xvcjogIzJhMjgyODtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTJkZjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cbiIsImlvbi10ZXh0YXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmUzY2E7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gIGJhY2tncm91bmQ6IHBlYWNocHVmZjtcbn1cblxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcbn1cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogODAlO1xuICBtaW4td2lkdGg6IDMlO1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS1sZWZ0IC5tc2ctY29udGVudCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLXJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctaW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS1yaWdodCAubXNnLWNvbnRlbnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMmEyODI4O1xuICBiYWNrZ3JvdW5kOiAjZWVlMmRmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chat/chat.page.ts":
  /*!***********************************!*\
    !*** ./src/app/chat/chat.page.ts ***!
    \***********************************/

  /*! exports provided: ChatPage */

  /***/
  function srcAppChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
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


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "../node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var ChatPage = /*#__PURE__*/function () {
      function ChatPage(route, userService) {
        _classCallCheck(this, ChatPage);

        this.route = route;
        this.userService = userService;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        this.messages = [];
        this.newmessage = "";
        this.name = "";
        var self = this;
        this.name = this.userService.username;
        setTimeout(function () {
          var doc = self.db.collection("chat").doc(self.chat.id);
          var observer = doc.onSnapshot(function (docSnapshot) {
            var chat = docSnapshot.data();
            self.messages = chat.chat;
          });
        }, 50);
      }

      _createClass(ChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (param) {
            _this.chat = param;
          });
        }
      }, {
        key: "send",
        value: function send() {
          if (this.newmessage.length > 0) {
            this.userService.send(this.newmessage, this.chat.id);
            this.newmessage = "";
          }
        }
      }]);

      return ChatPage;
    }();

    ChatPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/chat/chat.page.scss"))["default"]]
    })], ChatPage);
    /***/
  }
}]);
//# sourceMappingURL=chat-chat-module-es5.js.map