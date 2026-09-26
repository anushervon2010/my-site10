const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".main-nav");

menuButton?.addEventListener("click", function() {
    navigation.classList.toggle("show");
});