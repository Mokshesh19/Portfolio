import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import TextureOverlay from './TextureOverlay';

const Layout = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-was-paper text-sumi-ink font-sans selection:bg-wood selection:text-was-paper">
            <TextureOverlay />
            <Navbar />
            <main className="relative z-10 flex flex-col items-center w-full">
                {children}
            </main>
        </div>
    );
};

export default Layout;
