import sliderImg1 from "../../../assets/coxs_bazar.png";
import sliderImg2 from "../../../assets/Sreemongol.png";
import sliderImg3 from "../../../assets/sundorbon.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./Banner.css";

const Slider = () => {
  return (
    <div>
      {/* slider */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 flex-col lg:flex-row mt-20 -mr-48 ">
          {/* slider 1 */}
          <div className="w-[260px] h-[400px] relative selected">
            {/* overlay div */}
            <div className="custom-gradient absolute inset-0 rounded-[20px]"></div>
            <img
              className="h-full object-cover rounded-[20px]"
              src={sliderImg1}
            />
            <p className="absolute left-5 bottom-8 text-3xl font-semibold text-white">
              Cox's bazar
            </p>
          </div>
          {/* slider 2 */}
          <div className="w-[260px] h-[400px] relative">
            {/* overlay div */}
            <div className="custom-gradient absolute inset-0 rounded-[20px]"></div>
            <img
              className="h-full object-cover rounded-[20px]"
              src={sliderImg2}
            />
            <p className="absolute left-5 bottom-8 text-3xl font-semibold text-white">
              Sreemongol
            </p>
          </div>
          {/* slider 3 */}
          <div className="w-[260px] h-[400px] relative">
            {/* overlay div */}
            <div className="custom-gradient absolute inset-0 rounded-[20px]"></div>
            <img
              className="h-full object-cover rounded-[20px]"
              src={sliderImg3}
            />
            <p className="absolute left-5 bottom-8 text-3xl font-semibold text-white">
              Sundorbon
            </p>
          </div>
        </div>
      </div>
      {/* slide change button */}
      <div className="flex gap-8 absolute left-[35%] bottom-1">
        <button className="bg-white w-14 h-14 rounded-full">
          <FaAngleLeft className="mx-auto" />
        </button>
        <button className="bg-white w-14 h-14 rounded-full">
          <FaAngleRight className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
