export default function OrderListHeader() {
  return (
    <div className="w-[90%] grid grid-cols-2 ml-[3%] ">
      <div className="pl-[6%] pt-7">
        <h1 className="text-[25px] font-[Roboto-bold] ">Order List:</h1>
      </div>
      <div className="pl-[45%] pt-10">
        <div className=" w-[40%] flex">
          <div>
            <span className="font-[Roboto-reguler] text-[16px]">Sort:</span>
          </div>
          <div>
            <select className="border-[1.5px] w-[110px] h-[23px] ml-3 mt-[2px] rounded-md border-black pl-3 text-[13px]">
              <option>Instant</option>
              <option>Auto</option>
              <option>Wholesale</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
