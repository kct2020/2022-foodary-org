(()=>{"use strict";var e,t={39:()=>{const e={body:document.querySelector("body"),wrapper:document.getElementById("wrapper"),header:document.getElementById("header"),nav:document.getElementById("nav"),hero:document.getElementById("hero"),main:document.getElementById("main"),containerCentre:document.getElementById("container-centre"),containerRight:document.getElementById("container-right"),preFooter:document.getElementById("pre-footer"),footer:document.getElementById("footer"),mobileNav:document.getElementById("mobile-nav"),mobileNavToggle:document.getElementById("mobile-nav-toggle")};e.mobileNavToggle.addEventListener("click",(function(){this.classList.toggle("expanded"),e.mobileNav.classList.toggle("menu-visible"),"false"===this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","true"):this.setAttribute("aria-expanded","false")}));!function(){var t=e.wrapper.querySelectorAll("[data-src]");if(t.length>0){var r=new IntersectionObserver((function(e,t){e.forEach((function(e){var r,n;e.isIntersecting&&(r=e.target,n=r.dataset.src,r.src=n,r.classList.add("loaded"),r.removeAttribute("data-src"),t.unobserve(e.target))}))}),{threshold:.5});t.forEach((function(e){r.observe(e)}))}}()},617:()=>{}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],d=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(d=!1,a<i&&(i=a));if(d){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={522:0,870:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,d,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in d)n.o(d,o)&&(n.m[o]=d[o]);if(l)var c=l(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return n.O(c)},r=self.webpackChunkskeleventy=self.webpackChunkskeleventy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[870],(()=>n(39)));var o=n.O(void 0,[870],(()=>n(617)));o=n.O(o)})();