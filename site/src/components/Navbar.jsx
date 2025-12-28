import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
        );
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Get the target element's position relative to document
            const elementRect = targetElement.getBoundingClientRect();
            const elementTop = elementRect.top + window.scrollY;

            // Calculate additional scroll needed for pinned sections
            // Sum up the pin spacer heights for sections that are before target
            let additionalScroll = 0;
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.pin && trigger.start < elementTop) {
                    // Add the pin's scroll distance (end - start) 
                    additionalScroll += (trigger.end - trigger.start);
                }
            });

            // The final scroll position accounts for pinned section scroll distances
            const finalScrollPosition = elementTop + additionalScroll - 50;

            gsap.to(window, {
                duration: 2,
                scrollTo: {
                    y: finalScrollPosition,
                    autoKill: false
                },
                ease: 'power2.inOut'
            });
        }
    };

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#projects' },
    ];

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-was-paper">
            <a href="#" className="text-xl font-serif font-bold tracking-widest">MJ.</a>

            <div className="hidden md:flex items-center space-x-12">
                <div className="flex space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm uppercase tracking-widest hover:text-wood transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-wood transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="text-sm uppercase tracking-widest border border-was-paper/30 px-6 py-2 rounded-full hover:bg-was-paper hover:text-sumi-ink transition-all duration-300"
                >
                    Let's Talk
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
