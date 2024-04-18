import{S as h,i as p,a as f}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".loader");function b(){m.classList.add("active")}function L(){m.classList.remove("active")}function u(n){const r=n.map(s=>`
    <div class="gallery-item">
      <a href="${s.largeImageURL}" class="lightbox">
        <img src="${s.webformatURL}" alt="${s.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${s.likes}
        </p>
        <p>
        <b>Views</b>
       ${s.views}
        </p>
        <p>
        <b>Comments</b>
        ${s.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${s.downloads}
        </p>
      </div>
    </div>
  `).join(""),o=document.querySelector(".gallery");return o.innerHTML=r,new h(".lightbox"),r}function i(n){p.show({title:"Error",message:n,position:"topRight"})}function d(n){const r=document.querySelector(".load-more-button");n>0?r.style.display="block":(r.style.display="none",i("We're sorry, but you've reached the end of search results."))}function v(){const n=document.querySelector(".gallery-item");if(n){const r=n.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}}async function y(n,r=1,o=15){const e=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`;try{return(await f.get(e)).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}const w=document.querySelector(".search-form"),S=document.querySelector(".search-input"),l=document.querySelector(".load-more-button");l.style.display="none";let c="";w.addEventListener("submit",async n=>{n.preventDefault();const r=S.value.trim();if(r===""){i("Start typing in");return}c=r;let o=1;b(),document.querySelector(".gallery").innerHTML="";try{const e=await y(c,o);if(e.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}u(e),d(e.length),L()}catch(e){console.error("Error fetching images:",e)}o=o+1,l.addEventListener("click",async()=>{try{const e=await y(c,o),t=document.querySelector(".gallery"),a=u(e);t.innerHTML+=a,d(e.length)}catch(e){console.error("Error fetching more images:",e)}});const s=15;l.addEventListener("click",async()=>{o++;try{const e=await y(c,o),t=document.querySelector(".gallery"),a=u(e);t.innerHTML+=a;const g=e.totalHits;d(e.length,g>o*s),o*s>=g?(i("We are sorry, but you have reached the end of search results."),l.style.display="none"):v()}catch(e){console.error("Error fetching more images:",e)}})});
//# sourceMappingURL=commonHelpers.js.map
