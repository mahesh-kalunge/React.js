import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductService } from '../services/ProductService';
import { Product } from '../model/Product';

const EditProductDetails = () => {
    const params = useParams<{pid:string}>();
    const navigate = useNavigate();
    const [prod, setProd] = useState<Product>({} as Product)
     useEffect(()=>{
            ProductService.editProduct(params.pid as string).then((prod)=>{
                console.log("Edited Successfully",prod);
                setProd({
                    ...prod
                })
            }).catch((error)=>{
                console.log(error);
            })
        },[])
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            console.log(event);
            const { name, value } = event.target;
            setProd({
                ...prod, [name]: value
            })
        }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
		console.log(prod); //State Variable
       ProductService.updateProductDetails(prod).then((res)=>{
        console.log("Updated Successfully",res);
        navigate("/") //Navigate to product details page after deletion
        }).catch((error)=>{
        console.log(error);
         })

    }
  return (
    <div>
        <h2>Edit Components</h2>
        <form onSubmit={handleSubmit}>
				<table>
					<tbody>
						<tr>
							<td><label>Product ID</label></td>
							<td><input type='text' name="id" value={prod.id} onChange={handleChange}></input></td>
						</tr>
						<tr>
							<td><label>Product name</label></td>
							<td><input type='text' name="name" value={prod.name} onChange={handleChange}></input></td>
						</tr>  <tr>
							<td><label>Product Price</label></td>
							<td><input type='text' name="price" value={prod.price} onChange={handleChange}></input></td>
						</tr>
						<tr>
							<td><label>Product Quantity</label></td>
							<td><input type='text' name="qty" value={prod.qty} onChange={handleChange}></input></td>
						</tr>
						<tr>
							<td></td>
							<td><button type='submit'>Update</button></td>
						</tr>
					</tbody>
				</table>
			</form>
    </div>
  )
}

export default EditProductDetails
