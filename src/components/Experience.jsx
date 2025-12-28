import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    const experiences = [
        {
            role: "Data Engineer",
            company: "Infosys Ltd.",
            period: "Dec 2021 – May 2023",
            desc: "Designed Control-M workflows for Hive-to-Teradata transfers (10M+ records). Led cross-functional incident calls (99.5% uptime). Built scalable Azure Databricks pipelines."
        }
    ];

    useEffect(() => {
        const el = sectionRef.current;

        gsap.utils.toArray('.exp-item').forEach((item) => {
            gsap.fromTo(item,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    }
                }
            );
        });
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32 border-l border-sumi-ink/10 ml-6 md:ml-auto">
            <div className="pl-8 md:pl-12">
                <h2 className="text-4xl md:text-5xl font-serif text-sumi-ink mb-12">Experience</h2>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="exp-item relative">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[43px] md:-left-[59px] top-2 w-3 h-3 bg-wood rounded-full ring-4 ring-was-paper"></div>

                            <h3 className="text-2xl font-bold text-sumi-ink">{exp.role}</h3>
                            <p className="text-lg text-wood font-serif italic mb-2">{exp.company}</p>
                            <p className="text-xs uppercase tracking-widest text-matcha mb-4">{exp.period}</p>
                            <p className="text-sumi-ink/80 leading-relaxed max-w-2xl">
                                {exp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
