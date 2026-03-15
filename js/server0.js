const url = "https://desa.banama.my.id"

async function cekServer(){

const lamp = document.getElementById("server-lamp")
const text = document.getElementById("server-text")

try{

await fetch(url,{mode:"no-cors"})

lamp.className="server-online"

text.innerText="Server Desa Online"

}catch{

lamp.className="server-offline"

text.innerText="Server Desa Offline"

}

}

cekServer()

setInterval(cekServer,30000)
