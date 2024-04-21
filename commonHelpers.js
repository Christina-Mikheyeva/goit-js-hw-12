import{S as h,i as f,a as m}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d=document.querySelector(".loader"),b=new h(".gallery a",{captionDelay:250,captionDelay:"alt"});function L(){d.classList.add("active")}function v(){d.classList.remove("active")}function y(s){const e=s.map(r=>`
    <div class="gallery-item">
      <a href="${r.largeImageURL}" class="lightbox">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${r.likes}
        </p>
        <p>
        <b>Views</b>
       ${r.views}
        </p>
        <p>
        <b>Comments</b>
        ${r.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${r.downloads}
        </p>
      </div>
    </div>
  `).join(""),n=document.querySelector(".gallery");return n.innerHTML=e,b.refresh(),e}function i(s){f.error({title:"Error",message:s,position:"topRight"})}function p(s){const e=document.querySelector(".load-more-button");s>0?e.style.display="block":(e.style.display="none",i("We're sorry, but you've reached the end of search results."))}function E(){const s=document.querySelector(".gallery-item");if(s){const e=s.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}}async function g(s,e=1,n=15){const t=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${n}`;try{return(await m.get(t)).data}catch(o){return console.error("Error fetching images:",o),[]}}const w=document.querySelector(".search-form"),P=document.querySelector(".search-input"),c=document.querySelector(".load-more-button");c.style.display="none";let u="";const S=15;let a=1;c.addEventListener("click",async()=>{a++;try{c.style.display="none";const e=await g(u,a),n=e.hits,r=e.totalHits,t=document.querySelector(".gallery"),o=y(n);t.innerHTML+=o,p(n.length,r>a*15),a*15>=r?(i("We are sorry, but you have reached the end of search results."),c.style.display="none"):E()}catch(e){console.error("Error fetching more images:",e)}});w.addEventListener("submit",async s=>{s.preventDefault();const e=P.value.trim();if(a=1,e===""){i("Start typing in");return}u=e,L(),document.querySelector(".gallery").innerHTML="";try{const n=await g(u,a),r=n.hits,t=n.totalHits;if(r.length===0){c.style.display="none",i("Sorry, there are no images matching your search query. Please try again!");return}y(r),p(r.length),a*S>=t&&(i("We are sorry, but you have reached the end of search results."),c.style.display="none"),v()}catch(n){console.error("Error fetching images:",n)}});
//# sourceMappingURL=commonHelpers.js.map
