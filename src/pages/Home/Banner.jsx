import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="md:h-[70vh] m-3 flex items-center rounded-md shadow-2xl shadow-gray-900">
            <div className="flex-1 p-4">
                <h1 className="md:w-60 text-2xl mx-auto md:text-4xl">Organize <br /> your task and  life</h1>
                <div className="flex  text-center">
                    <NavLink to={'login'} className="btn relative md:top-10 btn-primary md:text-2xl mx-auto">Let&rsquo;s Explore</NavLink>
                </div>
            </div>
            <div className="flex-1 md:w-full md:h-full">
                <img
                    className="w-full md:h-full"
                    src="https://i.ibb.co/dKFJ6Wx/42.jpg"
                    alt="Banner"
                />
            </div>
        </div>
    );
}

export default Banner;
