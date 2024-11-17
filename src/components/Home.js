import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); 
  
  return (
    <>
        <div className='form-container'>Home</div>
        <button onClick={() => navigate('order-summary')}>Place Order</button>
    </>
  );
}

export default Home;
