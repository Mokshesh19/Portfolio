import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;

        gsap.fromTo(el.querySelectorAll('.fade-in'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section id="about" ref={scrollRef} className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif text-sumi-ink mb-6">The Path</h2>
                    <div className="w-12 h-1 bg-wood mb-6"></div>
                </div>

                <div className="md:col-span-8 space-y-8 font-light text-lg leading-relaxed text-sumi-ink/90 fade-in">
                    <p>
                        I am an <strong className="font-bold text-sumi-ink">AI Engineer</strong> specializing in LLM optimization (QLoRA, quantization) and on-device inference. My work focuses on delivering lightning-fast, resource-efficient models that bridge the gap between research and production.
                    </p>
                    <p>
                        With a background in deploying edge-ready language models and scaling APIs using <span className="italic text-wood">PyTorch, FastAPI, and Core ML</span>, I strive to build systems that are not just functional but elegant.
                    </p>

                    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-matcha mb-2">Education</h3>
                            <ul className="space-y-4">
                                <li>
                                    <h4 className="font-bold">M.Sc. Advanced Computer Science</h4>
                                    <p className="text-sm opacity-70">The University of Sheffield, UK</p>
                                </li>
                                <li>
                                    <h4 className="font-bold">B.Tech Computers & Comm.</h4>
                                    <p className="text-sm opacity-70">Manipal Institute of Technology, India</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-matcha mb-2">Technical Mastery</h3>
                            <p className="text-sm opacity-80 leading-7">
                                LLMs (LLaMA, GPT), QLoRA, RAG Pipelines, PyTorch, TensorFlow, Docker, Kubernetes, Spark.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
