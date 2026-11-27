import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  // Hero intro
  gsap.fromTo(
    '.hero-line',
    { y: 34, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.15 }
  );
}

// Scroll reveals (class-based fallback works even if GSAP fails)
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
  { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Animated metric counters
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const cio = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      cio.unobserve(el);
      const target = parseFloat(el.dataset.count || '0');
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      if (reduced) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = obj.v.toFixed(decimals) + suffix;
        },
      });
    }),
  { threshold: 0.4 }
);
counters.forEach((c) => cio.observe(c));
