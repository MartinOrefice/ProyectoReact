# E-commerce. Creado y diseñado por [Martin Orefice](https://www.linkedin.com/in/martin-orefice-developer/)

# [![CSS](https://img.shields.io/badge/Link%20al%20sitio-blueviolet)](https://e-commerce-coder-martin-ore.web.app)

## Frameworks , librerias y herramientas utilizadas

[![Node](https://img.shields.io/badge/node-%2016.14.2-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![Node](https://img.shields.io/badge/npm-%208.5.0-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![React](https://img.shields.io/badge/react-%2018.2.0-success)](https://reactjs.org/blog/2020/10/20/react-v17.html)

[![React-Router](https://img.shields.io/badge/react--router--dom-%5E6.4.0-success)](https://www.w3schools.com/react/react_router.asp)

[![Firebase](https://img.shields.io/badge/firebase-%5E8.9.1-success)](https://firebase.google.com/)

[![JS](https://img.shields.io/badge/JavaScript-ES6-success)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![CSS](https://img.shields.io/badge/CSS-success)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## COMANDOS

Create a new React app
`npx create-react-app name`

Develop mode
` npm start`

React Router Dom
`npm install react-router-dom`

Firebase v 8.9.1
`npm install firebase@9.10.0`

Deploy
`npm run build`

## Descripción

ProyectoReact es un e-commerce realizado en React.js que simula una tienda digital generica.

### Categorías

La web consta de una página principal donde se pueden visualizar la totalidad de los productos. En la barra de navegación se puede elegir entre las tres categorías de productos, "Nuevos" , "Promociones" y "Usados". El logo del inicio lleva a la vista de todos los productos.


### Items

Cada card de productos muestra una imagen, el nombre del producto y tiene un botón que muestra la descripcion, el nombre y el precio del producto.  Este mismo tiene botones para agreagar o restar unidades del producto. Además la card de producto tiene un ícono desde el cual se puede agregar al carro directamente.
El id del producto es agregado automaticamente por firebase.

### Carrito

El carrito muestra la totalidad de los productos elegidos. Tiene un máximo según stock del producto. Además tiene botones para borrar individualmente los productos y la totalidad. 

### Formulario

El formulario de generación de la orden consta con una validación completa. Además el mail debe si o si tener la estructura de un mail real para poder validarse. Todos los campos responden con un error si se introduce información inválida.

Al introducir correctamente la información, se muestra un cartel de éxito en la compra con la id del pedido, otorgada automaticamente por firebase.

## Librerías utilizadas


### Material UI v5
Casi la totalidad del proyecto fue armada con las herramientas que brinda esta librería. Para lograr un estilo acabado y completo con coherencia a traves de toda la experiencia de navegación. 