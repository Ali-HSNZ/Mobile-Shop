import Styles from "../Style Module/style.module.css" 
import { BiMenu } from "react-icons/bi";
import { Products } from "../Context/Context";

const Menu = ()=>
{
    const producs = Products()
    return (
        
        <nav className={Styles.navigation}>
            <span className={Styles.nav_products}>Product's    <span className={Styles.nav_productsCount}>{producs.filter(item => item.Count > 0).length}</span></span>
            <a href="#" className={Styles.nav_logo}>A-lex Shop</a>
            <BiMenu size={40} style={{display:"flex",justifyContent:"center",alignItems:"center",cursor: "pointer"}}/>
        </nav>
    )
}
export default Menu;