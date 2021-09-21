import { useState } from 'react';
import Styles from './search.module.css'
import {SetProducts} from "../../Context/Context"

const Search = ({filter}) => {

    const dispatch = SetProducts();

    const [value , setValue] = useState('')

    const changeHandler = (e)=> {
        
        // dispatch({key : 'filter' , event : filter})
        if(isNaN(filter)===false){
            dispatch({key : 'search' , event : e })
        }else{
            dispatch({key : 'filter' , event : filter})
            dispatch({key : 'search' , event : e })
        }

        
        setValue(e.target.value)
    }

    return ( 
        <div className={Styles.parent}>
            <div className={Styles.parent_input}>
            <input style={{width:'700px'}} type= 'text' dir='rtl' placeholder='جستجو بر اساس نام محصولات' onChange={changeHandler} value = {value}/>
            
            </div>
        </div>
     );
}
 
export default Search;