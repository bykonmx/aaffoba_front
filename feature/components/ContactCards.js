/**
 * Contact Cards Component for AAFOBA
 */
class AafoContactCards extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="quote__contacts fade-in delay-2">
                <a href="mailto:administrativo@aafoba.com" class="quote__contact-card">
                    <div class="quote__contact-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <path d="M2 7l10 7 10-7"/>
                        </svg>
                    </div>
                    <span class="quote__contact-label">Email</span>
                    <span class="quote__contact-value">administrativo@aafoba.com</span>
                </a>

                <a href="tel:+525512345678" class="quote__contact-card">
                    <div class="quote__contact-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                    </div>
                    <span class="quote__contact-label">Teléfono</span>
                    <span class="quote__contact-value">55 1234 5678</span>
                </a>

                <a href="https://maps.google.com/?q=Parque+Industrial+Xalostoc,+Ecatepec,+Estado+de+Mexico" target="_blank" rel="noopener noreferrer" class="quote__contact-card">
                    <div class="quote__contact-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                    </div>
                    <span class="quote__contact-label">Ubicación</span>
                    <span class="quote__contact-value">Parque Industrial Xalostoc,<br>Ecatepec, Estado de México</span>
                </a>
            </div>
        `;
    }
}

customElements.define('aafo-contact-cards', AafoContactCards);
