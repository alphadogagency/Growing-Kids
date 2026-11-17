// Visible by default: an unavailable observer leaves the entire page usable.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const groups = [...document.querySelectorAll<HTMLElement>('[data-care-reveal]')];
let observer: IntersectionObserver | undefined;
const settle = (group: HTMLElement) => {
  group.classList.remove('care-ready');
  group.classList.add('care-seen');
  observer?.unobserve(group);
};
const revealImmediately = (group: HTMLElement) => {
  group.classList.add('care-instant');
  group.classList.remove('care-entering');
  settle(group);
};
const finishAll = () => {
  observer?.disconnect();
  groups.forEach(group => {
    group.classList.remove('care-ready', 'care-entering');
    group.classList.add('care-seen');
  });
};
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  try {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const group = entry.target as HTMLElement;
        group.classList.add('care-entering');
        settle(group);
      });
    }, { threshold: 0.16 });
    groups.forEach(group => {
      // Never hide the initial viewport, an anchor target or focused content.
      if (group.getBoundingClientRect().top >= window.innerHeight && !group.contains(document.activeElement)) {
        observer!.observe(group);
        group.classList.add('care-ready');
      } else settle(group);
    });
    const revealTarget = () => {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) groups.filter(group => group.contains(target) || target.contains(group)).forEach(revealImmediately);
    };
    document.addEventListener('focusin', event => {
      if (event.target instanceof Element) {
        const group = event.target.closest<HTMLElement>('[data-care-reveal]');
        if (group) revealImmediately(group);
      }
    });
    window.addEventListener('hashchange', revealTarget);
    revealTarget();
    motionPreference.addEventListener('change', event => { if (event.matches) finishAll(); });
    // Returning from another tab must never leave an unfinished entrance hidden.
    document.addEventListener('visibilitychange', () => { if (document.hidden) finishAll(); });
  } catch { finishAll(); }
}
