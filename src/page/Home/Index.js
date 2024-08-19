import React, { useEffect, useState } from 'react'
import Hero from './Hero';
import About from './About';
import Explore from './Explore';
import GetStarted from './GetStarted';
import WhatsNew from './WhatsNew';
import World from './World';
import Insights from './Insights';
import Feedback from './Feedback';
import { Footer, Navbar } from './components';
import { realtimedb } from '../../configs/firebase';
import { onValue, push, ref, set } from 'firebase/database';
import { useStorage } from '../../hooks/useLocalStorage';
import axios from 'axios';

export default function Index() {
  const [data, setData] = useState([]);
  const [user, setUser, loadUser] = useStorage("id", false);
  const [ip, setIp] = useState('');

  useEffect(() => {
    loadUser()
    const fetchIp = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIp(response.data.ip);
        if (!user) {
          setUser(response.data.ip)
        }
        const timestamp = Date.now(); // Lấy thời gian hiện tại dưới dạng timestamp
        const date = new Date(timestamp); // Chuyển timestamp thành đối tượng Date
        const day = date.getDate().toString().padStart(2, '0'); // Lấy ngày (dd)
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng (mm), thêm 1 vì tháng bắt đầu từ 0
        const year = date.getFullYear(); // Lấy năm (yyyy)
        const hours = date.getHours().toString().padStart(2, '0'); // Lấy giờ (HH)
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Lấy phút (MM)
        const seconds = date.getSeconds().toString().padStart(2, '0'); // Lấy giây (SS)
        const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`; // Ghép thành chuỗi dd/mm/yyyy HH:MM:SS

        const newPost = {
          ip: response.data.ip,
          createdAt: formattedDateTime,
          user: user || response.data.ip
        };
        push(ref(realtimedb, `/data`), newPost);

      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIp();
  }, []);
  useEffect(() => {
    const dataRef = ref(realtimedb, '/');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
    // const newData = { name: 'New Item', value: 1234 }; // Ví dụ về dữ liệu mới
    // set(ref(realtimedb, `/data/${ipWithoutDots}`), newData); // Ghi đè tại đường dẫn '/data/item1'

  }, []);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
}
