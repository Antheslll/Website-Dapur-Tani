const CustomToolbar = (toolbar) => {
  return (
    <div className="w-[50%] ml-[25%] grid grid-rows-[20px_30px]">
      <div>
        <h1 className="text-center text-[18px] font-[Roboto-bold] ">
          Calendar
        </h1>
      </div>
      <div className=" grid grid-cols-[20%_60%_20%]">
        <button
          className="text-[15px]"
          onClick={() => toolbar.onNavigate("PREV")}
        >
          &lt;
        </button>
        <h4 className="text-center text-[15px]">{toolbar.label}</h4>
        <button
          className="text-[15px]"
          onClick={() => toolbar.onNavigate("NEXT")}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
export default CustomToolbar;
