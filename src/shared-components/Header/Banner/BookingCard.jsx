import { AiOutlineCalendar } from "react-icons/Ai";

const BookingCard = ({ setIsClicked }) => {

  return (
    <div className="bg-white p-4 rounded-md space-y-3">
      <div>
        <h2 className="font-semibold text-gray-300">Origin</h2>
        <input
          className="w-full text-black font-bold border-none outline-none bg-slate-200 py-4 pl-3 rounded-md"
          type="text"
          placeholder="Dhaka"
        />
      </div>
      <div>
        <h2 className="font-semibold text-gray-300">Destination</h2>
        <input
          className="w-full text-black font-bold border-none outline-none bg-slate-200 py-4 pl-3 rounded-md"
          type="text"
          placeholder="Cox's Bazar"
        />
      </div>
      <div className="flex gap-4">
        {/* from  */}
        <div className="flex relative">
          <div>
            <h2 className="font-semibold text-gray-300">From</h2>
            <p className="text-black font-bold w-full px-40 bg-slate-200 py-4 pl-3 rounded-md">
              01/09
            </p>
          </div>
          <span className="absolute bottom-[50%] translate-y-[90%] right-2 text-3xl">
            <AiOutlineCalendar />
          </span>
        </div>
        {/* to  */}
        <div className="flex relative">
          <div className="w-full">
            <h2 className="font-semibold text-gray-300">To</h2>
            <p className="text-black font-bold w-full px-40 bg-slate-200 py-4 pl-3 rounded-md">
              01/09
            </p>
          </div>
          <span className="absolute bottom-[50%] translate-y-[90%] right-2 text-3xl">
            <AiOutlineCalendar />
          </span>
        </div>
      </div>
      <button 
      onClick={() => setIsClicked(false)}
      className="bg-[#F9A51A] text-white px-4 py-3 font-medium w-full rounded-md"
      >Start Booking</button>
    </div>
  );
};

export default BookingCard;
