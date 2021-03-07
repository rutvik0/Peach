(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n\n  <ion-img [src]=\"imgfile\"></ion-img>\n  \n  <!-- <ion-item lines=\"none\">\n    <ion-thumbnail slot=\"start\"> \n      <ion-img [src]=\"user.img\"></ion-img> \n    </ion-thumbnail>\n\n    <ion-button size=\"normal\" color=\"primary\" (click)=\"takePic()\">Add Profile Picture</ion-button>\n\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\">Full Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"user.fullname\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\">Username</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"user.name\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"user.email\" required></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\">Password</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"user.password\" required></ion-input>\n  </ion-item>\n  <h6></h6>\n  <ion-button [disabled]=\"disabled()\" class=\"submit-btn\" expand=\"block\" type=\"submit\" (click)=\"signup()\">Sign up</ion-button>\n  \n  </ion-content>");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let SignupPage = class SignupPage {
    constructor(toastController, router) {
        this.toastController = toastController;
        this.router = router;
        this.randomId = Math.random().toString(36).substr(2, 5);
        this.user = {
            email: "",
            password: "",
            name: "",
            fullname: "",
            img: "assets/avatar.png"
        };
        this.imgfile = "/assets/logo.png";
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(["/login"]);
    }
    // async takePic() {
    //   var self = this;
    //    const options: CameraOptions = {
    //      quality:50,
    //      targetHeight: 400,
    //      targetWidth: 400,
    //      destinationType: this.camera.DestinationType.DATA_URL,
    //      encodingType: this.camera.EncodingType.JPEG,
    //      mediaType: this.camera.MediaType.PICTURE
    //    };
    //   this.camera.getPicture(options).then((result) => {
    //     const image = `data:image/jpeg;base64,${result}`;
    //     const pictures = firebase.storage().ref(this.randomId);
    //     pictures.putString(image, 'data_url');
    //    setTimeout(() => { 
    //     var storageRef = firebase.storage().ref();
    //     storageRef.child(this.randomId).getDownloadURL().then(function(url) {
    //       self.user.img = url;
    //     });
    //     }, 2000);
    //   })
    //  }
    disabled() {
        var bool = true;
        if (this.user.email.length != 0 &&
            this.user.password.length != 0 &&
            this.user.name.length != 0 &&
            this.user.fullname.length != 0) {
            bool = false;
        }
        return bool;
    }
    signup() {
        var email = this.user.email;
        var password = this.user.password;
        var name = this.user.name;
        var img = this.user.img;
        var fullname = this.user.fullname;
        var self = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            self.errorToast(errorMessage);
            if (errorCode.length > 0) {
                console.log("Failed");
            }
            else {
                console.log("signup ok");
            }
        }).then(function (result) {
            var user = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            var db = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
            var followers = [];
            var following = [];
            var posts = [];
            var saved = [];
            var status = "";
            db.collection("users").add({
                'uid': user.uid,
                'username': name,
                'image': img,
                'posts': posts,
                'followers': followers,
                'following': following,
                'status': status,
                'fullname': fullname,
                'privateStat': false,
                'saved': saved
            })
                .then(function (docRef) {
                console.log("usetype written with ID: ", docRef.id);
            })
                .catch(function (error) {
                console.error("Error adding document: ", error);
            });
            self.user.fullname = "";
            self.user.img = "/assets/avatar.png";
            self.user.name = "";
            self.user.password = "";
            self.user.email = "";
            self.router.navigate(["/login"]);
        });
    }
    errorToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'danger',
                message: msg,
                position: 'top',
                duration: 1000
            });
            toast.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map