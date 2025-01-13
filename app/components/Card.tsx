import Image from "next/image";

const Card = ({title, subtext, backgroundCard, buttonCard, imageCard, bgImageCard}: {title: string, subtext: string, backgroundCard: string, buttonCard: string, imageCard: string, bgImageCard: string}) => {
    return (
        <div className={`${backgroundCard} flex items-start p-4 flex-col gap-y-3 rounded-2xl relative w-full md:h-56 justify-between`}>
            <div className="flex flex-col gap-y-3">
                <Image className="absolute right-16 md:right-24 lg:right-64 lg:-top-1 object-contain" width={500} height={300} src={`${bgImageCard}`} alt="BG"></Image>
                <h2 className="text-lg text-white font-semibold">{title}</h2>
                <p className="text-white text-sm font-normal">{subtext}</p>
                <button className={`${buttonCard} text-white py-2 px-4 w-fit z-10 text-sm rounded-md`}>Rental Car</button>
            </div>
            <Image className="mx-auto object-contain" width={150} height={50} src={`${imageCard}`} alt="carCard"></Image>
        </div>
    )
}

export default Card;