import{S as p,i as f,a as h}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d=document.querySelector(".loader");function b(){d.classList.add("active")}function L(){d.classList.remove("active")}function y(r){const e=r.map(n=>`
    <div class="gallery-item">
      <a href="${n.largeImageURL}" class="lightbox">
        <img src="${n.webformatURL}" alt="${n.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${n.likes}
        </p>
        <p>
        <b>Views</b>
       ${n.views}
        </p>
        <p>
        <b>Comments</b>
        ${n.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${n.downloads}
        </p>
      </div>
    </div>
  `).join(""),s=document.querySelector(".gallery");return s.innerHTML=e,new p(".lightbox"),e}function i(r){f.error({title:"Error",message:r,position:"topRight"})}function g(r){const e=document.querySelector(".load-more-button");r>0?e.style.display="block":(e.style.display="none",i("We're sorry, but you've reached the end of search results."))}function v(){const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}}async function m(r,e,s){const t=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${s}`;try{return(await h.get(t)).data.hits}catch(o){return console.error("Error fetching images:",o),[]}}const w=document.querySelector(".search-form"),E=document.querySelector(".search-input"),l=document.querySelector(".load-more-button");l.style.display="none";let u="",a=1;l.addEventListener("click",async()=>{try{const e=await m(u,a),s=document.querySelector(".gallery"),n=y(e);s.innerHTML+=n;const t=e.totalHits;g(e.length,t>a*15),a*15>=t?(i("We are sorry, but you have reached the end of search results."),l.style.display="none"):v()}catch(e){console.error("Error fetching more images:",e)}a++});w.addEventListener("submit",async r=>{r.preventDefault();const e=E.value.trim();if(e===""){i("Start typing in");return}u=e,b(),document.querySelector(".gallery").innerHTML="";try{const s=await m(u,a);if(s.length===0){l.style.display="none",i("Sorry, there are no images matching your search query. Please try again!");return}y(s),g(s.length),L()}catch(s){console.error("Error fetching images:",s)}a++});
//# sourceMappingURL=commonHelpers.js.map
