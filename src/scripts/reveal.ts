const initReveal = (): void => {
    const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) {
                    continue;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
    });
};

document.addEventListener("astro:page-load", initReveal);
