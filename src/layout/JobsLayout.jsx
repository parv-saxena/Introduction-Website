import React from 'react';
import { Outlet } from 'react-router-dom';

const JobsLayout = () => {
  return (
    <div>
      <h2>Jobs opening </h2>
      <p>List of Current Jobs opening in our company.</p>
      <Outlet/>
    </div>
    
  );
}

export default JobsLayout;
