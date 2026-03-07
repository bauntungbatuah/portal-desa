/* =========================
AMBIL ELEMENT
========================= */



const rain = document.getElementById("rain")
const stars = document.getElementById("stars")
const lightning = document.getElementById("lightning")
const tempBox = document.getElementById("temperature")

const back = document.querySelector(".cloud-back")
const mid = document.querySelector(".cloud-mid")
const front = document.querySelector(".cloud-front")


/* =========================
PETIR
========================= */

function lightningStrike(){

if(!lightning) return

lightning.classList.add("flash")

setTimeout(()=>{
lightning.classList.remove("flash")
},300)

}


/* =========================
HUJAN
========================= */

function createRain(){

if(!rain) return

rain.innerHTML=""

for(let i=0;i<120;i++){

let drop = document.createElement("div")

drop.classList.add("raindrop")

drop.style.left=Math.random()*100+"%"
drop.style.animationDuration=(0.4+Math.random())+"s"

rain.appendChild(drop)

}

}


/* =========================
CUACA
========================= */

function updateWeather(){

fetch("https://api.open-meteo.com/v1/forecast?latitude=-2.865913&longitude=114.5183499&current_weather=true&timezone=Asia%2FMakassar")

.then(res => res.json())

.then(data => {

const code = data.current_weather.weathercode
const temp = data.current_weather.temperature
const hour = new Date().getHours()

console.log("Weather code:", code)
const weatherText = document.getElementById("weather-text")

let kondisi = "☀ Cerah"

if(code >=95){
kondisi = "⛈ Badai Petir"
}
else if(code >=80){
kondisi = "🌧 Hujan"
}
else if(code >=45){
kondisi = "☁ Mendung"
}
else if(code >=1){
kondisi = "⛅ Berawan"
}

if(weatherText){
weatherText.innerText = kondisi
}
/* =========================
TAMPILKAN SUHU
========================= */

if(tempBox){
tempBox.innerText = temp + "°C"
}


/* =========================
SIANG / MALAM
========================= */

if(hour >=18 || hour <=5){

if(sun) sun.style.display="none"
if(moon) moon.style.display="block"
if(stars) stars.style.display="block"

}else{

if(sun) sun.style.display="block"
if(moon) moon.style.display="none"
if(stars) stars.style.display="none"

}


/* =========================
CERAH
========================= */

if(code ===0){

back.style.opacity="0.2"
mid.style.opacity="0"
front.style.opacity="0"

if(rain){
rain.style.display="none"
rain.innerHTML=""
}

}


/* =========================
BERAWAN
========================= */

else if(code >=1 && code <=3){

back.style.opacity="0.4"
mid.style.opacity="0.6"
front.style.opacity="0.3"

if(rain){
rain.style.display="none"
rain.innerHTML=""
}

}


/* =========================
MENDUNG
========================= */

else if(code >=45 && code <51){

back.style.opacity="0.6"
mid.style.opacity="0.8"
front.style.opacity="0.6"

if(rain){
rain.style.display="none"
rain.innerHTML=""
}

}


/* =========================
HUJAN
========================= */

else if(
code == 51 ||
code == 53 ||
code == 55 ||
code == 61 ||
code == 63 ||
code == 65 ||
code == 80 ||
code == 81 ||
code == 82
){

if(rain){

rain.style.display="block"

if(rain.children.length === 0){
createRain()
}

}

back.style.opacity="0.7"
mid.style.opacity="0.9"
front.style.opacity="0.8"

}


/* =========================
BADAI PETIR
========================= */

if(code >=95){

if(!window.lightningTimer){
window.lightningTimer = setInterval(lightningStrike,4000)
}

}

})

}


/* =========================
JALANKAN
========================= */

updateWeather()

/* update setiap 10 menit */

setInterval(updateWeather,600000)