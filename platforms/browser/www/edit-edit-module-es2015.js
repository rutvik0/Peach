(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-avatar class=\"ion-padding\">\n    <img [src]=\"currUser.image\"/>\n  </ion-avatar>\n  <ion-item lines=\"none\" class=\"ion-text-center\" (click)=\"editPhoto()\">\n    <ion-label>\n      <h6 class=\"blue\"><u>Update Profile Picture</u></h6>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\" position=\"floating\">Full Name</ion-label>\n    <ion-textarea rows=1 type=\"text\" [(ngModel)]=\"currUser.fullname\" required></ion-textarea>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\" position=\"floating\">Username</ion-label>\n    <ion-textarea cols=1 rows=1 type=\"text\" [(ngModel)]=\"currUser.username\" required></ion-textarea>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\" position=\"floating\">Status</ion-label>\n    <ion-textarea type=\"text\" [(ngModel)]=\"currUser.status\" required></ion-textarea>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\">Private Profile</ion-label>\n    <ion-toggle [(ngModel)]=\"currUser.privateStat\"></ion-toggle>\n  </ion-item>\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"apply()\"\n  [disabled]=\"!(this.currUser.username !== this.original.username\n      || this.currUser.fullname !== this.original.fullname\n      || this.currUser.status !== this.original.status\n      || this.currUser.privateStat !== this.original.privateStat)\">Apply Changes</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/edit/edit-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/edit/edit-routing.module.ts ***!
  \*********************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "./src/app/edit/edit.page.ts");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "./src/app/edit/edit.module.ts":
/*!*************************************!*\
  !*** ./src/app/edit/edit.module.ts ***!
  \*************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "./src/app/edit/edit-routing.module.ts");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/edit/edit.page.ts");







let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "./src/app/edit/edit.page.scss":
/*!*************************************!*\
  !*** ./src/app/edit/edit.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  margin: auto;\n  display: block;\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 200px !important;\n  max-height: 200px !important;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n\nion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-textarea {\n  border-radius: 10px;\n  background: #ffe3ca;\n  padding-left: 10px;\n}\n\nion-input {\n  border-radius: 10px;\n  background: #ffe3ca;\n  text-indent: 20px;\n}\n\n.blue {\n  color: blue;\n  border-bottom: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dHZpa3BhdGVsL2Nsb25lL3NyYy9hcHAvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWRpdC9lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURDQTtFQUNJLGlDQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQ0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMjAwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplXG59XG5pb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZlM2NhO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmUzY2E7XG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG59XG5cbi5ibHVlIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBib3JkZXItYm90dG9tOiBibHVlO1xufSIsImlvbi1hdmF0YXIge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZTNjYTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZlM2NhO1xuICB0ZXh0LWluZGVudDogMjBweDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbiAgYm9yZGVyLWJvdHRvbTogYmx1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/edit/edit.page.ts":
/*!***********************************!*\
  !*** ./src/app/edit/edit.page.ts ***!
  \***********************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "../node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







let EditPage = class EditPage {
    constructor(router, alertCtrl, userService, camera) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.camera = camera;
        this.currUser = {
            'status': "",
            'username': "",
            'image': "",
            'fullname': "",
            'privateStat': true
        };
        this.original = {
            'status': "",
            'username': "",
            'image': "",
            'fullname': "",
            'privateStat': true
        };
        this.randomId = Math.random().toString(36).substr(2, 5);
        this.userService.getObservable().subscribe((data) => {
            this.currUser.username = this.userService.username;
            this.currUser.image = this.userService.image;
            this.currUser.fullname = this.userService.fullname;
            this.currUser.status = this.userService.status;
            this.currUser.privateStat = this.userService.privateStat;
            this.original.username = this.userService.username;
            this.original.image = this.userService.image;
            this.original.fullname = this.userService.fullname;
            this.original.status = this.userService.status;
            this.original.privateStat = this.userService.privateStat;
        });
        this.currUser.username = this.userService.username;
        this.currUser.image = this.userService.image;
        this.currUser.fullname = this.userService.fullname;
        this.currUser.status = this.userService.status;
        this.currUser.privateStat = this.userService.privateStat;
        this.original.username = this.userService.username;
        this.original.image = this.userService.image;
        this.original.fullname = this.userService.fullname;
        this.original.status = this.userService.status;
        this.original.privateStat = this.userService.privateStat;
    }
    ngOnInit() {
    }
    editPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Upload or Remove',
                message: 'Do you want to upload your profile or remove?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel button clicked');
                        }
                    },
                    {
                        text: 'Capture',
                        role: 'capture',
                        handler: () => {
                            console.log('Upload button clicked');
                            this.takePic(1);
                        }
                    },
                    {
                        text: 'Galery',
                        role: 'gallery',
                        handler: () => {
                            console.log('Upload button clicked');
                            this.takePic(0);
                        }
                    },
                    {
                        text: 'Remove',
                        role: 'remove',
                        handler: () => {
                            this.removePic();
                            this.currUser.image = "assets/avatar.png";
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    logout() {
        firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().signOut().then(function () {
            console.log("You are logged Out. Good Bye!!");
        })
            .catch(function (error) {
        });
        this.router.navigate(["/login"]);
    }
    removePic() {
        if (this.currUser.image != "assets/avatar.png") {
            this.currUser.image = "assets/avatar.png";
            this.userService.removeProfilePic();
        }
        else {
            console.log("No image available");
        }
    }
    takePic(sourceType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            const options = {
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                targetHeight: 400,
                targetWidth: 400,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: sourceType,
            };
            this.camera.getPicture(options).then((result) => {
                const image = `data:image/jpeg;base64,${result}`;
                const pictures = firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref(this.randomId);
                pictures.putString(image, 'data_url');
                setTimeout(() => {
                    var storageRef = firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref();
                    storageRef.child(this.randomId).getDownloadURL().then(function (url) {
                        self.currUser.image = url;
                        self.userService.updateImage(url);
                    });
                }, 2000);
            });
        });
    }
    apply() {
        this.userService.updateProfile(this.currUser.fullname, this.currUser.username, this.currUser.status, this.currUser.privateStat);
    }
};
EditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit.page.scss */ "./src/app/edit/edit.page.scss")).default]
    })
], EditPage);



/***/ })

}]);
//# sourceMappingURL=edit-edit-module-es2015.js.map