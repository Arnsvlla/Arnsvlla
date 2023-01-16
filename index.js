// Nav bar
const navLinks = document.querySelector('.nav-links')

document.getElementById("openMenu").onclick = () => {
    navLinks.classList.toggle('open')
}

document.getElementById('closeMenu').onclick = () => {
    navLinks.classList.toggle('open')
}

// return to home
document.querySelector('.logo').style.cursor = 'pointer'

function returnHome() {
    window.location.href = "index.html";
}