/**
 * Footer Component for AAFOBA
 */
class AafoFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="footer" role="contentinfo">
                <div class="footer__main container">

                    <!-- Columna 1: Brand -->
                    <div class="footer__brand">
                        <img src="Images/logo.png" alt="AAFOBA Logo" class="footer__logo" width="348" height="64">
                        <p class="footer__tagline">Calidad y eficiencia en<br>cada operación.</p>
                    </div>

                    <!-- Columna 2: Mercado -->
                    <div class="footer__column">
                        <h4 class="footer__heading">Mercado</h4>
                        <ul class="footer__nav">
                            <li><a href="#nosotros" class="footer__nav-link">Nosotros</a></li>
                            <li><a href="#nosotros" class="footer__nav-link">Para quién trabajamos</a></li>
                            <li><a href="#capacidad" class="footer__nav-link">Capacidad operativa</a></li>
                            <li><a href="#productos" class="footer__nav-link">Productos y subproductos</a></li>
                            <li><a href="#cotizacion" class="footer__nav-link">Cotización</a></li>
                            <li><a href="/aviso-de-privacidad" class="footer__nav-link">Aviso de privacidad</a></li>
                        </ul>
                    </div>

                    <!-- Columna 3: Info de contacto -->
                    <div class="footer__column footer__column--contact">
                        <h4 class="footer__heading">Info</h4>
                        <a href="mailto:administrativo@aafoba.com" class="footer__contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="M2 7l10 7 10-7"/>
                            </svg>
                            administrativo@aafoba.com
                        </a>
                        <a href="tel:+525512345678" class="footer__contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                            </svg>
                            55 1234 5678
                        </a>
                    </div>

                </div>

                <div class="footer__bottom">
                    <div class="container">
                        <p class="footer__copyright">
                            &copy; <span id="current-year"></span> AAFOBA. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        `;
        
        // Actualizar el año si el elemento existe (para el caso de re-renderizado si fuera necesario)
        const yearEl = this.querySelector('#current-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
}

customElements.define('aafo-footer', AafoFooter);
