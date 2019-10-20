﻿/*!
 *  Our standard POF javascript library
 *      minified with: http://jscompress.com/
 */
function getPOFIMCookie(e){var t,n,r,i=document.cookie.split(";");for(t=0;t<i.length;t++){n=i[t].substr(0,i[t].indexOf("="));r=i[t].substr(i[t].indexOf("=")+1);n=n.replace(/^\s+|\s+$/g,"");if(n==e){return unescape(r)}}}function setPOFIMCookie(e,t,n){var r="";if(n){var i=new Date;i.setTime(i.getTime()+n*24*60*60*1e3);r="; expires="+i.toGMTString()}var s=escape(t);document.cookie=e+"="+s+r}function clearPOFIMCookie(e,t){setPOFIMCookie(e,t,-1)}function openPOFPopup(e,t,n){if(POFPopup==null||POFPopup.closed){POFPopup=window.open(e,t,n);POFPopup.focus()}else{if(POFPopup.focus){POFPopup=window.open(e,t,n);POFPopup.focus()}}}function resizePOFFlash(e,t){if(!navigator.userAgent.match("MSIE")){document.getElementById(e).style.height=t+"px"}if(t>1){document.getElementById(e).style.left="100px"}else{document.getElementById(e).style.left="-237px"}}function setPOFIMFocus(e){POFHasFocus=!e;if(!e){document.title=POFTitle}}function showPOFIMMessage(e,t){clearTimeout(POFTimer);switch(t){case false:POFHasFocus=true;document.title=POFTitle;break;case true:POFMessage=e;POFTimer=setTimeout("showPOFBlinkingMessage()",POFBlinkingInterval);break}}function showPOFBlinkingMessage(){clearTimeout(POFTimer);if(POFHasFocus){document.title=POFTitle}else{if(document.title==POFTitle){document.title=POFMessage}else{document.title=POFTitle}POFTimer=setTimeout("showPOFBlinkingMessage()",POFBlinkingInterval)}}function closePOFWindow(){window.close()}function setBase64Str(e){base64Str=e;base64Count=0}function readBase64(){if(!base64Str){return END_OF_INPUT}if(base64Count>=base64Str.length){return END_OF_INPUT}var e=base64Str.charCodeAt(base64Count)&255;base64Count++;return e}function encodeBase64(e){setBase64Str(e);var t="";var n=new Array(3);var r=0;var i=false;while(!i&&(n[0]=readBase64())!=END_OF_INPUT){n[1]=readBase64();n[2]=readBase64();t+=base64Chars[n[0]>>2];if(n[1]!=END_OF_INPUT){t+=base64Chars[n[0]<<4&48|n[1]>>4];if(n[2]!=END_OF_INPUT){t+=base64Chars[n[1]<<2&60|n[2]>>6];t+=base64Chars[n[2]&63]}else{t+=base64Chars[n[1]<<2&60];t+="=";i=true}}else{t+=base64Chars[n[0]<<4&48];t+="=";t+="=";i=true}r+=4;if(r>=76){t+="\n";r=0}}return t}function readReverseBase64(){if(!base64Str){return END_OF_INPUT}while(true){if(base64Count>=base64Str.length){return END_OF_INPUT}var e=base64Str.charAt(base64Count);base64Count++;if(reverseBase64Chars[e]){return reverseBase64Chars[e]}if(e=="A"){return 0}}return END_OF_INPUT}function ntos(e){e=e.toString(16);if(e.length==1){e="0"+e}e="%"+e;return unescape(e)}function decodeBase64(e){setBase64Str(e);var t="";var n=new Array(4);var r=false;while(!r&&(n[0]=readReverseBase64())!=END_OF_INPUT&&(n[1]=readReverseBase64())!=END_OF_INPUT){n[2]=readReverseBase64();n[3]=readReverseBase64();t+=ntos(n[0]<<2&255|n[1]>>4);if(n[2]!=END_OF_INPUT){t+=ntos(n[1]<<4&255|n[2]>>2);if(n[3]!=END_OF_INPUT){t+=ntos(n[2]<<6&255|n[3])}else{r=true}}else{r=true}}return t}function pof_ads_$(){var e=new Array;for(var t=0;t<arguments.length;t++){var n=arguments[t];if(typeof n=="string"){if(document.getElementById||document.getElementsByName){if(document.getElementById(n)){n=document.getElementById(n)}else{if(document.getElementsByName(n)){n=document.getElementsByName(n)[0]}}}else{if(document.all){n=document.all[n]}}}if(arguments.length==1){return n}e.push(n)}return e}function ads_show(e,t){if(typeof ads_output[e]=="undefined"){return}else{if(ads_output[e].substring(0,1)=="<"){pof_ads_$(t).innerHTML=ads_output[e]}else{var n=document.createElement("iframe");n.setAttribute("frameBorder","0");n.setAttribute("scrolling","no");n.setAttribute("width","100%");n.setAttribute("height","100%");n.setAttribute("vspace","0");n.setAttribute("hspace","0");n.setAttribute("allowTransparency","true");n.setAttribute("marginWidth","0");n.setAttribute("marginHeight","0");n.style.border="none";n.style.margin="0px";n.style.padding="0px";n.style.width="100%";n.style.height="100%";pof_ads_$(t).appendChild(n);if(n.contentDocument){n.contentDocument.write('<html><head></head><body style="margin:0;padding:0"><center>'+decodeBase64(ads_output[e])+"</center></body></html>")}else{if(n.contentWindow){n.contentWindow.document.write('<html><head></head><body style="margin:0;padding:0"><center>'+decodeBase64(ads_output[e])+"</center></body></html>")}}}}}function ads_can_show(e){try{if(typeof ads_output[e]=="undefined"){return false}return true}catch(t){}return false}function gettrailobj(){if(document.getElementById){return document.getElementById("trailimageid").style}else{if(document.all){return document.all.trailimagid.style}}}function gettrailobjnostyle(){if(document.getElementById){return document.getElementById("trailimageid")}else{if(document.all){return document.all.trailimagid}}}function truebody(){return!window.opera&&document.compatMode&&document.compatMode!="BackCompat"?document.documentElement:document.body}function showtrailb(e,t,n){if(t>0){currentimageheight=t}document.onmousemove=followmouse;newHTML='<div style="padding: 5px; background-color: #FFF; border: 1px solid #888;">';newHTML=newHTML+'<div align="center" style="padding: 8px 2px 2px 2px;">'+n;newHTML=newHTML+'<br><img src="'+e+'" border="0"></div>';newHTML=newHTML+"</div>";gettrailobjnostyle().innerHTML=newHTML;gettrailobj().display="inline"}function showtrail(e,t){if(t>0){currentimageheight=t}document.onmousemove=followmouse;newHTML='<div style="padding: 5px; background-color: #FFF; border: 1px solid #888;">';newHTML=newHTML+'<div align="center" style="padding: 4px 2px 2px 2px;">';newHTML=newHTML+'<img src="'+e+'" border="0"></div>';newHTML=newHTML+"</div>";gettrailobjnostyle().innerHTML=newHTML;gettrailobj().display="inline"}function showtrailBatch(e,t,n){document.onmousemove=followmouseBatch;cameraHTML="";newHTML='<div style="padding: 5px; background-color: #FFF; border: 1px solid #888;" id="trailInnerDiv">';newHTML=newHTML+'<div align="center" style="padding: 8px 2px 2px 2px;">';newHTML=newHTML+'<img src="'+e+'" border="0"></div>';newHTML=newHTML+"</div>";gettrailobjnostyle().innerHTML=newHTML;gettrailobj().display="inline";gettrailobj().position="absolute";currentimageheight=$("trailInnerDiv").offsetHeight}function hidetrail(){gettrailobj().innerHTML=" ";gettrailobj().display="none";document.onmousemove="";gettrailobj().left="-10000px"}function followmouse(e){var t=offsetfrommouse[0];var n=offsetfrommouse[1];var r=document.all?truebody().scrollLeft+truebody().clientWidth:pageXOffset+window.innerWidth-15;var i=document.all?Math.min(truebody().scrollHeight,truebody().clientHeight):Math.min(window.innerHeight);if(typeof e!="undefined"){if(r-e.pageX<gettrailobjnostyle().offsetWidth){t=e.pageX-t-gettrailobjnostyle().offsetWidth}else{t+=e.pageX}if(i-e.pageY<currentimageheight+110){n+=e.pageY-Math.max(0,110+currentimageheight+e.pageY-i-truebody().scrollTop)}else{n+=e.pageY}}else{if(typeof window.event!="undefined"){if(r-event.clientX<gettrailobjnostyle().offsetWidth){t=event.clientX+truebody().scrollLeft-t-gettrailobjnostyle().offsetWidth}else{t+=truebody().scrollLeft+event.clientX}if(i-event.clientY<currentimageheight+110){n+=event.clientY+truebody().scrollTop-Math.max(0,110+currentimageheight+event.clientY-i)}else{n+=truebody().scrollTop+event.clientY}}}if(n<0){n=n*-1}gettrailobj().left=t+"px";gettrailobj().top=n+"px"}function followmouseBatch(e){var t=offsetfrommouse[0];var n=offsetfrommouse[1];var r=document.all?truebody().scrollLeft+truebody().clientWidth:pageXOffset+window.innerWidth-15;var i=document.all?Math.min(truebody().scrollHeight,truebody().clientHeight):Math.min(window.innerHeight);var s=$("trailInnerDiv");var o=s.offsetHeight;var u=s.offsetWidth;scrollPos=Position.realOffset(truebody());if(typeof e!="undefined"){if(r-e.pageX<gettrailobjnostyle().offsetWidth){t=e.pageX-t-gettrailobjnostyle().offsetWidth}else{t+=e.pageX}if(e.pageY-scrollPos[1]+o>i){n=-n+(e.pageY-o)}else{n+=e.pageY}}else{if(typeof window.event!="undefined"){if(event.clientX+u>r){t=-t+(event.clientX+scrollPos[0]-u)}else{t+=event.clientX+scrollPos[0]}if(event.clientY+o>i){n=-n+(event.clientY+scrollPos[1]-o)}else{n+=event.clientY+scrollPos[1]}}}if(n<0){n=n*-1}gettrailobj().left=t+"px";gettrailobj().top=n+"px"}function createRequestObject(){var e;var t=navigator.appName;var n=navigator.appVersion;if(t=="Microsoft Internet Explorer"){e=new ActiveXObject("Microsoft.XMLHTTP")}else{e=new XMLHttpRequest}return e}function refreshstates(e){http.open("get","ajax_response.aspx?country_id="+e);http.onreadystatechange=handleResponse;http.send(null)}function getstates(e){http.open("get","ajax_response.aspx?country_id="+e.value);http.onreadystatechange=handleResponse;http.send(null)}function refreshstatesJSON(e){http.open("get","ajax_response.aspx?type=json&country_id="+e);http.onreadystatechange=handleResponseJSON;http.send(null)}function getstatesJSON(e){http.open("get","ajax_response.aspx?type=json&country_id="+e.value);http.onreadystatechange=handleResponseJSON;http.send(null)}function validateZipCode(e){var t=document.getElementById("country");var n="";try{if(t){t=document.getElementById("country").value}else{t=document.getElementById("country1");if(t){t=document.getElementById("country1").value}else{t="<%=country_id%>"}}var r=e.value;var i=new RegExp("[^A-Za-z0-9]");while(i.test(r)){r=r.replace(i,"")}r=r.toUpperCase();e.value=r;if(e.value!=null&&e.value!=""){http.open("get","ajax_response.aspx?zipcode="+e.value+"&countryid="+t);http.onreadystatechange=handleResponseZipCode;http.send(null)}else{try{document.getElementById("isvalidzcode").innerHTML=""}catch(n){document.getElementById("isvalidzcode1").innerHTML=""}}}catch(n){}}function resetZipcode(){var e="";var t=document.getElementById("z_code");if(t){document.getElementById("z_code").value=""}else{t=document.getElementById("postalcode");if(t){document.getElementById("postalcode").value=""}}var t=document.getElementById("z_code1");if(t){document.getElementById("z_code1").value=""}else{t=document.getElementById("postalcode");if(t){document.getElementById("postalcode").value=""}}try{document.getElementById("isvalidzcode").innerHTML=""}catch(e){if(document.getElementById("isvalidzcode1")){document.getElementById("isvalidzcode1").innerHTML=""}}}function resetCity(){var e=document.getElementById("City");if(e){document.getElementById("City").value=""}else{e=document.getElementById("city");if(e){document.getElementById("city").value=""}else{if(document.getElementById("city1")){document.getElementById("city1").value=""}}}}function nextimage(e,t,n,r){p_id=n;http.open("get","ajax_response.aspx?image_id="+e+"&id="+t+"&profile_id="+n+"&imagecount="+r);http.onreadystatechange=handleResponseImage;http.send(null)}function handleResponse(){if(http.readyState==4){var e=http.responseText;var t=true;var n=document.getElementById("state");if(n===null)t=false;else if(n===undefined)t=false;if(!t){n=document.getElementById("state1");if(n===null)t=false;else if(n===undefined)t=false;else t=true}if(!t){n=document.getElementById("stateb");if(n===null)t=false;else if(n===undefined)t=false;else t=true}if(!t)return;n.innerHTML=e}}function handleResponseJSON(){if(http.readyState==4){var e=true;var t=document.getElementById("state");if(t===null)e=false;else if(t===undefined)e=false;if(!e){t=document.getElementById("state1");if(t===null)e=false;else if(t===undefined)e=false;else e=true}if(!e){t=document.getElementById("stateb");if(t===null)e=false;else if(t===undefined)e=false;else e=true}if(!e)return;removeOptions(t);var n=http.responseText;var r=jQuery.parseJSON(n);if(r!=null){for(var i in r){jQuery(t).append(jQuery('<option value="'+r[i].Value+'">'+r[i].Key+"</option>"))}}var s=t.childNodes.length;jQuery(document).ready(function(){if(originalState===""){jQuery(t).val("")}else{jQuery(t).val(originalState)}if(!isMobile.any()){jQuery(function(){if(typeof jQuery().multiselect==="function"){if(jQuery(t).multiselect()){if(s>5){jQuery(t).multiselect({height:"175"})}else{jQuery(t).multiselect({height:"auto"})}jQuery(t).multiselect("refresh")}}})}})}}function removeOptions(e){jQuery(document).ready(function(){jQuery(e).empty()})}function handleResponseZipCode(){if(http.readyState==4){var e=http.responseXML;var t="";var n="";t=e.getElementsByTagName("errorMsg")[0].firstChild;try{if(t){if(t.length>0){if(document.getElementById("isvalidzcode")){document.getElementById("isvalidzcode").innerHTML='<span style="color: red;">'+t.nodeValue+"</span>"}else{document.getElementById("isvalidzcode1").innerHTML='<span style="color: red;">'+t.nodeValue+"</span>"}}}else{if(document.getElementById("isvalidzcode")){document.getElementById("isvalidzcode").innerHTML=""}else{document.getElementById("isvalidzcode1").innerHTML=""}var r=document.getElementById("city");if(r){var i=e.getElementsByTagName("city")[0].firstChild;if(i){if(i.length>0){document.getElementById("city").value=e.getElementsByTagName("city")[0].firstChild.nodeValue}}}else{r=document.getElementById("city1");if(r){var i=e.getElementsByTagName("city")[0].firstChild;if(i){if(i.length>0){document.getElementById("city1").value=e.getElementsByTagName("city")[0].firstChild.nodeValue}}}else{var i=e.getElementsByTagName("city")[0].firstChild;if(i){if(i.length>0){document.getElementById("City").value=e.getElementsByTagName("city")[0].firstChild.nodeValue}}}}if(document.getElementById("state")){document.getElementById("state").value=e.getElementsByTagName("stateid")[0].firstChild.nodeValue}else{document.getElementById("state1").value=e.getElementsByTagName("stateid")[0].firstChild.nodeValue}}}catch(n){}}}var gOldOnError=window.onerror;window.onerror=function(t,n,r){var i=new Image;i.src="/client_side_error.aspx?category=url&desc="+escape(t+"line_no"+r);i.style.display="none";if(gOldOnError){return gOldOnError(t,n,r)}return false};if(typeof console==="undefined"){console={};console.log=function(){}}if(!window.console){window.console=function(){}}window.pof=window.pof||{};window.Localizer=window.Localizer||{};window.Localizer.Current=window.Localizer.Current||{};window.pof.trimString=function(e){return e.replace(/^\s+|\s+$/g,"")};window.pof.typeOf=function(e){return{}.toString.call(e).match(/\w+/g)[1].toLowerCase()};window.pof.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"};window.pof.isObject=function(e){var t=Object.prototype.toString.call(e);return t==="[object Object]"};window.pof.getChildElements=function(e,t){t=t.split(".");while(e&&t.length){e=e[t.shift()]}return e};window.pof.buildFromTemplate=function(e,t){function n(e,t){var r=0;var i=0;var s="";while(true){r=e.indexOf("${",i);if(r<0)break;s+=e.substring(i,r);i=r;r+=2;if(e.substr(r,3)=="if "){try{r+=3;var o=e.substr(r,1)=="!";if(o)r++;var u=e.indexOf("}",r);if(u<0)break;var a=e.substring(r,u);r=u+1;u=e.indexOf("${endif}",r);if(u<0)break;var f=e.indexOf("${else}",r);if(f<0||f>=u)f=u;var l=t[a];if(o)l=!l;if(l)s+=n(e.substring(r,f),t);if(f<u&&!l)s+=n(e.substring(f+7,u),t);i=u+8}catch(c){console.Log("error in if else: "+c.Message)}}else if(e.substr(r,7)=="foreach"){try{var u=e.indexOf("as",r);if(u<0)break;var h=pof.trimString(e.substring(r+8,u-1));r=u+2;u=e.indexOf("}",r);if(u<0)break;var a=pof.trimString(e.substring(r,u));r=u+1;var p=r;var d=e.indexOf("${endforeach}",r);if(d<0)break;var v=e.substring(p,d);var m=t[h];for(var g in m){var y,b;if(pof.getChildElements(m[g],"text")!=null)y=pof.getChildElements(m[g],"text");if(pof.getChildElements(m[g],"value")!=null)b=pof.getChildElements(m[g],"value");if(t["varname"]!=null){var w=t["varname"];var E=w.replace(" ","_");E=w.replace("?","");t["varname"]=E}t["text"]=y;t["value"]=b;var S=n(v,t);if(y=="Other"){var x="<div class='clearboth'></div><input class='hidden' style='width: 750px; margin-left: 40px;' type=text size=100 max-width=255 name='freetext_"+b+"_"+t["name"]+"' id='freetext_"+b+"' />";S+=x}if(t["type"]=="selectmultiple")s+='<fieldset class="floatleft size50 alignleft padding10">'+S+"</fieldset>";else s+=S}i=d}catch(c){console.Log("error in foreach: "+c.Message)}}else if(e.substr(r,7)=="iterate"){try{var u=e.indexOf("}",r);if(u<0)break;var h=pof.trimString(e.substring(r+8,u));r=u+1;var p=r;var d=e.indexOf("${enditerate}",r);if(d<0)break;var v=e.substring(p,d);var m=t[h];var T=parseInt(t["minrange"]);var N=parseInt(t["maxrange"]);for(var g=T;g<N+1;g++){var C;t["iterate"]=g;s+=n(v,t)}i=d}catch(c){console.Log("error in iterate: "+c.Message)}}else{try{var u=e.indexOf("}",r);if(u<0)break;var a=e.substring(r,u);i=u+1;if(a.length>18&&a.substring(0,18)=="Localizer.Current."){s+=Localizer.Current[a.substring(18)]}else if(a=="endforeach")s+="";else{s+=t[a]}}catch(c){console.Log("error in replaceVar: "+c.Message)}}}s+=e.substring(i);e="";e=s;return e}var r=document.getElementById(e);var i=r.innerHTML.toString();return n(i,t)};var POFIMCookie=getPOFIMCookie("POFIMSession");if(POFIMCookie==undefined){var date=new Date;setPOFIMCookie("POFIMSession",date.getTime())}var POFPopup;var POFTitle=document.title;var POFHasFocus=true;var POFBlinkingInterval=1e3;var POFMessage;var POFTimer;if(navigator.appName=="Microsoft Internet Explorer"){document.onfocusout=function(){setPOFIMFocus(true)};document.onfocusin=function(){setPOFIMFocus(false)}}else{window.onblur=function(){setPOFIMFocus(true)};window.onfocus=function(){setPOFIMFocus(false)}}var END_OF_INPUT=-1;var base64Chars=new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/");var reverseBase64Chars=new Array;for(var i=0;i<base64Chars.length;i++){reverseBase64Chars[base64Chars[i]]=i}var base64Str;var base64Count;var FlashHeed=function(e){var t=e.document;var n=function(e,t,n){var r="",i=e,s;try{while(i.length>0){if(s=i.match(t)){r+=i.slice(0,s.index);r+=n;i=i.slice(s.index+s[0].length)}else{r+=i,i=""}}}catch(o){r=""}return r};var r=function(e){try{if(e===undefined||e===null){var e=t}var r=e.getElementsByTagName("object");var i=r.length;var s;for(s=0;s<i;s++){var o=r[s];var u=o.getElementsByTagName("param");var f=u.length;var l=o.getElementsByTagName("embed");var h=null;if(l.length>0){var h=l[0]}if(h){h.setAttribute("wmode","transparent");var p=h.nextSibling,d=h.parentNode;d.removeChild(h);d.insertBefore(h,p)}var v=false;var m=false;for(var g=0;g<f;g++){if(u[g].name==="wmode"){if(/transparent/i.test(u[g].value)||/opaque/i.test(u[g].value)){v=true}else{m=true}}}if(!v||m){var y=o.outerHTML;var p=o.nextSibling,d=o.parentNode;y=n(y,/<param name="wmode".*?>/i,"");y=n(y,/<\/object>/i,'<PARAM NAME="WMode" VALUE="Transparent"></object>');d.removeChild(o);var b=t.createElement("div");b.appendChild(o);b.innerHTML="";b.innerHTML=y;d.insertBefore(b,p)}}}catch(w){}};return{heed:r}}(window);var offsetfrommouse=[15,15];var displayduration=0;var currentimageheight=270;if(document.getElementById||document.all){document.write('<div id="trailimageid">');document.write("</div>")}var FlashDetect=new function(){var e=this;e.installed=false;e.raw="";e.major=-1;e.minor=-1;e.revision=-1;e.revisionStr="";var t=[{name:"ShockwaveFlash.ShockwaveFlash.7",version:function(e){return n(e)}},{name:"ShockwaveFlash.ShockwaveFlash.6",version:function(e){var t="6,0,21";try{e.AllowScriptAccess="always";t=n(e)}catch(r){}return t}},{name:"ShockwaveFlash.ShockwaveFlash",version:function(e){return n(e)}}];var n=function(e){var t=-1;try{t=e.GetVariable("$version")}catch(n){}return t};var r=function(e){var t=-1;try{t=new ActiveXObject(e)}catch(n){t={activeXError:true}}return t};var s=function(e){var t=e.split(",");return{raw:e,major:parseInt(t[0].split(" ")[1],10),minor:parseInt(t[1],10),revision:parseInt(t[2],10),revisionStr:t[2]}};var o=function(e){var t=e.split(/ +/);var n=t[2].split(/\./);var r=t[3];return{raw:e,major:parseInt(n[0],10),minor:parseInt(n[1],10),revisionStr:r,revision:u(r)}};var u=function(t){return parseInt(t.replace(/[a-zA-Z]/g,""),10)||e.revision};e.majorAtLeast=function(t){return e.major>=t};e.minorAtLeast=function(t){return e.minor>=t};e.revisionAtLeast=function(t){return e.revision>=t};e.versionAtLeast=function(t){var n=[e.major,e.minor,e.revision];var r=Math.min(n.length,arguments.length);for(i=0;i<r;i++){if(n[i]>=arguments[i]){if(i+1<r&&n[i]==arguments[i]){continue}else{return true}}else{return false}}};e.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var n="application/x-shockwave-flash";var i=navigator.mimeTypes;if(i&&i[n]&&i[n].enabledPlugin&&i[n].enabledPlugin.description){var u=i[n].enabledPlugin.description;var l=o(u);e.raw=l.raw;e.major=l.major;e.minor=l.minor;e.revisionStr=l.revisionStr;e.revision=l.revision;e.installed=true}}else{if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var u=-1;for(var h=0;h<t.length&&u==-1;h++){var p=r(t[h].name);if(!p.activeXError){e.installed=true;u=t[h].version(p);if(u!=-1){var l=s(u);e.raw=l.raw;e.major=l.major;e.minor=l.minor;e.revision=l.revision;e.revisionStr=l.revisionStr}}}}}}()};FlashDetect.JS_RELEASE="1.0.4";var http=createRequestObject();var p_id="";var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};var originalState;var swfobject=function(){function C(){if(b){return}try{var e=a.getElementsByTagName("body")[0].appendChild(U("span"));e.parentNode.removeChild(e)}catch(t){return}b=true;var n=c.length;for(var r=0;r<n;r++){c[r]()}}function k(e){if(b){e()}else{c[c.length]=e}}function L(t){if(typeof u.addEventListener!=e){u.addEventListener("load",t,false)}else{if(typeof a.addEventListener!=e){a.addEventListener("load",t,false)}else{if(typeof u.attachEvent!=e){z(u,"onload",t)}else{if(typeof u.onload=="function"){var n=u.onload;u.onload=function(){n();t()}}else{u.onload=t}}}}}function A(){if(l){O()}else{M()}}function O(){var n=a.getElementsByTagName("body")[0];var r=U(t);r.setAttribute("type",i);var s=n.appendChild(r);if(s){var o=0;(function(){if(typeof s.GetVariable!=e){var t=s.GetVariable("$version");if(t){t=t.split(" ")[1].split(",");T.pv=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10)]}}else{if(o<10){o++;setTimeout(arguments.callee,10);return}}n.removeChild(r);s=null;M()})()}else{M()}}function M(){var t=h.length;if(t>0){for(var n=0;n<t;n++){var r=h[n].id;var i=h[n].callbackFn;var s={success:false,id:r};if(T.pv[0]>0){var o=R(r);if(o){if(W(h[n].swfVersion)&&!(T.wk&&T.wk<312)){V(r,true);if(i){s.success=true;s.ref=_(r);i(s)}}else{if(h[n].expressInstall&&D()){var u={};u.data=h[n].expressInstall;u.width=o.getAttribute("width")||"0";u.height=o.getAttribute("height")||"0";if(o.getAttribute("class")){u.styleclass=o.getAttribute("class")}if(o.getAttribute("align")){u.align=o.getAttribute("align")}var a={};var f=o.getElementsByTagName("param");var l=f.length;for(var c=0;c<l;c++){if(f[c].getAttribute("name").toLowerCase()!="movie"){a[f[c].getAttribute("name")]=f[c].getAttribute("value")}}P(u,a,r,i)}else{H(o);if(i){i(s)}}}}}else{V(r,true);if(i){var p=_(r);if(p&&typeof p.SetVariable!=e){s.success=true;s.ref=p}i(s)}}}}}function _(n){var r=null;var i=R(n);if(i&&i.nodeName=="OBJECT"){if(typeof i.SetVariable!=e){r=i}else{var s=i.getElementsByTagName(t)[0];if(s){r=s}}}return r}function D(){return!w&&W("6.0.65")&&(T.win||T.mac)&&!(T.wk&&T.wk<312)}function P(t,n,r,i){w=true;g=i||null;y={success:false,id:r};var o=R(r);if(o){if(o.nodeName=="OBJECT"){v=B(o);m=null}else{v=o;m=r}t.id=s;if(typeof t.width==e||!/%$/.test(t.width)&&parseInt(t.width,10)<310){t.width="310"}if(typeof t.height==e||!/%$/.test(t.height)&&parseInt(t.height,10)<137){t.height="137"}a.title=a.title.slice(0,47)+" - Flash Player Installation";var f=T.ie&&T.win?"ActiveX":"PlugIn",l="MMredirectURL="+u.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+a.title;if(typeof n.flashvars!=e){n.flashvars+="&"+l}else{n.flashvars=l}if(T.ie&&T.win&&o.readyState!=4){var c=U("div");r+="SWFObjectNew";c.setAttribute("id",r);o.parentNode.insertBefore(c,o);o.style.display="none";(function(){if(o.readyState==4){o.parentNode.removeChild(o)}else{setTimeout(arguments.callee,10)}})()}j(t,n,r)}}function H(e){if(T.ie&&T.win&&e.readyState!=4){var t=U("div");e.parentNode.insertBefore(t,e);t.parentNode.replaceChild(B(e),t);e.style.display="none";(function(){if(e.readyState==4){e.parentNode.removeChild(e)}else{setTimeout(arguments.callee,10)}})()}else{e.parentNode.replaceChild(B(e),e)}}function B(e){var n=U("div");if(T.win&&T.ie){n.innerHTML=e.innerHTML}else{var r=e.getElementsByTagName(t)[0];if(r){var i=r.childNodes;if(i){var s=i.length;for(var o=0;o<s;o++){if(!(i[o].nodeType==1&&i[o].nodeName=="PARAM")&&!(i[o].nodeType==8)){n.appendChild(i[o].cloneNode(true))}}}}}return n}function j(n,r,s){var o,u=R(s);if(T.wk&&T.wk<312){return o}if(u){if(typeof n.id==e){n.id=s}if(T.ie&&T.win){var a="";for(var f in n){if(n[f]!=Object.prototype[f]){if(f.toLowerCase()=="data"){r.movie=n[f]}else{if(f.toLowerCase()=="styleclass"){a+=' class="'+n[f]+'"'}else{if(f.toLowerCase()!="classid"){a+=" "+f+'="'+n[f]+'"'}}}}}var l="";for(var c in r){if(r[c]!=Object.prototype[c]){l+='<param name="'+c+'" value="'+r[c]+'" />'}}u.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>";p[p.length]=n.id;o=R(n.id)}else{var h=U(t);h.setAttribute("type",i);for(var d in n){if(n[d]!=Object.prototype[d]){if(d.toLowerCase()=="styleclass"){h.setAttribute("class",n[d])}else{if(d.toLowerCase()!="classid"){h.setAttribute(d,n[d])}}}}for(var v in r){if(r[v]!=Object.prototype[v]&&v.toLowerCase()!="movie"){F(h,v,r[v])}}u.parentNode.replaceChild(h,u);o=h}}return o}function F(e,t,n){var r=U("param");r.setAttribute("name",t);r.setAttribute("value",n);e.appendChild(r)}function I(e){var t=R(e);if(t&&t.nodeName=="OBJECT"){if(T.ie&&T.win){t.style.display="none";(function(){if(t.readyState==4){q(e)}else{setTimeout(arguments.callee,10)}})()}else{t.parentNode.removeChild(t)}}}function q(e){var t=R(e);if(t){for(var n in t){if(typeof t[n]=="function"){t[n]=null}}t.parentNode.removeChild(t)}}function R(e){var t=null;try{t=a.getElementById(e)}catch(n){}return t}function U(e){return a.createElement(e)}function z(e,t,n){e.attachEvent(t,n);d[d.length]=[e,t,n]}function W(e){var t=T.pv,n=e.split(".");n[0]=parseInt(n[0],10);n[1]=parseInt(n[1],10)||0;n[2]=parseInt(n[2],10)||0;return t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?true:false}function X(n,r,i,s){if(T.ie&&T.mac){return}var o=a.getElementsByTagName("head")[0];if(!o){return}var u=i&&typeof i=="string"?i:"screen";if(s){E=null;S=null}if(!E||S!=u){var f=U("style");f.setAttribute("type","text/css");f.setAttribute("media",u);E=o.appendChild(f);if(T.ie&&T.win&&typeof a.styleSheets!=e&&a.styleSheets.length>0){E=a.styleSheets[a.styleSheets.length-1]}S=u}if(T.ie&&T.win){if(E&&typeof E.addRule==t){E.addRule(n,r)}}else{if(E&&typeof a.createTextNode!=e){E.appendChild(a.createTextNode(n+" {"+r+"}"))}}}function V(e,t){if(!x){return}var n=t?"visible":"hidden";if(b&&R(e)){R(e).style.visibility=n}else{X("#"+e,"visibility:"+n)}}function $(t){var n=/[\\\"<>\.;]/;var r=n.exec(t)!=null;return r&&typeof encodeURIComponent!=e?encodeURIComponent(t):t}var e="undefined",t="object",n="Shockwave Flash",r="ShockwaveFlash.ShockwaveFlash",i="application/x-shockwave-flash",s="SWFObjectExprInst",o="onreadystatechange",u=window,a=document,f=navigator,l=false,c=[A],h=[],p=[],d=[],v,m,g,y,b=false,w=false,E,S,x=true,T=function(){var s=typeof a.getElementById!=e&&typeof a.getElementsByTagName!=e&&typeof a.createElement!=e,o=f.userAgent.toLowerCase(),c=f.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(o),p=c?/mac/.test(c):/mac/.test(o),d=/webkit/.test(o)?parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,v=!+"1",m=[0,0,0],g=null;if(typeof f.plugins!=e&&typeof f.plugins[n]==t){g=f.plugins[n].description;if(g&&!(typeof f.mimeTypes!=e&&f.mimeTypes[i]&&!f.mimeTypes[i].enabledPlugin)){l=true;v=false;g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1");m[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10);m[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10);m[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof u.ActiveXObject!=e){try{var y=new ActiveXObject(r);if(y){g=y.GetVariable("$version");if(g){v=true;g=g.split(" ")[1].split(",");m=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]}}}catch(b){}}}return{w3:s,pv:m,wk:d,ie:v,win:h,mac:p}}(),N=function(){if(!T.w3){return}if(typeof a.readyState!=e&&a.readyState=="complete"||typeof a.readyState==e&&(a.getElementsByTagName("body")[0]||a.body)){C()}if(!b){if(typeof a.addEventListener!=e){a.addEventListener("DOMContentLoaded",C,false)}if(T.ie&&T.win){a.attachEvent(o,function(){if(a.readyState=="complete"){a.detachEvent(o,arguments.callee);C()}});if(u==top){(function(){if(b){return}try{a.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}C()})()}}if(T.wk){(function(){if(b){return}if(!/loaded|complete/.test(a.readyState)){setTimeout(arguments.callee,0);return}C()})()}L(C)}}();var J=function(){if(T.ie&&T.win){window.attachEvent("onunload",function(){var e=d.length;for(var t=0;t<e;t++){d[t][0].detachEvent(d[t][1],d[t][2])}var n=p.length;for(var r=0;r<n;r++){I(p[r])}for(var i in T){T[i]=null}T=null;for(var s in swfobject){swfobject[s]=null}swfobject=null})}}();return{registerObject:function(e,t,n,r){if(T.w3&&e&&t){var i={};i.id=e;i.swfVersion=t;i.expressInstall=n;i.callbackFn=r;h[h.length]=i;V(e,false)}else{if(r){r({success:false,id:e})}}},getObjectById:function(e){if(T.w3){return _(e)}},embedSWF:function(n,r,i,s,o,u,a,f,l,c){var h={success:false,id:r};if(T.w3&&!(T.wk&&T.wk<312)&&n&&r&&i&&s&&o){V(r,false);k(function(){i+="";s+="";var p={};if(l&&typeof l===t){for(var d in l){p[d]=l[d]}}p.data=n;p.width=i;p.height=s;var v={};if(f&&typeof f===t){for(var m in f){v[m]=f[m]}}if(a&&typeof a===t){for(var g in a){if(typeof v.flashvars!=e){v.flashvars+="&"+g+"="+a[g]}else{v.flashvars=g+"="+a[g]}}}if(W(o)){var y=j(p,v,r);if(p.id==r){V(r,true)}h.success=true;h.ref=y}else{if(u&&D()){p.data=u;P(p,v,r,c);return}else{V(r,true)}}if(c){c(h)}})}else{if(c){c(h)}}},switchOffAutoHideShow:function(){x=false},ua:T,getFlashPlayerVersion:function(){return{major:T.pv[0],minor:T.pv[1],release:T.pv[2]}},hasFlashPlayerVersion:W,createSWF:function(e,t,n){if(T.w3){return j(e,t,n)}else{return undefined}},showExpressInstall:function(e,t,n,r){if(T.w3&&D()){P(e,t,n,r)}},removeSWF:function(e){if(T.w3){I(e)}},createCSS:function(e,t,n,r){if(T.w3){X(e,t,n,r)}},addDomLoadEvent:k,addLoadEvent:L,getQueryParamValue:function(e){var t=a.location.search||a.location.hash;if(t){if(/\?/.test(t)){t=t.split("?")[1]}if(e==null){return $(t)}var n=t.split("&");for(var r=0;r<n.length;r++){if(n[r].substring(0,n[r].indexOf("="))==e){return $(n[r].substring(n[r].indexOf("=")+1))}}}return""},expressInstallCallback:function(){if(w){var e=R(s);if(e&&v){e.parentNode.replaceChild(v,e);if(m){V(m,true);if(T.ie&&T.win){v.style.display="block"}}if(g){g(y)}}w=false}}}}();var getElementsByClassName=function(e,t,n){if(document.getElementsByClassName){getElementsByClassName=function(e,t,n){n=n||document;var r=n.getElementsByClassName(e),i=t?new RegExp("\\b"+t+"\\b","i"):null,s=[],o;for(var u=0,a=r.length;u<a;u+=1){o=r[u];if(!i||i.test(o.nodeName)){s.push(o)}}return s}}else if(document.evaluate){getElementsByClassName=function(e,t,n){t=t||"*";n=n||document;var r=e.split(" "),i="",s="http://www.w3.org/1999/xhtml",o=document.documentElement.namespaceURI===s?s:null,u=[],a,f;for(var l=0,c=r.length;l<c;l+=1){i+="[contains(concat(' ', @class, ' '), ' "+r[l]+" ')]"}try{a=document.evaluate(".//"+t+i,n,o,0,null)}catch(h){a=document.evaluate(".//"+t+i,n,null,0,null)}while(f=a.iterateNext()){u.push(f)}return u}}else{getElementsByClassName=function(e,t,n){t=t||"*";n=n||document;var r=e.split(" "),i=[],s=t==="*"&&n.all?n.all:n.getElementsByTagName(t),o,u=[],a;for(var f=0,l=r.length;f<l;f+=1){i.push(new RegExp("(^|\\s)"+r[f]+"(\\s|$)"))}for(var c=0,h=s.length;c<h;c+=1){o=s[c];a=false;for(var p=0,d=i.length;p<d;p+=1){a=i[p].test(o.className);if(!a){break}}if(a){u.push(o)}}return u}}return getElementsByClassName(e,t,n)}