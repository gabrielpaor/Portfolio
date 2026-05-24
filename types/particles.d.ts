declare module "particles.js" {
  export function particlesJS(tagId: string, options: any): void;
}

declare global {
  interface Window {
    particlesJS?: (tagId: string, options: any) => void;
  }
}
