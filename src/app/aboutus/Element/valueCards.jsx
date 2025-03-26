export default function ValueCards({ icon, value, textValue, margin, Key }) {
  return (
    <div className={`pt-[80px] flex justify-center`}>
      <div
        className={`${margin} w-[300px] h-[150px] bg-white shadow-md shadow-black rounded-md grid grid-rows-[60px_30px_30px]`}
      >
        <div className=" pt-5 ">
          <div className=" -mx-5 scale-[80%]">{icon}</div>
        </div>
        <div className="pl-3">
          <h4 className="text-[#00620E] text-[15px]">{value}</h4>
        </div>
        <div className="pl-3">
          <p className="text-[11px]">{textValue}</p>
        </div>
      </div>
    </div>
  );
}
