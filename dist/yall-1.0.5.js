!function(e,t){var n,o="querySelectorAll",i="forEach",c="parentNode",r="prototype",a="lazy",s="data-srcset",l=["scroll","touchmove"],u=["orientationchange","resize"],d=0,f=function(e,t,n,o){t[i](function(t){o?e.addEventListener(t,n):e.removeEventListener(t,n)})},g=function(e,t,n){var o=e.getAttribute(t);o&&(e[n]=o,e.removeAttribute(t))},m=function(){n.length||(f(t,l,m),f(e,u,m)),d||(d=1,setTimeout(function(){n[i](function(t){t.getBoundingClientRect().top<=e.innerHeight+100&&"none"!=getComputedStyle(t).display&&("PICTURE"==t[c].tagName&&Array[r].slice.call(t[c][o]("source"))[i](function(e){g(e,s,"srcset")}),g(t,"data-src","src"),g(t,s,"srcset"),t.classList.remove(a),n.splice(n.indexOf(t),1))}),d=0},200))};f(t,["DOMContentLoaded"],function(){(n=Array[r].slice.call(t[o]("img."+a))).length&&(m(),f(t,l,m,1),f(e,u,m,1))},1)}(window,document);