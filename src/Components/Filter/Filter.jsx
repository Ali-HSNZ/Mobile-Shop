import { SetProducts } from "../Context/Context";
import { useState , useEffect} from "react";
import SelectComponent from "../Command/Select/Select";
import Search from "../Command/Search/Search";


const options = [
    { value: '', label: 'همه سایز ها'},
    { value: 'L', label: 'L' },
    { value: 'M', label: 'M' },
    { value: 'XL', label: 'XL' },
    { value: 'XLL', label: 'XLL' },
];
const sortOptions = [
    { value: 'highest', label: 'بیش ترین'},
    { value: 'lowest', label: 'کم ترین' },
    
];




const Filter = () => {

    const [selectState , setSelectState ] = useState('')
    const [sortState , setsortState ] = useState('')
    

    const handleChange = (selectedOption)=> {
        dispatch({key : 'filter' , event : selectedOption})
        dispatch({key : 'sort' , event : sortState})
        setSelectState(selectedOption)
        // console.log(selectedOption)
        
    }
    useEffect(()=>{
        dispatch({key : 'filter' , event : { value: '', label: 'همه سایز ها'}, })
        setSelectState({ value: '', label: 'همه سایز ها'})
    },[])

    const sortChange = (sortSelect)=> {
        dispatch({key : 'sort' , event : sortSelect})
        setsortState(sortSelect)
        
    }

    const dispatch = SetProducts()
    return ( <>
     <div style = {{width:'100%',display:'flex',justifyContent:'center'}}>
                 <Search  filter = {selectState}/>
            </div>
        <div style={{display:'flex',justifyContent:'space-evenly',width:'100%', margin:'0 0 25px 0'}}>

          
           
       

            <SelectComponent
                title = ' : فیلتر قیمت'
                value={sortState}
                onChange={sortChange}
                options={sortOptions}
            />

            <SelectComponent
                title = ' : فیلتر بر اساس سایز'
                value={selectState}
                onChange={handleChange}
                options={options}
            />

         
        </div>
    </>);
}
 
export default Filter;