import Select from 'react-select';
import Styles from "./Select.module.css";



const SelectCoxmponent = ({title,...rest}) => {
    return ( 
        <div style={{display:'flex',alignItems:'center'}}>
            <Select
               
                className={Styles.select}
                
                {...rest}
            />

            <p style={{width:'10px'}}></p>
            <p>{title}</p>

       
    </div>
     );
}
 
export default SelectCoxmponent;