/**
 * Capacity Card Component for AAFOBA
 */
class AafoCapacityCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Asegurar que el componente no cree un nivel adicional en el DOM
        // que rompa la cuadrícula CSS (grid)
        this.style.display = 'contents';
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '';
        const delay = this.getAttribute('delay') || '1';
        
        // Extraer el icono y el texto del contenido original
        const iconContainer = this.querySelector('[slot="icon"]');
        const icon = iconContainer ? iconContainer.innerHTML : '';
        
        // El texto es todo lo que no esté en el slot de icono
        const text = Array.from(this.childNodes)
            .filter(node => node !== iconContainer)
            .map(node => node.textContent || node.outerHTML || '')
            .join('')
            .trim();

        this.innerHTML = `
            <article class="capacity__card scale-in delay-${delay}">
                <div class="capacity__icon" aria-hidden="true">
                    ${icon}
                </div>
                <h3 class="capacity__card-title">${title}</h3>
                <p class="capacity__card-text">
                    ${text}
                </p>
            </article>
        `;
    }
}

customElements.define('aafo-capacity-card', AafoCapacityCard);
