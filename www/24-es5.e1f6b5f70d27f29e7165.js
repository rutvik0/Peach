function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{zFnc:function(e,t,r){"use strict";r.r(t),r.d(t,"EditPageModule",(function(){return f}));var n,i,a,o=r("ofXK"),s=r("3Pt+"),u=r("TEn/"),c=r("tyNb"),l=r("mrSG"),b=r("Osjz"),g=r("fXoL"),d=r("xdv0"),m=r("a/9d"),h=[{path:"",component:(n=function(){function e(t,r,n,i){var a=this;_classCallCheck(this,e),this.router=t,this.alertCtrl=r,this.userService=n,this.camera=i,this.currUser={status:"",username:"",image:"",fullname:"",privateStat:!0},this.original={status:"",username:"",image:"",fullname:"",privateStat:!0},this.randomId=Math.random().toString(36).substr(2,5),this.userService.getObservable().subscribe((function(e){a.currUser.username=a.userService.username,a.currUser.image=a.userService.image,a.currUser.fullname=a.userService.fullname,a.currUser.status=a.userService.status,a.currUser.privateStat=a.userService.privateStat,a.original.username=a.userService.username,a.original.image=a.userService.image,a.original.fullname=a.userService.fullname,a.original.status=a.userService.status,a.original.privateStat=a.userService.privateStat})),this.currUser.username=this.userService.username,this.currUser.image=this.userService.image,this.currUser.fullname=this.userService.fullname,this.currUser.status=this.userService.status,this.currUser.privateStat=this.userService.privateStat,this.original.username=this.userService.username,this.original.image=this.userService.image,this.original.fullname=this.userService.fullname,this.original.status=this.userService.status,this.original.privateStat=this.userService.privateStat}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"editPhoto",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({header:"Upload or Remove",message:"Do you want to upload your profile or remove?",buttons:[{text:"Cancel",role:"cancel",handler:function(){console.log("Cancel button clicked")}},{text:"Capture",role:"capture",handler:function(){console.log("Upload button clicked"),r.takePic(1)}},{text:"Galery",role:"gallery",handler:function(){console.log("Upload button clicked"),r.takePic(0)}},{text:"Remove",role:"remove",handler:function(){r.removePic(),r.currUser.image="assets/avatar.png"}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"logout",value:function(){b.auth().signOut().then((function(){console.log("You are logged Out. Good Bye!!")})).catch((function(e){})),this.router.navigate(["/login"])}},{key:"removePic",value:function(){"assets/avatar.png"!=this.currUser.image?(this.currUser.image="assets/avatar.png",this.userService.removeProfilePic()):console.log("No image available")}},{key:"takePic",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=this,this.camera.getPicture({quality:50,destinationType:this.camera.DestinationType.DATA_URL,targetHeight:400,targetWidth:400,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0,sourceType:e}).then((function(e){var t="data:image/jpeg;base64,".concat(e);b.storage().ref(n.randomId).putString(t,"data_url"),setTimeout((function(){b.storage().ref().child(n.randomId).getDownloadURL().then((function(e){r.currUser.image=e,r.userService.updateImage(e)}))}),2e3)}));case 2:case"end":return t.stop()}}),t,this)})))}},{key:"apply",value:function(){this.userService.updateProfile(this.currUser.fullname,this.currUser.username,this.currUser.status,this.currUser.privateStat)}}]),e}(),n.\u0275fac=function(e){return new(e||n)(g.Jb(c.g),g.Jb(u.a),g.Jb(d.a),g.Jb(m.a))},n.\u0275cmp=g.Db({type:n,selectors:[["app-edit"]],decls:35,vars:6,consts:[["slot","start"],["slot","end"],[3,"click"],["name","log-out-outline"],[1,"ion-padding"],[3,"src"],["lines","none",1,"ion-text-center",3,"click"],[1,"blue"],["lines","none"],["color","primary","position","floating"],["rows","1","type","text","required","",3,"ngModel","ngModelChange"],["cols","1","rows","1","type","text","required","",3,"ngModel","ngModelChange"],["type","text","required","",3,"ngModel","ngModelChange"],["color","primary"],[3,"ngModel","ngModelChange"],["expand","block",1,"ion-padding",3,"disabled","click"]],template:function(e,t){1&e&&(g.Mb(0,"ion-header"),g.Mb(1,"ion-toolbar"),g.Mb(2,"ion-title"),g.ic(3,"Edit Profile"),g.Lb(),g.Mb(4,"ion-buttons",0),g.Kb(5,"ion-back-button"),g.Lb(),g.Mb(6,"ion-buttons",1),g.Mb(7,"ion-button",2),g.Ub("click",(function(){return t.logout()})),g.Kb(8,"ion-icon",3),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(9,"ion-content",4),g.Mb(10,"ion-avatar",4),g.Kb(11,"img",5),g.Lb(),g.Mb(12,"ion-item",6),g.Ub("click",(function(){return t.editPhoto()})),g.Mb(13,"ion-label"),g.Mb(14,"h6",7),g.Mb(15,"u"),g.ic(16,"Update Profile Picture"),g.Lb(),g.Lb(),g.Lb(),g.Lb(),g.Mb(17,"ion-item",8),g.Mb(18,"ion-label",9),g.ic(19,"Full Name"),g.Lb(),g.Mb(20,"ion-textarea",10),g.Ub("ngModelChange",(function(e){return t.currUser.fullname=e})),g.Lb(),g.Lb(),g.Mb(21,"ion-item",8),g.Mb(22,"ion-label",9),g.ic(23,"Username"),g.Lb(),g.Mb(24,"ion-textarea",11),g.Ub("ngModelChange",(function(e){return t.currUser.username=e})),g.Lb(),g.Lb(),g.Mb(25,"ion-item",8),g.Mb(26,"ion-label",9),g.ic(27,"Status"),g.Lb(),g.Mb(28,"ion-textarea",12),g.Ub("ngModelChange",(function(e){return t.currUser.status=e})),g.Lb(),g.Lb(),g.Mb(29,"ion-item",8),g.Mb(30,"ion-label",13),g.ic(31,"Private Profile"),g.Lb(),g.Mb(32,"ion-toggle",14),g.Ub("ngModelChange",(function(e){return t.currUser.privateStat=e})),g.Lb(),g.Lb(),g.Mb(33,"ion-button",15),g.Ub("click",(function(){return t.apply()})),g.ic(34,"Apply Changes"),g.Lb(),g.Lb()),2&e&&(g.zb(11),g.bc("src",t.currUser.image,g.fc),g.zb(9),g.bc("ngModel",t.currUser.fullname),g.zb(4),g.bc("ngModel",t.currUser.username),g.zb(4),g.bc("ngModel",t.currUser.status),g.zb(4),g.bc("ngModel",t.currUser.privateStat),g.zb(1),g.bc("disabled",!(t.currUser.username!==t.original.username||t.currUser.fullname!==t.original.fullname||t.currUser.status!==t.original.status||t.currUser.privateStat!==t.original.privateStat)))},directives:[u.q,u.I,u.G,u.h,u.e,u.f,u.g,u.r,u.n,u.d,u.u,u.v,u.F,u.N,s.l,s.h,s.j,u.H,u.b],styles:["ion-avatar[_ngcontent-%COMP%]{margin:auto;display:block;width:100%!important;height:100%!important;max-width:200px!important;max-height:200px!important}ion-content[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]{--ion-background-color:#ffdab9}ion-textarea[_ngcontent-%COMP%]{padding-left:10px}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{border-radius:10px;background:#ffe3ca}ion-input[_ngcontent-%COMP%]{text-indent:20px}.blue[_ngcontent-%COMP%]{color:#00f;border-bottom:#00f}"]}),n)}],p=((a=function e(){_classCallCheck(this,e)}).\u0275mod=g.Hb({type:a}),a.\u0275inj=g.Gb({factory:function(e){return new(e||a)},imports:[[c.i.forChild(h)],c.i]}),a),f=((i=function e(){_classCallCheck(this,e)}).\u0275mod=g.Hb({type:i}),i.\u0275inj=g.Gb({factory:function(e){return new(e||i)},imports:[[o.b,s.e,u.J,p]]}),i)}}]);