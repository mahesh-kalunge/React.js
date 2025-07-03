import axios from "axios";
import { Product } from "../model/Product";

export class ProductService{
    private static Products:Product[]=[]
    static async addProductDetails(product:Product):Promise<Product>{
        // this.Products.push(product);
        // return this.Products;
        let result= await axios.post("http://localhost:3000/products",product)
        console.log("Submitted successfully",result);
        return result.data;
        
    }

    static async getProducts():Promise<Product[]>{
        let result= await axios.get("http://localhost:3000/products")
        console.log("Fetched successfully",result);
        return result.data
    }

    static async deleteProduct(productId:string):Promise<Product>{
        let response=await axios.delete(`http://localhost:3000/products/${productId}`)
        console.log('Deleted Successfully',response);
        return response.data;
    }

    static async editProduct(productId:string):Promise<Product>{
        let response=await axios.get(`http://localhost:3000/products/${productId}`)
        console.log('Edited Successfully',response);
        return response.data;
    }

    static async updateProductDetails(product:Product):Promise<Product>{
        // this.Products.push(product);
        // return this.Products;
        let result= await axios.put(`http://localhost:3000/products/${product.id}`,product)
        console.log("update successfully",result);
        return result.data;
        
    }
}