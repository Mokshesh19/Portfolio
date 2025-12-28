import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const KINTSUGI_CRACKS = [
    {
        baseOpacity: 0.85,
        style: {
            top: '-2%',
            left: '-6%',
            width: '68vw',
            height: '48vh'
        },
        viewBox: '0 0 680 480',
        paths: [
            'M0 0 L140 35 L210 90 L270 60 L330 140 L380 120 L430 210 L500 190 L560 280 L620 310 L660 360',
            'M210 90 L250 200 L320 300'
        ]
    },
    {
        baseOpacity: 0.8,
        style: {
            bottom: '8%',
            right: '-6%',
            width: '64vw',
            height: '42vh'
        },
        viewBox: '0 0 640 420',
        paths: [
            'M640 50 L560 120 L520 80 L470 170 L410 210 L380 280 L330 250 L270 330 L200 300 L110 380 L0 410',
            'M410 210 L450 140 L490 90'
        ]
    }
];

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

        const heroElement = containerRef.current;
        const crackPaths = heroElement ? gsap.utils.toArray(heroElement.querySelectorAll('.kintsugi-path')) : [];

        const cracksTimeline = gsap.timeline({ delay: 0.6 });
        crackPaths.forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0
            });
            const targetOpacity = Number(path.getAttribute('data-base-opacity')) || 0.75;
            cracksTimeline.to(path, {
                strokeDashoffset: 0,
                opacity: targetOpacity,
                duration: 2.2,
                ease: 'power2.out'
            }, index * 0.25);
        });

        const shimmerTimeline = crackPaths.length
            ? gsap.timeline({
                repeat: -1,
                yoyo: true,
                defaults: { ease: 'sine.inOut' },
                delay: 2
            }).to(crackPaths, {
                opacity: (i, target) => {
                    const base = Number(target.getAttribute('data-base-opacity')) || 0.75;
                    return Math.min(1, base + 0.15);
                },
                duration: 3,
                stagger: { each: 1.1, from: 'center' }
            })
            : null;

        return () => {
            tl.kill();
            cracksTimeline.kill();
            if (shimmerTimeline) {
                shimmerTimeline.kill();
            }
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Abstract Zen Circle (Enso) Background */}
            <div
                ref={circleRef}
                className="absolute w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full border border-sumi-ink/20 blur-sm pointer-events-none"
            ></div>

            {/* Kintsugi-inspired golden cracks */}
            {KINTSUGI_CRACKS.map((crack, index) => {
                const gradientId = `kintsugi-gradient-${index}`;
                const glowId = `kintsugi-glow-${index}`;
                return (
                    <svg
                        key={`kintsugi-crack-${index}`}
                        aria-hidden="true"
                        className="absolute pointer-events-none mix-blend-screen drop-shadow-[0_0_20px_rgba(255,224,181,0.35)]"
                        style={{ ...crack.style, opacity: 0.75 }}
                        viewBox={crack.viewBox}
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#9C601E" />
                                <stop offset="28%" stopColor="#CF8F34" />
                                <stop offset="55%" stopColor="#FFD989" />
                                <stop offset="78%" stopColor="#FFF2C5" />
                                <stop offset="100%" stopColor="#FFFFFF" />
                            </linearGradient>
                            <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="5" result="blurred" />
                                <feMerge>
                                    <feMergeNode in="blurred" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {crack.paths.map((path, pathIndex) => (
                            <path
                                key={`${gradientId}-path-${pathIndex}`}
                                d={path}
                                fill="none"
                                stroke={`url(#${gradientId})`}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="kintsugi-path"
                                data-base-opacity={crack.baseOpacity ?? 0.75}
                                filter={`url(#${glowId})`}
                            />
                        ))}
                    </svg>
                );
            })}

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
