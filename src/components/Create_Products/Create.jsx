import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Toaster, toast} from 'sonner';
const Create = () => {
  const navegar=useNavigate();
  const [newProduct,setNewProduct]=useState({codigo:"", nombre:"", precio:"", cantidad:""});
  const handlerInput=(e)=>{
    e.preventDefault();
    setNewProduct({...newProduct,[e.target.name]:e.target.value});
  }
  const addProduct=async(e)=>{
    e.preventDefault();
    try {
      const request=await fetch(process.env.REACT_APP_URL_BACK+'/addProducts',{
        method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct)
      });
      const dataResponse=await request.json();
      console.log(dataResponse);
      toast.success('Producto agredado con exito')
      setNewProduct({codigo:"", nombre:"", precio:"", cantidad:""});
     
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <Toaster richColors position='bottom-right'/>
     <header>
        <h1>REGISTRAR PRODUCTO</h1>
    </header>
    <section>
    <h2 className='subtitle'>Agregar Producto</h2>
    <form id="add-product-form">
        <input value={newProduct.codigo} name="codigo" onInput={(e)=>handlerInput(e)} type="text" id="product-name" placeholder="codigo del producto" required/>
        <input value={newProduct.nombre} name="nombre" onInput={(e)=>handlerInput(e)} type="text" id="product-name" placeholder="Nombre del Producto" required/>
        <input value={newProduct.precio} name="precio" onInput={(e)=>handlerInput(e)} type="number" id="product-price" placeholder="Precio" required/>
        <input value={newProduct.cantidad} name="cantidad" onInput={(e)=>handlerInput(e)} type="number" id="product-quantity" placeholder="Cantidad" required/>
        <button type="submit" onInput={(e)=>handlerInput(e)} className='btn_cancel' onClick={()=>navegar('/')}>CANCELAR</button>
        <button type="submit" onInput={(e)=>handlerInput(e)} className='btn_save' onClick={(e)=>addProduct(e)}>GUARDAR</button>
    </form>
    </section>
    
    </>
    
  )
}

export default Create