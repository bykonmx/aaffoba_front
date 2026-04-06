/**
 * Clients Section Component for AAFOBA
 */
class AafoClients extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section clients" aria-labelledby="clients-title">
                <div class="container">
                    <p class="clients__pretitle fade-in">Nosotros</p>
                    <h2 class="section__title section__title--left fade-in" id="clients-title">
                        Para quién <em>trabajamos</em>
                    </h2>

                    <div class="clients__grid">
                        <aafo-client-card 
                            title="Industria jabonera" 
                            image="Images/jabonera.png" 
                            delay="1" 
                            items="Grasas grado premium para la fabricación de jabones y detergentes.|Grasas de acuerdo a los requerimientos de formulación.">
                            <div slot="icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8h24v6l4 8v10H8V22l4-8V8z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                                    <path d="M8 32h32" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M18 22c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M24 22v10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </aafo-client-card>

                        <aafo-client-card 
                            title="Nutrición animal y alimento balanceado" 
                            image="Images/nut_animal.png" 
                            delay="2" 
                            items="Granjas e Industria de alimentos para mascotas">
                            <div slot="icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 6C16 6 10 14 10 22c0 10 14 22 14 22s14-12 14-22C38 14 32 6 24 6z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                                    <path d="M18 24c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" stroke="currentColor" stroke-width="2.5"/>
                                </svg>
                            </div>
                        </aafo-client-card>

                        <aafo-client-card 
                            title="Servicios de análisis" 
                            image="Images/Ser_analisis.png" 
                            delay="3" 
                            items="Ácidos Grasos Libres|Índice de Yodo|Humedad e impurezas">
                            <div slot="icon">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6h12v20l6 14H12L18 26V6z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                                    <path d="M14 34h20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M18 14h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                                    <path d="M18 20h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </aafo-client-card>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-clients', AafoClients);
