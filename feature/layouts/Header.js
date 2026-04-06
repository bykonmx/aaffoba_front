/**
 * Header Component for AAFOBA
 */
class AafoHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <header class="header" id="header">
                <nav class="nav container" aria-label="Navegación principal">
                    <a href="#inicio" class="nav__logo" aria-label="AAFOBA - Ir al inicio">
                        <img src="Images/logo.png" alt="AAFOBA Logo" class="nav__logo-img" width="348" height="64">
                    </a>

                    <div class="nav__menu" id="nav-menu" role="navigation">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#inicio" class="nav__link active">Inicio</a>
                            </li>
                            <li class="nav__item">
                                <a href="#nosotros" class="nav__link">Nosotros</a>
                            </li>
                            <li class="nav__item">
                                <a href="#capacidad" class="nav__link">Capacidad</a>
                            </li>
                            <li class="nav__item">
                                <a href="#productos" class="nav__link">Productos</a>
                            </li>
                            <li class="nav__item">
                                <a href="#cotizacion" class="nav__link nav__link--cta">Cotización</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <button class="nav__toggle" id="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
        `;
    }
}

customElements.define('aafo-header', AafoHeader);
