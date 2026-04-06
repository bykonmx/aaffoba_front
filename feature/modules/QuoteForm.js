/**
 * Quote Form Section Component for AAFOBA
 */
class AafoQuoteForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section quote" id="cotizacion" aria-labelledby="quote-title">
                <div class="container">
                    <div class="quote__wrapper">
                        <header class="quote__header fade-in">
                            <h2 class="quote__title" id="quote-title">Cotización</h2>
                            <p class="quote__subtitle">¡Queremos trabajar contigo!</p>
                        </header>

                        <form class="quote__form fade-in delay-1" id="quote-form" action="/api/quote" method="POST" data-form="quote">
                            <div class="quote__row">
                                <div class="quote__field">
                                    <label for="producto" class="quote__label">Producto de interés <span class="quote__required" aria-hidden="true">*</span></label>
                                    <input type="text" id="producto" name="producto" class="quote__input" placeholder="¿Qué producto necesitas?" required autocomplete="off">
                                </div>

                                <div class="quote__field">
                                    <label for="industria" class="quote__label">Industria <span class="quote__required" aria-hidden="true">*</span></label>
                                    <input type="text" id="industria" name="industria" class="quote__input" placeholder="Ej. Nutrición animal, Jabonera…" required autocomplete="organization">
                                </div>
                            </div>

                            <div class="quote__row">
                                <div class="quote__field">
                                    <label for="estado" class="quote__label">Estado <span class="quote__required" aria-hidden="true">*</span></label>
                                    <select id="estado" name="estado" class="quote__input quote__select" required>
                                        <option value="" disabled selected>Selecciona un estado</option>
                                        <option value="AGU">Aguascalientes</option>
                                        <option value="BCN">Baja California</option>
                                        <option value="BCS">Baja California Sur</option>
                                        <option value="CAM">Campeche</option>
                                        <option value="CHP">Chiapas</option>
                                        <option value="CHH">Chihuahua</option>
                                        <option value="CMX">Ciudad de México</option>
                                        <option value="COA">Coahuila</option>
                                        <option value="COL">Colima</option>
                                        <option value="DUR">Durango</option>
                                        <option value="GUA">Guanajuato</option>
                                        <option value="GRO">Guerrero</option>
                                        <option value="HID">Hidalgo</option>
                                        <option value="JAL">Jalisco</option>
                                        <option value="MEX">Estado de México</option>
                                        <option value="MIC">Michoacán</option>
                                        <option value="MOR">Morelos</option>
                                        <option value="NAY">Nayarit</option>
                                        <option value="NLE">Nuevo León</option>
                                        <option value="OAX">Oaxaca</option>
                                        <option value="PUE">Puebla</option>
                                        <option value="QUE">Querétaro</option>
                                        <option value="ROO">Quintana Roo</option>
                                        <option value="SLP">San Luis Potosí</option>
                                        <option value="SIN">Sinaloa</option>
                                        <option value="SON">Sonora</option>
                                        <option value="TAB">Tabasco</option>
                                        <option value="TAM">Tamaulipas</option>
                                        <option value="TLA">Tlaxcala</option>
                                        <option value="VER">Veracruz</option>
                                        <option value="YUC">Yucatán</option>
                                        <option value="ZAC">Zacatecas</option>
                                    </select>
                                </div>

                                <div class="quote__field">
                                    <label for="zona" class="quote__label">Zona de entrega <span class="quote__required" aria-hidden="true">*</span></label>
                                    <input type="text" id="zona" name="zona" class="quote__input" placeholder="Ej. Ciudad de México, Monterrey, Guadalajara..." required>
                                </div>
                            </div>

                            <div class="quote__field">
                                <label for="nombre" class="quote__label">Nombre completo <span class="quote__required" aria-hidden="true">*</span></label>
                                <input type="text" id="nombre" name="nombre" class="quote__input" placeholder="Tu nombre completo" required autocomplete="name">
                            </div>

                            <div class="quote__row">
                                <div class="quote__field">
                                    <label for="correo" class="quote__label">Correo electrónico <span class="quote__required" aria-hidden="true">*</span></label>
                                    <input type="email" id="correo" name="correo" class="quote__input" placeholder="correo@empresa.com" required autocomplete="email">
                                </div>

                                <div class="quote__field">
                                    <label for="telefono" class="quote__label">Teléfono <span class="quote__required" aria-hidden="true">*</span></label>
                                    <input type="tel" id="telefono" name="telefono" class="quote__input" placeholder="55 1234 5678" required autocomplete="tel" pattern="[\\d\\s\\-\\+\\(\\)]{7,15}">
                                </div>
                            </div>

                            <!-- Honeypot field for spam protection -->
                            <div class="quote__field--honeypot" aria-hidden="true">
                                <label>
                                    <input type="text" name="website" tabindex="-1" autocomplete="off">
                                </label>
                            </div>

                            <div class="quote__actions">
                                <p class="quote__note"><span class="quote__required" aria-hidden="true">*</span> Campos obligatorios</p>
                                <button type="submit" class="btn btn--primary btn--large">
                                    Solicitar cotización
                                </button>
                            </div>
                        </form>

                        <aafo-contact-cards></aafo-contact-cards>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-quote-form', AafoQuoteForm);
