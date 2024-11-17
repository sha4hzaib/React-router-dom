import React from 'react'
import { useNavigate } from 'react-router-dom';


export const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <div className='form-container'>
        <h1>Order Confirmed</h1>
        <button onClick={()=> navigate(-1)}> Go back to Home </button>
    </div>
  )
}
