async function ambilBerita(){

try{

const res = await fetch(
"https://desa.banama.my.id/artikel"
)

const html = await res.text()

document.getElementById("berita-list").innerHTML =
"<p>Berita diambil dari OpenSID</p>"

}catch{

document.getElementById("berita").style.display="none"

}

}

ambilBerita()
