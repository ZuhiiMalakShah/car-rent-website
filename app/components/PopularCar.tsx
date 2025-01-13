import CardCar from "./CardCar";

const dataPopularCar = [
    {
        CarName: "Koenigsegg",
        CarNameImage: "koenigsegg",
        typeCar: "Sport",
        pumpFill: 90,
        steeringType: "Manual",
        soldBy: 2,
        cost: {
            price: 99.00
        }
    }, 
    {
        CarName: "Nissan GT-R",
        CarNameImage: "nissan-gtr-silver",
        typeCar: "Sport",
        pumpFill: 80,
        steeringType: "Manual",
        soldBy: 2,
        cost: {
            price: 80.00
        }
    },
    {
        CarName: "Rolls-Royce",
        CarNameImage: "rolls-royce",
        typeCar: "Sedan",
        pumpFill: 70,
        steeringType: "Manual",
        soldBy: 4,
        cost: {
            price: 96.00
        }
    },
    {
        CarName: "Nissan GT-R",
        CarNameImage: "nissan-gtr-silver",
        typeCar: "Sport",
        pumpFill: 80,
        steeringType: "Manual",
        soldBy: 2,
        cost: {
            price: 80.00
        }
    },
]

const PopularCar = () => {
    return(
        <div className="flex flex-col gap-4 px-8">
            <div className="flex justify-between">
                <h3 className="text-base font-medium text-gray-400">Popular Car</h3>
                <a className="text-base text-primaryColor font-medium" href="#">View All</a>
            </div>
            <div className="flex gap-x-4 snap-x scroll-smooth snap-mandatory overflow-x-scroll no-scrollbar">
                {dataPopularCar.map((item, index) => {
                    return(
                        <CardCar 
                            key={index}
                            CarName={item.CarName}
                            CarNameImage={item.CarNameImage}
                            typeCar={item.typeCar}
                            pumpFill={item.pumpFill}
                            steeringType={item.steeringType}
                            soldBy={item.soldBy}
                            cost={item.cost}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PopularCar;