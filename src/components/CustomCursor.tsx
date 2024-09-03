import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOverIframe, setIsOverIframe] = useState(false);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleIframeMouseEnter = useCallback(() => {
    setIsOverIframe(true);
    setIsHovering(true);
  }, []);

  const handleIframeMouseLeave = useCallback(() => {
    setIsOverIframe(false);
    setIsHovering(false);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      const isText = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN'].includes(
        target.tagName,
      );
      const isLink = target.tagName === 'A' || target.closest('a');
      const isIframe = target.tagName === 'IFRAME';
      setIsHovering((isText || isIframe) && !isLink);
      setIsVisible(!isLink && !isIframe);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsVisible(true);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.addEventListener('mouseenter', handleIframeMouseEnter);
      iframe.addEventListener('mouseleave', handleIframeMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
      if (iframe) {
        iframe.removeEventListener('mouseenter', handleIframeMouseEnter);
        iframe.removeEventListener('mouseleave', handleIframeMouseLeave);
      }
    };
  }, [mouseX, mouseY, handleIframeMouseEnter, handleIframeMouseLeave]);

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white mix-blend-difference ${
        isSmallScreen || isOverIframe ? 'hidden' : ''
      }`}
      style={{
        height: isHovering ? 60 : 32,
        opacity: isVisible ? 1 : 0,
        transition: 'width 0.3s, height 0.3s, opacity 0.3s',
        width: isHovering ? 60 : 32,
        x: cursorX,
        y: cursorY,
      }}
    />
  );
};

export default CustomCursor;
