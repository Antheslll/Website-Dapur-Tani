import { useCatalogHooks } from "../../Hooks/catalogHooks";

export default function FilterByLocattion() {
  const { dispatch } = useCatalogHooks();
  const handleLocation = (e) => {
    dispatch({ type: "SET_LOCATION", payload: e.target.value });
  };
  return (
    <div className="grid grid-rows-[40px_60px]">
      <div className="pl-10 pt-2 font-[Roboto-bold] text-[15px] text-[#9F9F9F]">
        <h2>Location</h2>
      </div>
      <div className="pl-10">
        <select
          className="w-[210px] h-[22px] text-[12px] border border-black rounded-sm"
          onChange={(e) => handleLocation(e)}
        >
          <option>-</option>
          <option>Jakarta</option>
          <option>Bogor</option>
          <option>Depok</option>
          <option>Tangerang</option>
          <option>Bekasi</option>
        </select>
      </div>
    </div>
  );
}
