import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="w-full bg-sumi-ink text-was-paper py-24 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden z-10">
            <div className="absolute inset-0 opacity-10 noise-overlay mix-blend-overlay pointer-events-none" aria-hidden="true"></div>

            <p className="text-matcha uppercase tracking-[0.3em] text-sm mb-8">Ready to Collaborate?</p>

            <h2 className="text-[10vw] md:text-[6vw] font-serif leading-none mb-12 hover:text-wood transition-colors duration-500 cursor-pointer">
                <a href="mailto:mokshsanklecha1@gmail.com">Let's Talk.</a>
            </h2>

            <div className="flex space-x-8 md:space-x-16 text-sm md:text-base tracking-widest uppercase font-light opacity-70">
                <a href="https://linkedin.com/in/mokshesh-jain" target="_blank" rel="noreferrer" className="hover:text-wood hover:opacity-100 transition-all">LinkedIn</a>
                <a href="https://github.com/Mokshesh19" target="_blank" rel="noreferrer" className="hover:text-wood hover:opacity-100 transition-all">GitHub</a>
                <a href="mailto:mokshsanklecha1@gmail.com" className="hover:text-wood hover:opacity-100 transition-all">Email</a>
            </div>

            <div className="mt-24 text-[10px] uppercase tracking-widest opacity-30">
                © 2024 Mokshesh Jain. Crafted with Code & Zen.
            </div>
        </footer>
    );
};

export default Contact;
