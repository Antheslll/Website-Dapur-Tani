"use client";
import { useCatalogHooks } from "@/app/GlobalComponent/Hooks/catalogHooks";
import BackIcon from "@/app/icons/back-icon";
import FilterIcon from "@/app/icons/filter-icon";
import { SearchIconWhite } from "@/app/icons/search-icon";
import { useState } from "react";

export default function SearchNecessary() {
  const [searchTerm, setSearchTerm] = useState("");

  const { state, dispatch } = useCatalogHooks();

  const handleSearchApply = (word) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: word });
    dispatch({ type: "SET_SEARCH_APPLIED", payload: true });
    dispatch({
      type: "SET_FAST_FILTER",
      payload: false,
    });
    dispatch({
      type: "SET_EXECUTION_STATE",
      payload: { key: "isTypeExecute", value: word },
    });
    dispatch({ type: "SET_TYPE_FILTER", payload: word });
  };

  return (
    <div className="grid grid-rows-[60px_110px]">
      <div className="pt-[20px] pl-[15%]">
        <div className="w-[90%] h-[45px] border-b-2 border-black pl-[2%]">
          <h4 className="font-[Roboto-bold] text-[23px]">Meat Catalog</h4>
        </div>
      </div>
      <div className="pt-[40px] pl-[15%]">
        <div className="w-[90%] grid grid-rows-[50px_30px]">
          <div className="w-full grid grid-cols-[15%_85%] ">
            <div className=" grid grid-cols-[30%_70%] ">
              <div className="pt-1.5">
                <div onClick={() => handleSearchApply("")}>
                  <BackIcon />
                </div>
              </div>
              <div className="pl-7 pt-1">
                <div
                  className="scale-[80%]"
                  onClick={() => {
                    dispatch({ type: "SET_ADVANCE_FILTER", payload: true });
                    dispatch({ type: "SET_FILTER_APPLIED", payload: false });
                  }}
                >
                  <FilterIcon />
                </div>
              </div>
            </div>
            <div>
              <div className="w-[80%] flex flex-row">
                <input
                  type="text"
                  className="bg-[#6E6E6E] h-[30px] w-[380px] pl-2 focus:outline-none text-white"
                  placeholder="Search for..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    e.key === "Enter" && handleSearchApply(searchTerm);
                  }}
                />
                <button
                  className="w-[60px] h-[30px] bg-[#3F4B3B] flex justify-center items-center rounded-md absolute ml-[28%]"
                  onClick={() => handleSearchApply(searchTerm)}
                >
                  <div className="scale-[80%]">
                    <SearchIconWhite />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[10%_90%]">
            <div></div>
            <div>
              <div>
                <span className="text-[#6E6E6E] text-[13px] font-bold">
                  Result for... "{state.isSearchTerm}"
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
