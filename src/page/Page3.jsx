
import { useNavigate } from 'react-router-dom';
import { useStorage } from '../hooks/useLocalStorage';
import './Page3.css';

import { TypeAnimation } from 'react-type-animation';
import { useEffect } from 'react';

export default function Page3() {
    const [login, setLogin] = useStorage("loginG", null)
    const navigate = useNavigate();

    useEffect(() => {
      if (!login?.displayName) {
        navigate('/')
      }
    }, []);

    return (
        <div className="card">
            <div className="imgBox">
                <div className="bark"></div>
                <img className='h-full' src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/12/thiep-chuc-mung-sinh-nhat-dep-72-696x696.jpg?fit=700%2C20000&quality=95&ssl=1"
                    border="0" alt='' width="300" height="400" />
            </div>
            <div className="details">
                <h4 className="color1 "> Xin chào</h4>
                <h4 className="color2 margin hidden text-transparent ">Cám ơn {login?.displayName|'bạn'} đã theo dõi</h4>
                <TypeAnimation
                    className='color2 margin'
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        `Cám ơn ${login?.displayName||'bạn'} đã nhìn `,
                        1000,
                        `Cám ơn ${login?.displayName||'bạn'} đã đã đôn nết `,
                        1000,
                        `Cám ơn ${login?.displayName||'bạn'} đã à nhầm `,
                        1000,
                        `Cám ơn ${login?.displayName||'bạn'} đã theo dõi`,
                        1000,
                        `Cám ơn ${login?.displayName||'bạn'} đã theo dõi\nChúc bạn và gia đình có 1 ngày tuyệt vời!`,
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '1em', textAlign: 'start', whiteSpace: 'pre-line', display: 'block' }}
                // repeat={Infinity}
                />

                <p className="text-right">Sinh nhật zui zẻ </p>
                <p className="text-right">♥ NVT ♥</p>
            </div>
        </div>
    )
}
