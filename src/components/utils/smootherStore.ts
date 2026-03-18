import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

let smootherInstance: ScrollSmoother | null = null;

export function setSmoother(instance: ScrollSmoother) {
  smootherInstance = instance;
}

export function getSmoother() {
  return smootherInstance;
}
