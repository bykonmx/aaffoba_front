/**
 * Objective Section Component for AAFOBA
 */
class AafoObjective extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section objective" id="nosotros" aria-labelledby="objective-title">
                <div class="container">
                    <h2 class="objective__title fade-in" id="objective-title">¿Quiénes Somos?</h2>
                    <div class="objective__line fade-in delay-1" aria-hidden="true"></div>
                    <p class="objective__text fade-in delay-2">
                        En Aceites, Alimentos y Forrajes del Bajío nos dedicamos a la comercialización de harinas y grasas de alta calidad. Somos el eslabón clave en la cadena de suministro de materias primas para:
                        <br><br>
                        Nutrición Animal: Porcicultura, ganadería y mascotas.
                        <br>
                        Industria: Ramos químicos y jaboneros.
                    </p>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-objective', AafoObjective);
