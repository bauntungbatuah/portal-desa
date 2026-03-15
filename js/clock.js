function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let waktu = "";

    if (hours >= 0 && hours < 4) {
        waktu = "Malam";
    } else if (hours >= 4 && hours < 6) {
        waktu = "Subuh";
    } else if (hours >= 6 && hours < 11) {
        waktu = "Pagi";
    } else if (hours >= 11 && hours < 15) {
        waktu = "Siang";
    } else if (hours >= 15 && hours < 18) {
        waktu = "Sore";
    } else {
        waktu = "Malam";
    }

    let jam12 = hours % 12;
    jam12 = jam12 ? jam12 : 12;

    const waktuText = jam12 + ":" + minutes + ":" + seconds + " " + waktu;

    document.getElementById("clock").innerText = waktuText;
}

setInterval(updateClock, 1000);
