class Main extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                main {
                    padding: 2rem;
                }
            </style>
            <main>
                <slot name="profile"></slot>
                <slot name="table"></slot>
                <slot name="gallery"></slot>
            </main>
        `;
    }

    connectedCallback() {
        // Escuchar el evento de navegación para cambiar el contenido
        window.addEventListener('navigate', (e) => this.navigate(e));
    }

    navigate(event) {
        const slots = {
            profile: this.shadowRoot.querySelector('slot[name="profile"]'),
            table: this.shadowRoot.querySelector('slot[name="table"]'),
            gallery: this.shadowRoot.querySelector('slot[name="gallery"]')
        };

        // Limpiar el contenido de los slots
        Object.keys(slots).forEach((key) => {
            const slot = slots[key];
            slot.innerHTML = ''; // Limpiar contenido anterior
        });

        // Mostrar el contenido correspondiente según el evento
        switch (event.detail) {
            case 'profile':
                slots.profile.innerHTML = '<social-profile></social-profile>';
                break;
            case 'table':
                slots.table.innerHTML = '<custom-table></custom-table>';
                break;
            case 'gallery':
                slots.gallery.innerHTML = '<app-gallery></app-gallery>';
                break;
            default:
                slots.profile.innerHTML = '<p>Selecciona una opción.</p>';
                break;
        }
    }
}

customElements.define('app-main', Main);
