# Aplicación Web Modular con Custom Elements

Esta aplicación web está construida con **Custom Elements**, utilizando **Shadow DOM**, **Templates**, y **Slots** para mantener una estructura modular y estilos encapsulados. 
La aplicación incluye componentes personalizados para encabezado, pie de página, menú, perfil social, tabla, galería y un contenedor principal dinámico.


## **Estructura del Proyecto**
├── components/
│   ├── Header.js          # Componente de encabezado
│   ├── Footer.js          # Componente de pie de página
│   ├── Main.js            # Contenedor principal con soporte para slots
│   ├── Menu.js            # Menú de navegación
│   ├── SocialProfile.js   # Página de perfil de usuario
│   ├── CustomTable.js     # Tabla personalizada que carga datos de una API
│   ├── Gallery.js         # Galería que muestra imágenes desde una API
├── data/
│   ├── images.json        # Archivo JSON con datos de imágenes
├── index.html             # Archivo principal que integra todos los componentes
├── README.md              # Documentación del proyecto

---

## **Componentes**

### **1. Header**
- **Archivo:** `components/Header.js`
- **Descripción:** Muestra un encabezado con un título fijo.
- **Funcionamiento:** 
  - Utiliza Shadow DOM para encapsular los estilos.
  - Contiene un título dentro de una etiqueta `<header>`.

### **2. Footer**
- **Archivo:** `components/Footer.js`
- **Descripción:** Pie de página que muestra información de copyright.
- **Funcionamiento:**
  - Usa Shadow DOM para encapsular estilos.
  - Muestra un texto estático con el año actual.

### **3. Main**
- **Archivo:** `components/Main.js`
- **Descripción:** Contenedor principal para mostrar dinámicamente el contenido de cada página.
- **Funcionamiento:**
  - Usa un `<slot>` para insertar contenido dinámico.
  - Sirve como área de renderizado para los diferentes componentes de la aplicación.

### **4. Menu**
- **Archivo:** `components/Menu.js`
- **Descripción:** Menú de navegación con enlaces para cambiar entre las diferentes páginas.
- **Funcionamiento:**
  - Incluye enlaces `<a>` para cada sección de la aplicación.
  - Utiliza eventos `click` para manejar la navegación.

### **5. SocialProfile**
- **Archivo:** `components/SocialProfile.js`
- **Descripción:** Página de perfil de usuario con información estática.
- **Funcionamiento:**
  - Renderiza información como nombre, ocupación, y una foto de perfil.
  - Los datos son estáticos, pero pueden ser cargados dinámicamente desde un archivo o API en el futuro.

### **6. CustomTable**
- **Archivo:** `components/CustomTable.js`
- **Descripción:** Tabla que muestra datos obtenidos de una API REST.
- **API:** [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- **Funcionamiento:**
  - Realiza una petición `fetch` a la API para cargar los datos.
  - Genera filas de tabla dinámicamente a partir de los datos recibidos.

### **7. Gallery**
- **Archivo:** `components/Gallery.js`
- **Descripción:** Galería de imágenes con datos obtenidos desde un archivo local (`images.json`) o una API externa.
- **Funcionamiento:**
  - Carga imágenes desde `data/images.json` o una API.
  - Muestra cada imagen con su título y descripción, organizadas en un diseño de cuadrícula.

---


