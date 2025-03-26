export default function AutomationOverlay() {
  return (
    <div className="w-full h-full bg-black/50 absolute z-50 flex justify-center pt-[170px]">
      <div className="bg-white w-[70%] h-[200px] rounded-lg grid grid-rows-[50px_30px_120px] fixed">
        <div className="pl-5 pt-4">
          <h1 className="text-[25px]">Automation Order#1</h1>
        </div>
        <div className=" pl-5">
          <span className="text-[10px] text-[#04E824]">
            Every 1st of the month
          </span>
        </div>
        <div className=" pl-3 flex items-center">
          <div className="ml-2">
            <div className="w-[70px] h-[70px] bg-black rounded-md">
              <img
                src="/bestSeller/apple.jpg"
                alt="foto buah apel"
                className="w-[70px] h-[70px] object-cover relative z-10 border-2 border-black rounded-md"
              />
            </div>
            <div className="w-[20px] h-[20px] text-[13px] relative z-20 bg-white -mt-7 ml-10 rounded-xl flex justify-center items-center border-2 border-black">
              1
            </div>
          </div>
          <div className="ml-2">
            <div className="w-[70px] h-[70px] bg-black rounded-md">
              <img
                src="/bestSeller/apple.jpg"
                alt="foto buah apel"
                className="w-[70px] h-[70px] object-cover relative z-10 border-2 border-black rounded-md"
              />
            </div>
            <div className="w-[20px] h-[20px] text-[13px] relative z-20 bg-white -mt-7 ml-10 rounded-xl flex justify-center items-center border-2 border-black">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
