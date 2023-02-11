const nav = document.getElementById('nav');
const but = document.getElementById('nav-button');
const navBtnImg = document.getElementById('nav-button-img');

but.onclick = () => {
    if (nav.classList.toggle('open')) {
     navBtnImg.src = "img/icons/nav-close.svg";
    }else {
        navBtnImg.src = "img/icons/nav-open.svg";
    }
}

AOS.init({
    once: true
});