const editor = document.getElementById("cardEditor");
const bannerEditor = document.getElementById("bannerEditor");



/* =========================
   CARD EDITOR
========================= */

function renderEditor(){

editor.innerHTML="";

APP_CONFIG.cards.forEach((card,i)=>{

const box=document.createElement("div");

box.className="card-editor";

box.innerHTML=`

<b>Card ${i+1}</b>

<div class="card-preview">

<img src="${card.icon.startsWith('data:') ? card.icon : '../'+card.icon}">

<span>${card.name}</span>

</div>



Nama
<input value="${card.name}"
onchange="APP_CONFIG.cards[${i}].name=this.value">



Link
<input value="${card.link}"
onchange="APP_CONFIG.cards[${i}].link=this.value">



Icon
<input type="file" accept="image/*"
onchange="uploadIcon(event, ${i})">







<div class="card-footer">

<label class="aktif-toggle">
<input type="checkbox"
${card.active ? "checked":""}
onchange="APP_CONFIG.cards[${i}].active=this.checked">
Aktif
</label>

<div class="btn-group">

<button class="btn-up" onclick="moveUp(${i})">
<i class="fa-solid fa-arrow-up"></i>
</button>

<button class="btn-down" onclick="moveDown(${i})">
<i class="fa-solid fa-arrow-down"></i>
</button>

<button class="btn-delete" onclick="deleteCard(${i})">
<i class="fa-solid fa-trash"></i>
</button>

</div>

</div>

<hr>

`;

editor.appendChild(box);

});

}



/* =========================
   UPLOAD ICON
========================= */

function uploadIcon(event,index){

const file = event.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload=function(e){

APP_CONFIG.cards[index].icon = e.target.result;

/* update preview langsung */

document.querySelectorAll(".card-preview img")[index].src = e.target.result;

}

reader.readAsDataURL(file);

}



/* =========================
   CARD CONTROL
========================= */

function addCard(){

APP_CONFIG.cards.push({

name:"Card Baru",
link:"#",
icon:"assets/img/icon.webp",
active:true

});

renderEditor();

}



function deleteCard(i){

APP_CONFIG.cards.splice(i,1);

renderEditor();

}



function moveUp(i){

if(i===0) return;

[APP_CONFIG.cards[i],APP_CONFIG.cards[i-1]] =
[APP_CONFIG.cards[i-1],APP_CONFIG.cards[i]];

renderEditor();

}



function moveDown(i){

if(i===APP_CONFIG.cards.length-1) return;

[APP_CONFIG.cards[i],APP_CONFIG.cards[i+1]] =
[APP_CONFIG.cards[i+1],APP_CONFIG.cards[i]];

renderEditor();

}





/* =========================
   BANNER EDITOR
========================= */

function renderBanner(){

bannerEditor.innerHTML="";

APP_CONFIG.banners.forEach((b,i)=>{

const el=document.createElement("div");

el.innerHTML=`

<div class="banner-box">

<img src="${b.startsWith('data:') ? b : '../'+b}" class="banner-preview">



<input type="file" accept="image/*"
onchange="uploadBanner(event, ${i})">



<button onclick="deleteBanner(${i})">
<i class="fa-solid fa-trash"></i> Hapus
</button>

</div>

`;

bannerEditor.appendChild(el);

});

}



/* =========================
   UPLOAD BANNER
========================= */

function uploadBanner(event,index){

   const file = event.target.files[0];
   
   if(!file) return;
   
   const reader = new FileReader();
   
   reader.onload=function(e){
   
   APP_CONFIG.banners[index] = e.target.result;
   
   renderBanner();
   
   updatePreview();   // tambahkan ini
   
   }
   
   reader.readAsDataURL(file);
   
   }



/* =========================
   DELETE BANNER
========================= */

function deleteBanner(i){

   APP_CONFIG.banners.splice(i,1);
   
   renderBanner();
   
   updatePreview();   // tambahkan ini
   
   }



/* =========================
   INIT
========================= */

renderEditor();
renderBanner();

/*===========tamban=============*/

function updatePreview(){

    const frame = document.getElementById("previewFrame");
    
    if(frame){
    
    frame.contentWindow.location.reload();
    
    }
    
    }
    /* =========================
   SAVE CONFIG
========================= */

    function saveConfig(){

        localStorage.setItem("desaConfig",JSON.stringify(APP_CONFIG));
        
        alert("Config tersimpan");
        
        updatePreview();
        
        }
        function renderLogo(){

            const logo = document.getElementById("logoPreview");
            
            if(!logo) return;
            
            logo.src = APP_CONFIG.logo.startsWith("data:")
            ? APP_CONFIG.logo
            : "../"+APP_CONFIG.logo;
            
            }
            
            function uploadLogo(event){
            
            const file = event.target.files[0];
            
            if(!file) return;
            
            const reader = new FileReader();
            
            reader.onload = function(e){
            
            APP_CONFIG.logo = e.target.result;
            
            renderLogo();
            
            }
            
            reader.readAsDataURL(file);
            
            }
            function togglePreview(){

                const preview=document.getElementById("previewContainer");
                
                if(preview.style.display==="none"){
                
                preview.style.display="block";
                
                }else{
                
                preview.style.display="none";
                
                }
                
                }

                const toggle=document.getElementById("menuToggle");
const sidebar=document.querySelector(".sidebar");

toggle.addEventListener("click",function(){

sidebar.classList.toggle("active");

});

function renderLogoLink(){

   const input=document.querySelector("input[onchange='APP_CONFIG.logoLink=this.value']");
   
   if(input){
   
   input.value = APP_CONFIG.logoLink || "#";
   
   }
   
   }
   
   renderLogoLink();

   function loadPortalSettings(){

      const set = (id,val)=>{
      const el = document.getElementById(id)
      if(el) el.value = val || ""
      }
      
      set("setDesaTitle",APP_CONFIG.desaTitle)
      set("setSlogan1",APP_CONFIG.slogan1)
      set("setSlogan2",APP_CONFIG.slogan2)
      
      set("setAmbulanceTitle",APP_CONFIG.ambulanceTitle)
      set("setAmbulanceText",APP_CONFIG.ambulanceText)
      
      set("setFooter1",APP_CONFIG.footer1)
      set("setFooter2",APP_CONFIG.footer2)
      set("setFooter3",APP_CONFIG.footer3)
      
      set("setWA",APP_CONFIG.whatsappNumber)
      set("setWAMessage",APP_CONFIG.whatsappMessage)
      
      }
      
      loadPortalSettings()

      /* SIDEBAR ACTIVE MENU */

document.querySelectorAll(".sidebar a").forEach(link=>{

   link.onclick=function(){
   
   document
   .querySelectorAll(".sidebar a")
   .forEach(a=>a.classList.remove("active"));
   
   this.classList.add("active");
   
   };
   
   });
   /* =========================
   ADD BANNER
========================= */

function addBanner(){

   APP_CONFIG.banners.push("assets/img/banner.webp");
   
   renderBanner();
   
   updatePreview();
   
   }
