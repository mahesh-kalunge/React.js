import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddProductDetails from '../products/AddProductDetails'
import ProductDetails from '../products/ProductDetails'
import DeleteProductDetails from '../products/DeleteProductDetails'
import AddCustomer from '../Customer/AddCustomer'
import CustomerDetails from '../Customer/CustomerDetails'
import EditProductDetails from '../products/EditProductDetails'

const Navigation = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="navbar">
                    <Link to={"/product/add"}>Add details</Link>
                    {/* <Link to={"/product/details"}>Product Details</Link> */}
                    {/* <Link to={"/product/delete"}>Product Delete</Link> */}

                    {/* <Link to={"/customer/add"}>Product Details</Link>
                    <Link to={"/product/details"}>Product Delete</Link> */}

                </div>
                <Routes>
                <Route path='/' Component={ProductDetails}></Route>

                    <Route path='/product'>
                      <Route path='add' Component={AddProductDetails}></Route>
                         {/* Dynamic hook -- useParam hook */}
                      <Route path='delete/:pid' Component={DeleteProductDetails}></Route>
                      <Route path='edit/:pid' Component={EditProductDetails}></Route>
                       {/* <Route path='/customer/add' Component={AddCustomer}></Route>
                          <Route path='/customer/details' Component={CustomerDetails}></Route> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navigation
