(function(e){function n(n){for(var t,i,a=n[0],l=n[1],u=n[2],s=0,A=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&A.push(o[i][0]),o[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);d&&d(n);while(A.length)A.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,n=0;n<c.length;n++){for(var r=c[n],t=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(t=!1)}t&&(c.splice(n--,1),e=a(a.s=r[0]))}return e}var t={},o={index:0},c=[];function i(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-142e604a":"3308c6c1","chunk-25a348e3":"8e4c98c8","chunk-2d0a3b07":"7a4fa44d","chunk-2d0d7fc8":"a2484ca8","chunk-2d208c55":"c83f133b","chunk-2d20939b":"e788dcb1","chunk-2d210231":"39e083dd","chunk-2d2308af":"31c0e5dc","chunk-3dfe3b8c":"e6222087","chunk-4f4d96d6":"bed41b55","chunk-7177ca78":"17fcac16","chunk-777e9b24":"ef280fc3"}[e]+".js"}function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var n=[],r=o[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=t);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=i(e);var u=new Error;c=function(n){l.onerror=l.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",u.name="ChunkLoadError",u.type=t,u.request=c,r[1](u)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,r){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(r,t,function(n){return e[n]}.bind(null,t));return r},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"034f":function(e,n,r){"use strict";r("3ebb")},"321e":function(e,n,r){var t=r("24fb"),o=r("efb3"),c=r("4f1f");n=t(!1),n.i(o),n.i(c),n.push([e.i,"div{margin:0;padding:0}#app{font-size:20px;overflow:hidden;max-width:100vw;max-height:100vh;position:relative}.hiddenCusor{cursor:none!important}.page{display:flex;justify-content:center;align-items:center}.fix,.page{position:fixed;left:0;top:0;right:0;bottom:0;background:#000}.home{color:#fff;background:#000}.rx_no_select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rx_flex{display:flex}.rx_flexspace{display:flex;justify-content:space-between;align-items:center}.rx_flex_center{justify-content:center;align-items:center}.rx_flex_endcenter{justify-content:center;align-items:flex-end}.rx_flex_spacecenter{justify-content:space-between}.rx_flex_itemcenter{align-items:center}.rx_flex_column{flex-direction:column}",""]),e.exports=n},"33d0":function(e,n,r){var t=r("814a");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=r("499e").default;o("e9e83054",t,!0,{sourceMap:!1,shadowMode:!1})},"3ebb":function(e,n,r){var t=r("e31a");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=r("499e").default;o("61bc0355",t,!0,{sourceMap:!1,shadowMode:!1})},"4f1f":function(e,n,r){var t=r("24fb");n=t(!1),n.push([e.i,".hidden_scroller::-webkit-scrollbar{width:0;height:0}.hidden_scroller::-webkit-scrollbar-button,.hidden_scroller::-webkit-scrollbar-track{background-color:transparent}.hidden_scroller::-webkit-scrollbar-thumb,.hidden_scroller::-webkit-scrollbar-track-piece{background-color:transparent}.hidden_scroller::-webkit-scrollbar-corner,.hidden_scroller::-webkit-scrollbar-resizer{background-color:transparent}.hidden_scroller .-o-scrollbar{-moz-appearance:none!important;background:rgba(0,255,0,0)!important}.hidden_scroller::-o-scrollbar-button,.hidden_scroller::-o-scrollbar-track{background-color:transparent}.hidden_scroller::-o-scrollbar-thumb,.hidden_scroller::-o-scrollbar-track-piece{background-color:transparent}.hidden_scroller::-o-scrollbar-corner,.hidden_scroller::-o-scrollbar-resizer{background-color:transparent}.hidden_scroller{-ms-scroll-chaining:chained;-ms-content-zooming:zoom;-ms-scroll-rails:none;-ms-content-zoom-limit-min:100%;-ms-content-zoom-limit-max:500%;-ms-scroll-snap-points-x:snapList(100%,200%,300%,400%,500%);-ms-overflow-style:none;overflow:auto}",""]),e.exports=n},"56d7":function(e,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var t=r("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"rx_no_select",attrs:{id:"app"}},[r("router-view")],1)},c=[],i={name:"App",components:{}},a=i,l=(r("034f"),r("b0a0"),r("2877")),u=Object(l["a"])(a,o,c,!1,null,null,null),s=u.exports,d=r("8c4f"),A=(r("d3b7"),r("3ca3"),r("ddb0"),[{path:"/",redirect:"home"},{path:"/home",component:function(){return r.e("chunk-25a348e3").then(r.bind(null,"22cd"))}},{path:"/config",component:function(){return r.e("chunk-2d0a3b07").then(r.bind(null,"02f5"))}},{path:"/about",component:function(){return r.e("chunk-142e604a").then(r.bind(null,"20a7"))}},{path:"/blank",component:function(){return r.e("chunk-2d20939b").then(r.bind(null,"a7c2"))}},{path:"/win",component:function(){return r.e("chunk-7177ca78").then(r.bind(null,"cba4"))}},{path:"/mac",component:function(){return r.e("chunk-3dfe3b8c").then(r.bind(null,"2315"))}},{path:"/linux",component:function(){return r.e("chunk-2d0d7fc8").then(r.bind(null,"78c4"))}},{path:"/web",component:function(){return r.e("chunk-2d2308af").then(r.bind(null,"ed71"))}},{path:"/ios",component:function(){return r.e("chunk-4f4d96d6").then(r.bind(null,"ff7c"))}},{path:"/android",component:function(){return r.e("chunk-777e9b24").then(r.bind(null,"68db"))}},{path:"/xiaomi",component:function(){return r.e("chunk-2d208c55").then(r.bind(null,"a5e0"))}},{path:"/huawei",component:function(){return r.e("chunk-2d210231").then(r.bind(null,"b739"))}}]);t["a"].use(d["a"]);var f=function(){return new d["a"]({mode:"hash",scrollBehavior:function(){return{y:0}},routes:A})},p=f();var b=p;t["a"].config.productionTip=!1,new t["a"]({router:b,render:function(e){return e(s)},created:function(){console.log("main.js -> create")}}).$mount("#app")},"814a":function(e,n,r){var t=r("24fb");n=t(!1),n.push([e.i,"div{display:block}",""]),e.exports=n},b0a0:function(e,n,r){"use strict";r("33d0")},e31a:function(e,n,r){var t=r("24fb"),o=r("321e");n=t(!1),n.i(o),n.push([e.i,"",""]),e.exports=n},efb3:function(e,n,r){var t=r("24fb");n=t(!1),n.push([e.i,':root{--rxinput-icon-clear:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9UlEQVRYR81XO2gUURQ9d5IloGgQtZSoiKBWYmMRjXcxpYpKVISohY1iCgsL0YCKglgJARVs1ELyUUGxizt3sqawEAVBBAt/sTMaohgMm50rb8gss7uz89nsotstc+8557133nvnERL+xsfHl8zOzu60LOsggPUAVhDRctOuqt8BTAJ477ruUFtb27POzs5fSaAprmhsbGxDsVjsI6JDAJbF1c9/n1LVwZaWloGurq53UT2RAkTkMhH1qerShMRlZUT0U1UHmPl8rf6aAkQkD2BbPcQhPc+ZeXsYVqgAEflm1rhB5D7MJDOvrMSsEiAiHwGsbjC5D/eJmdcEscsEiMgwgJ4mkfuwI8x8wP9TEmAMB+Bck8l9+Cu+MT0BZqup6ot63Z5WtNkdRLTVbFFPgG3bN4joRATQCIC388uzKQHhHVWdIaKjABaH1avqzWw2e5JGR0fbW1tbPwNojwBmZnby+fzGYrFofBIl4gIzXzRYIiIAdtTAnZ6bm+sgx3F6VfVe1KhUdTibzZojGDEiSuSO4/Sr6qXIU5DoCNm2/YCI9ieY1rvMfCxCRInctu0zRHQtDlNVH5KIvAKwOa54/vstZva8UjETwWk/BWAgId5rI+ALgFUJG0zZdWY+HRDRE1jz4wBup8CaMB74raqLUjSZ0qvMfDbYk8vlei3LivRSJQcRzdQrwGAFDddjjJpyEPAE1LEEZeQ+qeM49YiYSGvCsJEbD3hnex0iPBMOAvD2eIJfrWkvXTApRQxRLpfba1nWowWQ+62pRbiuu49M2CwUCuYojsp7SQ2XRsRUJpPpSHoZ7WLmpwmntyRCRF4C2BI2u6XLyHyMu45V9QcRvYm4WCo5vgL4A2BdGHnVdWyK/mkg8VU2OAnX8nVZQg4Lpc1IxL6YqmRcK5Y3IxlXJWKjKuph0siEXJaEg2vz/z7NfJWBx+nhmNwYHNi0qt5f8OM0iGjCayaT2e267h4iWhv2PFfVD5ZlPS4UCk+6u7unExzv+AsGnq13ixbCZAAAAABJRU5ErkJggg==);--rxinput-icon-forbidden:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAflJREFUWEfNl79uE0EQh7+xyZoCEF1E4QNBUM4FSDQUUECgSOABwjtATWEaQkMKangH8gD8KUigSAoaJChyURIE6wKlQ0CBN9iDztjBju/I3in4cu3NzO/bmd3ZWaHgTwrWxxvg3SmOV1rmakn0CshFgXGF8XgBAlsKW6Bv2ypvmmX3+sInvvoszgsgCswsMA+c9gkKfATqoXULe9n/E2AByucDEwvf3StQyv9H762rz0IrzT8VIDp5+BrafpVTeNBNStfDzz8Xk2IlAnRT/nRfxP8GuZVUkiGAJTh0IjDb+yzeCffFurEp+NUfewggqppnCDf+BwDK87DhbqYCrFXHbqvIY1/x0LrOAqLAqK+PqN6ZbGw/6dnvZGB9gmOtpvmAEPgGywOAYssVd+7sBt+6PeSP3Gq1Mi2iL3zFY7tcAICqzNQazZeDAIF5KFAfCQDM16y7NwAQBWYZuDQKAGAltO7yAMBaYDYUzowCQGBz0rqJ3Rn4DhwZBQDwI7Tu6MECOAglyLwJs5Rrl+3wJlzNcQzzAmjSMczTiLTdnupspFJpKQtMYiPK2ooVHtSsm+t00cDMCdz3gkhrxbFz1ssoTwZSL6MefaHXcQxR+EDSvd/jKbiYkWynFEUOpT2IQsfy/iNV2MOkH6LQp5lXg8lp5PU2zBnby+03fbL8IWP109UAAAAASUVORK5CYII=");--rxinput-icon-success:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA9dJREFUWEe1V02IG2UYfp7J7s3DZrLFCoJlzaRYxCooFRQU9LLtwd+tSrX2fzcTW+q1LXQLWxRBFLdJ1ra6WqwtXf/B9iSFRUFRpB5sMRNrD4LdNpksKB5Mdx6ZNdkm2SQz2cbcZr7n73sz837vEB3+zAlnleEh7hH98tTv02mwYAgFz0DeHbHOdyLJMGDziHOrynqOwBDA+9pz9L2AKfbyhLvd+j1Iv22AvomLq425uRdBbAQQCxJrWC9COOZFIu/Pjgz81IrbMoCZcYYAnOrQtBV8vWtbU80WmwaIpXObRE52yXxehtLmYirxXqPmogBm+pdR0NjfTfMFLXkH3NTK0VrtugBmxtkN4I3/xfy66Muubb1ZvVwIEDuUWyOD33bZvCxoguDOul17ur/4UuK7+b+muhBLOx+I2NC9APxD3tw2yfjbiOBsXQDheDFlPb8QIJrJDxI63TVzYtpNWg/5en3jzsONAfz7AteW7PiZ+QqYaecwiO1dCvCza1t3VrVaBYBwxE1ZO/4LkHH89nnHjQfg5Z5/jLuv7B6YCQwAXHBtaxX7Dp2/zTB6L924OcqeoUdnRxLTtVotKwDA88or2K2OR2BP0bZeadxIuwAA1tPMOvsh1DWHJVTjnGtb9ywyz15YYXiRoyAfaapJjPoV8Pu93/eX/BO0oWQnPqwViE78upae92WA6BTNTO4jgE8FuQsaL9mJXdG045CIL+DJ024yvq6Wb2acowC2BmkC+pjRbH6M0t424DOetGc2lThXxZgZx+8Zg/51OeIt+3N4ZeH6Wv4koGeCzQFRBxnLOi9IOLaYwEuUd6DZCVZ5dU+J+LGUtF6tcqPZ3BjFdpupsyGxkdHMxbuIuZYDA4hpQ3i9YFtftNuVmXaeBtH0zG/FEyKrq53wMoib2xlQfK3YM7sPw/eWmz7t6vkKwECY0s9jhBk3ZS2vdMLcCYDPBpKJ6QiNbVdHbnfqHrpsfhLSpkB+HUAnXTvhz5mAmXW2QHgnlIDwQ6/BdTPJ+BUfv+TpidjqJq13F47jaDb/GaXHwoQQcDZ2DYOF3mu3GOr5LQynFiPy81Iy/rh/rzbAA5S+Divmi1BaDmBNWE4VJ/LBUjL+TV2ASjn3ihzrVLATPKV9xVTiYJWzeCjN5j+B9EQnoqGx5KduMv5kLb7pWG5mcm8D3BFaOBRQh107MdwIbf1h0smbERSg8sQ3g7X9NPMnZZA7lzqsUjgOabw6AXccoEqoDK2bOzi2pwRO+kNncHGCEDXrN73lLOuNYIgG4hL6Sc5/sEoqkijIQ748h6m/dllXw8r+C2KSc5phk6xiAAAAAElFTkSuQmCC");--rxinput-icon-fail:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAcZJREFUWEfNlz0vBUEUhp9bCtHpadQaH5XQ6mlElBJCQ4+ehlDoEA0/QOlG5dL4B0SrE3p5ZY+MNXvnrLubNck2m/PxzNmz75xp0fBqlcw/CcwD08BQ9ijEa/bcAldAxxvXAzAILAOLgAA8SwAXwCnw1s0hBbCdJR/xZI3YPAFnwE6RfzcAOQmgirVbBFEEUGVy20AUIgagXReWrMdy/ILIA9Sx8zzzD4gQQN3+CPy14bzFUWOO2d8RAqwDB94oPdptAIeKEQLcA+OJwO1McCRGsXUCjAIziTgPwEQIIIebhJPEZSqzEcBlzn4hU0G9VqwUxCzQtgocAasJAO1uJbAJIcLkMhFcUZUsxDGwZgCe8ssxn8iSSP9txaoT29vXZzAAdeaws7HyEKGbN7l8nvXHGcA70O8EiFVC78okl/0HMPBvABr/BI034R6wmeiBa2Cuwt9wH9iyHtCkc+dQQYlHUcOVFSKJWieUYgGkRi6p4UsXkVGV+hwq+K2q/+owavw41rdtdCCxHqwTIjmS1QnhHkrrgCg9lhtEoxcTg7Cr2ZJjZDMfnfXnVVzN8uKoMUvHrmbH2OVUiTWcaHZ0rdTd0BWkF6NPgs9uIRG0K78AAAAASUVORK5CYII=")}',""]),e.exports=n}});