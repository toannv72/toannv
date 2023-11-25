import { useEffect, useState } from 'react';
import BirthdayCard from '../Components/BirthdayCard'
import SignInWithGoogle from './SignInWithGoogle'
import { useStorage } from '../hooks/useLocalStorage';
import './Page3.css';

export default function Page3() {
    const [login, setLogin] = useStorage("login", null)

    useEffect(() => {
        setLogin(null)
    }, []);

    return (
        <div class="card">
            <div class="imgBox">
                <div class="bark"></div>
                <img className='h-full' src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/12/thiep-chuc-mung-sinh-nhat-dep-72-696x696.jpg?fit=700%2C20000&quality=95&ssl=1"
                    border="0" alt='' width="300" height="400" />
            </div>
            <div class="details">
                <h4 class="color1 "> Xin chào</h4>
                <h4 class="color2 margin ">Cám ơn đã theo dõi</h4>
                <p>Cám ơn đã đôn nết </p>
                <p>Cám ơn đã đôn nết </p>
                <p>Cám ơn đã đôn nết </p>
                <p>Cám ơn đã đôn nết </p>
                <p>Cám ơn đã đôn nết </p>
                <p class="text-right">Sinh nhật zui zẻ nhá </p>
                <p class="text-right">♥ NVT ♥</p>
            </div>
        </div>
    )
}
