const submenu = document.querySelector('.submenu-position');
const menu = document.querySelector('.submenu');
// const menu_toggle = document.querySelector('.menu-toggle');
const close = document.querySelector('.close');
const toggle = document.querySelector('.toggle');



// Function to open and close the menu
function openMenu() {
    menu.classList.add('active');
}

function closeMenu(){
    menu.classList.remove('active');
}

// On toggle click activate menu
toggle.addEventListener('click', (e) => {
    openMenu();
});

close.addEventListener('click', (e) => {
    closeMenu();
});



//On Mouse hover activate submenu

submenu.addEventListener('mouseover', (e) => {
    openMenu();
});


submenu.addEventListener('mouseout', (e) => {
    closeMenu();
});

