!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var r=document.getElementsByClassName("ruSection"),a=document.getElementsByClassName("engSection"),o=document.getElementsByClassName("arSection");function s(e){e.preventDefault();for(var t=0;t<r.length;t++)r[t].classList.remove("ru"),a[t].classList.add("eng"),o[t].classList.add("ar")}function l(e){e.preventDefault();for(var t=0;t<a.length;t++)a[t].classList.remove("eng"),r[t].classList.add("ru"),o[t].classList.add("ar")}function u(e){e.preventDefault();for(var t=0;t<o.length;t++)o[t].classList.remove("ar"),a[t].classList.add("eng"),r[t].classList.add("ru")}window.onload=function(){for(var e=document.getElementsByClassName("header__btnRU"),t=0;t<e.length;t++)e[t].addEventListener("click",s);for(var n=document.getElementsByClassName("header__btnENG"),r=0;r<n.length;r++)n[r].addEventListener("click",l);for(var a=document.getElementsByClassName("header__btnAR"),o=0;o<a.length;o++)a[o].addEventListener("click",u)}},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map