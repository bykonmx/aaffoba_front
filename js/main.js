/* ===================================
   AAFOBA - JavaScript Principal
   =================================== */

// Esperar a que todos los Web Components estén definidos antes de inicializar la lógica
const componentNames = [
    'aafo-header',
    'aafo-hero',
    'aafo-objective',
    'aafo-clients',
    'aafo-client-card',
    'aafo-capacity',
    'aafo-capacity-card',
    'aafo-products',
    'aafo-product-card',
    'aafo-quote-form',
    'aafo-footer',
    'aafo-privacy',
    'aafo-not-found'
];

// No intentar inicializar si no están todos los componentes en la página
const availableComponents = componentNames.filter(name => document.querySelector(name));
if (availableComponents.length === 0) {
    initializeApp();
} else {
    Promise.all(availableComponents.map(name => customElements.whenDefined(name)))
        .then(() => {
            initializeApp();
        });
}

function initializeApp() {
    // Elementos del DOM
    const header = document.getElementById('header') || document.querySelector('aafo-header')?.shadowRoot?.getElementById('header') || document.querySelector('aafo-header header');
    
    // Si no hay header, intentamos buscar de nuevo en un momento (por si los componentes tardan en renderizar)
    if (!header) {
        console.warn('Header no encontrado al inicio, reintentando...');
        setTimeout(initializeApp, 100);
        return;
    }

    const navToggle = document.getElementById('nav-toggle') || header.querySelector('#nav-toggle');
    const navMenu = document.getElementById('nav-menu') || header.querySelector('#nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const allLinks = document.querySelectorAll('a[href]');

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
        if (!navMenu || !navToggle) return;
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
            if (navMenu && navMenu.classList.contains('active')) {
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
                    if (link.getAttribute('href') === `#${id}` || link.getAttribute('href') === `index.html#${id}`) {
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
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            const url = new URL(link.href);
            const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
            const targetPath = url.pathname.replace(/\/$/, '') || '/index.html';
            
            const isHomePage = currentPath.endsWith('index.html') || currentPath === '/';
            const targetsHomePage = targetPath.endsWith('index.html') || targetPath === '/';
            
            const isSamePage = currentPath === targetPath || (isHomePage && targetsHomePage);
            
            if (isSamePage && url.hash) {
                const targetId = decodeURIComponent(url.hash.substring(1));
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    e.preventDefault();
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
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => animateObserver.observe(el));
    };

    // Re-ejecutar animaciones después de un tiempo para asegurar que los componentes hijos se renderizaron
    initScrollAnimations();
    setTimeout(initScrollAnimations, 500);
    setTimeout(initScrollAnimations, 1500);

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
                // Validar al salir si ya tiene contenido
                if (input.value) {
                    validateField(input);
                }
            });

            // Validar mientras escribe para quitar el error si ya es correcto
            input.addEventListener('input', () => {
                if (input.parentElement.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    };

    const validateField = (input) => {
        const field = input.parentElement;
        let isValid = true;
        let errorMessage = '';

        // Limpiar errores previos
        field.classList.remove('error');
        const existingError = field.querySelector('.quote__error');
        if (existingError) existingError.remove();

        // Validación básica (requerido)
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            errorMessage = 'Este campo es obligatorio';
        } 
        // Validación de correo específica
        else if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(input.value.trim())) {
                isValid = false;
                errorMessage = 'Por favor, ingresa un correo electrónico válido (ejemplo@empresa.com)';
            }
        }
        // Validación de teléfono
        else if (input.type === 'tel' && input.value.trim()) {
            const telRegex = /^[\d\s\-\+\(\)]{7,15}$/;
            if (!telRegex.test(input.value.trim())) {
                isValid = false;
                errorMessage = 'Ingresa un número de teléfono válido (7 a 15 dígitos)';
            }
        }

        if (!isValid) {
            field.classList.add('error');
            const errorElement = document.createElement('span');
            errorElement.className = 'quote__error';
            errorElement.textContent = errorMessage;
            errorElement.setAttribute('aria-live', 'polite');
            field.appendChild(errorElement);
        }

        return isValid;
    };

    const initFormValidation = () => {
        const quoteForm = document.getElementById('quote-form');
        if (!quoteForm) return;

        quoteForm.addEventListener('submit', (e) => {
            const inputs = quoteForm.querySelectorAll('.quote__input');
            let isFormValid = true;

            inputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                e.preventDefault();
                // Hacer scroll al primer error
                const firstError = quoteForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                // Aquí podrías manejar el envío por AJAX si lo deseas
                // Por ahora dejamos que siga el flujo normal del formulario o mostramos éxito simulado
                const websiteField = quoteForm.querySelector('input[name="website"]');
                if (websiteField && websiteField.value) {
                    e.preventDefault(); // Honeypot
                    return;
                }

                // Simulación de éxito si el usuario prefiere SPA behavior
                // e.preventDefault();
                // showSuccessMessage(quoteForm);
            }
        });
    };

    initFormAnimations();
    initFormValidation();

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
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // ===================================
    // Prevenir scroll cuando menú móvil está abierto
    // ===================================
    const preventScroll = (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
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

    // ===================================
    // Sistema de Enrutamiento Básico
    // ===================================
    const mainContent = document.querySelector('main');
    const notFoundComponent = document.createElement('aafo-not-found');
    
    const handleRouting = () => {
        const path = window.location.pathname;
        const search = window.location.search; // Query params (?...)
        let page = path.split('/').pop();
        const hash = window.location.hash;
        
        // Ignorar si solo hay query params en la página principal
        if (page === '' && search && !path.includes('fredo')) return; 

        // Si hay un hash, es una navegación interna, no mostrar 404 (a menos que no estemos en una página válida)
        if (hash && (page === '' || page === 'index.html')) return;

        // Limpiar extensión .html para comparar si el usuario lo pone o no
        const cleanPage = page.replace('.html', '');
        
        // Lista de páginas válidas
        const validPages = ['', 'index', 'index.html', 'aviso-de-privacidad', 'aviso-de-privacidad.html'];
        
        // Determinar si es una página válida
        const isValid = validPages.includes(page) || (page === '' && path.endsWith('/'));

        if (!isValid) {
            // Si la página no es válida, mostrar 404
            console.warn('AAFOBA Routing: Ruta no reconocida:', path);
            if (mainContent) {
                // Guardar el contenido original si no se ha guardado
                if (!window.originalMainContent) {
                    window.originalMainContent = mainContent.innerHTML;
                }
                
                mainContent.innerHTML = '';
                mainContent.appendChild(notFoundComponent);
                
                // Ocultar otros elementos si es necesario (ej. Hero)
                const hero = document.querySelector('aafo-hero');
                if (hero) hero.style.display = 'none';
                
                // Scroll al inicio cuando hay 404
                window.scrollTo(0, 0);
            }
        } else {
            // Si volvemos a una página válida y estábamos en 404
            if (window.originalMainContent && (mainContent.contains(notFoundComponent) || mainContent.innerHTML === '')) {
                mainContent.innerHTML = window.originalMainContent;
                const hero = document.querySelector('aafo-hero');
                if (hero) hero.style.display = '';
            }
        }
    };

    // Ejecutar al cargar
    handleRouting();
    
    // Escuchar cambios en la URL (para SPAs o navegación interna)
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('hashchange', handleRouting);
}
