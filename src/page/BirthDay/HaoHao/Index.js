import { Carousel } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Marquee from "react-fast-marquee";
import { onValue, push, ref } from 'firebase/database';
import { realtimedb } from '../../../configs/firebase';

import axios from 'axios';
import { useStorage } from '../../../hooks/useLocalStorage';
import { browserName, mobileModel } from 'react-device-detect';

export default function HaoHao() {
    const [dataImg, setDataImg] = useState([{
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F700687e2-9448-455d-88eb-f881a4492467.jpg?alt=media&token=6bc83992-f950-4cda-be5e-73dadbd460dd"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fafeecf96-0912-4aee-9762-5e66d6a4435a.jpg?alt=media&token=7bc1beba-1c66-4f5c-903c-91ca615c1b9d"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Faa79924d-5c07-4af7-889d-677b0e3c9a06.jpg?alt=media&token=b9808a19-3365-491a-9f90-85b0a261002a"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F5a0c25a4-fa83-42b1-9ba4-b9e877580005.jpg?alt=media&token=23b62831-9560-4a78-8052-9cbf070aac4d"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fc1ff3a38-1d7f-4d2f-92c3-f8c697951602.jpg?alt=media&token=ae99fb7d-c629-4967-86f8-07d7cac0dc2c"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fb59121bd-5c8c-45a5-989b-c4047c567a95.jpg?alt=media&token=e45d7883-9453-41f7-aa22-2f7446db3c77"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F471c342f-d7c5-47af-ac05-6d3d5a9a81e5.jpg?alt=media&token=d5bc2a38-df18-40fc-b504-df85895dc871"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F3c5757af-fa23-4223-a708-c7ed9d2401dc.jpg?alt=media&token=3b5a9728-024f-4c04-b18f-a59e27133b2a"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fbf7ab176-624b-4712-9c60-f6162b95b377.jpg?alt=media&token=f75c68da-03be-46fc-baae-d8da63bffda5"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F04b884c6-e3f7-4f5f-8422-6a9d7f5633d9.jpg?alt=media&token=997f9b8d-ceb7-4097-869f-b5fd7309e583"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fdbef2f44-d4ea-4eca-933d-2bbb49b98727.jpg?alt=media&token=d3cbd53d-5c81-4526-9f96-8b8c9747a754"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F47b9d1b7-6c61-4d72-96f5-29c00344284c.jpg?alt=media&token=d08f2d38-39dd-4d21-9479-de848fef535c"
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F8009a486-a567-42ff-92bc-f226ed262e82.jpg?alt=media&token=acb35fd1-d536-46f8-85c5-f6fda8dd563a"
    },
    // {
    //     img: ""
    // },
    // {
    //     img: ""
    // }
    ])
    const [data, setData] = useState([]);
    const [user, setUser, loadUser] = useStorage("id", false);
    const [ip, setIp] = useState('');
    const currentUrl = window.location.href;
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
                    user: user || response.data.ip,
                    first: user ? false : true,
                    url: currentUrl,
                    appName: window.navigator.appName,
                    appVersion: window.navigator.appVersion,
                    platform: window.navigator.platform,
                    userAgent: window.navigator.userAgent,
                    language: window.navigator.language,
                    browserName: browserName,
                    mobileModel: mobileModel || "không phải điện thoại"
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
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        document.querySelectorAll('video').forEach(video => {
            video.addEventListener('contextmenu', handleContextMenu);
        });

        return () => {
            document.querySelectorAll('video').forEach(video => {
                video.removeEventListener('contextmenu', handleContextMenu);
            });
        };
    }, []);
    return (
        <div className=' flex flex-col gap-6 text-center'>
            <div className='bg-red-600 font-bold'>
                <Marquee >
                    Cám ơn anh Nguyễn Văn Toàn  đã đôn nết 1.000.000.000 đô.
                </Marquee>
            </div>
            <div className="flex justify-center items-center">
                <TypeAnimation
                    sequence={[
                        'Chúc mừng sinh nhật anh "Lương Huỳnh Ngọc Hảo"\nNgày 9-9-2024  🎉 🎉 ',
                        2000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    style={{
                        fontSize: '2em',
                        display: 'block',
                        fontFamily: 'Arial, sans-serif',
                        whiteSpace: 'pre-line', // Cho phép xuống dòng với \n
                        textAlign: 'center',
                    }}
                    repeat={0}
                />
            </div>

            <div className='bg-black h-[50vh] '>
                <Carousel autoplay arrows={true} infinite={false}>
                    {dataImg.map((value, index) => (
                        <div>
                            <div className='flex justify-center items-center' key={index}>
                                <img className='object-contain h-[50vh] w-auto' alt={index} src={value.img} />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="mx-auto max-w-xl ">
                <video className="h-full w-full rounded-lg" autoPlay controls controlsList="nodownload">
                <source src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fbdcea91e-b662-484a-9ec8-c49293c44bfe.mp4?alt=media&token=383131a7-efb2-4df8-937e-05809bf153bc" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            {/* <div className="mx-auto   ">
                <iframe src="https://drive.google.com/file/d/1dHnypf2H3G3M1o5Q6dsL4PkzVQj6WS1y/preview?hd=1"
                    className=" rounded-lg" width="960"
                    height="540" allow="autoplay; fullscreen">
                    
                    </iframe>
            </div> */}
            <div className="mx-auto max-w-xl ">  <video className="h-full w-full rounded-lg" controls >
                <source src="https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/images%2Fsena.mp4?alt=media&token=0de947f5-552b-4f4f-ae82-b006701f2603" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>


            <div className='flex justify-center  items-center text-center'>
                <TypeAnimation
                    sequence={[
                        'Mọi số tiền sẽ được chuyển thẳng vào tài khoản của Toàn ',
                        5000,
                        'Mọi số tiền sẽ được chuyển thẳng vào tài khoản của Hảo ',
                        2000,

                    ]}
                    wrapper="h2"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'Arial, sans-serif' }}
                    repeat={0}
                />
            </div>
            <div className='flex justify-center  items-center text-center'>
                <div className='flex justify-center items-center' >
                    <img className='object-contain h-[50vh] w-auto' alt={'index'} src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F2120d77b-3719-4eaa-baad-b3b26d71e271.jpg?alt=media&token=4a8881d3-31f8-4f00-b992-34613b076f06" />
                </div>
            </div>
          
        </div>
    )
}
