import StarFilterButton from "../../Button/StarFilterButton/starFilterButton";
export default function FilterByStars() {
  return (
    <div className="grid grid-rows-[40px_80px]">
      <div className="pl-10 pt-2 font-[Roboto-bold] text-[15px] text-[#9F9F9F]">
        <h2>Star Rating</h2>
      </div>
      <div className="pl-10">
        <div className="w-[40%] grid grid-cols-3 gap-2">
          <StarFilterButton starAmount={1} />
          <StarFilterButton starAmount={2} />
          <StarFilterButton starAmount={3} />
          <StarFilterButton starAmount={4} />
          <StarFilterButton starAmount={5} />
        </div>
      </div>
    </div>
  );
}
