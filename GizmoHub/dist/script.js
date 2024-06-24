
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-btn').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.toggle('hidden'); // Toggle the 'hidden' class on #menu
    });
});
