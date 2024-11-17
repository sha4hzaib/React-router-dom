import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Product = () => {
  return (
    <>
      <div className="form-container">Product</div>
      <nav className="primary-nav">
        <NavLink to="featured"> Featured Products </NavLink>  
        <NavLink to="new"> New Products </NavLink> 
      </nav>
      <Outlet />
    </>
  );
};
