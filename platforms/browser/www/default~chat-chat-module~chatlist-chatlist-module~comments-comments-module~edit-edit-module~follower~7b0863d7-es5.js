function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat-chat-module~chatlist-chatlist-module~comments-comments-module~edit-edit-module~follower~7b0863d7"], {
  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "../node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService() {
        _classCallCheck(this, UserService);

        this.eventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.db = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        this.storage = firebase__WEBPACK_IMPORTED_MODULE_2__["storage"]();
        this.storageRef = this.storage.ref();
        this.allPosts = [];
        this.username = "";
        this.image = "";
        this.status = "";
        this.fullname = "";
        this.posts = [];
        this.followers = [];
        this.following = [];
        this.users = [];
        this.followingPostId = [];
        this.followingPosts = [];
        this.privateStat = true;
        this.homePosts = [];
        this.savedPosts = [];
        this.chats = [];
        this.saved = [];
        var self = this;
        this.db.collection("users").onSnapshot(function (querySnapshot) {
          self.users = [];
          querySnapshot.forEach(function (doc) {
            var user = doc.data();
            self.users.push({
              username: user.username,
              image: user.image,
              uid: user.uid,
              privateStat: user.privateStat,
              status: user.status,
              fullname: user.fullname,
              followers: user.followers.length,
              following: user.following.length,
              id: doc.id,
              posts: user.posts.length
            });
          });
          self.publishEvent({
            foo: 'bar'
          });
        });
        this.db.collection("posts").onSnapshot(function (querySnapshot) {
          self.allPosts = [];
          querySnapshot.forEach(function (doc) {
            var post = doc.data();
            self.allPosts.push({
              caption: post.caption,
              comments: post.comments,
              id: post.id,
              image: post.image,
              likes: post.likes,
              posted: post.posted,
              userimg: post.userimg,
              username: post.username,
              pid: doc.id
            });
          });
          self.publishEvent({
            foo: 'bar'
          });
        });
      }

      _createClass(UserService, [{
        key: "publishEvent",
        value: function publishEvent(data) {
          this.eventSubject.next(data);
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.eventSubject;
        }
      }, {
        key: "setUsername",
        value: function setUsername(username, image, status, posts, followers, following, fullname, privateStat, userDoc, saved) {
          var self = this;
          this.username = username;
          this.image = image;
          this.status = status;
          this.followers = followers;
          this.following = following;
          this.fullname = fullname;
          this.privateStat = privateStat;
          this.userDoc = userDoc;
          this.posts = posts;
          this.userRef = this.db.collection("users").doc(this.userDoc);
          this.followingPosts = [];
          this.homePosts = [];
          this.currUser = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
          this.db.collection("posts").onSnapshot(function (querySnapshot) {
            self.allPosts = [];
            self.followingPostId = [];
            querySnapshot.forEach(function (doc) {
              var post = doc.data();
              self.allPosts.push({
                caption: post.caption,
                comments: post.comments,
                id: post.id,
                image: post.image,
                likes: post.likes,
                posted: post.posted,
                userimg: post.userimg,
                username: post.username,
                pid: doc.id
              });
            });
            self.publishEvent({
              foo: 'bar'
            });
          });

          var _iterator = _createForOfIteratorHelper(following),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var user = _step.value;
              var ref = self.db.collection("users").doc(user.id);
              ref.get().then(function (doc) {
                var posts = doc.data().posts;

                var _iterator7 = _createForOfIteratorHelper(posts),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var post = _step7.value;
                    self.followingPostId.push(post);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          setTimeout(function () {
            var _iterator2 = _createForOfIteratorHelper(self.allPosts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var post = _step2.value;

                if (posts.includes(post.pid)) {
                  self.homePosts.push(post);
                } else if (self.followingPostId.includes(post.pid)) {
                  self.followingPosts.push(post);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }, 500);
          setTimeout(function () {
            self.homePosts.sort(function (a, b) {
              return a.posted < b.posted ? 1 : -1;
            });
            self.followingPosts.sort(function (a, b) {
              return a.posted < b.posted ? 1 : -1;
            });
          }, 500);
          this.db.collection("users").onSnapshot(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              var user = doc.data();

              if (user.uid == self.currUser) {
                self.username = user.username;
                self.image = user.image;
                self.status = user.status;
                self.posts = user.posts;
                self.following = user.following;
                self.followers = user.followers;
                self.fullname = user.fullname;
                self.privateStat = user.privateStat;
                self.saved = user.saved;
                self.savedPosts = [];
                setTimeout(function () {
                  var _iterator3 = _createForOfIteratorHelper(self.allPosts),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var post = _step3.value;

                      if (self.saved.includes(post.pid)) {
                        self.savedPosts.push(post);
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }

                  self.savedPosts.sort(function (a, b) {
                    return a.posted < b.posted ? 1 : -1;
                  });
                }, 500);
              }
            });
            self.publishEvent({
              foo: 'bar'
            });
          });
          this.db.collection("users").onSnapshot(function (querySnapshot) {
            self.users = [];
            querySnapshot.forEach(function (doc) {
              var user = doc.data();

              if (user.uid != self.currUser) {
                var temp = user.followers;
                var num = 0;

                var _iterator4 = _createForOfIteratorHelper(temp),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var item = _step4.value;

                    if (item.status == "true") {
                      num++;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                self.users.push({
                  username: user.username,
                  image: user.image,
                  uid: user.uid,
                  privateStat: user.privateStat,
                  status: user.status,
                  fullname: user.fullname,
                  followers: num,
                  following: user.following.length,
                  id: doc.id,
                  posts: user.posts.length
                });
              }
            });
            self.publishEvent({
              foo: 'bar'
            });
          });
          this.db.collection("chat").onSnapshot(function (querySnapshot) {
            self.chats = [];
            querySnapshot.forEach(function (doc) {
              var chat = doc.data();
              var uids = chat.uid;

              if (uids.includes(self.currUser)) {
                var _iterator5 = _createForOfIteratorHelper(chat.usernames),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var name = _step5.value;

                    if (name != self.username) {
                      var username = name;
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                var _iterator6 = _createForOfIteratorHelper(uids),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var uid = _step6.value;

                    if (uid != self.currUser) {
                      var otherUid = uid;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                self.chats.push({
                  username: username,
                  id: chat.id,
                  uid: otherUid
                });
              }
            });
            self.publishEvent({
              foo: 'bar'
            });
          });
        }
      }, {
        key: "makePost",
        value: function makePost(postImg, postCap) {
          var self = this;
          var likes = [];
          likes.push(self.userDoc);
          var comments = [];
          this.homePosts.push({
            'username': self.username,
            'userimg': self.image,
            'id': self.userDoc,
            'posted': Date.now(),
            'image': postImg,
            'caption': postCap,
            'likes': likes,
            'comments': comments
          });
          this.db.collection("posts").add({
            'username': self.username,
            'userimg': self.image,
            'id': self.userDoc,
            'posted': Date.now(),
            'image': postImg,
            'caption': postCap,
            'likes': likes,
            'comments': comments
          }).then(function (docRef) {
            self.userRef.update({
              posts: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(docRef.id)
            });
          });
        }
      }, {
        key: "updateImage",
        value: function updateImage(url) {
          this.image = url;
          this.userRef.update({
            image: url
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(fullname, username, status, privateStatus) {
          this.fullname = fullname;
          this.username = username;
          this.status = status;
          this.privateStat = privateStatus;
          this.userRef.update({
            'fullname': fullname,
            'username': username,
            'status': status,
            'privateStat': privateStatus
          });
        }
      }, {
        key: "removeProfilePic",
        value: function removeProfilePic() {
          if (this.image != "assets/avatar.png") {
            var imagePath = this.image;
            var name = imagePath.substr(imagePath.indexOf('%2F') + 3, imagePath.indexOf('?') - (imagePath.indexOf('%2F') + 3));
            name = name.replace('%20', ' ');
            name = name.substr(name.indexOf('/o/'));
            name = name.substring(3);
            this.storageRef.child(name)["delete"]();
            this.userRef.update({
              image: "assets/avatar.png"
            });
            this.image = "assets/avatar.png";
          }
        }
      }, {
        key: "follow",
        value: function follow(user) {
          var ref = this.db.collection("users").doc(user.id);
          ref.update({
            followers: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion({
              username: this.username,
              uid: this.currUser,
              status: "req",
              image: this.image,
              id: this.userDoc
            })
          });
        }
      }, {
        key: "reqAccept",
        value: function reqAccept(user) {
          this.userFollowing(user);
          this.userRef.update({
            followers: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove({
              username: user.username,
              uid: user.uid,
              status: user.status,
              image: user.image,
              id: user.id
            })
          });
          this.userRef.update({
            followers: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion({
              username: user.username,
              uid: user.uid,
              status: "true",
              image: user.image,
              id: user.id
            })
          });
        }
      }, {
        key: "userFollowing",
        value: function userFollowing(usr) {
          var ref = this.db.collection("users").doc(usr.id);
          ref.update({
            following: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion({
              username: this.username,
              uid: this.currUser,
              status: "true",
              image: this.image,
              id: this.userDoc
            })
          });
        }
      }, {
        key: "reqReject",
        value: function reqReject(user) {
          this.userRef.update({
            followers: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove({
              username: user.username,
              uid: user.uid,
              status: user.status,
              image: user.image,
              id: user.id
            })
          });
        }
      }, {
        key: "unfollow",
        value: function unfollow(user) {
          var self = this;
          console.log(user);
          var userRef = this.db.collection("users").doc(user.id);
          userRef.update({
            followers: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove({
              username: self.username,
              uid: self.currUser,
              status: "true",
              image: this.image,
              id: self.userDoc
            })
          });
          this.userRef.update({
            following: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove({
              username: user.username,
              uid: user.uid,
              status: "true",
              image: user.image,
              id: user.id
            })
          });
        }
      }, {
        key: "like",
        value: function like(post) {
          var self = this;
          var id = post.pid;
          var ref = this.db.collection("posts").doc(id);
          ref.update({
            likes: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(self.userDoc)
          });
        }
      }, {
        key: "unlike",
        value: function unlike(post) {
          var self = this;
          var id = post.pid;
          var ref = this.db.collection("posts").doc(id);
          ref.update({
            likes: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(self.userDoc)
          });
        }
      }, {
        key: "addComment",
        value: function addComment(post, comment) {
          var self = this;
          var id = post.pid;
          var ref = this.db.collection("posts").doc(id);
          ref.update({
            comments: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion({
              userimg: self.image,
              username: self.username,
              comment: comment
            })
          });
        }
      }, {
        key: "bookmark",
        value: function bookmark(post) {
          var id = post.pid;
          this.userRef.update({
            saved: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(id)
          });
        }
      }, {
        key: "unsave",
        value: function unsave(post) {
          var id = post.pid;
          this.userRef.update({
            saved: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(id)
          });
        }
      }, {
        key: "createChat",
        value: function createChat(user) {
          var self = this;
          var uid = user[0].uid;
          var id = "";

          if (uid < this.currUser) {
            id = uid + this.currUser;
          } else {
            id = this.currUser + uid;
          }

          this.db.collection("chat").doc(id).get().then(function (doc) {
            if (!doc.exists) {
              var uids = [self.currUser, uid];
              var name = user[0].username;
              var usernames = [self.username, name];
              var chat = [];
              self.db.collection("chat").doc(id).set({
                'usernames': usernames,
                'uid': uids,
                'chat': chat,
                'id': id
              });
            }
          });
        }
      }, {
        key: "send",
        value: function send(message, id) {
          var self = this;
          var ref = this.db.collection("chat").doc(id);
          ref.update({
            chat: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion({
              'time': Date.now(),
              'name': self.username,
              'message': message
            })
          });
        }
      }]);

      return UserService;
    }();

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  }
}]);
//# sourceMappingURL=default~chat-chat-module~chatlist-chatlist-module~comments-comments-module~edit-edit-module~follower~7b0863d7-es5.js.map