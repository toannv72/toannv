import React from 'react';
import './BirthdayCard.css'; 
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const BirthdayCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="balloon">
        <div><span className='text'>☺</span></div>
        <div><span className='text'>B</span></div>
        <div><span className='text'>D</span></div>
        <div><span className='text'>A</span></div>
        <div><span className='text'>Y</span></div>
        <div><span className='text'>!</span></div>
      </div>
      <h1>Sắp đến sinh nhật tui rồi 17/12 cho nên là...</h1>
      <div className='button'><Button onClick={()=>navigate('/page2')}  >Tiếp tục</Button></div>

    </div>
  );
};

export default BirthdayCard;
