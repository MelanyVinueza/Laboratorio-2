class Header extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
           <style>
                header {
                    background: linear-gradient(135deg, #a0d9ff, #ffb3d9); /* Degradado celeste a rosado */
                    color: black;
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    font-family: 'Arial', sans-serif;
                    font-weight: 600;
                    font-size: 1.5rem;
                }
            </style>
            <header>
                <h1>Mi Aplicación Web</h1>
                <h4>Melany Vinueza<h4>
                <h4>28/11/2024<h4>
                <h4>NRC:3822<h4>
            </header>
        `;
    }
}
customElements.define('app-header', Header);
