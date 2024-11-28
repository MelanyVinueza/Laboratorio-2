class Menu extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
           <style>
                nav {
                    background: #f7d1d1; /* Rosa palo */
                    color: black;
                    display: flex;
                    justify-content: center; /* Centra los enlaces */
                    padding: 1rem;
                }
                nav a {
                    color: black;
                    margin: 0 1rem; /* Espacio entre los enlaces */
                    text-decoration: none;
                    font-weight: 500;
                }
                nav a:hover {
                    color: #003366; /* Azul al pasar el mouse */
                    text-decoration: underline;
                }
            </style>

            <nav>
                <a href="#profile" id="profile-link">Perfil</a>
                <a href="#table" id="table-link">Tabla</a>
                <a href="#gallery" id="gallery-link">Galería</a>
            </nav>
        `;
    }

    connectedCallback() {
        // Agregar los event listeners para manejar la navegación
        this.shadowRoot.querySelector('#profile-link').addEventListener('click', (e) => {
            e.preventDefault();
            // Despachar el evento 'navigate' con el detalle correspondiente
            this.dispatchEvent(new CustomEvent('navigate', { detail: 'profile', bubbles: true, composed: true }));
        });
        this.shadowRoot.querySelector('#table-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('navigate', { detail: 'table', bubbles: true, composed: true }));
        });
        this.shadowRoot.querySelector('#gallery-link').addEventListener('click', (e) => {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('navigate', { detail: 'gallery', bubbles: true, composed: true }));
        });
    }
}

customElements.define('app-menu', Menu);
