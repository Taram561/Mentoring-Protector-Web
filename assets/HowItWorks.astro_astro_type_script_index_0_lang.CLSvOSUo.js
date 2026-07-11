import { n as e, t } from "./ScrollTrigger.DDi3XPDo.js";
e.registerPlugin(t);
var n = e.utils.toArray(`.step-panel`);
e.to(`.how-title`, {
  opacity: 1,
  scrollTrigger: {
    trigger: `#how`,
    start: `top center`,
    end: `top top`,
    scrub: !0,
  },
});
var r = e.timeline({
  scrollTrigger: {
    trigger: `#how`,
    start: `top top`,
    end: `bottom bottom`,
    scrub: 1,
  },
});
(n.forEach((e, t) => {
  (t !== 0 && r.to(e, { opacity: 1, y: 0, duration: 1 }, `+=0.5`),
    t !== n.length - 1 &&
      r.to(e, { opacity: 0, y: -50, scale: 0.95, duration: 1 }, `+=1`));
}),
  e.to(`.orb-glow`, {
    scale: 1.5,
    scrollTrigger: {
      trigger: `#how`,
      start: `top top`,
      end: `bottom bottom`,
      scrub: !0,
    },
  }));
