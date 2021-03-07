(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-select-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Select user to chat</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button [disabled]=\"!selected()\" (click)=\"startChat()\">Chat</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar style=\"--background:#ffe3ca\" (ionInput)=\"filterList($event)\"></ion-searchbar>\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let user of users\">\n      <ion-label class=\"ion-text-wrap\">\n        <ion-avatar>\n          <img [src]=\"user.image\"/>\n        </ion-avatar>\n      </ion-label>\n      <ion-label>\n        {{user.username}}\n      </ion-label>\n      <ion-checkbox [disabled]=\"userSelect(user)\" slot=\"end\" (ionChange)=\"select(user)\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/select/select-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/select/select-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SelectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageRoutingModule", function() { return SelectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.page */ "./src/app/select/select.page.ts");




const routes = [
    {
        path: '',
        component: _select_page__WEBPACK_IMPORTED_MODULE_3__["SelectPage"]
    }
];
let SelectPageRoutingModule = class SelectPageRoutingModule {
};
SelectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectPageRoutingModule);



/***/ }),

/***/ "./src/app/select/select.module.ts":
/*!*****************************************!*\
  !*** ./src/app/select/select.module.ts ***!
  \*****************************************/
/*! exports provided: SelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageModule", function() { return SelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-routing.module */ "./src/app/select/select-routing.module.ts");
/* harmony import */ var _select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select.page */ "./src/app/select/select.page.ts");







let SelectPageModule = class SelectPageModule {
};
SelectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPageRoutingModule"]
        ],
        declarations: [_select_page__WEBPACK_IMPORTED_MODULE_6__["SelectPage"]]
    })
], SelectPageModule);



/***/ }),

/***/ "./src/app/select/select.page.scss":
/*!*****************************************!*\
  !*** ./src/app/select/select.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL3NlbGVjdC9zZWxlY3QucGFnZS5zY3NzIiwic3JjL2FwcC9zZWxlY3Qvc2VsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0L3NlbGVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/select/select.page.ts":
/*!***************************************!*\
  !*** ./src/app/select/select.page.ts ***!
  \***************************************/
/*! exports provided: SelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPage", function() { return SelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



let SelectPage = class SelectPage {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
        this.allfollowers = [];
        this.chatUser = [];
        this.initializeList();
    }
    ngOnInit() {
    }
    initializeList() {
        this.userService.getObservable().subscribe((data) => {
            this.allfollowers = this.userService.followers;
            this.users = [];
            for (let friend of this.allfollowers) {
                if (friend.status != "req") {
                    this.users.push(friend);
                }
            }
        });
        this.allfollowers = this.userService.followers;
        this.users = [];
        for (let friend of this.allfollowers) {
            if (friend.status != "req") {
                this.users.push(friend);
            }
        }
    }
    filterList(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.initializeList();
            const val = event.target.value;
            if (val && val.trim() != '') {
                this.users = this.users.filter((user) => {
                    return (user.username.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        });
    }
    selected() {
        var bool = false;
        if (this.chatUser.length != 0) {
            bool = true;
        }
        return bool;
    }
    userSelect(user) {
        var bool = false;
        if (this.chatUser.length != 0 && !this.chatUser.includes(user)) {
            bool = true;
        }
        return bool;
    }
    select(user) {
        var self = this;
        if (this.chatUser.includes(user)) {
            const index = self.chatUser.indexOf(user);
            if (index > -1) {
                self.chatUser.splice(index, 1);
            }
        }
        else {
            this.chatUser.push(user);
        }
    }
    startChat() {
        var uid = this.chatUser[0].uid;
        console.log(uid);
        this.userService.createChat(this.chatUser);
    }
};
SelectPage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
SelectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select.page.scss */ "./src/app/select/select.page.scss")).default]
    })
], SelectPage);



/***/ })

}]);
//# sourceMappingURL=select-select-module-es2015.js.map