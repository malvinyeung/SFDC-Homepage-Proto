var currentAttemtsCount=0;
var maxAttempsCount=10;
function checkIsCQIsAvailable(){if(typeof CQ_Analytics==="undefined"||CQ_Analytics===null){if(currentAttemtsCount<=maxAttempsCount){currentAttemtsCount++;
setTimeout(checkIsCQIsAvailable,3000)
}}else{loadCustomOperators()
}}function loadCustomOperators(){CQ_Analytics.Operator=(function(){return function(){}
})();
CQ_Analytics.Operator.IS="is";
CQ_Analytics.Operator.IS_NOT="isNot";
CQ_Analytics.OperatorActions=function(){var mapping={};
var addOperator=function(name,text,operation){mapping[name]=[text,operation]
};
addOperator(CQ_Analytics.Operator.IS,"is",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
if(parseInt(s1)==parseInt(s2)){return true
}}}return false
});
addOperator(CQ_Analytics.Operator.IS_NOT,"isNot",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
if(parseInt(s1)==parseInt(s2)){return false
}}}return true
});
var getByIndex=function(op,index){if(mapping[op]&&mapping[op][index]){return mapping[op][index]
}return""
};
var escapeQuote=function(str){if(str){str=str.replace(new RegExp("\\'","ig"),str)
}return str
};
return{getText:function(operator){return getByIndex(operator,0)
},setText:function(operator,newText){if(mapping[operator]&&mapping[operator][0]){mapping[operator][0]=newText
}},getOperation:function(operator){return getByIndex(operator,1)
},operate:function(object,property,operator,value,valueFormat){try{if(object&&object[property]){var toEval="";
var op=this.getOperation(operator);
op=op?op:operator;
var objectValue=CQ.shared.XSS.getXSSTablePropertyValue(object,property);
if(typeof op=="function"){return op.call(this,objectValue,value,valueFormat)
}else{if(valueFormat){toEval=valueFormat+"('"+objectValue+"') "+op+" "+valueFormat+"('"+value+"')"
}else{var s1=escapeQuote(objectValue);
var s2=escapeQuote(value);
toEval="'"+s1+"' "+op+" '"+s2+"'"
}var b=eval(toEval);
return b
}}}catch(e){}return false
}}
}()
}checkIsCQIsAvailable();