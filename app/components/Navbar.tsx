import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const Navbar = () => {
    return (
        <>
            <nav className="w-full bg-transparent pt-6 container mx-auto gap-y-5">
                <div className="flex justify-between px-8 md:px-0 items-start lg:items-center">
                    <div className="flex gap-x-5 justify-start items-center w-1/2">
                        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-5">
                            <h1 className="font-bold text-primaryColor text-2xl">MJRENT</h1>
                        </div>
                        <div className="relative flex-grow hidden md:block">
                            <IoSearchSharp className="text-2xl text-secondColor absolute top-2 left-3" />
                            <input 
                                className="border border-gray-300 text-md pl-12 py-2 w-full rounded-2xl focus:outline-blue-300"
                                placeholder="Search"
                                type="text"
                            />
                            <VscSettings className="text-xl absolute top-3 right-3 flex text-gray-700"/>
                        </div>
                    </div>
                    <Image width={38} height={38} src="/Images/profil.png" alt="logo"></Image>
                </div>
                <div className="flex justify-between px-8 items-center w-full mt-3 gap-x-2 md:pt-5 md:hidden">
                    <div className="relative flex-grow">
                        <IoSearchSharp className="text-2xl text-secondColor absolute top-2 left-3" />
                        <input 
                            className="border border-gray-300 text-md pl-12 py-2 w-full rounded-2xl focus:outline-blue-300"
                            placeholder="Search"
                            type="text"
                        />
                    </div>
                    <div className="flex border border-gray-300 p-3 rounded-xl justify-center flex-shrink">
                        <VscSettings className="text-xl"/>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;