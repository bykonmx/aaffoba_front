/**
 * Products Section Component for AAFOBA
 */
class AafoProducts extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section products" id="productos" aria-labelledby="products-title">
                <div class="container">
                    <header class="products__header">
                        <h2 class="section__title section__title--left fade-in" id="products-title">
                            Productos y <em>subproductos</em>
                        </h2>
                        <p class="products__hint fade-in delay-1" aria-hidden="true">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            Toca cada producto para ver sus características
                        </p>
                    </header>

                    <div class="products__grid">
                        <aafo-product-card 
                            title="Sebo de Res" 
                            image="Images/sebo_res.png" 
                            delay="1" 
                            features="Grasa animal procesada|Alta energía|Alimentos balanceados">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="Sebo de Res Segunda" 
                            image="Images/sebo_res_segunda.png" 
                            delay="2" 
                            features="Grasa animal funcional|Opción eficiente|Nutrición animal">
                        </aafo-product-card>
                        
                        <aafo-product-card 
                            title="Estearina de Palma RBD" 
                            image="Images/estearina-palma.png" 
                            delay="1" 
                            features="Subproducto cristalizado|Textura y estabilidad|Uso cosmético y alimenticio">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="Manteca de Cerdo" 
                            image="Images/manteca-cerdo.png" 
                            delay="2" 
                            features="Grasa animal fundida|Energía concentrada|Mejora palatabilidad">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="Aceite de Pollo" 
                            image="Images/aceite-pollo.png" 
                            delay="3" 
                            features="Extracto de vísceras|Proceso de prensado|Nutrición aviar de alta calidad">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="Grasa Amarilla" 
                            image="Images/grasa_amarilla.png" 
                            delay="3" 
                            features="Grasa vegetal energética|Alto contenido graso|Concentrados animales">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="UCO" 
                            image="Images/uco.png" 
                            delay="1" 
                            features="Aceite reciclado|Recurso sostenible|Formulación alimenticia">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="Aceite Acidulado" 
                            image="Images/Aceite_acidulado.png" 
                            delay="2" 
                            features="Aceite vegetal modificado|Mayor estabilidad|Uso industrial">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="Harina de Res" 
                            image="Images/harina_res.png" 
                            delay="3" 
                            features="Proteína animal|Alta digestibilidad|Nutrición animal">
                        </aafo-product-card>

                        <aafo-product-card 
                            title="Harina de Pollo 55%" 
                            image="Images/harina_pollo.png" 
                            delay="4" 
                            features="Proteína aviar|Alto contenido proteico|Formulación balanceada">
                        </aafo-product-card>
                    </div>

                    <div class="products__cta fade-in delay-2">
                        <a href="assets/documents/Fichas_tecnicas_AAFOBA.pdf" class="btn-download" download="Fichas_tecnicas_AAFOBA.pdf">
                            Descargar Ficha Técnica
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-products', AafoProducts);
