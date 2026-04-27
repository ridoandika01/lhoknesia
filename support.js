const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// FAQ
function toggleFAQ(element){
    let p = element.nextElementSibling;
    p.style.display = (p.style.display === "block") ? "none" : "block";
}

// CHATBOT
function toggleChat(){
    let chat = document.getElementById("chatBody");
    chat.style.display = (chat.style.display === "block") ? "none" : "block";
}

function sendMessage(){
    let input = document.getElementById("userInput");
    let msg = input.value.toLowerCase();
    let chat = document.getElementById("chatMessages");

    chat.innerHTML += "<p><b>Kamu:</b> " + msg + "</p>";

    let reply = "Maaf, saya belum mengerti.";

    if(msg.includes("halo")) reply = "Halo! Ada yang bisa saya bantu?";
    if(msg.includes("pantai")) reply = "Pantai Ujong Blang sangat populer!";
    if(msg.includes("hotel")) reply = "Kamu bisa cek halaman akomodasi.";

    chat.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

    input.value = "";
}