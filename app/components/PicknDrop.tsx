import { MdOutlineExpandMore } from "react-icons/md";

const PicknDrop = ({title, location, date, time}: {title: string, location: string, date: string, time: string}) => {
    return(
        <>
            <div className="bg-white p-6 rounded-xl flex-1 w-full">
                <div className="flex gap-x-4 items-center">
                    <div className="flex justify-center items-center bg-primaryColor rounded-full size-2">
                        <div className="bg-primaryColor opacity-30 rounded-full p-2"></div>
                    </div>
                    <h3 className="font-semibold text-xs">{title}</h3>
                </div>
                <div className="flex justify-between gap-x-5 mt-5">
                    <div className="flex flex-col gap-y-2">
                        <h4 className="text-sm font-semibold">Location</h4>
                        <div className="flex items-start gap-x-1">
                            <h4 className="font-jakarta font-thin text-gray-400 text-xs capitalize">{location}</h4>
                            <MdOutlineExpandMore className="text-gray-500" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h4 className="text-sm font-semibold">Date</h4>
                        <div className="flex items-start gap-x-1">
                            <h4 className="font-jakarta font-thin text-gray-400 text-xs">{date}</h4>
                            <MdOutlineExpandMore className="text-gray-500" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h4 className="text-sm font-semibold">Time</h4>
                        <div className="flex items-start gap-x-1">
                            <h4 className="font-jakarta font-thin text-gray-400 text-xs">{time}</h4>
                            <MdOutlineExpandMore className="text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PicknDrop;