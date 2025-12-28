import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const projects = [
        {
            title: "LLM Document Q&A",
            tech: "React, FastAPI, LangChain, FAISS",
            desc: "Full-stack PDF Q&A platform. Sub-1.5s latency on 200-page corpus. RAG-based retrieval.",
            color: "bg-[#e8e6df]"
        },
        {
            title: "Local LLM on Mobile",
            tech: "iOS, Swift, CoreML, 1.5B GPT-2",
            desc: "Offline text generation on device. Int8 quantization & weight clustering for 60% size reduction.",
            color: "bg-[#e0dcd5]"
        },
        {
            title: "Optimization Research",
            tech: "QLoRA, PEFT, PyTorch",
            desc: "Custom tokenization and decoding strategies to control output diversity in LLMs.",
            color: "bg-[#d8d3cb]"
        }
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        if (!section || !trigger) {
            return undefined;
        }

        const getTotalScrollDistance = () => {
            const scrollWidth = section.scrollWidth;
            const viewportWidth = window.innerWidth || scrollWidth;
            return Math.max(scrollWidth - viewportWidth, 0);
        };

        const animation = gsap.to(section, {
            x: () => -getTotalScrollDistance(),
            ease: "none",
            scrollTrigger: {
                trigger,
                start: "top top",
                end: () => `+=${getTotalScrollDistance() || window.innerHeight}`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });

        const resizeHandler = () => ScrollTrigger.refresh();
        window.addEventListener('resize', resizeHandler);

        return () => {
            animation.kill();
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <div id="projects" ref={triggerRef} className="h-screen w-full overflow-hidden relative z-20 bg-was-paper">
            <div
                ref={sectionRef}
                className="flex w-[300vw] h-full"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`w-[100vw] h-full flex flex-col justify-center items-center p-12 ${project.color} border-r border-sumi-ink/5 relative`}
                    >
                        <div className="max-w-xl text-center">
                            <span className="text-8xl absolute top-12 left-12 font-serif text-sumi-ink/5 select-none">{`0${index + 1}`}</span>
                            <h3 className="text-5xl md:text-7xl font-serif text-sumi-ink mb-6">{project.title}</h3>
                            <p className="text-matcha uppercase tracking-widest text-sm mb-8">{project.tech}</p>
                            <p className="text-xl text-sumi-ink/80 leading-relaxed font-light">
                                {project.desc}
                            </p>
                            <button className="mt-12 px-8 py-3 border border-sumi-ink/20 hover:bg-sumi-ink hover:text-was-paper transition-all duration-300 uppercase text-xs tracking-[0.2em]">
                                View Case Study
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
