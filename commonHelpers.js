import{S as p,i as f,a as h}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const d=document.querySelector(".loader");function b(){d.classList.add("active")}function w(){d.classList.remove("active")}function y(r){const e=r.map(n=>`
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
  `).join(""),o=document.querySelector(".gallery");return o.innerHTML=e,new p(".lightbox"),e}function u(r){f.error({title:"Error",message:r,position:"topRight"})}function g(r){const e=document.querySelector(".load-more-button");r>0?e.style.display="block":(e.style.display="none",u("We're sorry, but you've reached the end of search results."))}function L(){const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:2*e,behavior:"smooth"})}}async function m(r,e=1,o=15){const t=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${o}`;try{return(await h.get(t)).data.hits}catch(s){return console.error("Error fetching images:",s),[]}}const v=document.querySelector(".search-form"),E=document.querySelector(".search-input"),c=document.querySelector(".load-more-button");c.style.display="none";let i="",a=1;c.addEventListener("click",async()=>{a++;try{c.style.display="none",console.log("New Keyword:",i,"Page:",a);const e=await m(i,a),o=e.totalHits,n=document.querySelector(".gallery"),t=y(e);n.innerHTML+=t,g(e.length,o>a*15),a*15>=o?(u("We are sorry, but you have reached the end of search results."),c.style.display="none"):L()}catch(e){console.error("Error fetching more images:",e)}});v.addEventListener("submit",async r=>{r.preventDefault();const e=E.value.trim();if(a=1,e===""){u("Start typing in");return}i=e,console.log("New Keyword:",i,"Page:",a),b(),document.querySelector(".gallery").innerHTML="";try{const o=await m(i,a);if(o.length===0){c.style.display="none",u("Sorry, there are no images matching your search query. Please try again!");return}y(o),g(o.length),w()}catch(o){console.error("Error fetching images:",o)}});
//# sourceMappingURL=commonHelpers.js.map
