import"./hoisted.N4Xp7qZq.js";document.addEventListener("DOMContentLoaded",function(){function c(t,e){if(t!==e){t.classList.remove("active","bg-neutral-100","hover:border-transparent","dark:bg-white/[.05]");const a=t.getAttribute("data-target");if(a){const r=document.querySelector(a);r&&r.classList.add("hidden")}d(t,["text-neutral-800","dark:text-neutral-200"],["text-[#fa5a15]","dark:text-[#fb713b]"])}}function i(t){t.classList.add("active","bg-neutral-100",",hover:border-transparent","dark:bg-white/[.05]");const e=t.getAttribute("data-target");if(e){const a=document.querySelector(e);a&&a.classList.remove("hidden")}d(t,["text-[#fa5a15]","dark:text-[#fb713b]"],["text-neutral-800","dark:text-neutral-200"])}function d(t,e,a){let r=t.querySelector("span");r&&(r.classList.remove(...a),r.classList.add(...e))}const n=document.querySelectorAll("[data-target]");n.length>0&&d(n[0],["text-[#fa5a15]","dark:text-[#fb713b]"],[]),n.forEach(t=>{t.addEventListener("click",()=>{n.forEach(e=>c(e,t)),i(t)})})});
