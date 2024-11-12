document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Desa Karangputih loaded');
});
function toggleMenu() {
    document.querySelector(".burger-menu").classList.toggle("active");
    document.querySelector("nav ul").classList.toggle("active");
}