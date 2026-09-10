import { RefObject, useLayoutEffect } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

interface UseSectionRevealOptions {
  start?: string;
  y?: number;
  stagger?: number;
}

export const useSectionReveal = (
  scopeRef: RefObject<HTMLElement>,
  options: UseSectionRevealOptions = {},
  deps: ReadonlyArray<unknown> = [],
) => {
  const { start = "top 80%", y = 48, stagger = 0.12 } = options;
  const depKey = JSON.stringify(deps);

  useLayoutEffect(() => {
    registerGsapPlugins();

    const scope = scopeRef.current;
    if (!scope) {
      return;
    }

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll("[data-reveal]"));

      if (revealItems.length) {
        gsap.fromTo(
          revealItems,
          { autoAlpha: 0, y, scale: 0.99 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger,
            ease: "power2.out",
            clearProps: "transform,scale",
            scrollTrigger: {
              trigger: scope,
              start,
              once: true,
              fastScrollEnd: true,
            },
          },
        );
      }

      const parallaxItems = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll("[data-parallax]"));

      parallaxItems.forEach((item) => {
        const amount = Number(item.dataset.parallax ?? "60");
        // Force GPU acceleration
        gsap.set(item, { willChange: "transform" });
        
        gsap.fromTo(
          item,
          { y: amount },
          {
            y: amount * -0.2,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1, // Reduced scrub for smoother performance
              fastScrollEnd: true,
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef, start, y, stagger]); // Removed depKey to prevent expensive re-renders
};
