(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cRhG:function(i,e,t){"use strict";t.r(e),t.d(e,"ProfilePageModule",(function(){return z}));var n=t("ofXK"),o=t("3Pt+"),s=t("TEn/"),r=t("tyNb"),c=t("fXoL"),b=t("xdv0");function l(i,e){if(1&i&&(c.Mb(0,"ion-col",16),c.Kb(1,"img",17),c.Lb()),2&i){const i=e.$implicit;c.zb(1),c.bc("src",i.image,c.fc)}}function u(i,e){if(1&i&&(c.Mb(0,"ion-list"),c.Mb(1,"ion-grid"),c.Mb(2,"ion-row"),c.hc(3,l,2,1,"ion-col",15),c.Lb(),c.Lb(),c.Lb()),2&i){const i=c.Wb();c.zb(3),c.bc("ngForOf",i.userPosts)}}function a(i,e){if(1&i){const i=c.Nb();c.Mb(0,"ion-button",22),c.Ub("click",(function(){c.ec(i);const e=c.Wb().$implicit;return c.Wb(2).like(e)})),c.Kb(1,"ion-icon",27),c.Lb()}}function h(i,e){if(1&i){const i=c.Nb();c.Mb(0,"ion-button",22),c.Ub("click",(function(){c.ec(i);const e=c.Wb().$implicit;return c.Wb(2).unlike(e)})),c.Kb(1,"ion-icon",28),c.Lb()}}function g(i,e){if(1&i&&(c.Mb(0,"p"),c.Mb(1,"b"),c.ic(2),c.Lb(),c.ic(3),c.Lb()),2&i){const i=c.Wb().$implicit;c.zb(2),c.jc(i.username),c.zb(1),c.kc("\u200f\u200f\u200e \u200e",i.caption,"")}}function m(i,e){if(1&i){const i=c.Nb();c.Mb(0,"ion-label",29),c.Ub("click",(function(){c.ec(i);const e=c.Wb().$implicit;return c.Wb(2).comment(e)})),c.ic(1),c.Lb()}if(2&i){const i=c.Wb().$implicit;c.zb(1),c.kc(" View all ",null==i.comments?null:i.comments.length," comments...")}}function f(i,e){if(1&i&&(c.Mb(0,"ion-list",19),c.Mb(1,"p"),c.Mb(2,"b"),c.ic(3),c.Lb(),c.ic(4),c.Lb(),c.Lb()),2&i){const i=e.$implicit;c.zb(3),c.kc("\u200f\u200f\u200e",i.username,""),c.zb(1),c.kc("\u200f\u200f\u200e \u200e",i.comment," ")}}function p(i,e){if(1&i){const i=c.Nb();c.Mb(0,"ion-card"),c.Mb(1,"ion-card-header"),c.Mb(2,"ion-item",19),c.Mb(3,"ion-avatar"),c.Kb(4,"img",17),c.Lb(),c.Mb(5,"h6",20),c.ic(6),c.Lb(),c.Lb(),c.Lb(),c.Kb(7,"img",17),c.Mb(8,"ion-buttons"),c.hc(9,a,2,0,"ion-button",21),c.hc(10,h,2,0,"ion-button",21),c.Mb(11,"ion-button",22),c.Ub("click",(function(){c.ec(i);const t=e.$implicit;return c.Wb(2).comment(t)})),c.Kb(12,"ion-icon",23),c.Lb(),c.Lb(),c.Mb(13,"ion-card-content"),c.Mb(14,"p"),c.ic(15),c.Lb(),c.hc(16,g,4,2,"p",24),c.hc(17,m,2,1,"ion-label",25),c.hc(18,f,5,2,"ion-list",26),c.Lb(),c.Mb(19,"ion-label"),c.ic(20),c.Xb(21,"date"),c.Lb(),c.Lb()}if(2&i){const i=e.$implicit,t=c.Wb(2);c.zb(4),c.bc("src",i.userimg,c.fc),c.zb(2),c.kc("\u200f\u200f\u200e \u200e\u200f\u200f\u200e \u200e",i.username,""),c.zb(1),c.bc("src",i.image,c.fc),c.zb(2),c.bc("ngIf",!t.liked(i)),c.zb(1),c.bc("ngIf",t.liked(i)),c.zb(5),c.kc("",null==i.likes?null:i.likes.length," Likes"),c.zb(1),c.bc("ngIf",t.ifCaption(i)),c.zb(1),c.bc("ngIf",t.commentSize(i)),c.zb(1),c.bc("ngForOf",i.comments.slice(0,1)),c.zb(2),c.kc("\u200f\u200f\u200e \u200e",c.Yb(21,10,i.posted,"MM/dd/yyyy"),"")}}function d(i,e){if(1&i&&(c.Mb(0,"ion-list"),c.hc(1,p,22,13,"ion-card",18),c.Lb()),2&i){const i=c.Wb();c.zb(1),c.bc("ngForOf",i.userPosts)}}function M(i,e){if(1&i&&(c.Mb(0,"ion-col",16),c.Kb(1,"img",17),c.Lb()),2&i){const i=e.$implicit;c.zb(1),c.bc("src",i.image,c.fc)}}function L(i,e){if(1&i&&(c.Mb(0,"ion-list"),c.Mb(1,"ion-grid"),c.Mb(2,"ion-row"),c.hc(3,M,2,1,"ion-col",15),c.Lb(),c.Lb(),c.Lb()),2&i){const i=c.Wb();c.zb(3),c.bc("ngForOf",i.saved)}}const v=[{path:"",component:(()=>{class i{constructor(i,e){this.userService=i,this.router=e,this.currUser={posts:0,status:"",username:"",image:"",followers:0,following:0,fullname:"",privateStat:!0},this.profile_segment="grid",this.userPosts=[],this.saved=[],this.userService.getObservable().subscribe(i=>{this.currUser.posts=this.userPosts.length,this.currUser.username=this.userService.username,this.userPosts=this.userService.homePosts,this.saved=this.userService.savedPosts,this.currUser.image=this.userService.image,this.currUser.fullname=this.userService.fullname,this.currUser.followers=this.userService.followers.length,this.currUser.following=this.userService.following.length,this.currUser.status=this.userService.status,this.currUser.privateStat=this.userService.privateStat,this.userPosts.sort((i,e)=>i.posted<e.posted?1:-1)}),this.saved=this.userService.savedPosts,this.userPosts=this.userService.homePosts,this.currUser.posts=this.userPosts.length,this.currUser.username=this.userService.username,this.currUser.image=this.userService.image,this.currUser.fullname=this.userService.fullname,this.currUser.followers=this.userService.followers.length,this.currUser.following=this.userService.following.length,this.currUser.status=this.userService.status,this.currUser.privateStat=this.userService.privateStat,this.userPosts.sort((i,e)=>i.posted<e.posted?1:-1)}ngOnInit(){}goToEdit(){this.router.navigate(["/edit"])}goToFollowers(){this.router.navigate(["/followers"])}commentSize(i){var e=!1;return 0!==i.comments.length&&(e=!0),e}liked(i){var e=!1;for(let t of i.likes)t==this.userService.userDoc&&(e=!0);return e}ifCaption(i){var e=!1;return 0!==i.caption.length&&(e=!0),e}like(i){this.userService.like(i),i.likes.push(this.userService.userDoc)}unlike(i){}comment(i){this.router.navigate(["/comments",i])}}return i.\u0275fac=function(e){return new(e||i)(c.Jb(b.a),c.Jb(r.g))},i.\u0275cmp=c.Db({type:i,selectors:[["app-profile"]],decls:44,vars:11,consts:[["lines","full"],[1,"ion-padding"],[1,"avatar",3,"src"],[1,"ion-text-center"],[1,"ion-text-center",3,"click"],["size","default","expand","block",1,"edit-button",3,"click"],[3,"ngModel","ngModelChange"],["value","grid"],["name","apps"],["value","list"],["name","browsers-sharp"],["value","saved"],["name","bookmark"],[3,"ngSwitch"],[4,"ngSwitchCase"],["sizeLg","4","sizeMd","4","sizeXs","4",4,"ngFor","ngForOf"],["sizeLg","4","sizeMd","4","sizeXs","4"],[3,"src"],[4,"ngFor","ngForOf"],["lines","none"],[2,"font-weight","bold"],[3,"click",4,"ngIf"],[3,"click"],["name","chatbubble-outline"],[4,"ngIf"],["class","color",3,"click",4,"ngIf"],["lines","none",4,"ngFor","ngForOf"],["name","heart-outline"],["name","heart","color","danger",1,"border"],[1,"color",3,"click"]],template:function(i,e){1&i&&(c.Mb(0,"ion-content"),c.Mb(1,"ion-item",0),c.Mb(2,"ion-row",1),c.Mb(3,"ion-col"),c.Kb(4,"img",2),c.Lb(),c.Mb(5,"ion-col",3),c.Mb(6,"h6"),c.ic(7),c.Lb(),c.Mb(8,"p"),c.Mb(9,"strong"),c.ic(10,"Posts"),c.Lb(),c.Lb(),c.Lb(),c.Mb(11,"ion-col",4),c.Ub("click",(function(){return e.goToFollowers()})),c.Mb(12,"h6"),c.ic(13),c.Lb(),c.Mb(14,"p"),c.Mb(15,"strong"),c.ic(16,"Followers"),c.Lb(),c.Lb(),c.Lb(),c.Mb(17,"ion-col",3),c.Mb(18,"h6"),c.ic(19),c.Lb(),c.Mb(20,"p"),c.Mb(21,"strong"),c.ic(22,"Following"),c.Lb(),c.Lb(),c.Lb(),c.Mb(23,"ion-col"),c.Mb(24,"ion-button",5),c.Ub("click",(function(){return e.goToEdit()})),c.ic(25,"Edit your profile"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(26,"div",1),c.Mb(27,"p"),c.Mb(28,"b"),c.ic(29),c.Lb(),c.Lb(),c.Mb(30,"p"),c.ic(31),c.Lb(),c.Lb(),c.Mb(32,"div"),c.Mb(33,"ion-segment",6),c.Ub("ngModelChange",(function(i){return e.profile_segment=i})),c.Mb(34,"ion-segment-button",7),c.Kb(35,"ion-icon",8),c.Lb(),c.Mb(36,"ion-segment-button",9),c.Kb(37,"ion-icon",10),c.Lb(),c.Mb(38,"ion-segment-button",11),c.Kb(39,"ion-icon",12),c.Lb(),c.Lb(),c.Lb(),c.Mb(40,"div",13),c.hc(41,u,4,1,"ion-list",14),c.hc(42,d,2,1,"ion-list",14),c.hc(43,L,4,1,"ion-list",14),c.Lb(),c.Lb()),2&i&&(c.zb(4),c.bc("src",e.currUser.image,c.fc),c.zb(3),c.jc(e.currUser.posts),c.zb(6),c.jc(e.currUser.followers),c.zb(6),c.jc(e.currUser.following),c.zb(10),c.jc(e.currUser.fullname),c.zb(2),c.jc(e.currUser.status),c.zb(2),c.bc("ngModel",e.profile_segment),c.zb(7),c.bc("ngSwitch",e.profile_segment),c.zb(1),c.bc("ngSwitchCase","grid"),c.zb(1),c.bc("ngSwitchCase","list"),c.zb(1),c.bc("ngSwitchCase","saved"))},directives:[s.n,s.u,s.y,s.m,s.g,s.A,s.M,o.h,o.j,s.B,s.r,n.k,n.l,s.w,s.p,n.i,s.i,s.k,s.d,s.h,n.j,s.j,s.v],pipes:[n.d],styles:[".indent[_ngcontent-%COMP%]{padding-left:180px}.avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:600px!important;max-height:600px!important;border-radius:30px}ion-card-header[_ngcontent-%COMP%]{padding:0}.black[_ngcontent-%COMP%], ion-card-content[_ngcontent-%COMP%]{color:#000}.color[_ngcontent-%COMP%]{color:grey}.size[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:30px!important;max-height:30px!important}.center[_ngcontent-%COMP%]{margin:auto}"]}),i})()}];let w=(()=>{class i{}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(e){return new(e||i)},imports:[[r.i.forChild(v)],r.i]}),i})(),z=(()=>{class i{}return i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({factory:function(e){return new(e||i)},imports:[[n.b,o.e,s.J,w]]}),i})()}}]);