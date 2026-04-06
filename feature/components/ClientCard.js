/**
 * Client Card Component for AAFOBA
 */
class AafoClientCard extends HTMLElement {
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
        const image = this.getAttribute('image') || '';
        const delay = this.getAttribute('delay') || '1';
        const items = this.getAttribute('items') ? this.getAttribute('items').split('|') : [];
        
        // Extraer el icono del HTML interno si existe
        const iconContainer = this.querySelector('[slot="icon"]');
        const icon = iconContainer ? iconContainer.innerHTML : '';

        this.innerHTML = `
            <article class="clients__card fade-in delay-${delay} shine-effect">
                <div class="clients__content">
                    <div class="clients__icon" aria-hidden="true">
                        ${icon}
                    </div>
                    <h3 class="clients__card-title">${title}</h3>
                    <ul class="clients__list">
                        ${items.map(item => `
                            <li>
                                <span class="clients__bullet" aria-hidden="true"></span>
                                ${item}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="clients__image">
                    <img src="${image}"
                         alt="${title}"
                         loading="lazy"
                         width="329"
                         height="256">
                </div>
            </article>
        `;
    }
}

customElements.define('aafo-client-card', AafoClientCard);
