import { Injectable, SkipSelf } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private eventSubject = new Subject<any>();
  db = firebase.firestore();
  storage = firebase.storage();
  storageRef = this.storage.ref();
  allPosts = [];
  public username = "";
  public image = "";
  public status = "";
  public fullname = "";
  public posts = [];
  public followers = [];
  public following = [];
  public users = [];
  public followingPostId = [];
  public followingPosts = [];
  public privateStat = true;
  public homePosts = [];
  public savedPosts = [];
  public chats = [];
  public userDoc;
  private userRef;
  public currUser;
  public saved = [];

  publishEvent(data:any) {
    this.eventSubject.next(data);
  }
  getObservable(): Subject<any> {
    return this.eventSubject;
  }
  
  constructor() {
    var self = this;
    this.db.collection("users").onSnapshot(function(querySnapshot) {
      self.users = [];
      querySnapshot.forEach(function(doc) {
        var user = doc.data();
        self.users.push({username:user.username,image:user.image,uid:user.uid,
          privateStat:user.privateStat,status:user.status,fullname:user.fullname,
          followers:user.followers.length,following:user.following.length,id:doc.id,posts:user.posts.length});
      })
      self.publishEvent({foo:'bar'});
    })

    this.db.collection("posts").onSnapshot(function(querySnapshot) {
      self.allPosts = [];
      querySnapshot.forEach(function(doc) {
        var post = doc.data();
        self.allPosts.push({caption:post.caption,comments:post.comments,
          id:post.id,image:post.image,likes:post.likes,posted:post.posted,
          userimg:post.userimg,username:post.username,pid:doc.id});
      })
      self.publishEvent({foo:'bar'});
    })
  }

  setUsername(username,image,status,posts,followers,following,fullname,privateStat,userDoc,saved) {
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
    this.currUser = firebase.auth().currentUser.uid;

    this.db.collection("posts").onSnapshot(function(querySnapshot) {
      self.allPosts = [];
      self.followingPostId = [];
      querySnapshot.forEach(function(doc) {
        var post = doc.data();
        self.allPosts.push({caption:post.caption,comments:post.comments,
          id:post.id,image:post.image,likes:post.likes,posted:post.posted,
          userimg:post.userimg,username:post.username,pid:doc.id});
      })
      self.publishEvent({foo:'bar'});
    })

    for(let user of following) {
      var ref = self.db.collection("users").doc(user.id);
      ref.get().then(function(doc) {
        var posts = doc.data().posts;
        for(let post of posts) {
          self.followingPostId.push(post);
        }
      })
    }

    setTimeout(() => {
      for(let post of self.allPosts) {
        if(posts.includes(post.pid)) {
          self.homePosts.push(post);
        } else if(self.followingPostId.includes(post.pid)) {
          self.followingPosts.push(post);
        }
      }
    }, 500);
    
    setTimeout(() => {
      self.homePosts.sort((a,b) => (a.posted < b.posted) ? 1: -1);
      self.followingPosts.sort((a,b) => (a.posted < b.posted) ? 1: -1);
    }, 500);

    this.db.collection("users")
    .onSnapshot(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var user = doc.data();
        if(user.uid == self.currUser) {
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
          setTimeout(() => {
            for(let post of self.allPosts) {
              if(self.saved.includes(post.pid)) {
                self.savedPosts.push(post);
              }
            }
            self.savedPosts.sort((a,b) => (a.posted < b.posted) ? 1: -1);
          }, 500);
        }
      })
      self.publishEvent({foo:'bar'});
    })
    
    this.db.collection("users").onSnapshot(function(querySnapshot) {
      self.users = [];
      querySnapshot.forEach(function(doc) {
        var user = doc.data();
        if(user.uid != self.currUser) {
          var temp = user.followers;
          var num = 0;
          for(let item of temp) {
            if(item.status == "true") {
              num++;
            }
          }
        self.users.push({username:user.username,image:user.image,uid:user.uid,
          privateStat:user.privateStat,status:user.status,fullname:user.fullname,
          followers:num,following:user.following.length,id:doc.id,posts:user.posts.length});
        }
      })
      self.publishEvent({foo:'bar'});
    })

    this.db.collection("chat").onSnapshot(function(querySnapshot) {
      self.chats = [];
      querySnapshot.forEach(function(doc) {
        var chat = doc.data();
        var uids = chat.uid;
        if(uids.includes(self.currUser)) {
          for(let name of chat.usernames) {
            if(name != self.username) {
              var username = name;
            }
          }
          for(let uid of uids) {
            if(uid != self.currUser) {
              var otherUid = uid;
            }
          }
          self.chats.push({username:username,id:chat.id,uid:otherUid});
        }
      })
      self.publishEvent({foo:'bar'});
    })

  }

  makePost(postImg, postCap) {
    var self = this;
    var likes = [];
    likes.push(self.userDoc)
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
    })

    this.db.collection("posts").add({
      'username': self.username,
      'userimg': self.image,
      'id': self.userDoc,
      'posted': Date.now(),
      'image': postImg,
      'caption': postCap,
      'likes': likes,
      'comments': comments
    }).then(function(docRef){
      self.userRef.update({
        posts: firebase.firestore.FieldValue.arrayUnion(docRef.id)
      })
    })
  }

  updateImage(url) {
    this.image = url;
    this.userRef.update({
      image:url
    })
  }

  updateProfile(fullname, username, status, privateStatus) {
    this.fullname = fullname;
    this.username = username;
    this.status = status;
    this.privateStat = privateStatus;
    this.userRef.update({
      'fullname':fullname,
      'username':username,
      'status':status,
      'privateStat':privateStatus
    })
  }

  removeProfilePic() {
    if(this.image != "assets/avatar.png") {
    let imagePath = this.image;
    let name = imagePath.substr(imagePath.indexOf('%2F') + 3, (imagePath.indexOf('?')) - (imagePath.indexOf('%2F') + 3));
    name = name.replace('%20',' ');
    name = name.substr(name.indexOf('/o/'));
    name = name.substring(3);
    this.storageRef.child(name).delete();
    this.userRef.update({
      image:"assets/avatar.png"
    })

    this.image = "assets/avatar.png"
  }
  }

  follow(user) {
    var ref = this.db.collection("users").doc(user.id);
    ref.update({
      followers: firebase.firestore.FieldValue.arrayUnion({username:this.username,uid:this.currUser,
      status:"req",image:this.image,id:this.userDoc})
    })
  }

  reqAccept(user) {
    this.userFollowing(user);
    this.userRef.update({
      followers: firebase.firestore.FieldValue.arrayRemove({username: user.username,uid: user.uid,
        status:user.status,image:user.image,id:user.id})
    })

    this.userRef.update({
      followers: firebase.firestore.FieldValue.arrayUnion({username: user.username,uid: user.uid,
        status:"true",image:user.image,id:user.id})
    })
  }

  userFollowing(usr) {
    var ref = this.db.collection("users").doc(usr.id);
    ref.update({
      following: firebase.firestore.FieldValue.arrayUnion({username: this.username,uid:this.currUser,
        status:"true",image:this.image,id:this.userDoc})
    })
  }

  reqReject(user) {
    this.userRef.update({
      followers: firebase.firestore.FieldValue.arrayRemove({username: user.username,uid: user.uid,
        status:user.status,image:user.image,id:user.id})
    })
  }

  unfollow(user) {
    var self = this;
    console.log(user)
    var userRef = this.db.collection("users").doc(user.id);
    userRef.update({
      followers: firebase.firestore.FieldValue.arrayRemove({username:self.username,uid:self.currUser,
        status:"true",image:this.image,id:self.userDoc})
    })

    this.userRef.update({
      following: firebase.firestore.FieldValue.arrayRemove({username:user.username,uid: user.uid,
      status:"true",image:user.image,id:user.id})
    })
  }

  like(post) {
    var self = this;
    var id = post.pid;
    var ref = this.db.collection("posts").doc(id);
    ref.update({
      likes: firebase.firestore.FieldValue.arrayUnion(self.userDoc)
    })
  }

  unlike(post) {
    var self = this;
    var id = post.pid;
    var ref = this.db.collection("posts").doc(id);
    ref.update({
      likes: firebase.firestore.FieldValue.arrayRemove(self.userDoc)
    })
  }

  addComment(post,comment) {
    var self = this;
    var id = post.pid;
    var ref = this.db.collection("posts").doc(id);
    ref.update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        userimg: self.image,
        username: self.username,
        comment: comment
      })
    })
  }

  bookmark(post) {
    var id = post.pid;
    this.userRef.update({
      saved: firebase.firestore.FieldValue.arrayUnion(id)
    })
  }

  unsave(post) {
    var id = post.pid;
    this.userRef.update({
      saved: firebase.firestore.FieldValue.arrayRemove(id)
    })
  }

  createChat(user) {
    var self = this;
    var uid = user[0].uid;
    var id = "";
    if(uid < this.currUser) {
      id = uid + this.currUser;
    } else {
      id = this.currUser + uid;
    }

    this.db.collection("chat").doc(id).get()
    .then(doc => {
      if(!doc.exists) {
        var uids = [self.currUser,uid];
        var name = user[0].username;
        var usernames = [self.username,name];
        var chat = [];
        self.db.collection("chat").doc(id).set ({
          'usernames':usernames,
          'uid': uids,
          'chat':chat,
          'id':id
        })
      }
    })
  }

  send(message,id) {
    var self = this;
    var ref = this.db.collection("chat").doc(id)
    ref.update({
      chat: firebase.firestore.FieldValue.arrayUnion({
      'time': Date.now(),
      'name': self.username,
      'message': message
      })
    })
  }

}