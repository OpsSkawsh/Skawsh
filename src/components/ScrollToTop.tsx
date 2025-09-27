import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Store current scroll position before navigating
    const currentPath = sessionStorage.getItem('currentPath');
    if (currentPath && currentPath !== pathname) {
      sessionStorage.setItem(`scrollPosition_${currentPath}`, window.scrollY.toString());
    }
    
    // Set new current path
    sessionStorage.setItem('currentPath', pathname);
    
    // Check if we're going back to a previously visited page
    const savedScrollPosition = sessionStorage.getItem(`scrollPosition_${pathname}`);
    
    if (savedScrollPosition) {
      // Restore previous scroll position with a small delay to ensure content is loaded
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
      }, 100);
    } else {
      // Scroll to top for new pages
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;