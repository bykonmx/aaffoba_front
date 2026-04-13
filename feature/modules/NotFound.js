/**
 * NotFound Section Component for AAFOBA
 */
class AafoNotFound extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section not-found" id="error-404" aria-labelledby="not-found-title">
                <div class="container">
                    <div class="not-found__content">
                        <h1 class="not-found__code">404</h1>
                        <h2 class="not-found__title" id="not-found-title">Página no encontrada</h2>
                        <div class="not-found__line" aria-hidden="true"></div>
                        <p class="not-found__text">
                            Lo sentimos, la página que estás buscando no existe o ha sido movida. 
                            Verifica la dirección o regresa al inicio para continuar navegando.
                        </p>
                        <div class="not-found__actions">
                            <a href="index.html" class="btn btn--primary">Volver al inicio</a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-not-found', AafoNotFound);
