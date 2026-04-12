import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useTheme() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        let $: any;

        /* ================= LOAD JQUERY + PLUGINS ================= */
        Promise.all([
            import("jquery"),
            import("magnific-popup" as any),
        ]).then(([jQuery]) => {
            $ = jQuery.default;

            (window as any).$ = $;
            (window as any).jQuery = $;

            /* ================= PRELOADER ================= */
            $(window).on("load", () => {
                $(".preloader").fadeOut(600);
            });

            /* ================= STICKY HEADER ================= */
            if ($(".active-sticky-header").length) {
                const setHeaderHeight = () => {
                    $("header.active-sticky-header").css(
                        "height",
                        $("header.active-sticky-header .header-sticky").outerHeight()
                    );
                };

                $(window).on("resize", setHeaderHeight);

                $(window).on("scroll", () => {
                    const fromTop = $(window).scrollTop();
                    const headerHeight = $("header.active-sticky-header .header-sticky").outerHeight();

                    setHeaderHeight();

                    $(".header-sticky").toggleClass("hide", fromTop > headerHeight + 100);
                    $(".header-sticky").toggleClass("active", fromTop > 600);
                });
            }

            /* ================= SCROLL TOP ================= */
            $(document).on("click", "a[href='#top']", function (e: any) {
                e.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, "slow");
            });

            /* ================= SWIPER ================= */
            import("swiper").then(({ default: Swiper }) => {

                if ($(".testimonial-slider").length) {
                    new Swiper(".testimonial-slider .swiper", {
                        slidesPerView: 1,
                        loop: true,
                        autoplay: { delay: 5000 },
                        pagination: { el: ".testimonial-pagination", clickable: true },
                    });
                }

            });

            /* ================= COUNTER ================= */
            if (document.querySelectorAll(".counter").length) {
                import("counterup2").then(({ default: counterUp }) => {
                    document.querySelectorAll(".counter").forEach((el) => {
                        counterUp(el as HTMLElement, {
                            duration: 2000,
                        });
                    });
                });
            }

            /* ================= GSAP REVEAL ================= */
            document.querySelectorAll(".reveal").forEach((el: any) => {
                const img = el.querySelector("img");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                });

                tl.set(el, { autoAlpha: 1 });

                tl.from(el, {
                    xPercent: -100,
                    duration: 1,
                    ease: "power2.out",
                });

                if (img) {
                    tl.from(
                        img,
                        {
                            xPercent: 100,
                            duration: 1,
                            ease: "power2.out",
                        },
                        "-=1"
                    );
                }
            });

            /* ================= TEXT ANIMATION ================= */
            /* ================= TEXT ANIMATION (ADVANCED) ================= */
            const textElements = document.querySelectorAll<HTMLElement>(".text-anime-style-3");

            textElements.forEach((el) => {
                // ⚠️ prevent duplicate splitting
                if (el.dataset.split === "true") return;
                el.dataset.split = "true";

                const text = el.innerText.trim();

                // 🔹 split into words + chars
                const words = text.split(" ");

                el.innerHTML = words
                    .map(
                        (word) =>
                            `<span class="word">
                    ${word
                                .split("")
                                .map((char) => `<span class="char">${char}</span>`)
                                .join("")}
                </span>`
                    )
                    .join(" ");

                const chars = el.querySelectorAll(".char");

                // 🔥 animation (very close to GSAP SplitText)
                gsap.fromTo(
                    chars,
                    {
                        y: 80,
                        opacity: 0,
                        rotateX: 90,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        stagger: 0.03,
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                    }
                );
            });

            /* ================= MAGNIFIC POPUP ================= */
            if ($(".gallery-items").length) {
                $(".gallery-items").magnificPopup({
                    delegate: "a",
                    type: "image",
                    gallery: { enabled: true },
                });
            }

            if ($(".popup-video").length) {
                $(".popup-video").magnificPopup({
                    type: "iframe",
                });
            }

            /* ================= AMENITY HOVER ================= */
            const items = $(".amenity-item");

            items.on("mouseenter", function (this: HTMLElement) {
                items.removeClass("active");
                $(this).addClass("active");
            });

        });

        /* ================= CLEANUP ================= */
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };

    }, []);
}