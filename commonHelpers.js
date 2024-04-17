import{S as f,i as m,a as h}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();const p=document.querySelector(".loader");function b(){p.classList.add("active")}function L(){p.classList.remove("active")}function l(s){const o=s.map(t=>`
    <div class="gallery-item">
      <a href="${t.largeImageURL}" class="lightbox">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${t.likes}
        </p>
        <p>
        <b>Views</b>
       ${t.views}
        </p>
        <p>
        <b>Comments</b>
        ${t.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${t.downloads}
        </p>
      </div>
    </div>
  `).join("");document.querySelector(".gallery").innerHTML=o,new f(".lightbox").refresh()}function y(s){m.show({title:"Пошук зображень",message:s,position:"topRight"})}async function u(s,o=1,n=15){const r=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;try{return(await h.get(r)).data.hits}catch(e){return console.error("Error fetching images:",e),[]}}function d(s){const o=document.querySelector(".load-more-button");s>0?o.style.display="block":o.style.display="none"}const v=document.querySelector(".search-form"),w=document.querySelector(".search-input");let c="";v.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(o==="")return m.error({title:"Error",message:"Start typing in"});c=o;let n=1;b(),document.querySelector(".gallery").innerHTML="";try{const e=await u(c,n);if(e.length===0){y("Sorry, there are no images matching your search query. Please try again!");return}l(e),d(e.length),L()}catch(e){console.error("Error fetching images:",e)}const t=document.querySelector(".load-more-button");n=n+1,t.addEventListener("click",async()=>{try{const e=await u(c,n),a=document.querySelector(".gallery"),i=l(e);a.innerHTML+=i,d(e.length)}catch(e){console.error("Error fetching more images:",e)}});const r=15;t.addEventListener("click",async()=>{n++;try{const e=await u(c,currentPage),a=document.querySelector(".gallery"),i=l(e);a.innerHTML+=i;const g=e.totalHits;d(e.length,g>currentPage*r),currentPage*r>=g?(y("We're sorry, but you've reached the end of search results."),t.style.display="none"):scrollToNextImages()}catch(e){console.error("Error fetching more images:",e)}})});
//# sourceMappingURL=commonHelpers.js.map
