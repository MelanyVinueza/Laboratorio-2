class CustomTable extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                    background-color: #a0d9ff; /* Celeste bajito */
                }
                th, td {
                    border: 1px solid #ccc;
                    padding: 8px;
                }
                th {
                    background-color: #f7d1d1; /* Palo de rosa para la primera fila */
                    color: black; /* Color blanco para el texto en los títulos */
                }
            </style>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Edad</th>
                        <th>Sobre mi</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
    }

    connectedCallback() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const tbody = this.shadowRoot.querySelector('tbody');
                tbody.innerHTML = users.map(user => `
                    <tr>
                        <td>${user.nombre}</td>
                        <td>${user.email}</td>
                        <td>${user.telefono}</td>
                        <td>${user.edad}</td>
                        <td>${user.sobreMi}</td>
                    </tr>
                `).join('');
            });
    }
}
customElements.define('custom-table', CustomTable);
