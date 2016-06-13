/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(a)
}else{if(typeof exports==="object"){module.exports=a()
}else{var c=window.Cookies;
var b=window.Cookies=a();
b.noConflict=function(){window.Cookies=c;
return b
}
}}}(function(){function b(){var f=0;
var c={};
for(;
f<arguments.length;
f++){var d=arguments[f];
for(var e in d){c[e]=d[e]
}}return c
}function a(d){function c(o,n,k){var r;
if(arguments.length>1){k=b({path:"/"},c.defaults,k);
if(typeof k.expires==="number"){var h=new Date();
h.setMilliseconds(h.getMilliseconds()+k.expires*86400000);
k.expires=h
}try{r=JSON.stringify(n);
if(/^[\{\[]/.test(r)){n=r
}}catch(m){}if(!d.write){n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)
}else{n=d.write(n,o)
}o=encodeURIComponent(String(o));
o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);
o=o.replace(/[\(\)]/g,escape);
return(document.cookie=[o,"=",n,k.expires&&"; expires="+k.expires.toUTCString(),k.path&&"; path="+k.path,k.domain&&"; domain="+k.domain,k.secure?"; secure":""].join(""))
}if(!o){r={}
}var q=document.cookie?document.cookie.split("; "):[];
var p=/(%[0-9A-Z]{2})+/g;
var l=0;
for(;
l<q.length;
l++){var j=q[l].split("=");
var f=j[0].replace(p,decodeURIComponent);
var g=j.slice(1).join("=");
if(g.charAt(0)==='"'){g=g.slice(1,-1)
}try{g=d.read?d.read(g,f):d(g,f)||g.replace(p,decodeURIComponent);
if(this.json){try{g=JSON.parse(g)
}catch(m){}}if(o===f){r=g;
break
}if(!o){r[f]=g
}}catch(m){}}return r
}c.get=c.set=c;
c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))
};
c.defaults={};
c.remove=function(f,e){c(f,"",b(e,{expires:-1}))
};
c.withConverter=a;
return c
}return a(function(){})
}));
(function(a,c){var b=function(){var e=typeof Page!=="undefined"?(typeof Page.getLocale()!=="undefined"?Page.getLocale():""):"",d=typeof vp!=="undefined"?(typeof vp.getType()!=="undefined"?vp.getType():""):"",k=typeof Page!=="undefined"?(typeof Page.getSegment()!=="undefined"?Page.getSegment():""):"",j=typeof vp!=="undefined"?(typeof vp.getTypeDetailed()!=="undefined"?vp.getTypeDetailed():""):"",l=typeof vp!=="undefined"?(typeof vp.getVisitNumber()!=="undefined"?vp.getVisitNumber():""):"",m=typeof Page!=="undefined"?(typeof Page.getName()!=="undefined"?Page.getName():""):"",h=OOo.readCookie("s_vi"),i=typeof s!=="undefined"?(typeof s.pageName!=="undefined"?s.pageName:""):"",g=typeof s_account!=="undefined"?s_account:"",f=c.readCookie("oo_blog_pages_visited");
if(f===null){c.createCookie("oo_blog_pages_visited",1)
}else{f++;
c.createCookie("oo_blog_pages_visited",f)
}if(f>3){c.oo_exit_blog_exacttarget=new c.Ocode({events:{onExit:100,disableLinks:/exacttarget/i,disableFormElements:true},cookie:{name:"oo_exit",type:"domain",expiration:2592000},referrerRewrite:{searchPattern:/:\/\/[^\/]*/,replacePattern:"://exitblog.exacttarget.com"},customVariables:{locale:e,type:d,segment:k,typeDetailed:j,visit:l,pageName:m,s_vi:h,s_pageName:i,s_account:g}})
}};
c.addEventListener(a,"load",b,false)
})(window,OOo);
(function(a,c){var b=function(){var e=typeof Page!=="undefined"?(typeof Page.getLocale()!=="undefined"?Page.getLocale():""):"",d=typeof vp!=="undefined"?(typeof vp.getType()!=="undefined"?vp.getType():""):"",j=typeof Page!=="undefined"?(typeof Page.getSegment()!=="undefined"?Page.getSegment():""):"",i=typeof vp!=="undefined"?(typeof vp.getTypeDetailed()!=="undefined"?vp.getTypeDetailed():""):"",k=typeof vp!=="undefined"?(typeof vp.getVisitNumber()!=="undefined"?vp.getVisitNumber():""):"",l=typeof Page!=="undefined"?(typeof Page.getName()!=="undefined"?Page.getName():""):"",g=OOo.readCookie("s_vi"),h=typeof s!=="undefined"?(typeof s.pageName!=="undefined"?s.pageName:""):"",f=typeof s_account!=="undefined"?s_account:"";
c.oo_floating=new c.Ocode({floating:{},disableMobile:true,customVariables:{locale:e,type:d,segment:j,typeDetailed:i,visit:k,pageName:l,s_vi:g,s_pageName:h,s_account:f}})
};
c.addEventListener(a,"load",b,false)
})(window,OOo);
!(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{if(typeof exports==="object"){b(require("jquery"))
}else{b(a.jQuery)
}}})(this,function(g){var e="vide";
var d={volume:1,playbackRate:1,muted:true,loop:true,autoplay:true,position:"50% 50%",posterType:"detect",resizing:true,bgColor:"transparent",className:""};
var a="Not implemented";
function b(r){var m={};
var n;
var o;
var j;
var k;
var p;
var q;
var l;
p=r.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(",");
for(l=0,q=p.length;
l<q;
l++){o=p[l];
if(o.search(/^(http|https|ftp):\/\//)!==-1||o.search(":")===-1){break
}n=o.indexOf(":");
j=o.substring(0,n);
k=o.substring(n+1);
if(!k){k=undefined
}if(typeof k==="string"){k=k==="true"||(k==="false"?false:k)
}if(typeof k==="string"){k=!isNaN(k)?+k:k
}m[j]=k
}if(j==null&&k==null){return r
}return m
}function f(o){o=""+o;
var m=o.split(/\s+/);
var l="50%";
var p="50%";
var k;
var j;
var n;
for(n=0,k=m.length;
n<k;
n++){j=m[n];
if(j==="left"){l="0%"
}else{if(j==="right"){l="100%"
}else{if(j==="top"){p="0%"
}else{if(j==="bottom"){p="100%"
}else{if(j==="center"){if(n===0){l="50%"
}else{p="50%"
}}else{if(n===0){l=j
}else{p=j
}}}}}}}return{x:l,y:p}
}function h(j,k){var i=function(){k(this.src)
};
g('<img src="'+j+'.gif">').load(i);
g('<img src="'+j+'.jpg">').load(i);
g('<img src="'+j+'.jpeg">').load(i);
g('<img src="'+j+'.png">').load(i)
}function c(l,n,j){this.$element=g(l);
if(typeof n==="string"){n=b(n)
}if(!j){j={}
}else{if(typeof j==="string"){j=b(j)
}}if(typeof n==="string"){n=n.replace(/\.\w*$/,"")
}else{if(typeof n==="object"){for(var k in n){if(n.hasOwnProperty(k)){n[k]=n[k].replace(/\.\w*$/,"")
}}}}this.settings=g.extend({},d,j);
this.path=n;
try{this.init()
}catch(m){if(m.message!==a){throw m
}}}c.prototype.init=function(){var q=this;
var t=q.path;
var p=t;
var i="";
var r=q.$element;
var l=q.settings;
var m=f(l.position);
var k=l.posterType;
var j;
var n;
n=q.$wrapper=g("<div>").addClass(l.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":l.bgColor,"background-repeat":"no-repeat","background-position":m.x+" "+m.y});
if(typeof t==="object"){if(t.poster){p=t.poster
}else{if(t.mp4){p=t.mp4
}else{if(t.webm){p=t.webm
}else{if(t.ogv){p=t.ogv
}}}}}if(k==="detect"){h(p,function(u){n.css("background-image","url("+u+")")
})
}else{if(k!=="none"){n.css("background-image","url("+p+"."+k+")")
}}if(r.css("position")==="static"){r.css("position","relative")
}r.prepend(n);
if(typeof t==="object"){if(t.mp4){i+='<source src="'+t.mp4+'.mp4" type="video/mp4">'
}if(t.webm){i+='<source src="'+t.webm+'.webm" type="video/webm">'
}if(t.ogv){i+='<source src="'+t.ogv+'.ogv" type="video/ogg">'
}j=q.$video=g("<video>"+i+"</video>")
}else{j=q.$video=g('<video><source src="'+t+'.mp4" type="video/mp4"><source src="'+t+'.webm" type="video/webm"><source src="'+t+'.ogv" type="video/ogg"></video>')
}try{j.prop({autoplay:l.autoplay,loop:l.loop,volume:l.volume,muted:l.muted,defaultMuted:l.muted,playbackRate:l.playbackRate,defaultPlaybackRate:l.playbackRate})
}catch(o){throw new Error(a)
}j.css({margin:"auto",position:"absolute","z-index":-1,top:m.y,left:m.x,"-webkit-transform":"translate(-"+m.x+", -"+m.y+")","-ms-transform":"translate(-"+m.x+", -"+m.y+")","-moz-transform":"translate(-"+m.x+", -"+m.y+")",transform:"translate(-"+m.x+", -"+m.y+")",visibility:"hidden",opacity:0}).one("canplaythrough."+e,function(){q.resize()
}).one("playing."+e,function(){j.css({visibility:"visible",opacity:1});
n.css("background-image","none")
});
r.on("resize."+e,function(){if(l.resizing){q.resize()
}});
n.append(j)
};
c.prototype.getVideoObject=function(){return this.$video[0]
};
c.prototype.resize=function(){if(!this.$video){return
}var m=this.$wrapper;
var k=this.$video;
var l=k[0];
var j=l.videoHeight;
var o=l.videoWidth;
var n=m.height();
var i=m.width();
if(i/o>n/j){k.css({width:i+2,height:"auto"})
}else{k.css({width:"auto",height:n+2})
}};
c.prototype.destroy=function(){delete g[e].lookup[this.index];
this.$video&&this.$video.off(e);
this.$element.off(e).removeData(e);
this.$wrapper.remove()
};
g[e]={lookup:[]};
g.fn[e]=function(k,j){var i;
this.each(function(){i=g.data(this,e);
i&&i.destroy();
i=new c(this,k,j);
i.index=g[e].lookup.push(i)-1;
g.data(this,e,i)
});
return this
};
g(document).ready(function(){var i=g(window);
i.on("resize."+e,function(){for(var k=g[e].lookup.length,l=0,j;
l<k;
l++){j=g[e].lookup[l];
if(j&&j.settings.resizing){j.resize()
}}});
i.on("unload."+e,function(){return false
});
g(document).find("[data-"+e+"-bg]").each(function(m,l){var j=g(l);
var k=j.data(e+"-options");
var n=j.data(e+"-bg");
j[e](n,k)
})
})
});
(function(a){a("[data-video-click]").on("click",function(f){f.preventDefault();
var d=a(this).attr("data-video-click"),b="#video-modal-"+d,c=a(b).find("iframe"),g=c.attr("data-video-src");
a(b).modal("show");
a(c).attr("src",g)
});
a(".video-modal").on("hidden.bs.modal",function(){a(".video-modal iframe").removeAttr("src")
})
})(jQuery);
(function(a){a(document).ready(function(){var b=a("#pi-recommendations");
if(b.length){var c="http://exacttarget.recs.igodigital.com/a/v2/exacttarget/home_mc/recommend.json";
a.ajax({url:c,dataType:"jsonp"}).done(function(e){if(e&&e.length>0){a.each(e[0].items,function(){var i=this.content_image_link.replace("/card/","/half/");
var h=this.category.replace(/['"]+/g,"");
var f=this.content_title.replace(/['"]+/g,"");
var g='<div class="col-xs-6 col-md-4 pi-card"><figure id="'+this.content_id+'" class="thumbnail"><a href="'+this.link+'"><img src="'+i+'" alt="resource-card-img"></a><figcaption class="caption"><p>'+h+'</p><a href="'+this.link+'">'+f+".</a></figcaption></figure></div>";
b.find(".recommendation-container").append(g)
})
}else{var d=document.createElement("div");
d.innerText="Oops - we're unable to load your recommendations. Check out our Resource page for the latest digital marketing tips, trends, and advice.";
a(d).addClass("no-results-summary");
b.append(d)
}})
}})
}(jQuery));
(function(b){var d;
if(CQ.WCM){if(CQ.WCM.isEditMode(true)||CQ.WCM.isDesignMode(true)){d=false
}else{if(CQ.WCM.isPreviewMode(true)){d=true
}}}else{d=true
}if(d===true){if(Cookies.get("mc_banner")){var e=b(".hero-nav-banner-sidebar .customer-tab a");
var h=e.attr("data-hero-img"),g=e.attr("data-hero-tablet-img"),j=e.attr("data-hero-mobile-img");
b(".hero-nav-banner-sidebar .show-below-bar").show();
e.tab("show");
b(".hero-nav-background").css("background-image",'url("'+h+'")');
b(".hero-nav-background-tablet").css("background-image",'url("'+g+'")');
b(".hero-nav-background-mobile").css("background-image",'url("'+j+'")')
}else{var f=b(".hero-nav-banner-sidebar .default-tab a");
var i=f.attr("data-hero-img"),a=f.attr("data-hero-tablet-img"),c=f.attr("data-hero-mobile-img");
b(".hero-nav-blurb").show();
f.tab("show");
b(".hero-nav-background").css("background-image",'url("'+i+'")');
b(".hero-nav-background-tablet").css("background-image",'url("'+a+'")');
b(".hero-nav-background-mobile").css("background-image",'url("'+c+'")')
}b(".navItemHref").on("mouseover",function(k){var l=b(this).attr("data-hero-img");
k.preventDefault();
b(".hero-nav-background").css("background-image",'url("'+l+'")');
b(this).tab("show")
});
b(".navItemHref").on("click",function(l){l.preventDefault();
var k=b(this).attr("data-link-click");
window.open(k,"_self",false)
})
}else{b("#jumbotron-banner .nav-tabs li:first-child a").tab("show");
b(".hero-nav-blurb").show();
b(".hero-nav-banner-sidebar .show-below-bar").show();
b("#jumbotron-banner .nav-tabs .navItemHref").on("click",function(k){k.preventDefault();
var l=b(this).attr("data-hero-img");
b(".hero-nav-background").css("background-image",'url("'+l+'")');
b(this).tab("show")
})
}}(jQuery));
(function(a){if(CQ.WCM&&CQ.WCM.isEditMode()===true){a(".login-link .dropdown-menu a").on("click",function(b){b.preventDefault()
})
}else{a(".login-link .dropdown-menu a").on("click",function(f){f.preventDefault();
var c=a(this).attr("href"),b=new Date(),i={};
i.t=Date.now();
var h={mc:"mc.exacttarget.com",rd:"login.radian6.com",ss:"socialstudio.radian6.com",so:"app.social.com"};
for(var g in h){if(c.match(h[g])){var d=c.match(h[g])[0];
i.a=g
}}b.setTime(b.getTime()+90*86400*1000);
document.cookie="mc_banner="+JSON.stringify(i)+";path=/;expires="+b.toUTCString();
location.href=c
})
}})(jQuery);
(function(a){a(document).ready(function(){function c(e,j,d,f){var i=(screen.width/2)-(d/2);
var g=(screen.height/2)-(f/2);
return window.open(e,j,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+d+", height="+f+", top="+g+", left="+i)
}var b=a(".email-subscribe-submit").find("button");
b.on("click",function(){c("https://www.marketingcloud.com/subscribe","Subscribe",600,600)
})
})
}(jQuery));