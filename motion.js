/* Motion layer: Lenis smooth scroll, GSAP parallax, clip-path reveals, Citadella highlights.
   Everything here is progressive: if the libraries fail to load or the visitor prefers
   reduced motion, the page works exactly as before. */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("motion");

  /* 1. Lenis smooth scroll: desktop / trackpad only, native momentum on touch screens */
  const touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  let lenis = null;
  if (!touch && window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    // in-page links (nav) glide with the same easing, clearing the sticky header
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      const el = id.length > 1 && document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -72, duration: 1.2 });
    }));
    // pause smooth scroll while the photo lightbox is open
    const lb = document.getElementById("lightbox");
    new MutationObserver(() => lb.hidden ? lenis.start() : lenis.stop()).observe(lb, { attributes: true, attributeFilter: ["hidden"] });
  }

  /* 2. Subtle parallax on the hero and aerial photos (~12% travel inside a masked frame) */
  [".hero-img img", ".aerial img"].forEach(sel => {
    const img = document.querySelector(sel);
    if (!img) return;
    const frame = document.createElement("div");   // mask so the moving photo never leaves its frame
    frame.className = "px-frame";
    img.parentNode.insertBefore(frame, img);
    frame.appendChild(img);
    gsap.set(img, { scale: 1.14 });
    gsap.fromTo(img, { yPercent: -6 }, {
      yPercent: 6, ease: "none",
      scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  /* 3. Clip-path reveals (instead of fades) for architectural photos and the walk map */
  const hidden = "inset(14% 10% 14% 10% round 14px)";
  const shown = "inset(0% 0% 0% 0% round 14px)";
  function reveal(targets, stagger) {
    gsap.set(targets, { clipPath: hidden });
    ScrollTrigger.batch(targets, {
      start: "top 90%", once: true,
      onEnter: batch => gsap.to(batch, { clipPath: shown, duration: 1.15, ease: "power3.out", stagger: stagger || 0.08 })
    });
  }
  const once = () => {
    reveal(gsap.utils.toArray("#galleryGrid button"), 0.07);
    reveal(gsap.utils.toArray(".loc-pair figure img, .cit-map img, .cit-photo img"), 0.12);
  };
  // gallery tiles are built by app.js; wait until they exist
  if (document.querySelector("#galleryGrid button")) once(); else window.addEventListener("load", once);

  /* 4. Citadella section: map stays pinned (CSS sticky) while highlights scroll beside it;
        the block in view lights up */
  gsap.utils.toArray(".cit-block").forEach(b => {
    ScrollTrigger.create({ trigger: b, start: "top 65%", end: "bottom 35%", toggleClass: { targets: b, className: "is-active" } });
  });

  // re-measure once images and fonts have loaded
  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
