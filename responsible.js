const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

function joinProgram(){
    document.getElementById("notif").innerText = "Terima kasih sudah ikut menjaga lingkungan 🌱";
}