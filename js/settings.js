let APP_CONFIG = {

    theme: "style",
    logo:"assets/img/logo.png",
    logoLink:"#",
    whatsapp: "6285248555550",
    desaTitle:"DESA BANAMA",

    slogan1:"Tabe Salamat Lingu Nalatai",
    slogan2:"Salam Selamat Kedamaian Bagi Kita Semua",
    
    ambulanceTitle:"Layanan Ambulans Desa",
    
    ambulanceText:
    "Berkat doa orang sakampungan kawa tarus.\nMun kada auran.",
    
    footer1:"Adil Ka' Talino",
    footer2:"Bacuramin Ka' Saruga",
    footer3:"Basengat Ka' Jubata",
    
    copyright:"© 2026 Pemerintah Desa Banama",
cards: [

{
name:"Website Desa",
link:"https://desa.banama.my.id",
icon:"assets/img/icon-website.webp",
active:true
},

{
name:"Humabetang",
link:"https://www.humabetang.id/",
icon:"assets/img/icon-admin.webp",
active:true
},

{
name:"Peta Desa",
link:"#peta",
icon:"assets/img/icon-peta.webp",
active:true
},

{
name:"Cuaca",
link:"#cuaca",
icon:"assets/img/icon-cuaca.webp",
active:true
},

{
name:"CCTV",
link:"#cctv",
icon:"assets/img/icon-cctv.webp",
active:true
},

{
name:"Ambulans",
link:"#ambulance",
icon:"assets/img/icon-ambulance.webp",
active:true
},

{
name:"Berita",
link:"#berita",
icon:"assets/img/icon-berita.webp",
active:true
},

{
name:"Kontak",
link:"https://wa.me/6285248555550",
icon:"assets/img/icon-kontak.webp",
active:true
}

],

banners:[
"assets/img/banner1.jpg",
"assets/img/banner2.jpg",
"assets/img/banner3.jpg"
]

};




    const saved = localStorage.getItem("desaConfig");

    if(saved){
    
    const savedConfig = JSON.parse(saved);
    
    APP_CONFIG = {
    ...APP_CONFIG,
    ...savedConfig
    };
    
    }

