class Footer extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                footer {
                    background: #001f3d; /* Azul marino oscuro */
                    color: white;
                    text-align: center;
                    padding: 0.5rem 0; /* Menos espacio arriba y abajo */
                    margin: 0; /* Elimina márgenes */
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                }
            </style>
            <footer>
                <p>&copy; 2024 Mi Aplicación Web</p>
            </footer>
        `;
    }
}
customElements.define('app-footer', Footer);
