import { useNavigate } from "react-router-dom"; 

const Hero = () => {
      const navigate = useNavigate();
    return (
        <>
            <div className="w-screen h-screen relative flex flex-col justify-center items-center z-0">
                {/* Background Image */}
                <img className="object-cover h-full w-full absolute inset-0" loading="lazy" decoding="async" src="https://storage.googleapis.com/a1aa/image/SCNzYWc3C8JeIS40EpJYcUAGeY78blFWvjxWHF2dlEGNi4dTA.jpg" alt="Hero Image" />
                
                {/* Dark Overlay for Better Text Visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>

                {/* Overlay Content */}
                <div className="relative z-10 flex flex-col items-center justify-center select-none">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-8xl max-w-7xl font-bold bg-gradient-to-b from-neutral-800 via-white to-white text-transparent bg-clip-text tracking-tight py-4">
                        Indie Hackers Army
                    </h1>

                    {/* Sub-Heading */}
                    <h2 className="my-4 max-w-xl mx-auto ps-16 pe-16 md:ps-0 md:pe-0 font-normal text-neutral-200 text-center text-base md:text-xl relative z-10">
                        Make Your Indie Hacker Page & Showcase Your Projects to the World.
                    </h2>

                    {/* Button */}
                    <button onClick={()=>{
                         navigate('/createprofile')
                    }} className="relative bg-slate-50 text-zinc-800 font-semibold px-8 py-4 rounded-full mt-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
                        <span className="relative z-10">Create Your Page</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;
