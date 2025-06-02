import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate=useNavigate();
  return (
    <div>
      <h1>contact page</h1>
      <div className='vutt'>
        <button onClick={()=>navigate('info')}>Contact info</button>
        <button onClick={()=>navigate('form')}>Contact Form</button>
      </div>
    </div>
  );
}

export default Contact;
