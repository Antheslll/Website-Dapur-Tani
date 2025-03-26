export default function NotificationCard({ header, content, symbol }) {
  return (
    <div className="w-[16vw] h-[80px] bg-white border-2 border-black grid grid-cols-[30%_70%] rounded-2xl shadow-md shadow-black">
      <div className=" flex justify-center items-center ">
        <div className="w-[3.5vw] h-[3.5vw] bg-[#D9D9D9] rounded-[50px] flex justify-center items-center ">
          {symbol}
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <h5 className="text-[0.7rem]">{header}</h5>
          <p className="text-[0.5rem] md:pr-2 lg:pr-0">{content}</p>
        </div>
      </div>
    </div>
  );
}
