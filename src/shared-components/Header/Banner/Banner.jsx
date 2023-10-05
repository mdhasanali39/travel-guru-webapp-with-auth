import { FaArrowRightLong } from "react-icons/fa6";
import "./Banner.css";
import Slider from "./Slider";
import { useState } from "react";
import BookingCard from "./BookingCard";


const Banner = () => {
  const [isClicked, setIsClicked] = useState(true);
  console.log(isClicked);



  return (
    <div className="flex items-center min-h-[60vh] relative">
      <div className="text-white relative">
        <h2 className="text-6xl font-bold">Cox's bazar</h2>
        <p className="w-[60%] mt-2 mb-6">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button
          onClick={() => setIsClicked(true)}
          className=" px-4 py-3 font-medium flex items-center gap-2 bg-[#F9A51A] rounded-md"
        >
          Booking <FaArrowRightLong />
        </button>
      </div>

      {isClicked && <BookingCard setIsClicked={setIsClicked}></BookingCard>}
      {isClicked || <Slider></Slider>}
    </div>
  );
};

export default Banner;
