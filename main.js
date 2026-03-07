/* ======================
JAM WITA
====================== */

function updateJam(){

const now = new Date()

const jam = now.getHours().toString().padStart(2,"0")
const menit = now.getMinutes().toString().padStart(2,"0")
const detik = now.getSeconds().toString().padStart(2,"0")

const jamBox = document.getElementById("jam-wita")

if(jamBox){
jamBox.innerText = jam + ":" + menit + ":" + detik + " WITA"
}

}

setInterval(updateJam,1000)
updateJam()



/* ======================
LOGIN MENU
====================== */

const loginBtn = document.querySelector(".login-btn")
const loginMenu = document.getElementById("login-menu")

if(loginBtn){

loginBtn.onclick = () => {

loginMenu.style.display =
loginMenu.style.display === "block"
? "none"
: "block"

}

}



/* ======================
SMART SKY
====================== */

const sun = document.getElementById("sun")
const moon = document.getElementById("moon")
const sky = document.getElementById("sky")

function updateSky(){

if(!sun || !moon || !sky) return

const now = new Date()

const hour = now.getHours()
const minute = now.getMinutes()

const time = hour + minute/60

const skyWidth = sky.offsetWidth


/* SIANG */

if(time >= 6 && time <= 18){

sun.style.display="block"
moon.style.display="none"

let progress = (time - 6) / 12

let x = progress * skyWidth
let y = 140 - Math.sin(progress * Math.PI) * 120

sun.style.left = x + "px"
sun.style.top = y + "px"

}


/* MALAM */

else{

sun.style.display="none"
moon.style.display="block"

moon.style.top = "60px"
moon.style.right = "60px"

}

}

setInterval(updateSky,10000)
updateSky()



/* ======================
WARNA LANGIT
====================== */

function updateSkyColor(){

if(!sky) return

const now = new Date()
const hour = now.getHours()
const minute = now.getMinutes()

const time = hour + minute/60


/* SUBUH */

if(time >=5 && time <6.5){

sky.style.background =
"linear-gradient(to bottom,#fca5a5,#fcd34d,#93c5fd)"

}

/* PAGI */

else if(time >=6.5 && time <11){

sky.style.background =
"linear-gradient(to bottom,#87cefa,#60a5fa,#3b82f6)"

}

/* SIANG */

else if(time >=11 && time <16){

sky.style.background =
"linear-gradient(to bottom,#6db7ff,#87c6ff,#3f6fb3)"

}

/* SENJA */

else if(time >=16 && time <18.5){

sky.style.background =
"linear-gradient(to bottom,#f97316,#fb923c,#1e3a8a)"

}

/* MALAM */

else{

sky.style.background =
"linear-gradient(to bottom,#020617,#0f172a,#020617)"

}

}

setInterval(updateSkyColor,60000)
updateSkyColor()



/* ======================
BANNER PRO
====================== */

const banners = document.querySelectorAll(".slides img")
const dotsContainer = document.querySelector(".dots")

let index = 0
let auto

if(banners.length && dotsContainer){

/* buat dots */

banners.forEach((_,i)=>{

const dot = document.createElement("div")
dot.classList.add("dot")

if(i===0) dot.classList.add("active")

dot.addEventListener("click",()=>{
index = i
showBanner()
})

dotsContainer.appendChild(dot)

})

}

const dots = document.querySelectorAll(".dot")

function showBanner(){

banners.forEach(img=>img.classList.remove("active"))
dots.forEach(dot=>dot.classList.remove("active"))

banners[index].classList.add("active")
dots[index].classList.add("active")

}

function nextBanner(){

index++

if(index >= banners.length){
index = 0
}

showBanner()

}

function startAuto(){
auto = setInterval(nextBanner,5000)
}

function stopAuto(){
clearInterval(auto)
}



/* SWIPE HP */

const slider = document.querySelector(".banner-slider")

if(slider){

let startX = 0

slider.addEventListener("touchstart",(e)=>{
stopAuto()
startX = e.touches[0].clientX
})

slider.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX

if(startX - endX > 50){
nextBanner()
}

if(endX - startX > 50){
index--
if(index < 0) index = banners.length-1
showBanner()
}

startAuto()

})

}

startAuto()
/* ======================
SLIDER ARROW CONTROL
====================== */

const leftArrow = document.querySelector(".slider-arrow.left")
const rightArrow = document.querySelector(".slider-arrow.right")

if(leftArrow && rightArrow){

rightArrow.addEventListener("click", ()=>{

index++

if(index >= banners.length){
index = 0
}

showBanner()

})

leftArrow.addEventListener("click", ()=>{

index--

if(index < 0){
index = banners.length - 1
}

showBanner()

})

}
/* ======================
AMBULANCE SOUND
====================== */

const ambulanceBtn = document.getElementById("ambulance-btn")
const ambulanceSound = document.getElementById("ambulanceSound")

if(ambulanceBtn){

ambulanceBtn.addEventListener("click",function(e){

e.preventDefault()

ambulanceSound.currentTime = 0
ambulanceSound.play()

setTimeout(()=>{

window.location.href = this.href

},800)

})

}

const callBtn = document.getElementById("call-ambulance")
const waBtn = document.getElementById("wa-btn")
const sound = document.getElementById("ambulanceSound")

if(callBtn){

callBtn.addEventListener("click",()=>{

sound.currentTime = 0
sound.play()

waBtn.style.display = "inline-block"

})

}