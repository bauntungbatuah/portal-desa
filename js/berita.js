async function ambilBerita(){

    const url = "https://desa.banama.my.id/index.php/artikel/kategori/berita-desa";
    
    const proxy = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
    
    try{
    
    const res = await fetch(proxy);
    const html = await res.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html,"text/html");
    
    const artikel = doc.querySelectorAll(".artikel");
    
    const container = document.getElementById("berita-list");
    
    container.innerHTML="";
    
    artikel.forEach((item,i)=>{
    
    if(i>=3) return;
    
    const judul = item.querySelector("h2 a")?.innerText || "Judul berita";
    const link = item.querySelector("h2 a")?.href || "#";
    const tanggal = item.querySelector(".tgl-artikel")?.innerText || "";
    const gambar = item.querySelector("img")?.src || "";
    
    const el = document.createElement("a");
    
    el.className="berita-card";
    el.href=link;
    el.target="_blank";
    
    el.innerHTML=`
    
    <img src="${gambar}">
    
    <div class="berita-info">
    
    <h3>${judul}</h3>
    
    <p>${tanggal}</p>
    
    </div>
    
    `;
    
    container.appendChild(el);
    
    });
    
    }catch(err){
    
    console.log("Berita gagal dimuat",err);
    
    }
    
    }
    
    ambilBerita();
