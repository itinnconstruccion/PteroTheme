import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    :root{
        --accent-50: #fff1f2;
        --accent-100: #ffe4e6;
        --accent-200: #fecdd3;
        --accent-300: #fda4af;
        --accent-400: #fb7185;
        --accent-500: #ef4444;
        --accent-600: #dc2626;
        --accent-700: #b91c1c;
        --accent-800: #991b1b;
        --accent-900: #7f1d1d;
        --glass-bg: rgba(255,255,255,0.04);
        --glass-border: rgba(255,255,255,0.06);
        --glass-accent: rgba(239,68,68,0.08);
    }

    body {
        ${tw`font-sans bg-neutral-900 text-neutral-100`};
        letter-spacing: 0.015em;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        transition: background-color 250ms ease, color 250ms ease;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
    }

    p {
        ${tw`text-neutral-200 leading-snug font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    /* Glassy buttons and small UI helpers */
    .btn-glass {
        background: linear-gradient(180deg, var(--glass-bg), rgba(255,255,255,0.02));
        border: 1px solid var(--glass-border);
        color: var(--accent-100);
        padding: 0.5rem 0.9rem;
        border-radius: 0.65rem;
        backdrop-filter: blur(6px) saturate(120%);
        -webkit-backdrop-filter: blur(6px) saturate(120%);
        box-shadow: 0 6px 18px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02);
        transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        cursor: pointer;
        font-weight: 600;
    }

    .btn-glass:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
        border-color: rgba(239,68,68,0.35);
        background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    }

    .btn-glass.primary {
        background: linear-gradient(180deg, rgba(239,68,68,0.12), rgba(239,68,68,0.06));
        color: white;
        border: 1px solid rgba(239,68,68,0.18);
        box-shadow: 0 8px 26px rgba(239,68,68,0.06), inset 0 1px 0 rgba(255,255,255,0.03);
    }

    .btn-glass.primary:hover{
        transform: translateY(-3px) scale(1.01);
        box-shadow: 0 18px 50px rgba(239,68,68,0.12);
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-border-radius: 9px 4px;
        -webkit-box-shadow: inset 0 0 0 1px hsl(211, 10%, 53%), inset 0 0 0 4px hsl(209deg 18% 30%);
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    /* Subtle micro animations */
    @keyframes subtle-fade-up {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .fade-up {
        animation: subtle-fade-up 350ms cubic-bezier(.2,.8,.2,1) both;
    }

    /* Clean input / card defaults */
    .card {
        background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
        border: 1px solid rgba(255,255,255,0.03);
        border-radius: 0.75rem;
        padding: 1rem;
        box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    }
`;
