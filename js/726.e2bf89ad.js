"use strict";(self["webpackChunknew_web"]=self["webpackChunknew_web"]||[]).push([[726],{2392:function(e,t,a){a.d(t,{A:function(){return h}});var s=a(6768),i=a(4232);const l={class:"pagination"},o=["disabled"],r=["onClick"],n=["disabled"];function c(e,t,a,c,d,u){const g=(0,s.g2)("van-icon");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("button",{class:"pagination-button",disabled:a.currentPage<=1,onClick:t[0]||(t[0]=(...e)=>u.goToPreviousTenPages&&u.goToPreviousTenPages(...e))},[(0,s.bF)(g,{name:"arrow-left"})],8,o),((0,s.uX)(),(0,s.CE)("div",{class:"page-numbers",key:d.componentKey},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(u.visiblePages,(t=>((0,s.uX)(),(0,s.CE)("span",{key:t,class:(0,i.C4)({active:e.activePages[t]}),onClick:e=>u.goToPage(t)},(0,i.v_)(t),11,r)))),128))])),(0,s.Lk)("button",{class:"pagination-button",disabled:a.currentPage>=a.totalPages,onClick:t[1]||(t[1]=(...e)=>u.goToNextTenPages&&u.goToNextTenPages(...e))},[(0,s.bF)(g,{name:"arrow"})],8,n)])}a(8992),a(3949);var d={name:"Pagination",props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,required:!0}},data(){return{componentKey:0}},emits:["page-change"],watch:{visiblePages:{handler(e){this.updateActivePages(this.currentPage)},immediate:!0}},computed:{visiblePages(){const e=10*Math.floor((this.currentPage-1)/10)+1,t=Math.min(e+9,this.totalPages);return Array.from({length:t-e+1},((t,a)=>e+a))}},methods:{updateActivePages(e){this.activePages={},this.visiblePages.forEach((t=>{this.activePages[t]=t===e,this.componentKey+=1}))},goToPage(e){e>=1&&e<=this.totalPages&&this.$emit("page-change",e)},goToPreviousTenPages(){const e=Math.max(1,10*Math.floor((this.currentPage-1)/10)-9);this.$emit("page-change",e)},goToNextTenPages(){const e=10*Math.floor((this.currentPage-1)/10)+1,t=Math.min(this.totalPages,e+10);this.$emit("page-change",t)}}},u=a(1241);const g=(0,u.A)(d,[["render",c],["__scopeId","data-v-914a4944"]]);var h=g},676:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var s=a(6768);const i={class:"category-container"},l={class:"ads",style:{"padding-bottom":"0px","margin-bottom":"40px"}},o={class:"list"},r={class:"ads"},n={key:1,class:"list"},c={key:2,class:"ads"},d={key:3,class:"list"},u={key:4,class:"ads"};function g(e,t,a,g,h,p){const m=(0,s.g2)("van-loading"),f=(0,s.g2)("van-image"),y=(0,s.g2)("Title"),v=(0,s.g2)("Card"),k=(0,s.g2)("Pagination");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",l,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h._ads.slice(0,8),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(f,{onClick:t=>p.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(m,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))]),h.classifyName?((0,s.uX)(),(0,s.Wv)(y,{key:0,class:"page-title",name:h.classifyName,sort:!0,more:!1},null,8,["name"])):(0,s.Q3)("",!0),(0,s.Lk)("div",o,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.data.slice(0,8),(e=>((0,s.uX)(),(0,s.Wv)(v,{classifyName:h.classifyName,classifyId:h.classifyId,specialId:h.specialId,class:"video-card",item:e},null,8,["classifyName","classifyId","specialId","item"])))),256))]),(0,s.Lk)("div",r,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h._ads.slice(8,16),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(f,{onClick:t=>p.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(m,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))]),h.data.slice(8,16).length?((0,s.uX)(),(0,s.CE)("div",n,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.data.slice(8,16),(e=>((0,s.uX)(),(0,s.Wv)(v,{classifyName:h.classifyName,classifyId:h.classifyId,specialId:h.specialId,class:"video-card",item:e},null,8,["classifyName","classifyId","specialId","item"])))),256))])):(0,s.Q3)("",!0),h.data.slice(8,16).length?((0,s.uX)(),(0,s.CE)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h._ads.slice(16,24),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(f,{onClick:t=>p.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(m,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))])):(0,s.Q3)("",!0),h.data.slice(16,24).length?((0,s.uX)(),(0,s.CE)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.data.slice(16,24),(e=>((0,s.uX)(),(0,s.Wv)(v,{classifyName:h.classifyName,classifyId:h.classifyId,specialId:h.specialId,class:"video-card",item:e},null,8,["classifyName","classifyId","specialId","item"])))),256))])):(0,s.Q3)("",!0),h.data.slice(24,32).length?((0,s.uX)(),(0,s.CE)("div",u,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h._ads.slice(24,32),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(f,{onClick:t=>p.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(m,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))])):(0,s.Q3)("",!0),(0,s.bF)(k,{"total-pages":h.total,"current-page":h.pageNum,onPageChange:p.handlePageChange},null,8,["total-pages","current-page","onPageChange"])])}a(4114);var h=a(3397),p=a(7597),m=a(5791),f=a(782);const y=(0,s.pM)({__name:"IconFont",props:{name:{type:String,default:""},size:{type:[String,Number],default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""},classPrefix:{type:String,default:"nut-icon"},fontClassName:{type:String,default:"nutui-iconfont"},color:{type:String,default:""},tag:{type:String,default:"i"}},setup(e){var t;const a=e,i="nut-icon",l=(0,s.Ht)(),o=()=>!!a.name&&-1!==a.name.indexOf("/"),r=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},n=o();let c=(0,s.h)(n?"img":a.tag,{class:n?`${i}__img`:`${a.fontClassName} ${i} ${a.classPrefix}-${a.name}`,style:{color:a.color,fontSize:r(a.size),width:r(a.width||a.size),height:r(a.height||a.size)},src:n?a.name:""},null==(t=l.default)?void 0:t.call(l));const d=()=>c;return(e,t)=>((0,s.uX)(),(0,s.Wv)(d))}});function v(e){return e.name="IconFont",e.install=t=>{t.component("IconFont",e)},e}v(y);const k=e=>(0,s.pM)({props:{class:{type:String,default:""},name:{type:String,default:e},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},setup(e){const t=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},a=(0,s.EW)((()=>{const t="nut-icon";return{[e.class]:e.class,[t]:!0,[t+"-"+e.name]:e.name}})),i=(0,s.EW)((()=>{const a={};return a.height=t(e.height),a.width=t(e.width),a.color=e.color,a}));return{classes:a,style:i}}}),N=(e,t)=>{const a=e.__vccOpts||e;for(const[s,i]of t)a[s]=i;return a};var C=a(4232);k("add");k("addfollow");k("arrow-down");k("arrow-down2");k("arrow-right");k("arrow-right2");k("arrow-up");k("arrow-up2");k("ask");k("ask2");k("cart");k("cart2");k("category");k("check-checked");k("check-disabled");k("check-normal");k("Check");k("checked");k("checklist");k("circle-close");k("clock");k("close-little");k("close");k("comment");k("date");k("del");k("del2");k("dongdong");k("dou-arrow-up");k("down-arrow");k("download");k("dshop");k("edit");k("eye");k("fabulous");k("failure");k("find");k("follow");k("footprint");k("github");k("heart-fill-n");k("heart-fill");k("heart-fill1");k("heart-fill2");k("heart-fill3");k("heart-n");k("heart");k("heart1");k("heart2");k("home");k("horizontal-n");k("horizontal");k("image-error");k("image");k("issue");k("JD");k("jdl");k("JIMI40");k("joy-smile");const w=k("left"),I=(0,s.Lk)("path",{d:"M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",fill:"currentColor","fill-opacity":"0.9"},null,-1),P=[I];function b(e,t,a,i,l,o){return(0,s.uX)(),(0,s.CE)("svg",{class:(0,C.C4)(e.classes),style:(0,C.Tr)(e.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",role:"presentation"},P,6)}const $=N(w,[["render",b]]);k("link");k("loading");k("loading1");k("location");k("location2");k("locationg3");k("lower");k("marshalling");k("mask-close");k("message");k("microphone");k("minus");k("more-s");k("more-x");k("more");k("my");k("my2");k("notice");k("order");k("people");k("photograph");k("play-circle-fill");k("play-double-back");k("play-double-forward");k("play-start");k("play-stop");k("plus");k("poweroff-circle-fill");k("rect-down");k("rect-left");k("rect-right");k("rect-up");k("refresh");k("refresh2");k("retweet");const X=k("right"),_=(0,s.Lk)("path",{d:"M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",fill:"currentColor","fill-opacity":"0.9"},null,-1),E=[_];function S(e,t,a,i,l,o){return(0,s.uX)(),(0,s.CE)("svg",{class:(0,C.C4)(e.classes),style:(0,C.Tr)(e.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",role:"presentation"},E,6)}const z=N(X,[["render",S]]);k("s-follow");k("scan");k("scan2");k("screen-little");k("search");k("search2");k("service");k("setting");k("share-n");k("share");k("share1");k("shop");k("shop3");k("star-fill-n");k("star-fill");k("star-fill1");k("star-fill2");k("star-n");k("star");k("star1");k("star11");k("star2");k("success");k("tips");k("top");k("triangle-down");k("triangle-up");k("uploader");k("voice");var F=a(2392),T={name:"Category",components:{Card:p.A,Title:m.A,Left:$,Right:z,Pagination:F.A},data(){return{pageNum:1,pageSize:24,total:0,classifyName:"",classifyId:"",specialId:"",search:"",data:[],_ads:[]}},watch:{$route:{handler(e,t){"category"==e.name&&(e.query.pageNum?(console.log("存在 pageNum paramas",e.query),this.classifyName=this.$route.query.classifyName,this.classifyId=this.$route.query.classifyId,this.specialId=this.$route.query.specialId,this.search=this.$route.query.search,this.getVideosByChangePageNum(e.query.pageNum)):(console.log("监测到categeory",e.query,this.$route.query),this.data=[],this.pageNum=1,this.total=0,this.classifyName=this.$route.query.classifyName,this.classifyId=this.$route.query.classifyId,this.specialId=this.$route.query.specialId,this.search=this.$route.query.search,this.getVideos()))},immediate:!0}},computed:{...(0,f.aH)({ads:e=>e.common.ads})},methods:{...(0,f.i0)({toggleLoading:"common/toggleLoading"}),handlePageChange(e){this.pageNum=e,this.checkAndModifyPageNum(e)},changePageNum(e){this.pageNum=e,this.checkAndModifyPageNum(e)},async getVideosByChangePageNum(e){let{rows:t,code:a,total:s}=await h.fY({pageNum:e,pageSize:this.pageSize,classifyId:this.classifyId,specialId:this.specialId});200==a&&(this.data=t,this.total=s)},async getVideos(){this.toggleLoading(!0);try{if(this.search){let{rows:e,code:t,total:a}=await h.DH({title:this.search,pageNum:this.pageNum,pageSize:this.pageSize});200==t&&(this.data=e,this.total=a)}else{let{rows:e,code:t,total:a}=await h.fY({pageNum:this.pageNum,pageSize:this.pageSize,classifyId:this.classifyId,specialId:this.specialId});200==t&&(this.data=e,this.total=a)}}catch(e){}finally{this.toggleLoading(!1)}},goAd(e){window.open(e)},checkAndModifyPageNum(e){const t={...this.$route.query};t.pageNum=e;const a=this.$router.resolve({path:this.$route.path,query:t}).href;this.$router.push(a),this.$nextTick((()=>{setTimeout((()=>{this.pageNum=e,this.$forceUpdate()}),1e3)}))}},mounted(){if(console.log("monted",this.$route.query.pageNum),this.$route.query.pageNum>0&&this.$nextTick((()=>{setTimeout((()=>{this.pageNum=this.$route.query.pageNum,this.$forceUpdate()}),3e3)})),this.ads.length){let e=46,t=Math.ceil(e/this.ads.length),a=[];for(let s=0;s<t;s++)a=a.concat(this.ads);a.shift(),this._ads=a}}},q=a(1241);const x=(0,q.A)(T,[["render",g],["__scopeId","data-v-4cf4024e"]]);var A=x}}]);
//# sourceMappingURL=726.e2bf89ad.js.map