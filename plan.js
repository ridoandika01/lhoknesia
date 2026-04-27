// hamburger
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// cek visa
function cekVisa(){
    let negara = document.getElementById("negara").value;
    let hasil = document.getElementById("hasilVisa");

    if(negara === "indonesia"){
        hasil.innerText = "Tidak perlu visa ✅";
    }
    else if(negara === "malaysia" || negara === "singapore"){
        hasil.innerText = "Bebas visa (kunjungan singkat) ✅";
    }
    else if(negara === "usa"){
        hasil.innerText = "Memerlukan visa ❌";
    }
    else{
        hasil.innerText = "Pilih negara terlebih dahulu";
    }
}