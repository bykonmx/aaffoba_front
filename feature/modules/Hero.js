/**
 * Hero Section Component for AAFOBA
 */
class AafoHero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="hero" id="inicio" aria-labelledby="hero-title">
                <div class="hero__background" data-parallax>
                    <div class="hero__overlay"></div>
                </div>

                <!-- Decorative Floating Shapes -->
                <div class="floating-shapes" aria-hidden="true">
                    <div class="floating-shape floating-shape--1"></div>
                    <div class="floating-shape floating-shape--2"></div>
                    <div class="floating-shape floating-shape--3"></div>
                </div>

                <div class="hero__content">
                    <h1 class="hero__title" id="hero-title">
                        Harinas y grasas para
                        <br><span class="hero__title--highlight">nutrición animal</span> e industria
                    </h1>

                    <div class="hero__sectors" role="list" aria-label="Sectores que atendemos">
                        <span class="hero__sector" role="listitem">Porcicultura</span>
                        <span class="hero__sector-dot" aria-hidden="true"></span>
                        <span class="hero__sector" role="listitem">Ganadería</span>
                        <span class="hero__sector-dot" aria-hidden="true"></span>
                        <span class="hero__sector" role="listitem">Mascotas</span>
                        <span class="hero__sector-dot" aria-hidden="true"></span>
                        <span class="hero__sector" role="listitem">Sector químico-jabonero</span>
                    </div>

                    <div class="hero__buttons">
                        <a href="#cotizacion" class="btn btn--primary">Solicitar cotización</a>
                    </div>
                </div>

                <!-- Scroll Indicator -->
                <div class="hero__scroll" aria-hidden="true">
                    <span class="hero__scroll-text">Scroll</span>
                    <div class="hero__scroll-line"></div>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-hero', AafoHero);
