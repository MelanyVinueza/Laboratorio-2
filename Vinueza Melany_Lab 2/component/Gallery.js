class Gallery extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr); /* Tres imágenes por fila */
                    gap: 1rem;
                }
                .gallery img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                    max-width: 200px; /* Tamaño más grande de las imágenes */
                    margin: 0 auto; /* Centra las imágenes dentro de su celda */
                }
            </style>

            <div class="gallery"></div>
        `;
    }

    connectedCallback() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                const gallery = this.shadowRoot.querySelector('.gallery');
                gallery.innerHTML = data.results.map((item, index) => `
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png" alt="${item.name}">
                `).join('');
            });
    }
}
customElements.define('app-gallery', Gallery);
