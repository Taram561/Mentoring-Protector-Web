import { n as e, t } from "./ScrollTrigger.DDi3XPDo.js";
(e.registerPlugin(t),
  e.utils.toArray(`.feature-row`).forEach((t) => {
    let n = t.querySelector(`.feature-visual`);
    (e.from(t, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: `power3.out`,
      scrollTrigger: { trigger: t, start: `top 80%` },
    }),
      n &&
        e.to(n, {
          y: -50,
          ease: `none`,
          scrollTrigger: {
            trigger: t,
            start: `top bottom`,
            end: `bottom top`,
            scrub: !0,
          },
        }));
  }));
