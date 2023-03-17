const mobileMenuBtnElement = document.getElementById("mobile-menu-btn");
const mobileMenuElement = document.getElementById("mobile-menu");

function toggleMobileMenu() {
    const el = mobileMenuElement;
    if ([...el.classList].includes("open")) {
        el.classList.remove("open");
    } else {
        el.classList.add("open");
    }
}

mobileMenuBtnElement.addEventListener("click", toggleMobileMenu);
