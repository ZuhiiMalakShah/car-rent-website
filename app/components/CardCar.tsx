import { FcLike } from "react-icons/fc";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { RiSteering2Fill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import Image from "next/image";

const CardCar = ({CarName, CarNameImage, typeCar, pumpFill, steeringType, soldBy, cost}: {CarName: string, CarNameImage: string, typeCar: string, pumpFill: number, steeringType: string, soldBy: number, cost: {price: number}}) => {
    return(
        <div className="flex flex-col bg-white p-6 rounded-lg justify-between font-jakarta w-full sm:w-fit">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{CarName}</h2>
                <FcLike className="text-xl"/>
            </div>
            <p className="text-gray-500">{typeCar}</p>
            <Image 
                width={125} 
                height={45} 
                src={`/Images/${CarNameImage}.png`}
                alt="car"
                className="mt-5 mx-auto"
            />
            <div className="flex justify-between gap-4 mt-6">
                <div className="flex text-gray-500 items-center gap-x-1">
                    <BsFillFuelPumpFill />
                    <p className="text-sm">{pumpFill}L</p>
                </div>
                <div className="flex text-gray-500 items-center gap-x-1">
                    <RiSteering2Fill />
                    <p className="text-sm">{steeringType}</p>
                </div>
                <div className="flex text-gray-500 items-center gap-x-1">
                    <IoPeople />
                    <p className="text-sm">{soldBy} People</p>
                </div>
            </div>
            <div className="flex justify-between items-center gap-x-3 mt-4">
                <p className="font-semibold text-lg">
                    {cost.price.toLocaleString('id-ID', {style: 'currency', currency: 'USD'})}
                </p>
                <button 
                    className="bg-primaryColor text-white p-3 rounded-md text-base">
                    Rental Now
                </button>
            </div>
        </div>
    )
}

export default CardCar;