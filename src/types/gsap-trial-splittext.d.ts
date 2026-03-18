declare module "gsap-trial/SplitText" {
  import type { gsap } from "gsap";

  class SplitText {
    readonly chars: Element[];
    readonly lines: Element[];
    readonly words: Element[];
    readonly elements: Element[];
    readonly selector: string | ((...args: unknown[]) => unknown);

    constructor(target: gsap.DOMTarget, vars?: SplitText.Vars);
    revert(): void;
    split(vars: SplitText.Vars): SplitText;
  }

  namespace SplitText {
    interface Vars {
      [key: string]: unknown;
      type?: string;
      charsClass?: string;
      wordsClass?: string;
      linesClass?: string;
      position?: string;
      lineThreshold?: number;
      reduceWhiteSpace?: boolean;
      specialChars?: string[] | ((...args: unknown[]) => unknown);
      wordDelimiter?: string;
    }
  }

  export { SplitText };
  export default SplitText;
}
