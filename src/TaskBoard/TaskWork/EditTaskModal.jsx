import { TiDeleteOutline } from "react-icons/ti";



const EditTaskModal = ({ openModal, setOpenModal }) => {

    return (
        <div>
            <div>
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-white/10`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`text- absolute max-w-md w-full md:max-w-2xl rounded-sm bg-gradient-to-r from-[#f4dbf9] via-[#e9dbfc] to-[#e0dafc] drop-shadow-lg dark:bg-black dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}>
                        <div className="flex justify-between ">
                            <h1 className="text-2xl bg-white py-5 pl-4 font-bold  w-full h-full  m-0">Create A Task </h1>
                            <button onClick={() => setOpenModal(false)} className="bg-white pr-5"><TiDeleteOutline className="text-4xl hover:text-red-400" /></button>
                        </div>
                        <div className=" bg-gradient-to- space-y-10 from-[#f4dbf9] via-[#e9dbfc] to-[#e0dafc]">
                            <form action="">

                                <div className="px-5 space-y-4 mb-2">
                                    <label htmlFor="" className="font-semibold text-xl">Tiltle</label><br />
                                    <input type="text" placeholder="Enter Title" name="" id="" className="bg-gray-300 text-gray-500 pl-2 font-bold w-full py-2 rounded-md" />
                                </div>
                                <div className="px-5 space-y-4">
                                    <label htmlFor="" className="font-semibold text-xl">Description</label><br />
                                    <textarea type="text" placeholder="Enter Description" rows={4} name="" id="" className="bg-gray-300 text-gray-500 pl-2 font-bold w-full py-2 rounded-md" />
                                </div>
                                <div className="px-5 space-y-4 mb-2">
                                    <label htmlFor="" className="font-semibold text-xl">Team</label><br />
                                    <input type="text" placeholder="Enter Title" name="" id="" className="bg-gray-300 text-gray-500 pl-2 font-bold w-full py-2 rounded-md" />
                                </div>
                                <div className="px-5 space-y-4 mb-2">
                                    <label htmlFor="" className="font-semibold text-xl">Assignee</label><br />
                                    <input type="text" placeholder="Enter Title" name="" id="" className="bg-gray-300 text-gray-500 pl-2 font-bold w-full py-2 rounded-md" />
                                </div>

                                <div>
                                    <div className="flex  px-7 items-center justify-between my-5">
                                        <div>
                                            <label htmlFor="" className="font-semibold text-xl">Priority</label>

                                            <select name="" id="" className="bg-white ml-5  py-1  px-3 border-2 border-[#acabad] rounded-md">
                                                <option value="P0">P0</option>
                                                <option value="P1">P1</option>
                                                <option value="P2">P2</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="font-semibold text-xl">Status</label>

                                            <select name="" id="" className="bg-white py-1 ml-5 px-3 border-2 border-[#acabad] rounded-md">
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Deployed">Deployed</option>
                                                <option value="Deferred">Deferred</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                        <div className="bg-white  h-full mt-5">
                            <div className="flex justify-end items-center gap-3 p-5">
                                <input type="submit" value="Submit" className="bg-[#25669b] text-white px-9 py-1 rounded-md " />
                                <button className="bg-[#25669b] text-white px-9 py-1 rounded-md ">Reset</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;