/**
 * Product Card Component for AAFOBA
 */
class AafoProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.style.display = 'contents';
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '';
        const image = this.getAttribute('image') || '';
        const delay = this.getAttribute('delay') || '1';
        const features = this.getAttribute('features') ? this.getAttribute('features').split('|') : [];

        this.innerHTML = `
            <article class="products__card fade-in delay-${delay}" role="region" tabindex="0" aria-label="${title} - toca para ver detalles">
                <img src="${image}" alt="${title}" loading="lazy" width="281" height="221" class="products__img">
                <div class="products__overlay">
                    <div class="products__overlay-content">
                        <h3 class="products__title">${title}</h3>
                        <ul class="products__list">
                            ${features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="products__label">
                    <h3 class="products__label-text">${title}</h3>
                    <span class="products__label-icon" aria-hidden="true">+</span>
                </div>
            </article>
        `;
    }
}

customElements.define('aafo-product-card', AafoProductCard);
