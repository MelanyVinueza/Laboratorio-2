class SocialProfile extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                .profile {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 400;
                    line-height: 1.5;
                    padding: 1rem;
                    box-sizing: border-box;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #f9f9f9;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                .profile img {
                    border-radius: 50%;
                    width: 120px;
                    height: 120px;
                    object-fit: cover;
                    margin-bottom: 1rem;
                    border: 2px solid #0073e6;
                }

                .profile h2 {
                    color: #0073e6;
                    font-size: 1.5rem;
                    margin: 0.5rem 0;
                }

                .profile p {
                    margin: 0.5rem 0;
                }

                .profile .about {
                    font-style: italic;
                    color: #555;
                }

                .profile .contact {
                    margin-top: 1rem;
                    font-size: 0.9rem;
                    color: #777;
                }
            </style>

            <div class="profile">
                <img src="https://via.placeholder.com/120" alt="Foto de perfil">
                <h2>Melany Vinueza</h2>
                <p class="about">Estudiante universitaria de la ESPE, en la carrera de Ingeniería en TI.</p>
                <p><strong>Edad:</strong> 26 años</p>
                <div class="contact">
                    <p><strong>Email:</strong> mavinueza10@espe.edu.ec</p>
                    <p><strong>Teléfono:</strong> 0958744171</p>
                </div>
            </div>
        `;
    }
}
customElements.define('social-profile', SocialProfile);
