import React from 'react'

const NoFound = () => {
  return (
    <>
    <div class="container">
        <div class="error-message">
            <h1>Oops, parece que te perdiste en nuestro catálogo de productos</h1>
            <p>La página que buscas no se encuentra en nuestro inventario. Tal vez estás buscando un producto fuera de stock o que nunca existió.</p>
            <a href="/">VOLVER AL INICIO</a>
        </div>
        <div class="product-image">
           
        </div>
    </div>
    </>
  )
}

export default NoFound