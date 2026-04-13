/**
 * Privacy notice Section Component for AAFOBA
 */
class PrivacyNotice extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section privacy" id="privacidad" aria-labelledby="privacy-title">
                <div class="container">
                    <h2 class="section__title fade-in" id="privacy-title">Aviso de Privacidad</h2>
                    <div class="section__line fade-in delay-1" aria-hidden="true"></div>
                    
                    <div class="privacy__content fade-in delay-2">
                        <p class="privacy__intro">
                            De conformidad con lo previsto en la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong>. 
                            <strong>ALIMENTOS, ACEITES Y FORRAJES DEL BAJÍO</strong> con domicilio en calle Fersen 132, Lomas del Refugio CP 37358, León, Guanajuato, México; 
                            es responsable de recabar sus datos personales, del uso y protección, información que será utilizada para proveerle productos o servicios, 
                            identificarlo en cualquier tipo de relación jurídica o de negocios con nosotros, además de informarle sobre cambios en los mismos y evaluar 
                            la calidad del servicio que le brindamos, asimismo para preservar la seguridad de las personas e instalaciones de la empresa, las cuales 
                            forman parte de las medidas de seguridad. Lo anterior aplica, si usted es persona física.
                        </p>

                        <p>
                            Para las finalidades antes mencionadas, manifestando que no se le pedirán datos personales catalogados como sensibles, salvo que resulten 
                            estrictamente necesarios según la Ley antes referida.
                        </p>

                        <h3 class="privacy__subtitle">Categorías de Datos Recabados</h3>
                        <p>
                            Requerimos obtener los siguientes datos en atención a la relación establecida con el titular, los datos personales que se recaben podrán 
                            ser aquellos conforme a las siguientes categorías:
                        </p>
                        <ul class="privacy__list">
                            <li><strong>a) Si usted es Cliente o Prospecto de Cliente:</strong> Datos de identificación, domicilio, datos de contacto, fiscales, bancarios, demográficos y de representación legal.</li>
                            <li><strong>b) Si usted es Proveedor o Prestador de servicios:</strong> Datos de identificación, domicilio, datos de contacto, fiscales, bancarios, de representación legal y datos de recomendación de terceros.</li>
                        </ul>

                        <p>
                            Considere que, no todos los Datos antes señalados serán recabados en todos los casos, ya que solo se solicitarán aquellos estrictamente 
                            necesarios según el tipo de contratación o servicio a prestar.
                        </p>

                        <h3 class="privacy__subtitle">Derechos ARCO</h3>
                        <p>
                            Asimismo, le manifestamos que estos serán conservados en diferentes medios seguros que la tecnología permita y cuyo acceso estará limitado 
                            solamente a las personas físicas y/o morales con las que tengamos una relación jurídica. Se entenderá que ha otorgado su consentimiento 
                            si usted no manifiesta su oposición para que sus datos personales sean tratados.
                        </p>
                        <p>
                            Por ello le informamos que usted tiene derecho a conocer qué Datos Personales tenemos de usted, para qué los utilizamos y las condiciones 
                            del uso que les damos (<strong>Acceso</strong>). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, 
                            sea inexacta o incompleta (<strong>Rectificación</strong>); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo 
                            utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (<strong>Cancelación</strong>); así como oponerse al uso de sus datos 
                            personales para fines específicos (<strong>Oposición</strong>). Estos derechos se conocen como derechos <strong>ARCO</strong>.
                        </p>

                        <h3 class="privacy__subtitle">Temporalidad del tratamiento de los datos personales</h3>
                        <p>
                            Sus datos personales serán tratados únicamente por el tiempo necesario a fin de cumplir con las finalidades previstas en este 
                            <strong>AVISO DE PRIVACIDAD</strong> y/o de conformidad con lo dispuesto en la legislación en materia de protección de datos personales.
                        </p>

                        <h3 class="privacy__subtitle">Transferencia de datos personales</h3>
                        <p>
                            Le informamos que sus datos personales podrán ser compartidos dentro y fuera del país con terceros nacionales o extranjeros que tienen una 
                            relación jurídica y/o comercial con nosotros cuando:
                        </p>
                        <ul class="privacy__list">
                            <li>Esté prevista en Ley o algún Tratado de los que México sea parte.</li>
                            <li>Sea necesaria para la prevención o el diagnóstico médico, la prestación de asistencia sanitaria, tratamiento médico o la gestión de servicios sanitarios.</li>
                            <li>Sea efectuada a sociedades controladoras, subsidiarias o afiliadas bajo el control común de <strong>ALIMENTOS, ACEITES Y FORRAJES DEL BAJÍO</strong>.</li>
                            <li>Sea necesaria por virtud de un contrato celebrado o por celebrar en interés del titular, entre <strong>ALIMENTOS, ACEITES Y FORRAJES DEL BAJÍO</strong> y un tercero.</li>
                            <li>Sea necesaria o legalmente exigida para salvaguardar un interés público, o para la procuración o administración de la justicia.</li>
                            <li>Sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial.</li>
                            <li>Sea precisa para el mantenimiento o cumplimiento de una relación jurídica entre <strong>ALIMENTOS, ACEITES Y FORRAJES DEL BAJÍO</strong> y el titular.</li>
                        </ul>

                        <p>
                            Lo señalado en el presente apartado, no implica que <strong>ALIMENTOS, ACEITES Y FORRAJES DEL BAJÍO</strong> realice transferencias de todos los datos 
                            personales que recabe. Entenderemos que usted otorga su consentimiento para la transferencia de sus Datos Personales conforme a lo aquí establecido; 
                            salvo que manifieste expresamente lo contrario enviando su solicitud a la dirección de correo electrónico 
                            <a href="mailto:administrativo@aafoba.com" class="privacy__link">administrativo@aafoba.com</a> y/o al domicilio indicado al inicio del 
                            <strong>AVISO DE PRIVACIDAD</strong>.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('aafo-privacy', PrivacyNotice);