function filterFood(kategori) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (kategori === "all") {
            card.style.display = "block";
        } else {
            if (card.classList.contains(kategori)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});