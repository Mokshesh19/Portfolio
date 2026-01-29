import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current device is mobile.
 * Uses both media query and touch detection for reliability.
 */
const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth < breakpoint || 'ontouchstart' in window;
    });

    useEffect(() => {
        const checkMobile = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < breakpoint;
            setIsMobile(isSmallScreen || isTouchDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;
