const grid = document.getElementById("appGrid");

/* LOAD THEME */
function loadTheme(){

const css = document.createElement("link");

css.rel="stylesheet";
css.href="css/"+APP_CONFIG.theme+".css";

document.head.appendChild(css);

}

loadTheme();


/* LOAD CARDS */
function loadCards(){

if(!grid) return;

grid.innerHTML="";

APP_CONFIG.cards
.filter(card=>card.active)
.forEach(card=>{

const el=document.createElement("a");

el.className="app-card";
el.href=card.link;

/* buat id lampu dari nama card */
const safeName=(card.name||"card").replace(/\s/g,"-");
const id="status-"+safeName;

el.innerHTML=`
<div class="service-status" id="${id}"></div>
<img src="${card.icon}">
<span>${card.name}</span>
`;

grid.appendChild(el);

/* cek status layanan */
cekService(card.link,id);

});

}

loadCards();


/* CEK STATUS LAYANAN */
async function cekService(url,id){

const lamp=document.getElementById(id);

if(!lamp) return;

/* link anchor (#peta dll) dianggap warning */
if(!url || url.startsWith("#")){
lamp.className="service-status status-warning";
return;
}

try{

    await fetch(url,{
    cache:"no-store",
    mode:"no-cors"
    });
    
    lamp.className="service-status status-online";
    setTimeout(()=>cekService(url,id),30000);
    
    }catch{
    
    lamp.className="service-status status-offline";
    
    }

}


/* LOGO LINK */
function loadLogoLink(){

    const logoLink = document.getElementById("logoAdmin");
    
    if(!logoLink) return;
    
    logoLink.href = APP_CONFIG.logoLink || "#";
    logoLink.target = "_blank";
    
    logoLink.addEventListener("click", function(e){
    
    const serverLamp = document.getElementById("server-lamp");
    
    /* jika server offline */
    if(serverLamp && serverLamp.classList.contains("server-offline")){
    
    e.preventDefault();
    
    const popup = document.getElementById("adminPopup");
    
    if(popup){
    popup.style.display = "flex";
    }
    
    }
    
    });
    
    }
    
    loadLogoLink();
/* RELOAD CONFIG JIKA ADMIN MENGUBAH */

window.addEventListener("storage",function(e){

    if(e.key==="desaConfig"){
    
    const saved = localStorage.getItem("desaConfig");
    
    if(saved){
    APP_CONFIG = JSON.parse(saved);
    }
    
    /* reload tampilan */
    loadCards();
    loadBanners();
    
    }
    
    });
        
/* =========================
   LOAD BANNERS
========================= */

function loadBanners(){

    const slides = document.getElementById("bannerSlides");
    
    if(!slides) return;
    
    slides.innerHTML="";
    
    APP_CONFIG.banners.forEach((banner,i)=>{
    
    const img=document.createElement("img");
    
    img.src = banner.startsWith("data:") ? banner : banner;
    
    if(i===0){
    img.classList.add("active");
    }
    
    slides.appendChild(img);
    
    });
    
    }
    

No file chosen

Hapus
    /* jalankan saat halaman pertama load */
    loadBanners();
        
