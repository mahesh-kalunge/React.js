import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Product } from '../model/Product'
import { ProductService } from '../services/ProductService';

function AddProductDetails() {
	const [prod, setProd] = useState<Product>({} as Product)
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event);
		const { name, value } = event.target;
		setProd({
			...prod, [name]: value
		})
	}

	//handleSubmit function to handle the form submission and prevent the default behaviour of the form
	const handleSubmit = async (event: FormEvent<HTMLFormElement>)=> {
		event.preventDefault();
		console.log(prod); //State Variable
		let result = await ProductService.addProductDetails(prod);
		console.log("result", result);
	}

	return (
		<div className='add-product'>
			<h1>Add Product Details</h1>
			<br></br>
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
							<td><button type='submit'>Submit</button></td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	)
}

export default AddProductDetails
