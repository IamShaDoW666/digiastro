function t(){const e=document.getElementById("navbar");document.body.scrollTop>=50||document.documentElement.scrollTop>=50?(e.classList.remove("bg-white","text-black"),e.classList.add("text-white")):(e.classList.add("bg-white","text-black"),e.classList.remove("text-white"))}window.addEventListener("scroll",e=>{console.log("scroll"),e.preventDefault(),t()});const n=new Date().getFullYear(),l=document.getElementById("current-year");l.innerText=n.toString();const o=document.getElementById("collapseBtn"),c=document.getElementById("collapseContent");o.addEventListener("click",()=>{c.classList.toggle("hidden")});
