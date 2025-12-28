import React from 'react';

const TextureOverlay = () => {
    return (
        <>
            <svg className="fixed inset-0 z-0 pointer-events-none opacity-[0.4] w-full h-full mix-blend-multiply">
                <filter id="linen-h">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8 0.02" numOctaves="2" stitchTiles="stitch" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
                </filter>
                <filter id="linen-v">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.8" numOctaves="2" stitchTiles="stitch" result="noise" />
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
                </filter>

                <rect width="100%" height="100%" filter="url(#linen-h)" opacity="0.8" />
                <rect width="100%" height="100%" filter="url(#linen-v)" opacity="0.8" />
            </svg>

            {/* Vignette for depth */}
            <div className="fixed inset-0 z-50 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(44,44,44,0.05)_100%)]"></div>
        </>
    );
};

export default TextureOverlay;
