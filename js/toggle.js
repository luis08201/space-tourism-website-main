const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', () => {
    const nav = document.getElementById('menu-container');
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('active');
});