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


    __webpack_exports__["default"] = "ion-textarea {\n  margin-left: 10px;\n  border-radius: 10px !important;\n  background: #ffe3ca;\n}\n\nion-footer {\n  padding-bottom: 9px;\n  padding-left: 2px;\n}\n\nion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 40px !important;\n  max-height: 40px !important;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\nion-content {\n  --ion-background-color: peachpuff;\n}\n\nion-header {\n  --ion-background-color: peachpuff;\n}\n\n.footer {\n  background-color: peachpuff;\n  background: peachpuff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dHZpa3BhdGVsL2Nsb25lL3NyYy9hcHAvY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsaUNBQUE7QUNBSjs7QURHRTtFQUNFLGlDQUFBO0FDQUo7O0FER0U7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi10ZXh0YXJlYXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogICNmZmUzY2E7XG4gIH1cblxuXG4gIGlvbi1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIH1cblxuICBpb24tYXZhdGFyIHtcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNDBweCAhaW1wb3J0YW50OyAgLy9hbnkgc2l6ZVxuICAgIG1heC1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gIH1cblxuICBpb24taGVhZGVyIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gICAgYmFja2dyb3VuZDogcGVhY2hwdWZmO1xuICB9XG4gICIsImlvbi10ZXh0YXJlYSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmUzY2E7XG59XG5cbmlvbi1mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwZWFjaHB1ZmY7XG4gIGJhY2tncm91bmQ6IHBlYWNocHVmZjtcbn0iXX0= */";
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
    "../node_modules/firebase/dist/index.cjs.js");
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