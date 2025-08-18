function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=globalThis,r={},o={},s=t.parcelRequire8370;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire8370=s);var i=s.register;i("jQQXv",function(t,r){e(t.exports,"toggleOverviewText",()=>l);var o=s("euFvE");let i=document.querySelector("#movieList-container");(0,o.searchEventListners)(),(0,o.renderSearchList)();let a=async()=>{let e=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=db85a489a7f0131f0f43f57e6a905f19");if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return(await e.json()).results},l=e=>{let t=e.querySelector(".toggle-btn"),r=e.querySelector(".short-text"),o=e.querySelector(".full-text");t.addEventListener("click",()=>{o.classList.contains("hidden")?(r.classList.add("hidden"),o.classList.remove("hidden"),t.textContent="Read less"):(r.classList.remove("hidden"),o.classList.add("hidden"),t.textContent="Read more")})};(async()=>{try{let e=await a();console.log("Fetched movies:",e),e.forEach(e=>{var t;let r=document.createElement("div");r.className="max-auto  text-white rounded-lg shadow-md";let o=(JSON.parse(localStorage.getItem("favouriteMovie"))||[]).some(t=>t.id===e.id),s=e.overview.length>100?e.overview.slice(0,100)+"...":e.overview;r.innerHTML=`
      <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title} poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
      <div class="p-2 flex justify-between">
        <h1 class="text-2xl font-bold mb-2 w-5/6">${e.title}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="${o?"red":"none"}" 
             viewBox="0 0 24 24" stroke-width="1.5" 
             stroke="currentColor" 
             class="w-5 h-5 cursor-pointer fav-icon hover:scale-110 transition-transform w-1/6 mt-1">
          <path stroke-linecap="round" stroke-linejoin="round" 
                d="M21.435 4.582a5.373 5.373 0 00-7.606 0L12 6.41l-1.829-1.828a5.373 5.373 0 00-7.606 7.606l1.828 1.828L12 21.435l7.607-7.606 1.828-1.828a5.373 5.373 0 000-7.606z" />
        </svg>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          id="notes-icon"
          class="ml-2 w-5 h-5 text-center cursor-pointer mt-1"
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
        Info: <span class="short-text">${s}</span>
        <span class="full-text hidden">${e.overview}</span>
        <button class="toggle-btn text-blue-400 underline ml-1">Read more</button>
      </p>
    `,i.appendChild(r),l(r),((e,t)=>{let r=t.querySelector(".fav-icon");r.addEventListener("click",()=>{let t=JSON.parse(localStorage.getItem("favouriteMovie"))||[];t.some(t=>t.id===e.id)?(t=t.filter(t=>t.id!==e.id),r.setAttribute("fill","none"),console.log(`${e.title} removed from favourites.`)):(t.push({...e,count:1}),r.setAttribute("fill","red"),console.log(`${e.title} added to favourites.`)),localStorage.setItem("favouriteMovie",JSON.stringify(t))})})(e,r),t=e,r.querySelector("#notes-icon").addEventListener("click",()=>{let e=document.querySelector("#dialogOverlay"),r=document.querySelector("#noteText"),o=document.querySelector("#saveBtn"),s=document.querySelector("#closeBtn"),i="Notes",a=JSON.parse(localStorage.getItem(i))||[],l=a.find(e=>e.id===t.id);r.value=l?l.content:"",e.classList.remove("hidden"),o.onclick=()=>{let o=a.filter(e=>e.id!==t.id);r.value.trim()&&o.push({id:t.id,content:r.value.trim()}),localStorage.setItem(i,JSON.stringify(o)),e.classList.add("hidden")},s.onclick=()=>e.classList.add("hidden"),e.onclick=t=>{t.target===e&&e.classList.add("hidden")}})})}catch(e){console.error("Error fetching movie list:",e);return}})()}),i("euFvE",function(t,r){e(t.exports,"searchEventListners",()=>a),e(t.exports,"renderSearchList",()=>l);let o=document.getElementById("searchBtn"),s=document.getElementById("searchInput"),i=document.getElementById("suggestions"),a=()=>{o.addEventListener("click",e=>{e.stopPropagation(),s.classList.remove("w-0","opacity-0","mx-0"),s.classList.add("w-64","opacity-100","mx-2"),s.focus()}),document.addEventListener("click",e=>{searchWrapper.contains(e.target)||(s.classList.remove("w-64","opacity-100","mx-2"),s.classList.add("w-0","opacity-0","mx-0"),s.blur())})},l=()=>{let e=async e=>{let t=await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&
    include_adult=false&language=en-US&page=1&api_key=db85a489a7f0131f0f43f57e6a905f19`);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);return(await t.json()).results},t=async t=>{try{let r=await e(t);console.log("Fetched movies:",r);let o=r.filter(e=>e.title.toLowerCase().includes(t));o.forEach(e=>{let t=document.createElement("div");t.className="flex flex-row px-3 py-2 hover:bg-gray-700 cursor-pointer",t.innerHTML=`
     <img
                    src="https://image.tmdb.org/t/p/w500/${e.poster_path}"
                    alt="demo"
                    class="w-[40px] h-[60px]"
                  />
                  <div class="flex flex-col justify-center">
                    <div class="ml-2 text-[0.8rem]">${e.title}</div>
                  </div>`,t.addEventListener("click",()=>{s.value=e.title,i.classList.add("hidden")}),i.appendChild(t),i.classList.toggle("hidden",0===o.length)})}catch(e){console.error("Error fetching movie list:",e);return}};s.addEventListener("input",()=>{let e=s.value.toLowerCase();i.innerHTML="",e?t(e):i.classList.add("hidden")}),document.addEventListener("click",e=>{e.target.closest("#searchBox")||e.target.closest("#suggestions")||i.classList.add("hidden")})}}),s("jQQXv");
//# sourceMappingURL=movie-diary-copy.2207ed5d.js.map
