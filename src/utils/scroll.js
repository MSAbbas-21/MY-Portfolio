/**
 * Smooth scrolling utility that handles fixed navbar offsets
 * and mobile navigation lock resets reliably.
 */
export const scrollToSection = (targetId) => {
  // Ensure body scroll is unlocked
  document.body.style.overflow = '';

  const id = targetId.startsWith('#') ? targetId.slice(1) : targetId;
  const element = document.getElementById(id);

  if (element) {
    const navbarOffset = 84; // Fixed navbar height allowance
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    if (window.history.pushState) {
      window.history.pushState(null, '', `#${id}`);
    }
  }
};
