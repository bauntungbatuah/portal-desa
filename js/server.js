const url = "https://desa.banama.my.id/desa/logo/favicon.ico"

async function cekServer(){

const lamp = document.getElementById("server-lamp")
const text = document.getElementById("server-text")

try{

const res = await fetch(url,{cache:"no-store"})

if(res.ok){
lamp.className="server-online"
text.innerText="Server Desa Online"
}else{
throw new Error()
}

}catch{

lamp.className="server-offline"
text.innerText="Server Desa Offline"

}

}

cekServer()
setInterval(cekServer,15000)
