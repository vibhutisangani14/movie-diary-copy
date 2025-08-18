import"./movie-diary-copy.2207ed5d.js";var e=globalThis,t={},r={},o=e.parcelRequire8370;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequire8370=o),o.register;var i=o("euFvE"),l=o("jQQXv");let n=document.querySelector("#movieList-journal");(0,i.searchEventListners)(),(0,i.renderSearchList)();let s=JSON.parse(localStorage.getItem("favouriteMovie"))||[];n.innerHTML="",s.forEach(e=>{var t;let r=e.overview.length>100?e.overview.slice(0,100)+"...":e.overview,o=document.createElement("div");o.className="max-auto text-white rounded-lg shadow-md",o.innerHTML=`
      <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title} poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
    
      <div class="p-2 flex justify-between">
        <h1 class="text-2xl font-bold mb-2 w-5/6">${e.title}</h1>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          id="notes-icon"
          class="ml-2 w-5 h-5 text-center cursor-pointer mt-2"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file-text"
          viewBox="0 0 24 24"
        >
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>
     <p class="text-gray-300">
        Info: <span class="short-text">${r}</span>
        <span class="full-text hidden">${e.overview}</span>
        <button class="toggle-btn text-blue-400 underline ml-1">Read more</button>
      </p>

    `,n.appendChild(o),(0,l.toggleOverviewText)(o),t=e,o.querySelector("#notes-icon").addEventListener("click",()=>{let e=document.querySelector("#dialogOverlay"),r=document.querySelector("#noteText"),o=document.querySelector("#saveBtn"),i=document.querySelector("#closeBtn"),l="Notes",n=JSON.parse(localStorage.getItem(l))||[],s=n.find(e=>e.id===t.id);console.log(n[0].id+" "+t.id),r.value=s?s.content:"",e.classList.remove("hidden"),o.onclick=()=>{let o=n.filter(e=>e.id!==t.id);r.value.trim()&&o.push({id:t.id,content:r.value.trim()}),localStorage.setItem(l,JSON.stringify(o)),e.classList.add("hidden")},i.onclick=()=>e.classList.add("hidden"),e.onclick=t=>{t.target===e&&e.classList.add("hidden")}})});
//# sourceMappingURL=journal.559a6f2b.js.map
