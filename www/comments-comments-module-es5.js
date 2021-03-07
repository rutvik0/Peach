function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommentsCommentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Comments</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"center\" size=\"auto\">\n          <ion-avatar>\n            <img [src]=\"image\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col>\n          <p><b>‏‏‎{{username}}</b>‏‏‎ ‎{{caption}} </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item lines=\"none\" *ngFor=\"let comment of comments\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"center\" size=\"auto\">\n          <ion-avatar>\n            <img [src]=\"comment.userimg\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col>\n          <p><b>‏‏‎‎{{comment.username}}</b>‏‏‎ ‎{{comment.comment}} </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n</ion-content>\n\n<ion-footer class=\"footer\">\n  <ion-row>\n    <ion-textarea minlength=1 cols=1 rows=1 type=\"text\" placeholder=\"Write comment here...\" [(ngModel)]=\"newmessage\"></ion-textarea>\n    <ion-buttons>\n      <ion-button shape=\"round\" (click)=\"addComment()\"><ion-icon name=\"send-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-row>\n </ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/comments/comments-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/comments/comments-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CommentsPageRoutingModule */

  /***/
  function srcAppCommentsCommentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function () {
      return CommentsPageRoutingModule;
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


    var _comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/comments/comments.page.ts");

    var routes = [{
      path: '',
      component: _comments_page__WEBPACK_IMPORTED_MODULE_3__["CommentsPage"]
    }];

    var CommentsPageRoutingModule = function CommentsPageRoutingModule() {
      _classCallCheck(this, CommentsPageRoutingModule);
    };

    CommentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/comments/comments.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/comments/comments.module.ts ***!
    \*********************************************/

  /*! exports provided: CommentsPageModule */

  /***/
  function srcAppCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function () {
      return CommentsPageModule;
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


    var _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comments-routing.module */
    "./src/app/comments/comments-routing.module.ts");
    /* harmony import */


    var _comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/comments/comments.page.ts");

    var CommentsPageModule = function CommentsPageModule() {
      _classCallCheck(this, CommentsPageModule);
    };

    CommentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommentsPageRoutingModule"]],
      declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]]
    })], CommentsPageModule);
    /***/
  },

  /***/
  "./src/app/comments/comments.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/comments/comments.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommentsCommentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea {\n  margin-left: 10px;\n  border-radius: 10px !important;\n  background: #ffe3ca;\n}\n\nion-footer {\n  padding-bottom: 9px;\n  padding-left: 2px;\n}\n\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 40px !important;\n  max-height: 40px !important;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\nion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n\n.footer {\n  background-color: peachpuff;\n  background: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ydXR2aWtwYXRlbC9QZWFjaC9zcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHRTtFQUNFLGlDQUFBO0FDQUo7O0FER0U7RUFDRSxpQ0FBQTtBQ0FKOztBREdFO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBpb24tdGV4dGFyZWF7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICAjZmZlM2NhO1xuICB9XG5cblxuICBpb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICB9XG5cbiAgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgfVxuXG4gIC5jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xuICB9XG5cbiAgaW9uLWhlYWRlciB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xuICAgIGJhY2tncm91bmQ6IHBlYWNocHVmZjtcbiAgfVxuICAiLCJpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZlM2NhO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGVhY2hwdWZmO1xuICBiYWNrZ3JvdW5kOiBwZWFjaHB1ZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/comments/comments.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/comments/comments.page.ts ***!
    \*******************************************/

  /*! exports provided: CommentsPage */

  /***/
  function srcAppCommentsCommentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPage", function () {
      return CommentsPage;
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
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);

    var CommentsPage = /*#__PURE__*/function () {
      function CommentsPage(route, userService) {
        var _this = this;

        _classCallCheck(this, CommentsPage);

        this.route = route;
        this.userService = userService;
        this.caption = "";
        this.comments = [];
        this.db = firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        var self = this;
        setTimeout(function () {
          self.caption = self.post.caption;

          var ref = _this.db.collection("posts").doc(_this.post.pid);

          ref.get().then(function (doc) {
            var post = doc.data();
            self.comments = post.comments;
            self.username = post.username;
            self.image = post.userimg;
          });
        }, 50);
      }

      _createClass(CommentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (param) {
            _this2.post = param;
          });
        }
      }, {
        key: "addComment",
        value: function addComment() {
          var self = this;

          if (this.newmessage.length > 0) {
            this.userService.addComment(this.post, this.newmessage);
            this.newmessage = "";
            var ref = this.db.collection("posts").doc(this.post.pid);
            ref.get().then(function (doc) {
              var post = doc.data();
              self.comments = post.comments;
            });
          }
        }
      }]);

      return CommentsPage;
    }();

    CommentsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    CommentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./comments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./comments.page.scss */
      "./src/app/comments/comments.page.scss"))["default"]]
    })], CommentsPage);
    /***/
  }
}]);
//# sourceMappingURL=comments-comments-module-es5.js.map