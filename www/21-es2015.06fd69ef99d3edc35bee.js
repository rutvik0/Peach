(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2yxt":function(n,e,t){"use strict";t.r(e),t.d(e,"ChatPageModule",(function(){return f}));var o=t("ofXK"),s=t("3Pt+"),i=t("TEn/"),a=t("tyNb"),c=t("Osjz"),r=t("fXoL"),g=t("xdv0");function b(n,e){if(1&n&&(r.Mb(0,"div",14),r.Mb(1,"div",15),r.Mb(2,"div",16),r.Mb(3,"p",17),r.ic(4),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&n){const n=r.Wb().$implicit;r.zb(4),r.jc(n.message)}}function d(n,e){if(1&n&&(r.Mb(0,"div",18),r.Mb(1,"div",15),r.Kb(2,"div",19),r.Mb(3,"div",16),r.Mb(4,"p",17),r.ic(5),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&n){const n=r.Wb().$implicit;r.zb(5),r.jc(n.message)}}function m(n,e){if(1&n&&(r.Mb(0,"div",11),r.hc(1,b,5,1,"div",12),r.hc(2,d,6,1,"div",13),r.Lb()),2&n){const n=e.$implicit,t=r.Wb();r.zb(1),r.bc("ngIf",n.name!==t.name),r.zb(1),r.bc("ngIf",n.name===t.name)}}const l=[{path:"",component:(()=>{class n{constructor(n,e){this.route=n,this.userService=e,this.db=c.firestore(),this.messages=[],this.newmessage="",this.name="";var t=this;this.name=this.userService.username,setTimeout(()=>{t.db.collection("chat").doc(t.chat.id).onSnapshot(n=>{var e=n.data();t.messages=e.chat})},50)}ngOnInit(){this.route.params.subscribe(n=>{this.chat=n})}send(){this.newmessage.length>0&&(this.userService.send(this.newmessage,this.chat.id),this.newmessage="")}}return n.\u0275fac=function(e){return new(e||n)(r.Jb(a.a),r.Jb(g.a))},n.\u0275cmp=r.Db({type:n,selectors:[["app-chat"]],decls:19,vars:3,consts:[["slot","start"],[1,"ion-padding"],[1,"innermsg"],["id","chat-container"],[1,"line-style"],[1,"message-wrap"],["class","message",4,"ngFor","ngForOf"],[1,"footer"],["minlength","1","cols","1","rows","1","type","text","placeholder","Write comment here...",3,"ngModel","ngModelChange"],["shape","round",3,"click"],["name","send-outline"],[1,"message"],["class","message-left",4,"ngIf"],["class","message-right",4,"ngIf"],[1,"message-left"],[1,"msg-detail"],[1,"msg-content"],[1,"line-breaker"],[1,"message-right"],[1,"msg-info"]],template:function(n,e){1&n&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-title"),r.ic(3),r.Lb(),r.Mb(4,"ion-buttons",0),r.Kb(5,"ion-back-button"),r.Lb(),r.Lb(),r.Lb(),r.Mb(6,"ion-content",1),r.Mb(7,"div",2),r.Mb(8,"div",3),r.Kb(9,"span",4),r.Kb(10,"hr"),r.Mb(11,"div",5),r.hc(12,m,3,2,"div",6),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(13,"ion-footer",7),r.Mb(14,"ion-row"),r.Mb(15,"ion-textarea",8),r.Ub("ngModelChange",(function(n){return e.newmessage=n})),r.Lb(),r.Mb(16,"ion-buttons"),r.Mb(17,"ion-button",9),r.Ub("click",(function(){return e.send()})),r.Kb(18,"ion-icon",10),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&n&&(r.zb(3),r.jc(e.chat.username),r.zb(9),r.bc("ngForOf",e.messages),r.zb(3),r.bc("ngModel",e.newmessage))},directives:[i.q,i.I,i.G,i.h,i.e,i.f,i.n,o.i,i.o,i.y,i.F,i.N,s.f,s.h,s.j,i.g,i.r,o.j],styles:["ion-textarea[_ngcontent-%COMP%]{margin-left:10px;border-radius:10px!important;background:#ffe3ca}ion-footer[_ngcontent-%COMP%]{padding-bottom:9px;padding-left:2px}ion-content[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]{--ion-background-color:#ffdab9}.footer[_ngcontent-%COMP%]{background-color:#ffdab9;background:#ffdab9}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{position:relative;padding:7px 0;border-radius:40px!important}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]{width:100%;display:inline-block;position:relative}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px}.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{position:relative;border-radius:10px!important;padding:8px;width:auto;max-width:80%;min-width:3%}.message-wrap[_ngcontent-%COMP%]   .message-left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{float:left;position:relative;background:#fff;color:#000}.message-wrap[_ngcontent-%COMP%]   .message-right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]{text-align:right}.message-wrap[_ngcontent-%COMP%]   .message-right[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]{float:right;color:#2a2828;background:#eee2df}"]}),n})()}];let p=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(e){return new(e||n)},imports:[[a.i.forChild(l)],a.i]}),n})(),f=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(e){return new(e||n)},imports:[[o.b,s.e,i.J,p]]}),n})()}}]);