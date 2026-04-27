// JavaScript untuk halaman wisata
// Saat ini belum ada fitur interaktif

console.log("Website Wisata Pantai Losari aktif");

document.getElementById("formReservasi")?.addEventListener("submit", function(e){

e.preventDefault()

alert("Reservasi berhasil dikirim!")

})

function cari() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".destinasi");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();

        if (text.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function showInfo(tempat) {
    let info = document.getElementById("map-info");

    if (tempat === "ujong") {
        info.innerHTML = "🌅 Pantai Ujong Blang - terkenal dengan sunset indah";
    } 
    else if (tempat === "masjid") {
        info.innerHTML = "🕌 Masjid Islamic Center - ikon religi Lhokseumawe";
    }
    else if (tempat === "waduk") {
        info.innerHTML = "🌿 Waduk Jeulikat - tempat santai keluarga";
    }
    else if (tempat === "pulau") {
        info.innerHTML = "🏝️ Pulau Seumadu - wisata laut & jembatan ikonik";
    }
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

