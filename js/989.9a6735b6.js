"use strict";(self["webpackChunknew_web"]=self["webpackChunknew_web"]||[]).push([[989],{2351:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var s=a(6768);const i={class:"category-container"},l={class:"ads",style:{"padding-bottom":"0px","margin-bottom":"40px"}},o={class:"list"},c={class:"ads"},r={key:1,class:"list"},n={key:2,class:"ads"},d={key:3,class:"list"},u={key:4,class:"ads"},h={class:"pagination"};function p(e,t,a,p,g,m){const f=(0,s.g2)("van-loading"),y=(0,s.g2)("van-image"),w=(0,s.g2)("Title"),k=(0,s.g2)("Card"),N=(0,s.g2)("van-icon"),I=(0,s.g2)("van-pagination");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",l,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g._ads.slice(0,8),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(y,{onClick:t=>m.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(f,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))]),g.classifyName?((0,s.uX)(),(0,s.Wv)(w,{key:0,class:"page-title",name:g.classifyName,sort:!0,more:!1},null,8,["name"])):(0,s.Q3)("",!0),(0,s.Lk)("div",o,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g.data.slice(0,8),(e=>((0,s.uX)(),(0,s.Wv)(k,{classifyName:g.classifyName,classifyId:g.classifyId,specialId:g.specialId,class:"video-card",item:e},null,8,["classifyName","classifyId","specialId","item"])))),256))]),(0,s.Lk)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g._ads.slice(8,16),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(y,{onClick:t=>m.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(f,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))]),g.data.slice(8,16).length?((0,s.uX)(),(0,s.CE)("div",r,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g.data.slice(8,16),(e=>((0,s.uX)(),(0,s.Wv)(k,{classifyName:g.classifyName,classifyId:g.classifyId,specialId:g.specialId,class:"video-card",item:e},null,8,["classifyName","classifyId","specialId","item"])))),256))])):(0,s.Q3)("",!0),g.data.slice(8,16).length?((0,s.uX)(),(0,s.CE)("div",n,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g._ads.slice(16,24),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(y,{onClick:t=>m.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(f,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))])):(0,s.Q3)("",!0),g.data.slice(16,24).length?((0,s.uX)(),(0,s.CE)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g.data.slice(16,24),(e=>((0,s.uX)(),(0,s.Wv)(k,{classifyName:g.classifyName,classifyId:g.classifyId,specialId:g.specialId,class:"video-card",item:e},null,8,["classifyName","classifyId","specialId","item"])))),256))])):(0,s.Q3)("",!0),g.data.slice(24,32).length?((0,s.uX)(),(0,s.CE)("div",u,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(g._ads.slice(24,32),((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"ads-item",key:e.title+"_"+t},[(0,s.bF)(y,{onClick:t=>m.goAd(e.link),fit:"cover",position:"center","lazy-load":!0,src:e.picUrl},{loading:(0,s.k6)((()=>[(0,s.bF)(f,{type:"spinner",size:"20"})])),_:2},1032,["onClick","src"])])))),128))])):(0,s.Q3)("",!0),(0,s.Lk)("div",h,[(0,s.bF)(I,{modelValue:g.pageNum,"onUpdate:modelValue":t[0]||(t[0]=e=>g.pageNum=e),"total-items":g.total,"items-per-page":g.pageSize,"show-page-size":5,onChange:m.changePageNum},{"prev-text":(0,s.k6)((()=>[(0,s.bF)(N,{name:"arrow-left"})])),"next-text":(0,s.k6)((()=>[(0,s.bF)(N,{name:"arrow"})])),_:1},8,["modelValue","total-items","items-per-page","onChange"])])])}a(4114);var g=a(3397),m=a(8587),f=a(6925),y=a(782);const w=(0,s.pM)({__name:"IconFont",props:{name:{type:String,default:""},size:{type:[String,Number],default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""},classPrefix:{type:String,default:"nut-icon"},fontClassName:{type:String,default:"nutui-iconfont"},color:{type:String,default:""},tag:{type:String,default:"i"}},setup(e){var t;const a=e,i="nut-icon",l=(0,s.Ht)(),o=()=>!!a.name&&-1!==a.name.indexOf("/"),c=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},r=o();let n=(0,s.h)(r?"img":a.tag,{class:r?`${i}__img`:`${a.fontClassName} ${i} ${a.classPrefix}-${a.name}`,style:{color:a.color,fontSize:c(a.size),width:c(a.width||a.size),height:c(a.height||a.size)},src:r?a.name:""},null==(t=l.default)?void 0:t.call(l));const d=()=>n;return(e,t)=>((0,s.uX)(),(0,s.Wv)(d))}});function k(e){return e.name="IconFont",e.install=t=>{t.component("IconFont",e)},e}k(w);const N=e=>(0,s.pM)({props:{class:{type:String,default:""},name:{type:String,default:e},color:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},setup(e){const t=e=>{if(e)return isNaN(Number(e))?String(e):e+"px"},a=(0,s.EW)((()=>{const t="nut-icon";return{[e.class]:e.class,[t]:!0,[t+"-"+e.name]:e.name}})),i=(0,s.EW)((()=>{const a={};return a.height=t(e.height),a.width=t(e.width),a.color=e.color,a}));return{classes:a,style:i}}}),I=(e,t)=>{const a=e.__vccOpts||e;for(const[s,i]of t)a[s]=i;return a};var v=a(4232);N("add");N("addfollow");N("arrow-down");N("arrow-down2");N("arrow-right");N("arrow-right2");N("arrow-up");N("arrow-up2");N("ask");N("ask2");N("cart");N("cart2");N("category");N("check-checked");N("check-disabled");N("check-normal");N("Check");N("checked");N("checklist");N("circle-close");N("clock");N("close-little");N("close");N("comment");N("date");N("del");N("del2");N("dongdong");N("dou-arrow-up");N("down-arrow");N("download");N("dshop");N("edit");N("eye");N("fabulous");N("failure");N("find");N("follow");N("footprint");N("github");N("heart-fill-n");N("heart-fill");N("heart-fill1");N("heart-fill2");N("heart-fill3");N("heart-n");N("heart");N("heart1");N("heart2");N("home");N("horizontal-n");N("horizontal");N("image-error");N("image");N("issue");N("JD");N("jdl");N("JIMI40");N("joy-smile");const C=N("left"),b=(0,s.Lk)("path",{d:"M642.973 1005.542 321.912 587.098a123.278 123.278 0 0 1 0-150.17l321.06-418.443a47.182 47.182 0 0 1 74.83 57.422l-321.088 418.47a28.994 28.994 0 0 0 0 35.3l321.088 418.47a47.155 47.155 0 0 1-74.83 57.395",fill:"currentColor","fill-opacity":"0.9"},null,-1),z=[b];function _(e,t,a,i,l,o){return(0,s.uX)(),(0,s.CE)("svg",{class:(0,v.C4)(e.classes),style:(0,v.Tr)(e.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",role:"presentation"},z,6)}const S=I(C,[["render",_]]);N("link");N("loading");N("loading1");N("location");N("location2");N("locationg3");N("lower");N("marshalling");N("mask-close");N("message");N("microphone");N("minus");N("more-s");N("more-x");N("more");N("my");N("my2");N("notice");N("order");N("people");N("photograph");N("play-circle-fill");N("play-double-back");N("play-double-forward");N("play-start");N("play-stop");N("plus");N("poweroff-circle-fill");N("rect-down");N("rect-left");N("rect-right");N("rect-up");N("refresh");N("refresh2");N("retweet");const X=N("right"),F=(0,s.Lk)("path",{d:"M381.262 1005.566c-16.132 21.51-45.708 24.198-67.217 8.066-21.51-16.132-24.198-45.708-8.066-67.217C413.526 806.604 518.384 666.792 625.932 529.67c8.066-10.755 8.066-24.198 0-34.953C518.384 354.906 413.526 215.094 305.979 77.972c-16.132-21.51-10.755-51.085 8.066-67.217C335.555-5.377 365.13 0 381.262 18.82c107.547 142.5 212.405 282.311 319.953 419.434 34.952 43.019 34.952 104.858 0 150.566-107.548 139.811-212.406 279.622-319.953 416.745",fill:"currentColor","fill-opacity":"0.9"},null,-1),E=[F];function $(e,t,a,i,l,o){return(0,s.uX)(),(0,s.CE)("svg",{class:(0,v.C4)(e.classes),style:(0,v.Tr)(e.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",role:"presentation"},E,6)}const q=I(X,[["render",$]]);N("s-follow");N("scan");N("scan2");N("screen-little");N("search");N("search2");N("service");N("setting");N("share-n");N("share");N("share1");N("shop");N("shop3");N("star-fill-n");N("star-fill");N("star-fill1");N("star-fill2");N("star-n");N("star");N("star1");N("star11");N("star2");N("success");N("tips");N("top");N("triangle-down");N("triangle-up");N("uploader");N("voice");var x={name:"Category",components:{Card:m.A,Title:f.A,Left:S,Right:q},data(){return{pageNum:1,pageSize:24,total:0,classifyName:"",classifyId:"",specialId:"",search:"",data:[],_ads:[]}},watch:{$route:{handler(e,t){"category"==e.name&&(e.query.pageNum?(console.log("cunzai pageNum paramas",e.query),this.classifyName=this.$route.query.classifyName,this.classifyId=this.$route.query.classifyId,this.specialId=this.$route.query.specialId,this.search=this.$route.query.search,this.getVideosByChangePageNum(e.query.pageNum),this.$nextTick((()=>{this.pageNum=e.query.pageNum,console.log(this.pageNum)}))):(console.log("监测到categeory",e.query,this.$route.query),this.data=[],this.pageNum=1,this.total=0,this.classifyName=this.$route.query.classifyName,this.classifyId=this.$route.query.classifyId,this.specialId=this.$route.query.specialId,this.search=this.$route.query.search,this.getVideos()))},immediate:!0}},computed:{...(0,y.aH)({ads:e=>e.common.ads})},methods:{...(0,y.i0)({toggleLoading:"common/toggleLoading"}),changePageNum(e){console.log(e),this.checkAndModifyPageNum(e)},async getVideosByChangePageNum(e){let{rows:t,code:a,total:s}=await g.fY({pageNum:e,pageSize:this.pageSize,classifyId:this.classifyId,specialId:this.specialId});200==a&&(this.data=t,this.total=s)},async getVideos(){this.toggleLoading(!0);try{if(this.search){let{rows:e,code:t,total:a}=await g.DH({title:this.search,pageNum:this.pageNum,pageSize:this.pageSize});200==t&&(this.data=e,this.total=a)}else{let{rows:e,code:t,total:a}=await g.fY({pageNum:this.pageNum,pageSize:this.pageSize,classifyId:this.classifyId,specialId:this.specialId});200==t&&(this.data=e,this.total=a)}}catch(e){}finally{this.toggleLoading(!1)}},goAd(e){window.open(e)},checkAndModifyPageNum(e){const t={...this.$route.query};t.pageNum=e;const a=this.$router.resolve({path:this.$route.path,query:t}).href;console.log("拼接后的完整路径："+a),this.$router.push(a)}},mounted(){if(this.ads.length){let e=46,t=Math.ceil(e/this.ads.length),a=[];for(let s=0;s<t;s++)a=a.concat(this.ads);a.shift(),this._ads=a}}},L=a(1241);const A=(0,L.A)(x,[["render",p],["__scopeId","data-v-cca6d086"]]);var M=A}}]);
//# sourceMappingURL=989.9a6735b6.js.map