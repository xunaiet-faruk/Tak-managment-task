import { TiDeleteOutline } from "react-icons/ti";
const AddtaskModal = ({ setOpenModal }) => {
    return (
        <div className="space-y-12">
            

            <div className="flex justify-between ">
                <h1 className="text-2xl bg-white py-5 pl-4 font-bold  w-full h-full  m-0">Create A Task </h1>
                <button onClick={() => setOpenModal(false)} className="bg-white pr-5"><TiDeleteOutline className="text-4xl hover:text-red-400" /></button>
            </div>
            <div className=" bg-gradient-to- space-y-10 from-[#f4dbf9] via-[#e9dbfc] to-[#e0dafc]">
                {/* Center every line vertically */}
                <div className="flex items-center justify-between px-7 my-5">
                    <h1 className="text-xl font-semibold m-0">Tiltle  :  </h1>
                    <input type="text" name="" id="" className="bg-[#dadada] w-[400px] py-1 border-2 border-[#acabad] rounded-md" />
                </div>
                <div className="flex items-center justify-between px-7 my-5">
                    <h1 className="text-xl font-semibold m-0">Discription   :  </h1>
                    <textarea rows={4} type="text" name="" id="" className="bg-[#dadada] w-[400px] py-1 border-2 border-[#acabad] rounded-md" />
                </div>
                <div className="flex items-center justify-between px-7 my-5">
                    <h1 className="text-xl font-semibold m-0">Team  :  </h1>
                    <input type="text" name="" id="" className="bg-[#dadada] w-[400px] py-1 border-2 border-[#acabad] rounded-md" />
                </div>
                <div className="flex items-center justify-between px-7 my-5">
                    <h1 className="text-xl font-semibold m-0">Assigness  :  </h1>
                    <input type="text" name="" id="" className="bg-[#dadada] w-[400px] py-1 border-2 border-[#acabad] rounded-md" />
                </div>
                <div className="flex  px-7 items-center gap-24 my-5">
                    <h1 className="text-xl font-semibold mt-2 m-0">Priority :  </h1>
                    <select name="" id="" className="bg-[#dadada] ml-12 py-1  px-3 border-2 border-[#acabad] rounded-md">
                        <option value="P0">P0</option>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                    </select>
                </div>
            </div>

            <div className="bg-white  h-full">
                <div className="flex justify-end items-center gap-3 p-4">
                    <input type="submit" value="Submit" className="bg-[#25669b] text-white px-9 py-1 rounded-md " />
                </div>

            </div>

        </div>
    );
};

export default AddtaskModal;
