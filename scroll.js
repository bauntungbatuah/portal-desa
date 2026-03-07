document.addEventListener("DOMContentLoaded",function(){

const elements = document.querySelectorAll(".fade-left, .fade-right, .fade-up")

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

observer.unobserve(entry.target)

}

})

},{
threshold:0.25
})

elements.forEach(el=>observer.observe(el))

})