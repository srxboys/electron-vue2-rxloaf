(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25a348e3"],{"00b4":function(t,a,e){"use strict";e("ac1f");var n=e("23e7"),i=e("da84"),r=e("c65b"),o=e("e330"),c=e("1626"),s=e("861d"),d=function(){var t=!1,a=/[ac]/;return a.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===a.test("abc")&&t}(),l=i.Error,p=o(/./.test);n({target:"RegExp",proto:!0,forced:!d},{test:function(t){var a=this.exec;if(!c(a))return p(this,t);var e=r(a,this,t);if(null!==e&&!s(e))throw new l("RegExp exec method returned something other than an Object or null");return!!e}})},"107c":function(t,a,e){var n=e("d039"),i=e("da84"),r=i.RegExp;t.exports=n((function(){var t=r("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"20cb":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'.h[data-v-a8ca5c84]{display:flex;justify-content:space-between}.h[data-v-a8ca5c84],.m[data-v-a8ca5c84]{padding:40px}.left[data-v-a8ca5c84]{display:flex;justify-content:space-between;flex-direction:column}.left[data-v-a8ca5c84],.left .btn[data-v-a8ca5c84]{position:relative}.left .btn[data-v-a8ca5c84]{padding:4px;border-radius:8px;width:200px;overflow:hidden;background:linear-gradient(-40deg,#00f,#ff0,green);box-shadow:0 0 40px 20px rgba(110,242,110,.1),4px 2px 20px 10px rgba(110,242,110,.2)}.left .btn .liner[data-v-a8ca5c84]{padding:10px 40px;font-size:20px;background:#000;display:flex;justify-content:center;align-items:center;border-radius:8px}.left .btn .btn_tip[data-v-a8ca5c84]{position:absolute;left:0;right:0;top:115%;z-index:2;border:1px solid #fff;border-radius:8px;padding:15px 10px}.left .btn[data-v-a8ca5c84]:hover{overflow:visible}.btn_tip[data-v-a8ca5c84]:before{content:"";position:absolute;left:50%;top:-9px;width:20px;height:20px;margin-left:-10px;background:linear-gradient(135deg,transparent,transparent 50%,#fff 0,#fff 0,transparent) 0 0/50% 50% no-repeat,linear-gradient(225deg,transparent,transparent 50%,#fff 0,#fff 0,transparent) 100% 0/50% 50% no-repeat}.bt[data-v-a8ca5c84]{font-size:14px;color:#d2bfbf}.bt .des[data-v-a8ca5c84]{padding:2px 0}.bt .copy[data-v-a8ca5c84]{color:grey}.bt .link[data-v-a8ca5c84]{margin-top:10px;display:flex;flex-direction:column}.bt .link a[data-v-a8ca5c84]{color:#3480dd;text-decoration:none}.bt .link a[data-v-a8ca5c84]:hover{text-decoration:underline}.right[data-v-a8ca5c84]{margin-left:50px;color:grey}.m .right[data-v-a8ca5c84]{margin-top:20px;margin-left:0;border-top:1px solid grey;padding-top:10px}.right .title[data-v-a8ca5c84]{color:#3480dd;font-size:18px}.right .tip[data-v-a8ca5c84]{margin-top:20px}.right .tip b[data-v-a8ca5c84]{color:#afa4a4}',""]),t.exports=a},"22cd":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home fix",class:t.rootClass},[e("div",{staticClass:"left"},[e("div",{staticClass:"btn",on:{click:t.click}},[t._m(0),e("div",{staticClass:"btn_tip"},[e("div",[t._v("请注意")]),e("div",[t._v("即将进入全屏，可以按 "),e("b",[t._v(t._s(t.clickTop))]),t._v(" 键退出")])])]),e("div",{staticClass:"bt"},[e("div",{staticClass:"des"},[t._v("这不是原创，来源抖音 ")]),e("div",{staticClass:"copy"},[t._v("© 2021 srxboys")]),e("div",{staticClass:"link"},[e("a",{on:{click:function(a){return a.stopPropagation(),t.open(0)}}},[t._v("GitHub - Loaf (原作者)")]),e("a",{on:{click:function(a){return a.stopPropagation(),t.open(1)}}},[t._v("Github - sysup")]),e("a",{on:{click:function(a){return a.stopPropagation(),t.open(2)}}},[t._v("Gitee - sysup")])])])]),t._m(1)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"liner"},[e("b",[t._v("摸鱼")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"right"},[e("div",{staticClass:"title"},[e("b",[t._v("这是一个摸鱼App")])]),e("div",{staticClass:"tip"},[t._v("其实这是一个玩笑")]),e("div",{staticClass:"tip"},[t._v("点击 "),e("b",[t._v("摸鱼")]),t._v(" 按钮后应用会显示一个 "),e("b",[t._v("系统 Update")]),t._v(" 画面，你的老板以为你的电脑正在升级。")]),e("div",{staticClass:"tip"},[t._v("这个时候你就可以休息一下，优雅地喝一杯咖啡。")]),e("div",{staticClass:"tip"},[t._v("不要有内疚感，适当的休息可以让你的大脑重新充满活力，面对更多挑战，更高效的完成工作。")]),e("div",{staticClass:"tip"},[t._v("所以放心大胆的使用 "),e("b",[t._v("摸鱼")]),t._v(" 吧")])])}],r=e("fa7d");e("ac1f"),e("00b4");function o(){var t="undefined"!==typeof window,a="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,e=a&&WXEnvironment.platform.toLowerCase(),n=t&&window.navigator.userAgent.toLowerCase(),i=n&&n.indexOf("android")>0||"android"===e,r=n&&/iphone|ipad|ipod|ios/.test(n)||"ios"===e,o=i||r,c=n&&n.indexOf("win")>0,s=n&&n.indexOf("mac")>0,d=n&&(n.indexOf("x11")>0||n.indexOf("linux")>0),l={ios:r,android:i,app:o,web:!o,win:c,mac:s,linux:d};return l}function c(t){var a="",e=t();return e.app?a=e.ios?"ios":"android":(e.web&&(a="web"),e.win?a="win":e.mac?a="mac":e.linux&&(a="linux")),a}function s(t){var a=c(o);if(a){var e="/"+a;console.log("router=",t," path=",e),t.push({path:e})}else console.error("pagePath=null   Platform=",o)}function d(t){window.open(t,"_blank")}var l={computed:{rootClass:function(){var t=o(),a=t.app||!1;return!r["a"]&&a?"m":"h"},clickTop:function(){var t=o(),a=t.app||!1,e=t.web||!1;return r["a"]||!a&&!e?"ESC":"double-click"}},methods:{click:function(){var t=this.$router;s(t)},open:function(t){var a="";switch(t){case 1:a="https://github.com/srxboys/electron-vue2-rxloaf-issua";break;case 2:a="https://gitee.com/pulpous/electron-vue2-rxloaf-issua";break;default:a="https://github.com/DinoChan/Loaf";break}d(a)}}},p=l,u=(e("d526"),e("2877")),f=Object(u["a"])(p,n,i,!1,null,"a8ca5c84",null);a["default"]=f.exports},9263:function(t,a,e){"use strict";var n=e("c65b"),i=e("e330"),r=e("577e"),o=e("ad6d"),c=e("9f7f"),s=e("5692"),d=e("7c73"),l=e("69f3").get,p=e("fce3"),u=e("107c"),f=s("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,x=v,g=i("".charAt),b=i("".indexOf),h=i("".replace),_=i("".slice),m=function(){var t=/a/,a=/b*/g;return n(v,t,"a"),n(v,a,"a"),0!==t.lastIndex||0!==a.lastIndex}(),w=c.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],k=m||y||w||p||u;k&&(x=function(t){var a,e,i,c,s,p,u,k=this,C=l(k),E=r(t),I=C.raw;if(I)return I.lastIndex=k.lastIndex,a=n(x,I,E),k.lastIndex=I.lastIndex,a;var R=C.groups,O=w&&k.sticky,A=n(o,k),P=k.source,S=0,T=E;if(O&&(A=h(A,"y",""),-1===b(A,"g")&&(A+="g"),T=_(E,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==g(E,k.lastIndex-1))&&(P="(?: "+P+")",T=" "+T,S++),e=new RegExp("^(?:"+P+")",A)),y&&(e=new RegExp("^"+P+"$(?!\\s)",A)),m&&(i=k.lastIndex),c=n(v,O?e:k,T),O?c?(c.input=_(c.input,S),c[0]=_(c[0],S),c.index=k.lastIndex,k.lastIndex+=c[0].length):k.lastIndex=0:m&&c&&(k.lastIndex=k.global?c.index+c[0].length:i),y&&c&&c.length>1&&n(f,c[0],e,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&R)for(c.groups=p=d(null),s=0;s<R.length;s++)u=R[s],p[u[0]]=c[u[1]];return c}),t.exports=x},"9f7f":function(t,a,e){var n=e("d039"),i=e("da84"),r=i.RegExp,o=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=o||n((function(){return!r("a","y").sticky})),s=o||n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:s,MISSED_STICKY:c,UNSUPPORTED_Y:o}},ac1f:function(t,a,e){"use strict";var n=e("23e7"),i=e("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,a,e){"use strict";var n=e("825a");t.exports=function(){var t=n(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},d526:function(t,a,e){"use strict";e("d850")},d850:function(t,a,e){var n=e("20cb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("499e").default;i("c27ca014",n,!0,{sourceMap:!1,shadowMode:!1})},fa7d:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));var n=!1},fce3:function(t,a,e){var n=e("d039"),i=e("da84"),r=i.RegExp;t.exports=n((function(){var t=r(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);