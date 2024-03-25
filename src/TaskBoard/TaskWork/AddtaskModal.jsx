const AddtaskModal = () => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold  w-full h-full  m-0">Create A Task </h1>

            <div className="border-2 border-white">

            </div>
            <div className=" bg-gradient-to-r from-[#f4dbf9] via-[#e9dbfc] to-[#e0dafc]">
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
                    <select name="" id="" className="bg-[#dadada] py-1  px-3 border-2 border-[#acabad] rounded-md">
                        <option value="P0">P0</option>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                    </select>
                </div>
            </div>

            <div className="bg-white h-full">
                djsajdfka
            </div>

        </div>
    );
};

export default AddtaskModal;
