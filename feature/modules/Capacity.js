/**
 * Capacity Section Component for AAFOBA
 */
class AafoCapacity extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section capacity" id="capacidad" aria-labelledby="capacity-title">
                <div class="container">
                    <header class="capacity__header">
                        <p class="capacity__pretitle fade-in">Lo que nos diferencia</p>
                        <h2 class="capacity__title fade-in" id="capacity-title">
                            Calidad y eficiencia en
                            <em>cada operación</em>
                        </h2>
                    </header>

                    <div class="capacity__grid">
                        <aafo-capacity-card title="Estación de aseguramiento de calidad" delay="1">
                            <div slot="icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="6" y="20" width="36" height="22" rx="2" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                                    <path d="M6 20L24 6L42 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="18" y="30" width="12" height="12" rx="1" stroke="currentColor" stroke-width="2.5"/>
                                </svg>
                            </div>
                            Contamos con una unidad de verificación y control en el Estado de México, diseñada para asegurar que nuestros insumos cumplan con los más altos estándares de calidad.
                        </aafo-capacity-card>

                        <aafo-capacity-card title="Volúmenes industriales" delay="2">
                            <div slot="icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 36L16 26L24 34L42 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M32 16H42V26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            Contamos con capacidad para abastecer grandes volúmenes de manera continua y programada.
                        </aafo-capacity-card>

                        <aafo-capacity-card title="Logística y entrega" delay="3">
                            <div slot="icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="16" width="28" height="18" rx="2" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                                    <path d="M32 22h6l6 6v6h-12V22z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                                    <circle cx="12" cy="36" r="4" stroke="currentColor" stroke-width="2.5"/>
                                    <circle cx="36" cy="36" r="4" stroke="currentColor" stroke-width="2.5"/>
                                </svg>
                            </div>
                            Coordinamos la entrega en tiempo y forma según las necesidades de cada cliente.
                        </aafo-capacity-card>

                        <aafo-capacity-card title="Cobertura nacional" delay="4">
                            <div slot="icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4C24 4 40 18 40 28C40 36.837 32.837 44 24 44C15.163 44 8 36.837 8 28C8 18 24 4 24 4Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="24" cy="28" r="5" stroke="currentColor" stroke-width="2.5"/>
                                </svg>
                            </div>
                            Distribuimos en toda la República Mexicana, con enfoque en corredores industriales.
                        </aafo-capacity-card>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-capacity', AafoCapacity);
