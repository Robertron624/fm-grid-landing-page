function main() {
    console.log("Main function executed");

    const mobileMenuTrigger = document.querySelector("#mobile-menu__trigger");
    const mobileMenuIcon = document.querySelector(".mobile-menu__icon");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");

    function toggleMenu() {
        const isOpen = mobileMenu.classList.toggle("is-open");
        overlay.classList.toggle("is-open");

        if(isOpen) {
            mobileMenuIcon.src = "./assets/images/icon-close.svg";
            mobileMenuTrigger.setAttribute("aria-expanded", "true");
        } else {
            mobileMenuIcon.src = "./assets/images/icon-menu.svg";
            mobileMenuTrigger.setAttribute("aria-expanded", "false");
        }
    }

    mobileMenuTrigger.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", () => {
        if(mobileMenu.classList.contains("is-open")) {
            toggleMenu();
        }
    });
}

document.addEventListener("DOMContentLoaded", main);