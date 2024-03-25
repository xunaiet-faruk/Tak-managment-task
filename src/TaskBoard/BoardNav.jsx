import image from '../../public/icons.png'

const BoardNav = () => {
    return (
        <div className='flex justify-between px-3 pt-16'>
            <div>
                <h1 className="text-3xl font-bold text-black">Task Board</h1>
            </div>

            <div>
                <img className='w-12' src={image} alt="" />
            </div>
        </div>
    );
};

export default BoardNav;