import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStorage } from "../hooks/useLocalStorage";
import Marquee from "react-fast-marquee";

export default function Page2() {
    const [positions, setPositions] = useState([]);
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useStorage("loginG", null)

    const navigate = useNavigate();
    useEffect(() => {
        if (!login) {
            navigate('/')
        }
    }, []);
    const handleOpen = () => {
        setOpen(true);

    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleSumbit = () => {
        navigate('/page3')
    };


    const hoverButton = (event) => {
        const newPosition = getRandomPosition();
        setPositions((prevPositions) => [...prevPositions, newPosition]);
    };

    const getRandomPosition = () => {
        const maxX = window.innerWidth - 100; // 100 là chiều rộng của nút
        const maxY = window.innerHeight - 50; // 50 là chiều cao của nút

        // Sinh số ngẫu nhiên trong khoảng từ 0 đến số bước cần (ví dụ: 5)
        const stepCount = 100;
        const stepX = 0.4 * (maxX / stepCount);
        const stepY = 0.4 * (maxY / stepCount);

        let newX, newY;

        // Tạo vị trí mới không trùng với bất kỳ vị trí nào đã sử dụng trước đó
        do {
            const randomStepX = Math.floor(Math.random() * stepCount);
            const randomStepY = Math.floor(Math.random() * stepCount);

            newX = randomStepX * stepX;
            newY = randomStepY * stepY;
        } while (positions.some(pos => Math.abs(pos.x - newX) < 50 && Math.abs(pos.y - newY) < 50));

        return { x: -newX, y: -newY };
    };


    return (
        <div className="bg-white">

            <Marquee>
                Cám ơn Lương Huỳnh Ngọc Hảo đã đôn nết 1.000 đô.
                Cám ơn Võ Thùy Trang đã đôn nết 1.712 đô.

            </Marquee>
            <div className="relative isolate px-6 pt-10 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9e80ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-xl ">
                    <video className="h-full w-full rounded-lg" autoPlay controls >
                        <source src="https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/images%2Fsena.mp4?alt=media&token=0de947f5-552b-4f4f-ae82-b006701f2603" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="flex justify-evenly p-4">
                        <Button onClick={handleOpen} color="blue">Đôn nết</Button>
                        <Button
                            onMouseEnter={hoverButton}
                            // onMouseOver={hoverButton}
                            onMouseMove={hoverButton}
                            onClick={hoverButton}
                            style={{
                                transform: `translate(${Math.min(positions[positions.length - 1]?.x || 0, window.innerWidth - 100)}px, ${Math.min(positions[positions.length - 1]?.y || 0, window.innerHeight - 50)}px)`,
                                transition: 'transform 0.1s ease-in-out',
                            }}
                            color="red">Đéo đôn nết</Button>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1c4069] to-[#89fcc1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Đôn nết</DialogHeader>
                <DialogBody>
                    <div className="flex gap-2 ">
                        <img className="w-1/2" src="https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/images%2FScreenshot%202023-11-25%20072759.png?alt=media&token=860a4dbe-3d29-49c9-9729-e4437f5c4c8f" alt="momo" />
                        <img className="w-1/2" src="https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/images%2FScreenshot%202023-11-25%20072818.png?alt=media&token=a7626a88-c7b3-454d-80d2-e9314d0755f0" alt="bidv" />

                    </div></DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>xong</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>đã xong</span>
                    </Button>
                </DialogFooter>
            </Dialog>

            <Dialog open={open} handler={handleClose}>
                <DialogHeader>Đôn nết</DialogHeader>
                <DialogBody>
                    <div className="flex gap-2 ">
                        <img className="w-1/2" src="https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/images%2FScreenshot%202023-11-25%20072759.png?alt=media&token=860a4dbe-3d29-49c9-9729-e4437f5c4c8f" alt="momo" />
                        <img className="w-1/2" src="https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/images%2FScreenshot%202023-11-25%20072818.png?alt=media&token=a7626a88-c7b3-454d-80d2-e9314d0755f0" alt="bidv" />

                    </div>
                    <p className="text-center">Hoặc</p>
                    <p className="text-center text-light-blue-400"><Link to="https://me.momo.vn/lDI6TWsAijsQt8TNi3IqUx">Bấm vào đây</Link></p>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleSumbit}
                        className="mr-1"
                    >
                        <span>xong</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleSumbit}>
                        <span>đã xong</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}
