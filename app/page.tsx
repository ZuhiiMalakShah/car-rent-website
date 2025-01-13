import Navbar from "./components/Navbar";
import Card from "./components/Card";
import PopularCar from "./components/PopularCar";
import PicknDrop from "./components/PicknDrop";
import { RiArrowUpDownFill } from "react-icons/ri";
import RecomendationCar from "./components/RecomendationCar";

export default function Home() {
  return (
    <main className="bg-bgPrimaryColor">
      <Navbar />
      <div className="flex flex-col mx-8 mt-8 gap-y-7 pb-8">
        <div className="flex gap-x-8">
          <Card 
            bgImageCard="/Images/BG.png"
            backgroundCard="bg-backgroundCardColor md:flex-1"
            buttonCard="bg-primaryColor"
            title="The Best Platform for Car Rental" 
            imageCard="/Images/koenigsegg.png"
            subtext="Ease of doing a car rental safely and reliably. Of course at a low price." 
          />
          
          <div className="hidden md:block flex-1 overflow-hidden">
            <Card
              bgImageCard="/Images/BG2.png"
              backgroundCard="bg-primaryColor"
              buttonCard="bg-backgroundCardColor"
              title="The Best Platform for Car Rental"
              imageCard="/Images/nissan-gtr-silver.png"
              subtext="Ease of doing a car rental safely and reliably. Of course at a low price." 
              />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <PicknDrop 
            title= "Pick-Up"
            location="surabaya"
            date= "12 August 2022"
            time= "10:00"
          />
          <RiArrowUpDownFill className="flex justify-center bg-primaryColor p-3 shadow-xl rounded-lg text-5xl text-white"/>
          <PicknDrop 
            title= "Drop-Off"
            location="Semarang"
            date= "13 August 2022"
            time= "06.00"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-10 mb-10">
        <PopularCar />
        <RecomendationCar />
      </div>
      <div className="flex justify-center mb-12">
        <button className="bg-primaryColor text-white p-2 rounded-lg">
          Show more car
        </button>
      </div>
    </main>
  );
}
