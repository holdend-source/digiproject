function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('open');
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('dropdown-menu');
    const menuBtn = document.querySelector('a[onclick="toggleMenu(); return false;"]');
    if (menu && menuBtn && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('open');
    }
});