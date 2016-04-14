var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.navigation=SfdcWwwBase.navigation||{};
(function(b){var a;
SfdcWwwBase.navigation.init=function(c){b(".navbar .icon-sfdc-icon-magnifying-glass").delay(600).fadeIn();
b(".gsc-input").on("keypress",_.throttle(SfdcWwwBase.navigation.onSearchKeyChanged,500));
b(window).on("rezise",_.throttle(SfdcWwwBase.navigation.onSearchKeyChanged,500))
};
SfdcWwwBase.navigation.checkGoogleSearchInput=function(){if(b("#___gcse_0").length>0){SfdcWwwBase.navigation.init();
clearTimeout(a)
}else{a=setTimeout(SfdcWwwBase.navigation.checkGoogleSearchInput,200)
}};
SfdcWwwBase.navigation.onSearchKeyChanged=function(c){b(".gssb_c").css("min-width",b(".gsc-search-box").width()+"px")
};
b(document).ready(function(){SfdcWwwBase.navigation.checkGoogleSearchInput()
})
}(jQuery));
(function(a){if(!a("body").hasClass("cq-wcm-edit")){a(document).ready(function(){var b=a(".leftnav");
if(b.length){var d=a(".leftnav-header-affix"),e=a(".leftnav-page-list"),f=a(".leftnav-footer-affix"),h=(parseInt(b.data("offset-top"))>0)?b.data("offset-top"):b.height(),c=a("header.header-container").outerHeight(true);
b.data("offset-top",h+c);
b.on("affix.bs.affix",function(){b.hide().removeClass("padding-top-no-affix").addClass("padding-top-affix");
d.show();
e.hide();
f.show()
});
b.on("affixed.bs.affix",function(){b.slideDown(250)
});
b.on("affix-top.bs.affix",function(){if(!e.is(":visible")){b.removeClass("padding-top-affix").addClass("padding-top-no-affix");
d.hide();
e.show();
f.hide()
}});
a(".leftnav-back-to-top").on("click",function(j){j.preventDefault();
a("html, body").animate({scrollTop:0},"slow")
})
}g(".contentHeight",".sidebar");
var i=_.throttle(function(){g(".contentHeight",".sidebar")
},200);
function g(k,j){a(j).height(a(k).height())
}})
}a.each(a(".manual_items a"),function(){if(a(this).attr("href")===window.location.pathname){a(this).addClass("active")
}});
a("select#leftnav-select").change(function(){window.location=a(this).children(":selected")[0].value
});
(function(){var b=a(".leftnav-select-container");
var c=a(".leftnav-heading .header-text").text();
b.find(".leftnav-select-head").text(c);
a(".content-container").prepend(b)
})();
(function(){a("#leftnav-select").find("option").each(function(b){if(this.classList.contains("active")&&!this.classList.contains("active-child")){a(this).attr("selected","selected")
}})
}())
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.searchResults=SfdcWwwBase.searchResults||{};
(function(c){var a=SfdcWwwBase.searchResults;
var b={sm:768,md:1024,lg:1200};
a.placePromo=function(){var d=c(".search-result-item").size(),e=d>2?2:d;
c(".results-promo .columnContainer > .columns-wrapper > .container").removeClass("container");
c(".results-promo").insertAfter(c(".search-result-item:eq("+e+")")).removeClass("hidden")
};
a.processData=function(e){var g=Math.ceil(e.searchInformation.totalResults/10);
g=(g>10)?10:g;
e.searchInformation.pages=g;
var h=(e.queries.request[0]["startIndex"]+9)/10;
e.searchInformation.currentpage=h;
var d=c("#search-results_template").html();
var f=_.template(d);
c(".search-results-container").html(f(e));
a.placePromo();
a.bindPaginationClicks()
};
a.bindPaginationClicks=function(){c(".search-results-container .pagination div").on("click",function(){var d=c(this).data("result-index");
var e=(d*10)-9;
a.getResults(e);
c("html, body").animate({scrollTop:0},"fast")
})
};
a.getResults=function(e){var d="https://www.googleapis.com/customsearch/v1",g=c(".search-results-container"),f=SfdcWwwBase.utils.getQueryParameterByName("q"),h=isNaN(e)?"":"&start="+e;
if(g.size()>0&&f!==""){d+="?key="+g.data("guid")+"&cx="+g.data("cx")+"&q="+f+h;
SfdcWwwBase.utils.getJSONP(d,this.processData,false)
}};
a.init=function(){this.getResults();
this.bindClick()
};
a.bindClick=function(){c(".expandableNavigationBarComponent .icon-sfdc-icon-magnifying-glass").on("click",function(){if(c(window).width()>=b.md){c(".search-form").toggleClass("active");
c("form.gsc-search-box").toggleClass("active");
c(".phone-number").toggleClass("search-active")
}})
};
a.init()
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.pricingComponent=SfdcWwwBase.pricingComponent||{};
(function(a){SfdcWwwBase.pricingComponent.adjustHeights=function(){if(a(".pricingComponent .horizontal-layout").length>0){SfdcWwwBase.utils.equalizeHeights(".pricingComponent .left-pricing-column, .pricingComponent .right-pricing-column")
}if(a(".pricingComponent .vertical-layout").length>0){SfdcWwwBase.utils.equalizeHeights(".pricingComponent .pricing-container .title-editions-container",SfdcWwwBase.pricingComponent.dockElement);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container .edition-container",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container .feature-bar",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container .price-body-description",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container .pricing-number",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container .pricing-tagline",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container .included-message",["xs"])
}};
SfdcWwwBase.pricingComponent.dockElement=function(){a(".pricingComponent .pricing-container .title-editions-container .funky").addClass("docked")
};
SfdcWwwBase.pricingComponent.init=function(){SfdcWwwBase.pricingComponent.adjustHeights()
};
a(document).ready(function(){if(a(".pricingComponent").length>0){SfdcWwwBase.pricingComponent.init()
}})
}(jQuery));