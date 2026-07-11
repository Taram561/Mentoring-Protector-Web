import { n as e, t } from "./ScrollTrigger.DDi3XPDo.js";
(e.registerPlugin(t),
  e.utils.toArray(`.timeline-item`).forEach((t) => {
    e.from(t, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: { trigger: t, start: `top 85%` },
    });
  }));
