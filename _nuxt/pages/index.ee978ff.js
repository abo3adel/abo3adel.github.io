(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{241:function(t,e){var r=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(a,b){var t,e,o,l,c;for(o in b)if(t=a[o],e=b[o],t&&r.test(o))if("class"===o&&("string"==typeof t&&(c=t,a[o]=t={},t[c]=!0),"string"==typeof e&&(c=e,b[o]=e={},e[c]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(l in e)t[l]=n(t[l],e[l]);else if(Array.isArray(t))a[o]=t.concat(e);else if(Array.isArray(e))a[o]=[t].concat(e);else for(l in e)t[l]=e[l];else a[o]=b[o];return a}),{})}},242:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(241),o=r.n(n),l=function(){return Math.random().toString(36).substring(2)},c={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var r=e.props,data=e.data,n=e.children,c=r.uniqueKey?r.uniqueKey+"-idClip":l(),d=r.uniqueKey?r.uniqueKey+"-idGradient":l();return t("svg",o()([data,{attrs:{viewBox:"0 0 "+r.width+" "+r.height,version:"1.1",preserveAspectRatio:r.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+r.baseUrl+"#"+d+")"},attrs:{"clip-path":"url("+r.baseUrl+"#"+c+")",x:"0",y:"0",width:r.width,height:r.height}}),t("defs",[t("clipPath",{attrs:{id:c}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:r.width,height:r.height}})]),t("linearGradient",{attrs:{id:d}},[t("stop",{attrs:{offset:"0%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":r.secondaryColor,"stop-opacity":r.secondaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:r.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":r.primaryColor,"stop-opacity":r.primaryOpacity}},[r.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:r.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},247:function(t,e,r){var content=r(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("12a35d94",content,!0,{sourceMap:!1})},248:function(t,e,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("78ade334",content,!0,{sourceMap:!1})},251:function(t,e,r){"use strict";r.r(e),r.d(e,"defaultProject",(function(){return j}));r(17),r(18),r(9),r(69);var n=r(114),o=(r(21),r(3)),l=(r(232),r(23)),c=r(33),d=r(31),h=r(32),f=r(19),v=r(8),m=r(4),y=r(238),_=r(242);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var C=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},j={id:0,title:"",client:"",img:[],link:"",info:"",updated_at:"",type:"",tags:[]},w=function(t){Object(d.a)(f,t);var e,h=x(f);function f(){var t;return Object(l.a)(this,f),(t=h.apply(this,arguments)).projects=[],t.allProjects=[],t.projectsLoad=Array(5).fill(3),t.mp=j,t.activeType="all",t.projectsTypes=[{txt:t.$i18n.t("home.pills.all"),val:"all"},{txt:t.$i18n.t("home.pills.laravel"),val:"laravel"},{txt:t.$i18n.t("home.pills.spa"),val:"spa"},{txt:t.$i18n.t("home.pills.mobile"),val:"mobile"}],t.carousel={current:1,amount:t.mp.img.length,interval:{}},t}return Object(c.a)(f,[{key:"loadProjects",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(17).then(r.t.bind(null,331,3)).then((function(t){return t.default||t}));case 2:if(e=t.sent,this.projectsLoad.splice(0),e){t.next=7;break}return this.$nf.error(),t.abrupt("return");case 7:this.allProjects=e,this.projects=Object(n.a)(e);case 9:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"filterProjects",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.allProjects.length){if(this.projects.splice(0),this.projectsLoad=Array(5).fill(3),this.activeType=t,"all"===t)return this.projects=Object(n.a)(this.allProjects),void this.projectsLoad.splice(0);var e=this.allProjects.filter((function(e){return e.type===t}));this.projects=Object(n.a)(e),this.projectsLoad.splice(0)}}},{key:"removeItem",value:function(t){this.allProjects=Object(n.a)(this.allProjects.filter((function(e){return e.id!==t}))),this.filterProjects(this.activeType)}},{key:"addItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?this.allProjects=this.allProjects.map((function(e){return e.id===t.id&&(e=t),e})):this.allProjects.unshift(t),this.filterProjects(this.activeType)}},{key:"openModal",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=this.projects.filter((function(t){return t.id===e}));Object.assign(this.mp,r[0]),this.carousel.amount=r[0].img.length,new Modal(document.querySelector("#modalProject")).show(),this.carousel.current=1,this.carousel.interval=setInterval((function(){t.next()}),5e3)}},{key:"resetInterval",value:function(){var t=this;clearInterval(this.carousel.interval),this.carousel.interval=setInterval((function(){t.next()}),5e3)}},{key:"move",value:function(t){this.slides.forEach((function(e,r){e.classList.remove("active"),r===t&&e.classList.add("active")})),this.resetInterval()}},{key:"next",value:function(){this.carousel.current>=this.carousel.amount&&(this.carousel.current=0),this.move(this.carousel.current++)}},{key:"prev",value:function(){this.carousel.current<1&&(this.carousel.current=this.carousel.amount),this.move(--this.carousel.current)}},{key:"mounted",value:function(){var t=this;this.loadProjects(),document.getElementById("modalProject").addEventListener("hidden.bs.modal",(function(){clearInterval(t.carousel.interval)}))}},{key:"destroyed",value:function(){clearInterval(this.carousel.interval),document.getElementById("modalProject").removeEventListener("hidden.bs.modal",(function(){}))}}]),f}(m.d);C([Object(m.c)("slide")],w.prototype,"slides",void 0),C([Object(m.b)({type:Boolean,default:!1})],w.prototype,"auth",void 0);var k=w=C([Object(m.a)({components:{Card:y.default,ContentLoader:_.a}})],w),O=(r(263),r(265),r(22)),component=Object(O.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("ul",{staticClass:"nav nav-pills"},t._l(t.projectsTypes,(function(e){return r("li",{key:e.txt,staticClass:"nav-item"},[r("a",{staticClass:"nav-link",class:{active:t.activeType===e.val},attrs:{href:"#"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.filterProjects(e.val)}}},[t._v("\n                    "+t._s(e.txt)+"\n                ")])])})),0),t._v(" "),r("div",{staticClass:"mt-3"},[r("div",{staticClass:"row"},t._l(t.projectsLoad,(function(e){return r("div",{key:e*Math.random(),staticClass:"col-12 col-sm-6 col-md-4 col-xl-4 mb-3"},[r("content-loader",{staticClass:"card card-body bg-transparent border-light p-0 m-0",attrs:{width:240,height:130,primaryColor:"#dbdbdb",secondaryColor:"#6b6b6b"}},[r("rect",{attrs:{x:"9",y:"25",rx:"4",ry:"4",width:"225",height:"15"}}),t._v(" "),r("rect",{attrs:{x:"9",y:"65",rx:"4",ry:"4",width:"90",height:"18"}}),t._v(" "),r("rect",{attrs:{x:"115",y:"65",rx:"4",ry:"4",width:"120",height:"18"}}),t._v(" "),r("rect",{attrs:{x:"15",y:"105",rx:"4",ry:"4",width:"63",height:"19"}}),t._v(" "),r("rect",{attrs:{x:"90",y:"105",rx:"4",ry:"4",width:"63",height:"19"}}),t._v(" "),r("rect",{attrs:{x:"165",y:"105",rx:"4",ry:"4",width:"63",height:"19"}})])],1)})),0),t._v(" "),r("transition-group",{staticClass:"row",attrs:{name:"projects",tag:"div"}},t._l(t.projects,(function(e){return r("div",{key:e.id+e.title,staticClass:"col-12 col-sm-6 col-md-3 mb-3 project-card"},[r("card",{attrs:{overlay:!0,cls:"text-left"}},[r("template",{slot:"img"},[r("span",{staticClass:"projectType badge badge-danger text-uppercase position-absolute",staticStyle:{top:"0",right:"0"}},[t._v("\n                                "+t._s(e.type)+"\n                            ")]),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/projects/"+e.img[0],expression:"'/img/projects/' + project.img[0]"}],staticClass:"card-img"})]),t._v(" "),r("h5",{staticClass:"card-title"},[r("a",{staticClass:"text-light",attrs:{href:e.link,target:"_blank"}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])]),t._v(" "),r("p",{staticClass:"card-text"},[r("strong",{staticClass:"text-capitalize"},[t._v(t._s(t.$t("home.project.client"))+":")]),t._v(" "),r("span",{staticClass:"text-capitalize"},[t._v("\n                                "+t._s(e.client)+"\n                            ")])]),t._v(" "),r("p",{staticClass:"card-text text-center"},[r("a",{staticClass:"btn btn-primary btn-sm mb-2",attrs:{href:e.link,target:"_blank"}},[r("i",{staticClass:"fas fa-link"}),t._v("\n                                "+t._s(t.$t("home.project.visit"))+"\n                            ")]),t._v(" "),r("button",{staticClass:"btn btn-info btn-sm mb-2",on:{click:function(r){return r.preventDefault(),t.openModal(e.id)}}},[r("span",{staticClass:"spinner-border spinner-border-sm d-none",attrs:{id:"spinnerView"+e.id,role:"status","aria-hidden":"true"}}),t._v(" "),r("i",{staticClass:"fas fa-info"}),t._v("\n                                "+t._s(t.$t("home.project.more_info"))+"\n                            ")]),t._v(" "),e.download_url.length?r("a",{staticClass:"btn btn-primary btn-sm mb-2",attrs:{href:e.download_url,target:"_blank"}},[r("i",{staticClass:"fas fa-download"}),t._v("\n                                "+t._s(t.$t("home.project.download"))+"\n                            ")]):t._e()]),t._v(" "),t.auth?r("p",{staticClass:"card-text"},[r("button",{staticClass:"btn btn-warning mx-1 mb-2 text-uppercase",on:{click:function(r){return r.preventDefault(),t.$emit("edit",e)}}},[r("i",{staticClass:"fas fa-edit"}),t._v("\n                                Edit\n                            ")]),t._v(" "),r("button",{staticClass:"btn btn-danger mx-1 mb-2 text-uppercase",on:{click:function(r){return r.preventDefault(),t.$emit("delete",e.id)}}},[r("i",{staticClass:"fas fa-trash-alt",attrs:{id:"del"+e.id}}),t._v("\n                                Delete\n                            ")])]):t._e(),t._v(" "),r("template",{slot:"footer"},[r("div",{staticClass:"text-center"},t._l(e.tags,(function(n){return r("span",{key:n.id+e.title+Math.random(),staticClass:"badge badge-primary p-1 m-1"},[t._v("\n                                    "+t._s(n.title)+"\n                                ")])})),0)])],2)],1)})),0)],1)]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"modalProject",tabindex:"-1",role:"dialog","aria-labelledby":"modalProjectLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[r("div",{staticClass:"modal-content bg-dark"},[r("div",{staticClass:"modal-header bg-primary"},[r("h5",{staticClass:"modal-title",attrs:{id:"modalProjectLabel"}},[t._v("\n                        "+t._s(t.mp.title)+"\n                    ")]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"carousel slide",attrs:{id:"project-carousel","data-ride":"carousel"}},[r("div",{staticClass:"carousel-inner"},t._l(t.mp.img,(function(i,e){return r("div",{key:i+Math.random(),ref:"slide",refInFor:!0,staticClass:"carousel-item",class:{active:0===e},attrs:{"data-interval":"5000"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/img/projects/"+i,expression:"'/img/projects/' + i"}],staticClass:"d-block w-100 p-img",attrs:{alt:t.mp.title}})])})),0),t._v(" "),r("a",{staticClass:"carousel-control-prev",attrs:{href:"#project-carousel",role:"button","data-slide":"prev"},on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[r("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("Previous")])]),t._v(" "),r("a",{staticClass:"carousel-control-next",attrs:{href:"#project-carousel",role:"button","data-slide":"next"},on:{click:function(e){return e.preventDefault(),t.next(e)}}},[r("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"sr-only"},[t._v("Next")])])]),t._v(" "),r("p",{staticClass:"pt-3"},[t._v("\n                        "+t._s(t.mp.info)+"\n                    ")])]),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n                        "+t._s(t.$t("home.modal.close"))+"\n                    ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}],!1,null,"54ef932f",null);e.default=component.exports;installComponents(component,{Card:r(238).default})},263:function(t,e,r){"use strict";var n=r(247);r.n(n).a},264:function(t,e,r){(e=r(70)(!1)).push([t.i,".project-card[data-v-54ef932f]{transition:all 1s}.project-card .card-img[data-v-54ef932f]{width:100%;height:30vh}.projects-enter[data-v-54ef932f],.projects-leave-to[data-v-54ef932f]{opacity:0;transform:translateY(30px)}.projects-leave-active[data-v-54ef932f]{position:absolute}",""]),t.exports=e},265:function(t,e,r){"use strict";var n=r(248);r.n(n).a},266:function(t,e,r){(e=r(70)(!1)).push([t.i,"@media(min-width:577px){.project-card .card-img{height:30vh!important}}@media(min-width:769px){.project-card .card-img{height:35vh!important}}@media(min-width:993px){.project-card .card-img{height:40vh}}.p-img{height:40vh}@media(min-width:577px){.p-img{height:40vh}}@media(min-width:769px){.p-img{height:60vh}}",""]),t.exports=e},268:function(t,e,r){var content=r(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("680992a5",content,!0,{sourceMap:!1})},269:function(t,e,r){var content=r(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("46aa34b7",content,!0,{sourceMap:!1})},270:function(t,e,r){var content=r(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("6610d69e",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(9),r(69),r(233),r(232);var n=r(23),o=r(33),l=r(31),c=r(32),d=r(19),h=r(8),f=r(4);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(l.a)(r,t);var e=v(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).interval={},t.width=window.innerWidth,t.height=window.innerHeight,t.config={particleNumber:50,maxParticleSize:11,maxSpeed:5,colorVariation:255},t.colorPalette={bg:{r:12,g:9,b:29},matter:[{r:36,g:18,b:42},{r:78,g:36,b:42},{r:252,g:178,b:96},{r:253,g:238,b:152}]},t.particles=[],t.centerX=t.width/2,t.centerY=t.height/2,t.support={animationFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame},t}return Object(o.a)(r,[{key:"drawBg",value:function(t,e){this.ctx.fillStyle="rgb("+e.r+","+e.g+","+e.b+")",this.ctx.fillRect(0,0,this.width,this.height)}},{key:"createParticle",value:function(t,e){return{x:t=t||Math.round(Math.random()*this.width),y:e=e||Math.round(Math.random()*this.height),r:Math.ceil(Math.random()*this.config.maxParticleSize),c:this.colorVariation(this.colorPalette.matter[Math.floor(Math.random()*this.colorPalette.matter.length)],!0),s:Math.pow(Math.ceil(Math.random()*this.config.maxSpeed),.7),d:Math.round(360*Math.random())}}},{key:"colorVariation",value:function(t,e){var r,g,b,a;return r=Math.round(Math.random()*this.config.colorVariation-this.config.colorVariation/2+t.r),g=Math.round(Math.random()*this.config.colorVariation-this.config.colorVariation/2+t.g),b=Math.round(Math.random()*this.config.colorVariation-this.config.colorVariation/2+t.b),a=Math.random()+.5,e?"rgba("+r+","+g+","+b+","+a+")":{r:r,g:g,b:b,a:a}}},{key:"updateParticleModel",value:function(p){var a=180-(p.d+90);return p.d>0&&p.d<180?p.x+=p.s*Math.sin(p.d)/Math.sin(p.s):p.x-=p.s*Math.sin(p.d)/Math.sin(p.s),p.d>90&&p.d<270?p.y+=p.s*Math.sin(a)/Math.sin(p.s):p.y-=p.s*Math.sin(a)/Math.sin(p.s),p}},{key:"drawParticle",value:function(t,e,r,n){this.ctx.beginPath(),this.ctx.fillStyle=n,this.ctx.arc(t,e,r,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.closePath()}},{key:"cleanUpArray",value:function(){this.particles.splice(0)}},{key:"initParticles",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=0;i<t;i++)this.particles.push(this.createParticle(e,r));var n=this;this.particles.forEach((function(p){n.drawParticle(p.x,p.y,p.r,p.c)}))}},{key:"requestAnimFrame",value:function(t){return this.support.animationFrame.call(window,t)}},{key:"frame",value:function(){var t=this;this.drawBg(this.ctx,this.colorPalette.bg),this.particles.map((function(p){return t.updateParticleModel(p)})),this.particles.forEach((function(p){t.drawParticle(p.x,p.y,p.r,p.c)})),this.requestAnimFrame(this.frame)}},{key:"mounted",value:function(){var t=this;this.el=this.$el,this.ctx=this.el.getContext("2d"),!1===this.$props.fullHeight&&(this.el.height=this.$props.ch),this.frame(),this.initParticles(this.config.particleNumber),this.interval=setInterval((function(e){t.cleanUpArray(),t.initParticles(t.config.particleNumber)}),8e3);document.querySelector("#navbar-top");document.querySelector("#canvasHeader").style.height="".concat(window.innerHeight,"px")}},{key:"destroyed",value:function(){clearInterval(this.interval)}}]),r}(f.d);m([Object(f.b)({type:Boolean,default:!0})],y.prototype,"fullHeight",void 0),m([Object(f.b)({type:Number})],y.prototype,"ch",void 0);var _=y=m([f.a],y),x=r(22),component=Object(x.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{staticClass:"w-100 h-100",attrs:{id:"canvas",width:this.width,height:this.height}})}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(9),r(69);var n=r(23),o=r(33),l=r(31),c=r(32),d=r(19),h=r(8),f=r(4);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(l.a)(r,t);var e=v(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).i=0,t.j=0,t.str=t.arr[3],t.speed=90,t.interval={},t}return Object(o.a)(r,[{key:"typeWriter",value:function(){this.arr[this.i]&&this.j>=this.arr[this.i].length||(this.str+=this.arr[this.i].charAt(this.j),this.j++,setTimeout(this.typeWriter,this.speed))}},{key:"mounted",value:function(){var t=this;this.interval=setInterval((function(e){t.i>2&&(t.i=0);t.j>=t.arr[t.i].length&&(t.j=0),t.str="",t.typeWriter(),t.i++}),4e3)}},{key:"destroyed",value:function(){clearInterval(this.interval)}}]),r}(f.d);m([Object(f.b)({type:Array,required:!0})],y.prototype,"arr",void 0);var _=y=m([f.a],y),x=r(22),component=Object(x.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.str))])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,r){"use strict";var n=r(268);r.n(n).a},314:function(t,e,r){(e=r(70)(!1)).push([t.i,".input-group[data-v-fd483faa],.input-group-prepend[data-v-fd483faa],.progress[data-v-fd483faa]{height:4vh}.progress[data-v-fd483faa]{border-radius:0 6px 6px 0;background-color:#dc3545}",""]),t.exports=e},315:function(t,e,r){"use strict";var n=r(269);r.n(n).a},316:function(t,e,r){(e=r(70)(!1)).push([t.i,"#about[data-v-8729b6da]{word-break:break-all}.bg-dark[data-v-8729b6da]{background:rgba(12,20,35,.6)!important}",""]),t.exports=e},317:function(t,e,r){"use strict";var n=r(270);r.n(n).a},318:function(t,e,r){(e=r(70)(!1)).push([t.i,".project-card .card-img-overlay{background:rgba(12,20,35,.6)}.card>.list-group{border:none}.menu{top:50%;transform:translate(-50%,-50%);border-radius:1.25rem}.home .list-group{line-height:.25rem}.home .list-group-item{padding:.7rem .5rem;transition:all .5s ease}.home .list-group-item:first-of-type{border-radius:.5rem .5rem 0 0}.home .list-group-item:last-of-type{border-radius:0 0 .5rem .5rem;padding-bottom:.75rem}.home .list-group-item:hover{color:var(--primary);cursor:pointer}.home .list-group-item.active{background-color:var(--primary)}.home .list-group-item.active:hover{color:var(--light)}.ltr .menu{left:1.25rem}.rtl .menu{left:100%}",""]),t.exports=e},335:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(9),r(69);var n=r(23),o=r(33),l=r(31),c=r(32),d=r(19),h=r(8),f=r(4),v=r(288),m=r(289);r(233);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(l.a)(r,t);var e=y(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).width=0,t}return Object(o.a)(r,[{key:"isScrolled",value:function(t){var e=this,s=document.querySelector("#skills"),r=document.documentElement;s.offsetTop<=r.scrollTop&&setTimeout((function(t){e.width=e.val}),150)}},{key:"mounted",value:function(){window.addEventListener("scroll",this.isScrolled)}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.isScrolled)}}]),r}(f.d);_([Object(f.b)({type:String,required:!0})],x.prototype,"txt",void 0),_([Object(f.b)({type:Number,required:!0})],x.prototype,"val",void 0);var C=x=_([f.a],x),j=(r(313),r(22)),progress=Object(j.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"progress mb-2 mx-2 font-weight-bolder"},[r("span",{staticClass:"px-3 pt-3 align-middle text-light bg-dark text-uppercase"},[t._v(t._s(t.txt))]),t._v(" "),r("div",{staticClass:"progress w-100"},[r("div",{staticClass:"progress-bar bg-success",style:"width: "+t.width+"%",attrs:{role:"progressbar","aria-valuenow":t.width,"aria-valuemin":"0","aria-valuemax":"100"}},[t._v("\n            "+t._s(t.val)+"%\n        ")])])])}),[],!1,null,"fd483faa",null).exports,w=r(238),k=r(242),O=r(243),P=r(251);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var M=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},$=function(t){Object(l.a)(r,t);var e=R(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).myProps=[{title:t.$i18n.t("home.Responsive"),icon:"tablet-alt",txt:t.$i18n.t("home.ResponsiveTxt")},{title:t.$i18n.t("home.Dynamic"),icon:"rocket",txt:t.$i18n.t("home.DynamicTxt")},{title:t.$i18n.t("home.Tested"),icon:"cog",txt:t.$i18n.t("home.TestedTxt")},{title:t.$i18n.t("home.Organized"),icon:"code",txt:t.$i18n.t("home.OrganizedTxt")},{title:t.$i18n.t("home.Up_To_Date"),icon:"laptop-code",txt:t.$i18n.t("home.Up_To_DateTxt")},{title:t.$i18n.t("home.Multi_Language"),icon:"language",txt:t.$i18n.t("home.Multi_LanguageTxt")}],t.skills=[{title:"php",value:85},{title:"oop",value:80},{title:"mysql",value:80},{title:"laravel",value:85},{title:"lumen",value:85},{title:"unit_Testing",value:85},{title:"html",value:85},{title:"css",value:80},{title:"bootstrap",value:85},{title:"javascipt",value:85},{title:"jquery",value:70},{title:"vue",value:85},{title:"angular",value:70}],t.menuArr=["canvasHeader","about","skills","projects","blog","contact"],t.dir=document.documentElement.dir,t.activeId="top",t}return Object(o.a)(r,[{key:"h2",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h2";return"<".concat(e,">").concat(t,"<hr class='mx-auto bg-secondary pt-1 rounded w-25 px-5' /></").concat(e,">")}},{key:"removeClass",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"d-none",r=document.querySelector("#".concat(t));null==r||r.classList.remove(e)}},{key:"onDone",value:function(t){this.activeId=t.id}}]),r}(f.d),A=$=M([Object(f.a)({components:{AnimatedDots:v.default,AnimateText:m.default,ProgressSkill:progress,Card:w.default,ContentLoader:k.a,AllPosts:O.default,ProjectList:P.default}})],$),D=(r(315),r(317),Object(j.a)(A,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home",class:t.dir},[r("header",{staticClass:"masthead bg-dark text-light bg-transparent",attrs:{id:"canvasHeader"}},[r("animated-dots",{attrs:{"full-height":!0}}),t._v(" "),r("div",{staticClass:"container d-flex h-100 align-items-center"},[r("div",{staticClass:"mx-auto text-center"},[r("h1",{staticClass:"mx-auto my-0 text-capitalize"},[t._v("\n                    "+t._s(t.$t("home.hello"))+"\n                    "),r("span",{staticClass:"text-danger"},[t._v("\n                        "+t._s(t.$t("home.name"))+"\n                    ")])]),t._v(" "),r("h2",{staticClass:"text-white-50 mx-auto mt-2 mb-5"},[t._v("\n                    "+t._s(t.$t("home.and"))+"\n                ")]),t._v(" "),r("h1",{attrs:{id:""}},[r("span",{attrs:{id:"job-title"}},[r("animate-text",{attrs:{arr:["A will not rendered","A Back End Web Developer","A Laravel Developer","A Full Stack Web Developer"]}})],1),t._v(" "),r("span",{staticClass:"blink",attrs:{id:"blink"}},[t._v("|")])])])])],1),t._v(" "),r("div",{staticClass:"container-fluid p-0 m-0"},[r("section",{staticClass:"about bg-dark text-light text-center py-4 col-12",attrs:{id:"about"}},[r("span",{domProps:{innerHTML:t._s(t.h2(t.$t("home.title.about")))}}),t._v(" "),r("div",{staticClass:"row"},t._l(t.myProps,(function(p){return r("div",{key:p.title,staticClass:"pros col-6 col-md-4 p-0"},[r("div",{staticClass:"card card-body bg-transparent text-center border-0 mb-2"},[r("div",{staticClass:"wyg pointer btn btn-outline-primary btn-lg fa-3x rounded w-50 mx-auto py-4"},[r("i",{class:"fas fa-2x fa-"+p.icon})]),t._v(" "),r("h3",{staticClass:"d-block mt-3"},[t._v("\n                            "+t._s(p.title)+"\n                        ")]),t._v(" "),r("span",{staticClass:"text-muted"},[t._v("\n                            "+t._s(p.txt)+"\n                        ")])])])})),0)]),t._v(" "),r("section",{staticClass:"skills bg-transparent text-light text-center py-4 col-12",attrs:{id:"skills"}},[r("span",{domProps:{innerHTML:t._s(t.h2(t.$t("home.title.skills")))}}),t._v(" "),r("div",{staticClass:"row text-center"},[r("div",{staticClass:"col-12 col-md-6 mt-3 mb-5"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/meLarge.png",expression:"'/meLarge.png'"}],staticClass:"img w-75 p-1 border border-secondary rounded"}),t._v(" "),r("p",{staticClass:"text-secondary mt-2 text-capitalize"},[t._v("\n                        "+t._s(t.$t("home.skill_info"))+"\n                    ")])]),t._v(" "),r("div",{staticClass:"col-12 col-md-6 mt-3"},t._l(t.skills,(function(t){return r("progress-skill",{key:t.title,attrs:{txt:t.title,val:t.value}})})),1)])]),t._v(" "),r("section",{staticClass:"skills bg-dark text-light text-center py-4 col-12",attrs:{id:"projects"}},[r("span",{domProps:{innerHTML:t._s(t.h2(t.$t("home.title.project")))}}),t._v(" "),r("ProjectList")],1),t._v(" "),r("section",{staticClass:"skills text-center col-12 py-4",attrs:{id:"blog"}},[r("span",{domProps:{innerHTML:t._s(t.h2(t.$t("home.title.blog")))}}),t._v(" "),r("all-posts",{attrs:{title:t.$t("home.title.index"),path:"post","add-blog-to-path":!1}})],1),t._v(" "),r("section",{staticClass:"skills col-12 py-4 bg-dark",attrs:{id:"contact"}},[r("span",{staticClass:"text-center",domProps:{innerHTML:t._s(t.h2(t.$t("home.title.contact")))}}),t._v(" "),r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"col-sm-12 col-md-4"},[r("div",{staticClass:"card card-body bg-transparent border-secondary m-1"},[r("p",{staticClass:"pb-2 border-bottom border-light mx-auto"},[r("i",{staticClass:"fas fa-certificate"}),t._v("\n                            "+t._s(t.$t("home.contact.edu"))+"\n                        ")]),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-md-4"},[r("div",{staticClass:"card card-body bg-transparent border-secondary m-1"},[r("p",{staticClass:"pb-2 border-bottom border-light mx-auto"},[r("i",{staticClass:"fas fa-user-tie"}),t._v("\n                            "+t._s(t.$t("home.contact.personal"))+"\n                        ")]),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"col-sm-6 col-md-4"},[r("div",{staticClass:"card card-body bg-transparent border-secondary m-1"},[r("p",{staticClass:"pb-2 border-bottom border-light mx-auto"},[r("i",{staticClass:"fas fa-address-card"}),t._v("\n                            "+t._s(t.$t("home.contact.social"))+"\n                        ")]),t._v(" "),t._m(2)])])])])]),t._v(" "),r("div",{staticClass:"menu position-fixed bg-dark"},[r("ul",{staticClass:"list-group list-group-flush"},t._l(t.menuArr,(function(e,n){return r("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#"+e,offset:-50,onDone:t.onDone},expression:"{\n                    el: `#${id}`,\n                    offset: -50,\n                    onDone,\n                }"}],key:e+n,staticClass:"list-group-item",class:{active:e===t.activeId}},[r("span",{},[t._v("\n                    ●\n                ")])])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{dir:"ltr"}},[r("ul",{staticClass:"nav nav-pills nav-fill"},[r("li",{staticClass:"nav-item text-info"},[t._v("\n                                    Bachelor Degree\n                                ")]),t._v(" "),r("li",{staticClass:"nav-item text-info"},[t._v("\n                                    Very Good\n                                ")]),t._v(" "),r("li",{staticClass:"nav-item text-info"},[t._v("\n                                    2016 – 2020\n                                ")])]),t._v(" "),r("strong",{staticClass:"text-left"},[t._v("\n                                Dairy Science and Technology, Faculty of\n                                Agriculture,"),r("br"),t._v("Al-Azhar University\n                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-group list-group-flush",attrs:{dir:"ltr"}},[e("li",{staticClass:"list-group-item bg-transparent border-bottom border-secondary"},[e("a",{staticClass:"text-light",attrs:{href:"tel:201143647417"}},[e("i",{staticClass:"fas fa-phone-alt"}),this._v("\n                                    +201143647417\n                                ")])]),this._v(" "),e("li",{staticClass:"list-group-item bg-transparent border-bottom border-secondary"},[e("a",{staticClass:"text-light",attrs:{href:"mailto:abo3adel35@gmail.com"}},[e("i",{staticClass:"fas fa-envelope"}),this._v("\n                                    abo3adel35@gmail.com\n                                ")])]),this._v(" "),e("li",{staticClass:"list-group-item bg-transparent border-bottom border-secondary"},[e("a",{staticClass:"text-light",attrs:{href:"https://abo3adel.github.io/"}},[e("i",{staticClass:"fas fa-link"}),this._v("\n                                    abo3adel.github.io\n                                ")])]),this._v(" "),e("li",{staticClass:"list-group-item bg-transparent"},[e("i",{staticClass:"fas fa-map-marker-alt"}),this._v("\n                                Abu Hammad, Sharkia, Egypt\n                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-group list-group-flush",attrs:{dir:"ltr"}},[e("li",{staticClass:"list-group-item bg-transparent border-bottom border-secondary"},[e("a",{staticClass:"text-light",attrs:{href:"https://github.com/abo3adel",target:"_blank"}},[e("i",{staticClass:"fab fa-github-alt text-warning"}),this._v("\n                                    GitHub\n                                ")])]),this._v(" "),e("li",{staticClass:"list-group-item bg-transparent border-bottom border-secondary"},[e("a",{staticClass:"text-light",attrs:{href:"https://wa.me/201143647417",target:"_blank"}},[e("i",{staticClass:"fab fa-whatsapp text-success"}),this._v("\n                                    WhatsApp\n                                ")])]),this._v(" "),e("li",{staticClass:"list-group-item bg-transparent border-bottom border-secondary"},[e("a",{staticClass:"text-light",attrs:{href:"https://www.linkedin.com/in/ahmed-adel-30a932119/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin text-info"}),this._v("\n                                    LinkedIn\n                                ")])]),this._v(" "),e("li",{staticClass:"list-group-item bg-transparent"},[e("a",{staticClass:"text-light",attrs:{href:"https://fb.com/a7md200",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-square text-info"}),this._v("\n                                    FaceBook\n                                ")])])])}],!1,null,"8729b6da",null));e.default=D.exports;installComponents(D,{AnimatedDots:r(288).default,AnimateText:r(289).default,ProjectList:r(251).default,AllPosts:r(243).default})}}]);