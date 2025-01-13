import CardCar from "./CardCar";

const RecomendationCarData = [
    {
        CarName: "All New Rush",
        CarNameImage: "rush",
        typeCar: "SUV",
        pumpFill: 70,
        steeringType: "Manual",
        soldBy: 6,
        cost: {
            price: 72.00
        }
    }, 
    {
        CarName: "CR-V",
        CarNameImage: "crv-brown",
        typeCar: "SUV",
        pumpFill: 80,
        steeringType: "Manual",
        soldBy: 6,
        cost: {
            price: 80.00
        }
    },
    {
        CarName: "All New Terios",
        CarNameImage: "terios",
        typeCar: "SUV",
        pumpFill: 90,
        steeringType: "Manual",
        soldBy: 6,
        cost: {
            price: 74.00
        }
    },
    {
        CarName: "CR-V",
        CarNameImage: "crv-black",
        typeCar: "SUV",
        pumpFill: 80,
        steeringType: "Manual",
        soldBy: 6,
        cost: {
            price: 80.00
        }
    },
    {
        CarName: "MG ZX Exculsive",
        CarNameImage: "mg-zx",
        typeCar: "Hatchback",
        pumpFill: 70,
        steeringType: "Manual",
        soldBy: 4,
        cost: {
            price: 76.00
        }
    }, 
    {
        CarName: "New MG ZS",
        CarNameImage: "new-mg-white",
        typeCar: "SUV",
        pumpFill: 80,
        steeringType: "Manual",
        soldBy: 6,
        cost: {
            price: 80.00
        }
    },
    {
        CarName: "MG ZX Excite",
        CarNameImage: "mg-zx",
        typeCar: "Hatchback",
        pumpFill: 90,
        steeringType: "Manual",
        soldBy: 4,
        cost: {
            price: 74.00
        }
    },
    {
        CarName: "New MG ZS",
        CarNameImage: "new-mg-white",
        typeCar: "SUV",
        pumpFill: 80,
        steeringType: "Manual",
        soldBy: 6,
        cost: {
            price: 80.00
        }
    },
]

const RecomendationCar = () => {
    return(
        <div className="flex flex-col gap-4 px-8">
            <div className="flex justify-between">
                <h3 className="text-base font-medium text-gray-400">Recomendation Car</h3>
            </div>
            <div className="flex flex-wrap gap-4 w-full">
                {RecomendationCarData.map((item, index) => {
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

export default RecomendationCar;