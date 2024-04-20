import{S as h,i as p,a as f}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=document.querySelector(".loader");function b(){d.classList.add("active")}function L(){d.classList.remove("active")}function y(o){const t=o.map(e=>`
    <div class="gallery-item">
      <a href="${e.largeImageURL}" class="lightbox">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${e.likes}
        </p>
        <p>
        <b>Views</b>
       ${e.views}
        </p>
        <p>
        <b>Comments</b>
        ${e.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${e.downloads}
        </p>
      </div>
    </div>
  `).join(""),s=document.querySelector(".gallery");return s.innerHTML=t,document.querySelectorAll(".lightbox").forEach(e=>new h({elements:e})),t}function i(o){p.error({title:"Error",message:o,position:"topRight"})}function g(o){const t=document.querySelector(".load-more-button");o>0?t.style.display="block":(t.style.display="none",i("We're sorry, but you've reached the end of search results."))}function v(){const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}}async function m(o,t=1,s=15){const e=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${s}`;try{return(await f.get(e)).data}catch(r){return console.error("Error fetching images:",r),[]}}const E=document.querySelector(".search-form"),w=document.querySelector(".search-input"),c=document.querySelector(".load-more-button");c.style.display="none";let u="";const P=15;let a=1;c.addEventListener("click",async()=>{a++;try{c.style.display="none";const t=await m(u,a),s=t.hits,n=t.totalHits,e=document.querySelector(".gallery"),r=y(s);e.innerHTML+=r,g(s.length,n>a*15),a*15>=n?(i("We are sorry, but you have reached the end of search results."),c.style.display="none"):v()}catch(t){console.error("Error fetching more images:",t)}});E.addEventListener("submit",async o=>{o.preventDefault();const t=w.value.trim();if(a=1,t===""){i("Start typing in");return}u=t,b(),document.querySelector(".gallery").innerHTML="";try{const s=await m(u,a),n=s.hits,e=s.totalHits;if(n.length===0){c.style.display="none",i("Sorry, there are no images matching your search query. Please try again!");return}y(n),g(n.length),a*P>=e&&(i("We are sorry, but you have reached the end of search results."),c.style.display="none"),L()}catch(s){console.error("Error fetching images:",s)}});
//# sourceMappingURL=commonHelpers.js.map
