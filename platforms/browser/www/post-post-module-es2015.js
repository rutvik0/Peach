(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      <strong>Post a Picture</strong>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n    <ion-col>\n      <ion-button disabled={{cam}} expand=\"block\" (click)=\"takePic(1)\">Capture</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button disabled={{cam}} expand=\"block\" (click)=\"takePic(0)\">Gallery</ion-button>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <img [src]=\"img\"/>\n  <div class=\"padding\"> Remaining Characters: {{150 - caption.length}}</div>\n  <ion-item lines=\"none\">\n    <ion-textarea maxLength=150 [(ngModel)]=\"caption\" placeHolder=\"Add a Caption...\"></ion-textarea>\n  </ion-item>\n  <h1></h1>\n  <ion-button disabled={{post}} (click)=\"makePost()\" class=\"ion-padding\" expand=\"block\">Post</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/post/post-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/post/post-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageRoutingModule", function() { return PostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");




const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_3__["PostPage"]
    }
];
let PostPageRoutingModule = class PostPageRoutingModule {
};
PostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostPageRoutingModule);



/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-routing.module */ "./src/app/post/post-routing.module.ts");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/post/post.page.ts");







let PostPageModule = class PostPageModule {
};
PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPageRoutingModule"]
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
    })
], PostPageModule);



/***/ }),

/***/ "./src/app/post/post.page.scss":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color: peachpuff;\n}\n\nion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-textarea {\n  border-radius: 10px;\n  background: #ffe3ca;\n  padding-left: 10px;\n}\n\nimg {\n  margin: auto;\n  display: block;\n}\n\n.padding {\n  padding-top: 30px;\n  padding-left: 20px;\n  color: grey;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dHZpa3BhdGVsL2Nsb25lL3NyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcG9zdC9wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3Bvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZTNjYTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmltZ3tcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuLnBhZGRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHBlYWNocHVmZjtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZTNjYTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/post/post.page.ts":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "../node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





let PostPage = class PostPage {
    constructor(camera, userService) {
        this.camera = camera;
        this.userService = userService;
        this.img = "/assets/test.png";
        this.randomId = Math.random().toString(36).substr(2, 5);
        this.caption = "";
        this.cam = false;
        this.post = true;
    }
    ngOnInit() {
    }
    takePic(sourceType) {
        var self = this;
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
            targetHeight: 500,
            targetWidth: 500,
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = `data:image/jpeg;base64,${imageData}`;
            self.img = base64Image;
            self.cam = true;
            self.post = false;
            const picture = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref(this.randomId);
            picture.putString(base64Image, 'data_url');
        }, (err) => {
            // Handle error
        });
    }
    makePost() {
        var self = this;
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_4__["storage"]().ref();
        storageRef.child(this.randomId).getDownloadURL().then(function (url) {
            self.userService.makePost(url, self.caption);
        });
        setTimeout(() => {
            this.img = "assets/test.png";
            this.cam = false;
            this.post = true;
            this.caption = "";
            this.randomId = Math.random().toString(36).substr(2, 5);
        }, 500);
    }
};
PostPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
PostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post.page.scss */ "./src/app/post/post.page.scss")).default]
    })
], PostPage);



/***/ })

}]);
//# sourceMappingURL=post-post-module-es2015.js.map