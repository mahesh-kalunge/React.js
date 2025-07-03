import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductService } from '../services/ProductService';
import { error } from 'console';

function DeleteProductDetails() {
    //useParams hook to get dynamic paramater from URL
    const params = useParams<{pid:string}>();
    console.log(params);

    //useNavigate hook to navigate programmatically
    //Returns a function that lets you navigate programmatically in the browser in response to user interactions or effect
    const navigate = useNavigate();

    useEffect(()=>{
        ProductService.deleteProduct(params.pid as string).then((res)=>{
            console.log("Delete Successfully",res);
            navigate("/") //Navigate to product details page after deletion
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    

  return (
    <div>
      <h1>Delete product details</h1>
      Product ID: {params.pid}
    </div>
  )
}

export default DeleteProductDetails
