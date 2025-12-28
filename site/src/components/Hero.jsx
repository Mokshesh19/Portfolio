import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const nameRef = useRef(null);
    const titleRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial State
        gsap.set(nameRef.current, { y: 100, opacity: 0 });
        gsap.set(titleRef.current, { y: 50, opacity: 0 });
        gsap.set(circleRef.current, { scale: 0, opacity: 0 });

        // Animation Sequence
        tl.to(circleRef.current, {
            scale: 1,
            opacity: 0.1,
            duration: 2,
            ease: "power4.out"
        })
            .to(nameRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.1
            }, "-=1.5")
            .to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, "-=1");

        return () => tl.kill();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Abstract Zen Circle (Enso) Background */}
            <div
                ref={circleRef}
                className="absolute w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full border border-sumi-ink/20 blur-sm pointer-events-none"
            ></div>

            <div className="z-10 text-center mix-blend-multiply">
                <h1
                    ref={nameRef}
                    className="text-[12vw] md:text-[8vw] leading-none font-serif font-bold tracking-tighter text-sumi-ink select-none"
                >
                    Mokshesh Jain
                </h1>
                <div ref={titleRef} className="mt-4 md:mt-8 overflow-hidden">
                    <p className="text-sm md:text-xl font-sans tracking-[0.2em] uppercase text-matcha">
                        AI Engineer &middot; Digital Craftsman
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce text-sumi-ink/50 text-xs tracking-widest uppercase">
                Scroll to Explore
            </div>
        </section>
    );
};

export default Hero;
