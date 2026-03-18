declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | Element | Array<string | Element>,
      vars?: Record<string, unknown>
    );
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static refresh(force?: boolean): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    scrollTo(target: string | Element | null, smooth?: boolean, position?: string): void;
  }
}
