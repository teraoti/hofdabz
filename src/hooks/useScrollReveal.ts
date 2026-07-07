import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export default function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', once = true } = options;
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

export function revealClass(isVisible: boolean, delay: number = 0): string {
  const base = 'transition-all duration-700 ease-out';
  const hidden = 'opacity-0 translate-y-8';
  const visible = 'opacity-100 translate-y-0';
  const delayClass = delay > 0 ? ` delay-${delay}` : '';

  if (!isVisible) return `${base} ${hidden}${delayClass}`;
  return `${base} ${visible}${delayClass}`;
}