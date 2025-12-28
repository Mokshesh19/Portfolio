import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const containerRef = useRef(null);

    const skillCategories = [
        {
            title: "AI & ML",
            skills: ["LLaMA & GPT-J", "QLoRA & PEFT", "RAG Pipelines", "LangChain", "PyTorch", "TensorFlow", "Hugging Face"]
        },
        {
            title: "Engineering",
            skills: ["FastAPI & REST", "Docker & K8s", "Spark & Hadoop", "iOS CoreML", "CI/CD Pipelines", "Azure & AWS"]
        },
        {
            title: "Languages",
            skills: ["Python", "C++", "SQL", "Swift", "Java", "Bash"]
        }
    ];

    useEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(el.querySelectorAll('.skill-card'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section id="skills" ref={containerRef} className="w-full max-w-6xl mx-auto px-6 py-32 bg-was-paper relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-sumi-ink mb-16 text-center">Technical Mastery</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((cat, index) => (
                    <div key={index} className="skill-card bg-was-paper border border-sumi-ink/10 p-8 hover:border-wood/50 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-sumi-ink mb-6 pb-2 border-b border-wood/20 inline-block">{cat.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {cat.skills.map((skill, i) => (
                                <span key={i} className="text-sm text-sumi-ink/70 hover:text-wood cursor-default transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
