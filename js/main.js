function updateJam(){

const now = new Date()

let hours = now.getHours()
const menit = now.getMinutes().toString().padStart(2,"0")
const detik = now.getSeconds().toString().padStart(2,"0")

let waktu = ""

if(hours < 4){
waktu = "Malam"
}
else if(hours < 6){
waktu = "Subuh"
}
else if(hours < 11){
waktu = "Pagi"
}
else if(hours < 15){
waktu = "Siang"
}
else if(hours < 18){
waktu = "Sore"
}
else{
waktu = "Malam"
}

let jam12 = hours % 12
if(jam12 === 0) jam12 = 12

const jamBox = document.getElementById("jam-wita")

if(jamBox){
jamBox.innerText = jam12 + ":" + menit + ":" + detik + " " + waktu
}

}

setInterval(updateJam,1000)
updateJam()


/* ======================
LOGIN MENU
====================== */

const loginBtn = document.querySelector(".login-btn")
const loginMenu = document.getElementById("login-menu")

if(loginBtn && loginMenu){

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

if(!banners[index] || !dots[index]) return

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

if(banners.length){
auto = setInterval(nextBanner,5000)
}

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

if(index < 0){
index = banners.length-1
}

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

if(ambulanceBtn && ambulanceSound){

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

if(callBtn && sound){

callBtn.addEventListener("click",()=>{

sound.currentTime = 0
sound.play()

if(waBtn){
waBtn.style.display = "inline-block"
}

})

}

/* =========================
POPUP LOGIN ADMIN
========================= */

const logoAdmin = document.getElementById("logoAdmin")
const adminPopup = document.getElementById("adminPopup")
const closePopup = document.getElementById("closePopup")
const banamaSong = document.getElementById("banamaSong")

if(logoAdmin && adminPopup){

logoAdmin.onclick = function(){

adminPopup.style.display = "flex"

if(banamaSong){
banamaSong.currentTime = 0
banamaSong.play()
}

}

}

if(closePopup && adminPopup){

closePopup.onclick = function(){

adminPopup.style.display = "none"

if(banamaSong){
banamaSong.pause()
}

}

}

/* =========================
POPUP AMBULANCE
========================= */

const callAmbulance = document.getElementById("call-ambulance")
const ambulancePopup = document.getElementById("ambulancePopup")
const closeAmbulance = document.getElementById("closeAmbulance")

if(callAmbulance && ambulancePopup){

callAmbulance.addEventListener("click", function(){
ambulancePopup.style.display = "flex"
})

}

if(closeAmbulance && ambulancePopup){

closeAmbulance.addEventListener("click", function(){
ambulancePopup.style.display = "none"
})

}

/* ======================
ADMIN SECRET CLICK
====================== */

let clickTitle = 0

const title = document.getElementById("desaTitle")

if(title){

title.addEventListener("click", function(){

clickTitle++

if(clickTitle === 5){
window.location.href = "admin/admin.html"
}

})

}

/* ======================
LOAD TEXT CONFIG
====================== */

function loadPortalText(){

if(!APP_CONFIG) return

document.getElementById("desaTitle").innerText =
APP_CONFIG.desaTitle

document.getElementById("desaSlogan").innerHTML =
APP_CONFIG.slogan1 + "<br>" + APP_CONFIG.slogan2

document.getElementById("ambulanceTitle").innerText =
APP_CONFIG.ambulanceTitle

document.getElementById("ambulanceText").innerText =
APP_CONFIG.ambulanceText

document.getElementById("footerText").innerHTML =
APP_CONFIG.footer1 + "<br>" +
APP_CONFIG.footer2 + "<br>" +
APP_CONFIG.footer3

document.getElementById("copyright").innerText =
APP_CONFIG.copyright

}

loadPortalText()
