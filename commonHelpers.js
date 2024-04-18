import{S as f,i as m,a as h}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const p=document.querySelector(".loader");function b(){p.classList.add("active")}function L(){p.classList.remove("active")}function l(s){const r=s.map(o=>`
    <div class="gallery-item">
      <a href="${o.largeImageURL}" class="lightbox">
        <img src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${o.likes}
        </p>
        <p>
        <b>Views</b>
       ${o.views}
        </p>
        <p>
        <b>Comments</b>
        ${o.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${o.downloads}
        </p>
      </div>
    </div>
  `).join(""),n=document.querySelector(".gallery");return n.innerHTML=r,new f(".lightbox"),r}function g(s){m.show({title:"Пошук зображень",message:s,position:"topRight"})}function u(s){const r=document.querySelector(".load-more-button");s>0?r.style.display="block":r.style.display="none"}function w(){const s=document.querySelector(".gallery-item");if(s){const r=s.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}}async function d(s,r=1,n=15){const t=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{return(await h.get(t)).data.hits}catch(e){return console.error("Error fetching images:",e),[]}}const v=document.querySelector(".search-form"),S=document.querySelector(".search-input");let a="";v.addEventListener("submit",async s=>{s.preventDefault();const r=S.value.trim();if(r==="")return m.error({title:"Error",message:"Start typing in"});a=r;let n=1;b(),document.querySelector(".gallery").innerHTML="";try{const e=await d(a,n);if(e.length===0){g("Sorry, there are no images matching your search query. Please try again!");return}l(e),u(e.length),L()}catch(e){console.error("Error fetching images:",e)}const o=document.querySelector(".load-more-button");n=n+1,o.addEventListener("click",async()=>{try{const e=await d(a,n),c=document.querySelector(".gallery"),i=l(e);c.innerHTML+=i,u(e.length)}catch(e){console.error("Error fetching more images:",e)}});const t=15;o.addEventListener("click",async()=>{n++;try{const e=await d(a,n),c=document.querySelector(".gallery"),i=l(e);c.innerHTML+=i;const y=e.totalHits;u(e.length,y>n*t),n*t>=y?(g("We are sorry, but you have reached the end of search results."),o.style.display="none"):w()}catch(e){console.error("Error fetching more images:",e)}})});
//# sourceMappingURL=commonHelpers.js.map
