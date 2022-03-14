import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './productComponent'
import React,{ useEffect } from 'react'

import { setproduct } from '../redux/Actions/productActions'
const Productlist = () => {
    const products= useSelector((state)=>state)
    const dispatch=useDispatch()
    const fetchProduct=async ()=>{
       const response=await axios.get(`https://fakestoreapi.com/products`).catch((err)=>{
console.log('Err',err)
       })
       dispatch(setproduct(response.data))
    }
    useEffect(()=>{
        fetchProduct();
    },[])
    console.log('products:',products)
  return (
    <div className='ui grid container '>
        <ProductComponent/>
        </div>
  )
}

export default Productlist