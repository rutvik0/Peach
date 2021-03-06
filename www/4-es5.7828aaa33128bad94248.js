function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{X3zk:function(n,e,t){"use strict";t.r(e),t.d(e,"LoginPageModule",(function(){return m}));var o,i,r,a=t("ofXK"),s=t("3Pt+"),c=t("TEn/"),l=t("tyNb"),u=t("Osjz"),b=t("fXoL"),f=t("xdv0"),d=[{path:"",component:(o=function(){function n(e,t,o){_classCallCheck(this,n),this.router=e,this.formBuilder=t,this.userService=o,this.db=u.firestore(),this.imgfile="/assets/logo.png"}return _createClass(n,[{key:"ngOnInit",value:function(){this.new_item_form=this.formBuilder.group({email:new s.b("",s.m.required),password:new s.b("",s.m.required)})}},{key:"signup",value:function(){this.router.navigate(["/signup"])}},{key:"login",value:function(n){var e=this,t=n.email,o=n.password;u.auth().signInWithEmailAndPassword(t,o).then((function(n){var t=u.auth().currentUser;e.db.collection("users").where("uid","==",t.uid).get().then((function(n){n.forEach((function(n){var t=n.data().username,o=n.data().image,i=n.data().followers,r=n.data().following,a=n.data().posts,s=n.data().status,c=n.data().fullname,l=n.data().privateStat,u=n.id,b=n.data().saved;e.userService.setUsername(t,o,s,a,i,r,c,l,u,b)}))})).catch((function(n){console.log("Error getting documents: ",n)})),e.router.navigate(["/tabs/tab1"])})).catch((function(n){var e=n.code;console.log(e),"auth/wrong-password"===e?alert("Wrong password."):"auth/user-not-found"===e&&alert("User does not exist"),console.log(n)})),this.new_item_form.reset()}}]),n}(),o.\u0275fac=function(n){return new(n||o)(b.Jb(l.g),b.Jb(s.a),b.Jb(f.a))},o.\u0275cmp=b.Db({type:o,selectors:[["app-login"]],decls:23,vars:3,consts:[[1,"ion-padding"],[3,"src"],[3,"formGroup","submit"],["lines","none"],["type","text","formControlName","email","placeHolder","Email","required","",1,"place"],["type","password","formControlName","password","placeHolder","Password","required",""],["color","light","type","submit",1,"submit-btn",3,"disabled"],[3,"click"],[1,"text"]],template:function(n,e){1&n&&(b.Mb(0,"ion-content",0),b.Kb(1,"ion-img",1),b.Mb(2,"form",2),b.Ub("submit",(function(){return e.login(e.new_item_form.value)})),b.Mb(3,"ion-item",3),b.Kb(4,"ion-input",4),b.Lb(),b.Mb(5,"ion-item",3),b.Kb(6,"ion-input",5),b.Lb(),b.Mb(7,"ion-grid"),b.Mb(8,"ion-row"),b.Kb(9,"ion-col"),b.Mb(10,"ion-col"),b.Mb(11,"ion-button",6),b.ic(12,"Login"),b.Lb(),b.Lb(),b.Kb(13,"ion-col"),b.Lb(),b.Lb(),b.Lb(),b.Mb(14,"ion-grid"),b.Mb(15,"ion-row"),b.Kb(16,"ion-col"),b.Mb(17,"ion-col"),b.Mb(18,"ion-buttons"),b.Mb(19,"ion-button",7),b.Ub("click",(function(){return e.signup()})),b.Mb(20,"h6",8),b.ic(21,"Click Here to Signup"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Kb(22,"ion-col"),b.Lb(),b.Lb(),b.Lb()),2&n&&(b.zb(1),b.bc("src",e.imgfile),b.zb(1),b.bc("formGroup",e.new_item_form),b.zb(9),b.bc("disabled",!e.new_item_form.valid))},directives:[c.n,c.s,s.n,s.i,s.d,c.u,c.t,c.N,s.h,s.c,s.l,c.p,c.y,c.m,c.g,c.h],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#ffdab9}ion-button[_ngcontent-%COMP%]{border-color:#fff}ion-input[_ngcontent-%COMP%]{border-radius:10px;background:#ffe3ca;text-indent:20px}.text[_ngcontent-%COMP%]{font-size:x-small;color:#fff;font-weight:700}"]}),o)}],p=((r=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:r}),r.\u0275inj=b.Gb({factory:function(n){return new(n||r)},imports:[[l.i.forChild(d)],l.i]}),r),m=((i=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(n){return new(n||i)},imports:[[a.b,s.e,c.J,s.k,p]]}),i)}}]);