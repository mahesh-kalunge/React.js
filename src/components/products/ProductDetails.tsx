import React, { useState, useEffect } from 'react'
import { Product } from '../model/Product'
import { ProductService } from '../services/ProductService'
import { Link } from 'react-router-dom';

function ProductDetails() {
	const [products, setProducts] = useState<Product[]>([] as Product[])
	useEffect(() => {
		// fetchDetails() //Second approach
		let prods = ProductService.getProducts().then((res)=>{
			setProducts(res)
		}).catch((err)=>{
			console.log(err);
		});
	},[]);
	// async function fetchDetails(){
	// 	let prods = await ProductService.getProducts();
	// 	console.log(prods,"products");
	// 	setProducts(prods)
	// }
return (
	<div>
		<h1>Product details</h1>
		<div>
			<table border={1} cellPadding={10} style={{ width: "100%" }}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((prod) => {
							return <tr>
								<td>{prod.id}</td>
								<td>{prod.name}</td>
								<td>{prod.price}</td>
								<td>{prod.qty}</td>
								<td><Link to={`product/edit/${prod.id}`}>Edit</Link></td>
								<td><Link to={`product/delete/${prod.id}`}>Delete</Link></td>
							</tr>
						})
					}
				</tbody>
			</table>
		</div>
	</div>
)
}


export default ProductDetails
