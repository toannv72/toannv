import React from 'react';
import './BirthdayCard.css'; 
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

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
      <TypeAnimation
                    className='text-h1'
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        `Sắp đến sinh nhật tui rồi 17/12 cho nên là...`,
                        1000,
                       
                    ]}
                    speed={50}
                    style={{ fontSize: '3em',  whiteSpace: 'pre-line', display: 'block' }}
                // repeat={Infinity}
                />
      <div className='button'><Button onClick={()=>navigate('/page2')}  >Tiếp tục</Button></div>

    </div>
  );
};

export default BirthdayCard;
