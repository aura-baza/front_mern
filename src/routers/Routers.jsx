import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Products from '../components/List_Products/Products';
import Create from '../components/Create_Products/Create';
import Update from '../components/Update_Products/Update';
import NoFound from '../components/Not Found/NoFound';

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/addProducts' element={<Create/>}></Route>
        <Route path='/updateProducts/:codigo' element={<Update/>}></Route>
        <Route path='*' element={<NoFound/>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers;