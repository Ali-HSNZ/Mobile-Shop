import style from '../Style Module/style.module.css'
import { AiOutlineDelete } from "react-icons/ai";

const Item = (props) => {



    return (
        <div className = {style.item}>

            <span> Name : {props.Product.Name}</span>
            {/* <span> Color : {props.Product.Color}</span> */}
            <span> Size : {props.Product.size.toString().replace(',',' - ')}</span>

            <span> Price : {props.Product.Price}$</span>

           
            
            <div className = {style.ProductCount_Parent}>

                <button  onClick={props.removeOneProduct} className = {style.removeProduct}>
                        {props.Product.Count > 1 ? "-" : <AiOutlineDelete size={15} className={style.FontIcon}/>}
                </button>

                <span className ={style.countOfProduct}>{props.Product.Count} </span>

                <button  onClick={props.addOneProduct} className = {style.AddProduct}> +</button>
                
            </div>

            
            <button onClick={props.Delete} className = {style.Delete}> Delete</button>


        </div>
    )

}
export default Item