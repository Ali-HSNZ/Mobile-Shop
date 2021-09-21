import React,{ createContext , useContext, useReducer } from "react";

import _ from 'lodash'

const Product = createContext()
const SetProduct = createContext()


const insitialState =  ([
        {id: 1,Name: "Galaxy A51",size : ['XLL',"M"],Color: "Black",Price: 255.99,Count: 1},
        {id: 2,Name: "Galaxy A01",size : ['M',"S"],Color: "Black", Price: 25.99,Count: 3},
        {id: 3,Name: "Galaxy A5 2016",size : ['XL',"S"],Color: "Black",Price: 96.99,Count: 12,},
        {id: 4, Name: "Galaxy A10",size : ['L',"M"] ,Color: "Black", Price: 14.99, Count: 6, },
        {id: 5,Name: "Galaxy s20 plus",size : ['XL',"M"],Color: "Black",Price: 93.99,Count: 8,},
        {id: 6, Name: "Galaxy A52",size : ['L',"M"], Color: "Black", Price: "27.99$", Count: 7 },
        {id: 7, Name: "Galaxy A71",size : ['XL',"S"], Color: "Black", Price: "921.99$", Count: 4 },
        {id: 8,Name: "Galaxy A32 plus",size : ['XLL',"XL"],Color: "Black",Price: "17.99$",Count: 14,},
        {id: 9, Name: "Galaxy A10s",size : ['M'], Color: "Black", Price: "9.99$", Count: 6 },
        {id: 10,Name: "Galaxy Note 10 plus",size : ['S',"L"],Color: "Black",Price: "37.99$",Count: 3},
        {id: 11,Name: "Galaxy Note 9",size : ['L'],Color: "Black",Price: "39.99$",Count: 5,}
    ])


const Context = ({children}) => {
    

const reducer = (state , action) => {
    switch(action.key){
        case 'Delete' : {
            const FilteredProduts = state.filter(item => item.id !== action.id);
            
            return FilteredProduts
        }
        case 'addOneProduct':{
            const findIndex = state.findIndex(item => item.id === action.id);
            const item = {...state[findIndex] };
            item.Count++;
        
            const Product = [...state];
            Product[findIndex] = item;
            return Product
        }
        case 'removeOneProductHandler' : {
            const findIndex = state.findIndex(item => item.id === action.id);
                const item = {...state[findIndex] };
            
                if (item.Count === 1) {
                    const filterItem = state.filter(item => item.id !== action.id);
                    return filterItem
                } else {
                    const Product = [...state];
                    item.Count--;
                    Product[findIndex] = item;
                    return Product
                }
        }
        case 'filter' : {
            const value = action.event.value;



            if(value === ""){
                return insitialState
            }else{
                const FilteredProduct = insitialState.filter(item => item.size.indexOf(value) >= 0)
                return FilteredProduct
            }

        //    console.log(action.event.value)
        }
        case 'sort' : {
            const value = action.event.value
            const products = [...state]

            if(value === "lowest"){
               return _.orderBy(products, ['Price'],['asc'])
            }else{
                return _.orderBy(products, ['Price'],['desc'])
            }
            

        }
        case 'search' : {
            const value = action.event.target.value
            if(value === ""){
                return state
            }else{
                return state.filter(item => item.Name.toLowerCase().includes(value.toLowerCase()))
                 
            }
        }
        default: return state 
      
    }
}


   
    const [products , dispach] = useReducer(reducer , insitialState)
   
    
    return (
            <Product.Provider value={products}>
                <SetProduct.Provider value={dispach}>
                    {children}
                </SetProduct.Provider>
            </Product.Provider>
    );
}
 
export default Context;



export const Products = ()=> useContext(Product);
export const SetProducts = ()=> useContext(SetProduct)





