import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=document.querySelector(".loader");function u(){c.classList.add("active")}function d(){c.classList.remove("active")}function f(n){const o=n.map(t=>`
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
  `).join("");document.querySelector(".gallery").innerHTML=o,new l(".lightbox").refresh()}function p(n){a.show({title:"Пошук зображень",message:n,position:"topRight"})}async function m(n){const s=`https://pixabay.com/api/?key=43314388-88f7122255793401969da564c&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return(await(await fetch(s)).json()).hits}const h=document.querySelector(".search-form"),y=document.querySelector(".search-input");h.addEventListener("submit",async n=>{n.preventDefault();const o=y.value.trim();if(o==="")return a.error({title:"Error",message:"Start typing in"});u(),document.querySelector(".gallery").innerHTML="";try{const s=await m(o);if(s.length===0){p("Sorry, there are no images matching your search query. Please try again!");return}f(s)}catch(s){console.error("Error fetching images:",s)}finally{d()}});
//# sourceMappingURL=commonHelpers.js.map
