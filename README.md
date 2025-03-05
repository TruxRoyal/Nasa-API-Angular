Proyecto Angular - Api Nasa

Este proyecto utiliza la API de la NASA para obtener distinto tipo de información.

🚀 Configuración del Proyecto

1️⃣ Clonar el repositorio

  git clone https://github.com/tu-usuario/tu-repositorio.git
  cd tu-repositorio

2️⃣ Instalar dependencias

  npm install

🔑 Configuración de la API Key de NASA

Para evitar exponer claves sensibles en GitHub, la API Key se almacena en archivos de entorno.

3️⃣ Crear el archivo environment.ts

Crea un archivo en src/environments/environment.ts y agrega la siguiente configuración:

export const environment = {
  production: false,
  nasaApiKey: 'TU_API_KEY_AQUI'
};

4️⃣ Asegurar que environment.ts no se suba a GitHub

El archivo environment.ts debe estar en .gitignore para evitar exponer la API Key. Verifica que la siguiente línea esté presente en el archivo .gitignore:

/src/environments/environment.ts

▶️ Ejecutar la aplicación

Después de configurar la API Key, inicia la aplicación con:

  ng serve

La aplicación estará disponible en http://localhost:4200/.
