var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.navigation=SfdcWwwBase.navigation||{};
(function(d){var c=d("div.navbar-header-container");
var a=d("#expandablenavigation");
function b(){if(c.hasClass("mobile-active")){c.removeClass("mobile-active");
a.removeClass("mobile-active")
}else{c.addClass("mobile-active");
a.addClass("mobile-active")
}}SfdcWwwBase.navigation.bindClick=function(){d(".nav-container ul.main-menu .navbar-expander").unbind("click");
d("button.navbar-toggle").on("click",b);
d(".primary-nav-link").on("click",function(e){var f=d(this);
if(f.siblings(".mobile-sub-nav").find("a").length<=1){document.location=d(this).attr("href")
}else{SfdcWwwBase.navigation.toggleSubNav(this)
}return false
});
d(".search-form .form-control").mouseenter(function(){d(this).addClass("search-expand")
}).mouseleave(function(){d(this).removeClass("search-expand")
});
d(".sub-nav-return").on("click",function(){SfdcWwwBase.navigation.toggleSubNav(d(this).parent(".mobile-sub-nav").prev(".primary-nav-link"));
return false
})
};
SfdcWwwBase.navigation.initScrollMenu=function(e){var g=d(e);
var f=d("nav.navbar");
var i=d(".expandablenavigation");
var h="sticky-nav";
var j=d(".navbar-header-container").outerHeight();
d(window).scroll(function(){if(d(this).scrollTop()>j){f.addClass(h);
i.addClass(h)
}else{f.removeClass(h);
i.removeClass(h)
}});
d(".navbar-subnav-toggle").click(function(k){var l=d(this);
if(l.siblings(".sub-nav-panel").children().length===0){document.location=d(this).attr("href")
}else{if(!l.next(".sub-nav-panel").is(":visible")){d(".sub-nav-panel").hide();
l.next(".sub-nav-panel").css("display","block")
}else{d(".sub-nav-panel").hide();
d(".primary-menu-item").removeClass("active")
}}k.stopPropagation();
return false
});
d(document).click(function(k){if(!d(k.target).closest(".navbar-subnav-toggle").hasClass("navbar-subnav-toggle")&&d(".sub-nav-panel").is(":visible")){d(".sub-nav-panel").hide();
d(".primary-menu-item").removeClass("active");
k.stopPropagation()
}})
};
SfdcWwwBase.navigation.initSearch=function(){var g=d(".search-form");
var f=d(".search-form .btn");
var i=g.find("input");
var e;
var h="https://www.marketingcloud.com/search/site/";
i.on("change",function(){e=g.find("input")[0].value||g.find("input")[1].value
});
g.on("submit",function(j){j.preventDefault();
window.location.href=h+e
});
f.on("click",function(j){j.preventDefault();
window.location.href=h+e
})
};
SfdcWwwBase.navigation.toggleSubNav=function(f){var e=d(f).next(".mobile-sub-nav");
e.toggleClass("mobile-active");
e.collapse("toggle")
};
SfdcWwwBase.navigation.init=function(){this.bindClick();
this.initScrollMenu("ul.navbar-nav");
this.initSearch()
};
d(document).ready(function(){SfdcWwwBase.navigation.init()
})
}(jQuery));