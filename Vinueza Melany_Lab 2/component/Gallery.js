class Gallery extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                    .gallery {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr); /* Cuatro imágenes por fila */
                        gap: 1rem; /* Espacio entre las imágenes */
                        padding: 1rem; /* Espacio alrededor de la galería */
                        background-color: #fdf3f7; /* Fondo suave para la galería */
                        border-radius: 10px; /* Bordes redondeados para la galería */
                    }

                    .gallery img {
                        width: 100%;
                        height: auto;
                        max-width: 200px; /* Limita el tamaño de las imágenes */
                        margin: 0 auto; /* Centra las imágenes en sus celdas */
                       
                        border-radius: 12px; /* Bordes redondeados en las imágenes */
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para un efecto elegante */
                        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animación suave */
                    }

                    .gallery img:hover {
                        transform: scale(1.05); /* Efecto de zoom al pasar el cursor */
                        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* Sombra más fuerte al hacer hover */
                        border-color: #d88fa2; /* Contorno más oscuro en hover */
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
