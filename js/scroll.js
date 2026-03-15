document.addEventListener("DOMContentLoaded", function(){

const elements = document.querySelectorAll(
".fade-left, .fade-right, .fade-up, .app-card"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");
observer.unobserve(entry.target);

}

});

},{
threshold:0.15,
rootMargin:"0px 0px -50px 0px"
});

elements.forEach(el=>{
observer.observe(el);
});

/* cek ulang saat resize */

window.addEventListener("resize",()=>{
elements.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight){
el.classList.add("show");
}
});
});

});
