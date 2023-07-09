# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

# Aplicación web en React

Esta es una aplicación web en React que utiliza varias dependencias para su funcionamiento. A continuación, se presentan las principales dependencias utilizadas:

## Dependencias

- **React-Boostrap:** Esta dependencia proporciona componentes de interfaz de usuario basados en Bootstrap para React. Permite utilizar fácilmente los estilos y componentes de Bootstrap en nuestra aplicación React.

- **React-icons:** Esta dependencia proporciona una gran colección de iconos listos para usar en la aplicación. Ofrece una amplia variedad de iconos que se pueden importar y utilizar en los componentes de React.

- **React-router-dom:** Esta dependencia permite la navegación entre diferentes componentes en una aplicación React. Facilita la creación de rutas y enlaces que permiten al usuario moverse entre diferentes vistas o páginas de la aplicación.

- **Firebase:** Esta dependencia ofrece una plataforma de desarrollo de aplicaciones web que proporciona una base de datos en tiempo real y diversas herramientas para la creación de aplicaciones web. Firebase permite almacenar y sincronizar datos en la nube, autenticar usuarios, enviar notificaciones, entre otras funcionalidades.

## Configuración

Antes de ejecutar la aplicación, asegúrate de tener Node.js instalado en tu sistema. Luego, sigue estos pasos para configurar el entorno de desarrollo:

1. Clona el repositorio de la aplicación desde [GitHub](https://github.com/tu-usuario/nombre-del-repositorio).

2. Abre una terminal y navega hasta la carpeta del proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias:

    1. Instalar React-Bootstrap:
   ```bash
   npm install react-bootstrap bootstrap
   ```

    2. Instalar React-icons:
   ```bash
   npm install react-icons
   ```

    3. Instalar React-router-dom:
   ```bash
   npm install react-router-dom
   ```

    4. Instalar Firebase:
   ```bash
   npm install firebase
   ```

Recuerda que debes tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu sistema antes de ejecutar los comandos de instalación.


4. Crea un proyecto en Firebase y configura la base de datos y la autenticación según tus necesidades. Obtén las credenciales necesarias para conectar la aplicación con Firebase.

5. Crea un archivo `.env` en la raíz del proyecto y agrega las variables de entorno necesarias:

   ```
   REACT_APP_FIREBASE_API_KEY=AIzaSyDmXNQNjnBkqcw9PisapDWX5BanNPj5Xks
   ```

   Asegúrate de reemplazar `YOUR_FIREBASE_XXX` con las credenciales correspondientes.

## Ejecutar la aplicación

Una vez configurado el entorno, puedes ejecutar la aplicación. Utiliza el siguiente comando en la terminal:

```bash
npm start
```

Esto iniciará la aplicación y podrás acceder a ella en tu navegador a través de [http://localhost:3000](http://localhost:3000).

## Conclusión

Esta aplicación web en React utiliza las dependencias React-Boostrap, React-icons, React-router-dom y Firebase para proporcionar una interfaz de usuario atractiva, navegación entre componentes, iconos personalizados y funcionalidades basadas en la nube. Puedes explorar el código fuente para ver cómo se integran estas dependencias y personalizar la aplicación según tus necesidades. ¡Disfruta construyendo tu aplicación web en React!


Una vez instaladas estas dependencias, podrás utilizar las funcionalidades que ofrecen en tu aplicación web de React. Asegúrate de importar los componentes y módulos necesarios en tus archivos JavaScript para utilizar las bibliotecas correctamente.

