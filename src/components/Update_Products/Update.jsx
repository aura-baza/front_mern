import React, { useContext, useEffect, useState } from 'react';
import { ContextProducts } from '../../Context/ProviderPorducts';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
const Update = () => {
  const navegar=useNavigate();
    const params = useParams();
    const {products, setProducts}=useContext(ContextProducts);
    const [product, setProduct]=useState({codigo:"", nombre:"", precio:"", cantidad:""});
    const handlerInputEdit=(e)=>{
      setProduct({...product,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
    const productFound=products.find((product)=>
    parseInt(product.codigo) === parseInt(params.codigo));
    setProduct({...productFound})
    },[]);

    const updateProduct = async (e) => {
      e.preventDefault();
      try {
        const request = await fetch(process.env.REACT_APP_URL_BACK+"/upDataProduct/"+product.codigo, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const responseData=await request.json();
        toast.success('Producto actualizado con exito')
        console.log(responseData);
        // if (responseData) {
        //   navegar("/")
        // }
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>
    <Toaster richColors position='bottom-right'/>
    <header>
       <h1>EDITAR PRODUCTO</h1>
   </header>
   <section>
   <h2 className='subtitle'>mensaje al usuario</h2>
   <form id="add-product-form" action=''>
       <input  onInput={(e)=>handlerInputEdit(e)} value={product.codigo}  name="codigo" type="number" id="product-name" readOnly placeholder="Codigo del Producto" required/>
       <input onInput={(e)=>handlerInputEdit(e)} value={product.nombre} name="nombre" type="text" id="product-name" placeholder="Nombre del Producto" required/>
       <input onInput={(e)=>handlerInputEdit(e)} value={product.precio} name="precio" type="number" id="product-price" placeholder="Precio" required/>
       <input onInput={(e)=>handlerInputEdit(e)} value={product.cantidad} name="cantidad" type="number" id="product-quantity" placeholder="Cantidad" required/>
        <button type="submit" className='btn_cancel' onClick={()=>navegar('/')}>CANCELAR</button>
        <button type="submit" className='btn_save' onClick={(e)=>updateProduct(e)}>ACTUALIZAR</button>
   </form>
   </section>
   
   </>
  )
}

export default Update