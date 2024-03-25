import { useState } from "react";
import AddtaskModal from "./TaskWork/AddtaskModal";
import { TiDeleteOutline } from "react-icons/ti";


const BoardButton = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="mt-5 pl-8">
            <div className="flex justify-between px-4">
                <div className="flex gap-8 flex-wrap">
                    <div>
                        <h1 className="text-xl font-semibold">Filter by  : </h1>
                    </div>
                    <div>
                        <h1 className="btn bg-[#fbf6fd] px-2 py-1 w-52 rounded-md">Assign Name</h1>
                    </div>

                    <div>
                        <select name="" id="" className="bg-[#fbf6fd] px-2 py-1 w-52 rounded-md">

                            <option value="P0">P0</option>
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                            <option value="P2" style={{ display: "none" }} selected>Priority</option>
                        </select>
                    </div>

                    <div>
                        <input type="date" name="" id="" className="bg-[#fbf6fd] px-2 py-1 w-52 rounded-md" />
                    </div>


                </div>
                <div>
                    <button onClick={() => setOpenModal(true)} className="bg-[#25669b] text-white px-12 py-1 rounded-md">Add New Task</button>
                </div>
            </div>

            <div className="flex gap-5 mt-6 pl-5">
                <h1 className="text-xl font-semibold">Sort By  : </h1>
                <select name="" id="" className="bg-[#fbf6fd] px-2 py-1 w-52 rounded-md">

                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P2" style={{ display: "none" }} selected>Priority</option>
                </select>

            </div>


            {/* here the modal  */}
            <div className="">
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100 ' : 'invisible opacity-0 '} inset-0 bg-black/20 backdrop-blur-sm  duration-100 dark:bg-white/10`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-md w-full md:max-w-2xl rounded-sm bg-gradient-to-r from-[#f4dbf9] via-[#e9dbfc] to-[#e0dafc] py-6 drop-shadow-lg dark:bg-black dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                        <div className="flex justify-end ">
                            <button onClick={() => setOpenModal(false)} className="rounded-sm border   duration-150  hover:text-white"><TiDeleteOutline className="text-4xl hover:text-red-400" /></button>
                        </div>
                        <AddtaskModal />

                    </div>
                    
                </div>
                
            </div>

        </div>
    );
};

export default BoardButton;
