/* ===================================
   AAFOBA - JavaScript Principal
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // ===================================
    // Header scroll effect
    // ===================================
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar estado inicial

    // ===================================
    // Mobile menu toggle
    // ===================================
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // ===================================
    // Active link on scroll (Intersection Observer)
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // ===================================
    // Smooth scroll para navegación
    // ===================================
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // Scroll-triggered animations (fade-in, scale-in, etc.)
    // ===================================
    const initScrollAnimations = () => {
        const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');

        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animateObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => animateObserver.observe(el));
    };

    initScrollAnimations();

    // ===================================
    // Parallax effect on hero background
    // ===================================
    const heroBackground = document.querySelector('[data-parallax]');

    const handleParallax = () => {
        if (heroBackground && window.scrollY < window.innerHeight) {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.4;
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });

    // ===================================
    // Smooth counter animation
    // ===================================
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-counter]');

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-counter'));
                    const duration = 2000;
                    const start = 0;
                    const startTime = performance.now();

                    const updateCounter = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const current = Math.floor(start + (target - start) * easeOutQuart);

                        counter.textContent = current.toLocaleString();

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target.toLocaleString();
                        }
                    };

                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    };

    animateCounters();

    // ===================================
    // Add mouse move effect on cards
    // ===================================
    const initCardTiltEffect = () => {
        const cards = document.querySelectorAll('.capacity__card, .features__card');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    };

    initCardTiltEffect();

    // ===================================
    // Form input animation
    // ===================================
    const initFormAnimations = () => {
        const inputs = document.querySelectorAll('.quote__input');

        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    };

    initFormAnimations();

    // ===================================
    // Animación de entrada (fade in on scroll) - Legacy
    // ===================================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    animateObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => animateObserver.observe(el));
    };

    animateOnScroll();

    // ===================================
    // Cerrar menú móvil con tecla Escape
    // ===================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // ===================================
    // Prevenir scroll cuando menú móvil está abierto
    // ===================================
    const preventScroll = (e) => {
        if (navMenu.classList.contains('active')) {
            e.preventDefault();
        }
    };

    // ===================================
    // Product cards: tap-to-reveal en mobile
    // ===================================
    const initProductCards = () => {
        const productCards = document.querySelectorAll('.products__card');

        productCards.forEach(card => {
            // Teclado: Enter / Space activan la card
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(card);
                }
            });

            // Touch: toggle al tocar
            card.addEventListener('click', (e) => {
                // Si el click viene del botón "Cotizar", dejarlo pasar sin toggle
                if (e.target.closest('.products__cta')) return;

                // Solo activar toggle en touch / mobile (hover se encarga en desktop)
                const isTouch = window.matchMedia('(hover: none)').matches;
                if (isTouch) {
                    e.preventDefault();
                    toggleCard(card);
                }
            });
        });

        const toggleCard = (card) => {
            const isOpen = card.classList.contains('is-open');
            // Cerrar todas las demás
            productCards.forEach(c => c.classList.remove('is-open'));
            // Abrir/cerrar la actual
            if (!isOpen) card.classList.add('is-open');
        };

        // Cerrar al tocar fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.products__card')) {
                productCards.forEach(c => c.classList.remove('is-open'));
            }
        });
    };

    initProductCards();

    // ===================================
    // Año dinámico en el footer
    // ===================================
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Log para confirmar carga
    console.log('AAFOBA - Sitio web cargado correctamente');
});
