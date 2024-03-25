import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useRef, useState } from 'react';
const PendingTask = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const items = ['React', 'Angular', 'Vue'];

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false)
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);
    return (
        <div>
            <div className="bg-white border-2 borer-white w-[360px] h-[640px] ">
                <h1 className="bg-gray-400 text-xl font-bold text-center rounded-t-md text-white px-9 py-3">Pending</h1>


                <div className="p-2 ">
                    <div className="bg-[#e5e7ee] w-full p-2 h-[230px] space-y-3">
                        <div className="flex justify-between">
                            <h1 className="text-xl font-bold">Task 1</h1>
                            <button className="bg-[#25669b] text-white px-3">P0</button>
                        </div>
                        <hr className="my-2 border-t-2 border-gray-300"></hr>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo sunt quibusdam sed impedit </p>
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-md font-bold text-[#434142]">@Xunaiet28@gmail.com</h1>

                            </div>
                            <div>
                                <div ref={dropDownRef} className="relative mx-auto  w-fit text-white">
                                    <button onClick={() => setOpen((prev) => !prev)} className="rounded-sm bg-sky-600 px-2 py-1"><HiOutlineDotsVertical className="text-xl font-bold" /></button>
                                    <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 right-32  w-full space-y-1 rounded-sm`}>
                                        <div className="bg-white  w-40 border-2 text-black">
                                            <button className="btn mb-2 hover:h-full hover:bg-sky-400 text-black w-full text-lg">Edit</button><br />
                                            <hr className="border-t-2 border-gray-300"></hr>
                                            <button className="btn  hover:text-white  hover:bg-red-600 text-red-500 w-full text-lg">Delete</button>
                                        </div>


                                    </ul>
                                </div>
                            </div>

                        </div>
                        <button className="bg-[#25669b] px-7 text-white rounded-md py-1">Pending</button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default PendingTask;