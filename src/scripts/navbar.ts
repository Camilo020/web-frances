const initNavbar = (): void => {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!navbar || !hamburger || !mobileMenu) {
        return;
    }

    const closeLinks = document.querySelectorAll("[data-close-menu]");

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (ticking) {
            return;
        }

        requestAnimationFrame(() => {
            navbar.classList.toggle("navbar--scrolled", window.scrollY > 60);
            ticking = false;
        });

        ticking = true;
    });

    const openMenu = (): void => {
        hamburger.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");
        mobileMenu.classList.add("is-open");
        document.body.classList.add("menu-open");
    };

    const closeMenu = (): void => {
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        mobileMenu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    };

    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";
        if (isOpen) {
            closeMenu();
            return;
        }

        openMenu();
    });

    closeLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".navbar__link");
    const currentUrl = window.location.href;

    navLinks.forEach((link) => {
        if (link.href !== currentUrl) {
            return;
        }

        link.style.color = "var(--accent-light)";
        link.dataset.active = "true";
    });
};

document.addEventListener("astro:page-load", initNavbar);
