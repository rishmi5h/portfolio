import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets window scroll to the top on every route change.
 *
 * React Router doesn't do this by default — it preserves scroll
 * position across navigations — so a visitor who scrolled to the
 * bottom of `/` and clicked a link to `/interesting` would otherwise
 * land mid-page. Mount once inside <Router> and it handles every route.
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
