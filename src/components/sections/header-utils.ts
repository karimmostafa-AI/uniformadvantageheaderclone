// Keyboard navigation utilities for header accessibility

export const handleKeyboardNavigation = (event: KeyboardEvent, activeDropdown: string | null, setActiveDropdown: (value: string | null) => void) => {
  switch (event.key) {
    case 'Escape':
      // Close all open menus
      if (activeDropdown) {
        setActiveDropdown(null);
        event.preventDefault();
      }
      break;
    case 'Tab':
      // Allow natural tab navigation but close dropdowns when tabbing away
      if (event.shiftKey) {
        // Shift+Tab (going backwards)
        handleTabNavigation(event, 'backward');
      } else {
        // Tab (going forwards)  
        handleTabNavigation(event, 'forward');
      }
      break;
    case 'ArrowDown':
      if (activeDropdown) {
        event.preventDefault();
        focusFirstMenuItem(activeDropdown);
      }
      break;
    case 'ArrowUp':
      if (activeDropdown) {
        event.preventDefault();
        focusLastMenuItem(activeDropdown);
      }
      break;
  }
};

const handleTabNavigation = (event: KeyboardEvent, direction: 'forward' | 'backward') => {
  const focusableElements = document.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
  
  if (currentIndex !== -1) {
    const nextIndex = direction === 'forward' 
      ? Math.min(currentIndex + 1, focusableElements.length - 1)
      : Math.max(currentIndex - 1, 0);
    
    (focusableElements[nextIndex] as HTMLElement)?.focus();
  }
};

const focusFirstMenuItem = (dropdownName: string) => {
  const dropdown = document.querySelector(`[data-dropdown="${dropdownName}"]`);
  const firstItem = dropdown?.querySelector('a, button');
  (firstItem as HTMLElement)?.focus();
};

const focusLastMenuItem = (dropdownName: string) => {
  const dropdown = document.querySelector(`[data-dropdown="${dropdownName}"]`);
  const items = dropdown?.querySelectorAll('a, button');
  const lastItem = items?.[items.length - 1];
  (lastItem as HTMLElement)?.focus();
};

// Performance utilities
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Search suggestions mock data (would be replaced with real API)
export const mockSearchSuggestions = (query: string) => {
  const suggestions = [
    { type: 'product', title: 'Scrub Tops', category: "Women's", icon: '👕' },
    { type: 'product', title: 'Scrub Pants', category: "Men's", icon: '👖' },
    { type: 'brand', title: 'Cherokee', category: 'Brand', icon: '🏷️' },
    { type: 'brand', title: 'Dickies', category: 'Brand', icon: '🏷️' },
    { type: 'category', title: 'Lab Coats', category: 'Outerwear', icon: '🥼' },
    { type: 'category', title: 'Footwear', category: 'Shoes', icon: '👟' },
  ];
  
  return suggestions.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);
};

// Cart animation utilities
export const animateCartCount = () => {
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.classList.add('animate-bounce');
    setTimeout(() => {
      cartCount.classList.remove('animate-bounce');
    }, 600);
  }
};

// Sticky header scroll behavior
export const handleStickyHeader = () => {
  let lastScrollTop = 0;
  const header = document.querySelector('[data-sticky-header]');
  
  return throttle(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down - hide header
      (header as HTMLElement)?.style.setProperty('transform', 'translateY(-100%)');
    } else {
      // Scrolling up - show header
      (header as HTMLElement)?.style.setProperty('transform', 'translateY(0)');
    }
    
    lastScrollTop = scrollTop;
  }, 16); // 60fps
};

// Focus trap for mobile menu
export const createFocusTrap = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  firstElement?.focus();
  
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};