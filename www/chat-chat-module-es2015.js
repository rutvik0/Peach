(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{chat.username}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"innermsg\">\n    <div id=\"chat-container\">\n      <span class=\"line-style\"></span>\n      <hr>\n      <div class=\"message-wrap\">\n        <div *ngFor=\"let msg of messages;let i = index; let first = first; let last = last\" class=\"message\">\n\n          <div class=\"message-left\" *ngIf=\"msg.name !== name\">\n            <div class=\"msg-detail\">\n              <div class=\"msg-content\">\n                <p class=\"line-breaker \">{{msg.message}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"message-right\" *ngIf=\"msg.name === name\">\n            <div class=\"msg-detail\">\n              <div class=\"msg-info\">\n              </div>\n              <div class=\"msg-content\">\n                <p class=\"line-breaker  \">{{msg.message}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"footer\">\n  <ion-row>\n    <ion-textarea minlength=1 cols=1 rows=1 type=\"text\" placeholder=\"Write comment here...\" [(ngModel)]=\"newmessage\"></ion-textarea>\n    <ion-buttons>\n      <ion-button shape=\"round\" (click)=\"send()\"><ion-icon name=\"send-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-row>\n </ion-footer>");

/***/ }),

/***/ "./src/app/chat/chat-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/chat/chat-routing.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea {\n  margin-left: 10px;\n  border-radius: 10px !important;\n  background: #ffe3ca;\n}\n\nion-footer {\n  padding-bottom: 9px;\n  padding-left: 2px;\n}\n\nion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n\n.footer {\n  background-color: peachpuff;\n  background: peachpuff;\n}\n\n.message-wrap .message {\n  position: relative;\n  padding: 7px 0;\n  border-radius: 40px !important;\n}\n\n.message-wrap .message .msg-detail {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n}\n\n.message-wrap .message .msg-detail p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.message-wrap .message .msg-detail .msg-content {\n  position: relative;\n  border-radius: 10px !important;\n  padding: 8px;\n  width: auto;\n  max-width: 80%;\n  min-width: 3%;\n}\n\n.message-wrap .message-left .msg-content {\n  float: left;\n  position: relative;\n  background: white;\n  color: black;\n}\n\n.message-wrap .message-right .msg-detail .msg-info {\n  text-align: right;\n}\n\n.message-wrap .message-right .msg-content {\n  float: right;\n  color: #2a2828;\n  background: #eee2df;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFRTtFQUNFLGlDQUFBO0FDQ0o7O0FERUU7RUFDRSxpQ0FBQTtBQ0NKOztBREVFO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRE9JO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNKTjs7QURNTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDSlI7O0FES1E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0hWOztBREtRO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNIVjs7QURRTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ05SOztBRFlRO0VBQ0UsaUJBQUE7QUNWVjs7QURhTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNYUiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWF7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICAjZmZlM2NhO1xuICB9XG5cblxuICBpb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gIH1cblxuICBpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gICAgYmFja2dyb3VuZDogcGVhY2hwdWZmO1xuICB9XG4gIFxuXG4gIC5tZXNzYWdlLXdyYXAge1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweDtcbiAgICBcbiAgICBcbiAgICAubWVzc2FnZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiA3cHggMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcblxuICAgICAgLm1zZy1kZXRhaWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1zZy1jb250ZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgICBtaW4td2lkdGg6IDMlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlLWxlZnQge1xuICAgICAgLm1zZy1jb250ZW50IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZS1yaWdodCB7XG4gICAgICAubXNnLWRldGFpbCB7XG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG4gICAgICAgIC5tc2ctaW5mbyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tc2ctY29udGVudCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgY29sb3I6ICMyYTI4Mjg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWUyZGY7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG4iLCJpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZlM2NhO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xuICBiYWNrZ3JvdW5kOiBwZWFjaHB1ZmY7XG59XG5cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDdweCAwO1xuICBib3JkZXItcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWluLXdpZHRoOiAzJTtcbn1cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtbGVmdCAubXNnLWNvbnRlbnQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS1yaWdodCAubXNnLWRldGFpbCAubXNnLWluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtcmlnaHQgLm1zZy1jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzJhMjgyODtcbiAgYmFja2dyb3VuZDogI2VlZTJkZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





let ChatPage = class ChatPage {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]();
        this.messages = [];
        this.newmessage = "";
        this.name = "";
        var self = this;
        this.name = this.userService.username;
        setTimeout(() => {
            let doc = self.db.collection("chat").doc(self.chat.id);
            let observer = doc.onSnapshot(docSnapshot => {
                var chat = docSnapshot.data();
                self.messages = chat.chat;
            });
        }, 50);
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.chat = param;
        });
    }
    send() {
        if (this.newmessage.length > 0) {
            this.userService.send(this.newmessage, this.chat.id);
            this.newmessage = "";
        }
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")).default]
    })
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map