import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const initAnimations = () => {
    // 1. Smooth Scroll for Anchor Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    // Mobile menu cleanup (if link is inside mobile menu)
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }

                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: {
                            y: target,
                            offsetY: 80 // Header offset
                        },
                        ease: "power4.inOut"
                    });
                }
            }
        });
    });

    // 2. Section Reveal Animations
    const fadeUpElements = document.querySelectorAll('[data-reveal="fade-up"]');
    fadeUpElements.forEach(el => {
        gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // 3. Staggered Grid Reveal (for Projects and Skills)
    const staggerContainers = document.querySelectorAll('[data-reveal="stagger"]');
    staggerContainers.forEach(container => {
        const children = Array.from(container.children);
        // Ensure they are visible before animating if ScrollTrigger fails
        gsap.fromTo(children, 
            { y: 30, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.15, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // 4. Hero Specific Entrance
    const heroContent = document.querySelector('#hero-content');
    if (heroContent) {
        gsap.from(heroContent.children, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            delay: 0.5
        });
    }

    const heroImage = document.querySelector('#hero-image');
    if (heroImage) {
        gsap.from(heroImage, {
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.2
        });
    }
};
