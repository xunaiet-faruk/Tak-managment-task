import BoardButton from "./BoardButton";
import BoardNav from "./BoardNav";
import BoardTask from "./BoardTask";

const Taskboard = () => {
    return (
     <div className="h-[1200px]">
            <div className="container mx-auto bg-gradient-to-r from-[#f4dbf9] via-[#e9dbfc] to-[#e0dafc] w-full ">
                <BoardNav />
                <div className="w-full h-4/5 border-2 border-white rounded-md mt-12 p-4 flex flex-col overflow-hidden">
                    <BoardButton />
                    <div className="overflow-auto flex-grow" style={{ scrollbarWidth: "thin" }}>
                        <BoardTask />
                    </div>
                </div>
            </div>
     </div>
    );
};

export default Taskboard;
