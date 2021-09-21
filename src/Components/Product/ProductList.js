import React from "react";
import Item from "./Item";
import { Products , SetProducts} from "../Context/Context";

const ProductList = ()=>  {    
    
        
        const products = Products() 
        const dispach = SetProducts();
       

        if(products.filter(item => item.Count > 0).length === 0){
            return <h4 >There is no data in cart ! <a style={{textDecoration : "none"}} href="#"> {"-------> "} Go To Shop {" <------- "}</a> Thank you!</h4>
        }

        return products.map(
            (products)=>{
                return(
                    <Item 
                        Product = {products}
                        key = {products.id}
                        Delete = {()=>dispach({key : 'Delete' , id : products.id})}
                        addOneProduct = {()=>dispach({key : 'addOneProduct' , id : products.id})}
                        removeOneProduct = {()=>dispach({key : 'removeOneProductHandler',id : products.id})}
                    />
                )
            }
        )      
    }


export default ProductList
