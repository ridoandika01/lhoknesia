// hamburger
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// tab itinerary
function showTab(tabId){

    let tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.style.display = "none");

    document.getElementById(tabId).style.display = "block";
}

// default tampil
document.addEventListener("DOMContentLoaded", function(){
    showTab("first");
});