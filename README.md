# Generador de Excusas

Este es un proyecto de generador de excusas que genera una excusa aleatoria cada vez que se refresca la página o se hace clic en el botón "Generar nueva excusa". El proyecto está estilizado con Bootstrap para darle un look moderno y juguetón, con un fondo oscuro y utilizando la tipografía JetBrains Mono.

## Tecnologías utilizadas

- HTML
- CSS (Bootstrap)
- JavaScript

## Cómo ejecutar el proyecto

1. Clona este repositorio:

   ```sh
   git clone git@github.com:hectorlabra/generadorDeExcusas2.git
   ```

2. Navega al directorio del proyecto:

   ```sh
   cd generadorDeExcusas2
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

4. Ejecuta el proyecto:
   ```sh
   npm run start
   ```

## Estructura del proyecto

GitHub Copilot
Entiendo, parece que hay algún problema con la sincronización del archivo README.md. Vamos a asegurarnos de que el archivo README.md esté actualizado correctamente y luego haremos un commit y push al repositorio remoto.

Paso 1: Verificar el contenido del README.md
Asegúrate de que el archivo README.md contenga la información correcta. Aquí está el contenido actualizado:

generadorDeExcusas2/ ├── src/ │ ├── app.js │ ├── index.html │ ├── style.css │ └── assets/ │ ├── img/ │ └── ... ├── package.json ├── webpack.config.js └── README.md

## Funcionalidad

El generador de excusas utiliza cuatro listas de palabras para generar una excusa aleatoria:

- `who`: ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro']
- `action`: ['se comió', 'orinó', 'aplastó', 'rompió']
- `what`: ['mi tarea', 'mi teléfono', 'el coche']
- `when`: ['antes de la clase', 'cuando estaba durmiendo', 'mientras estaba haciendo ejercicio', 'durante mi almuerzo', 'mientras estaba rezando']

Cada vez que se genera una excusa, se selecciona una palabra aleatoria de cada lista y se concatenan para formar una excusa completa.

## Autor

Hecho por [hectorlabra](https://github.com/hectorlabra)

[![GitHub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)](https://github.com/hectorlabra)
