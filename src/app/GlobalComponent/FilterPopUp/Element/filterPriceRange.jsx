"use client";
import { useState } from "react";
import { useCatalogHooks } from "../../Hooks/catalogHooks";

export default function FilterPriceRange() {
  const { state, dispatch } = useCatalogHooks();
  const min = 0;
  const max = 1000000;

  const handleMinPriceChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    dispatch({
      type: "SET_MIN_PRICE",
      payload: value === "" ? 0 : Math.min(Math.max(Number(value), min), max),
    });
  };

  const handleMaxPriceChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Hanya angka
    dispatch({
      type: "SET_MAX_PRICE",
      payload: value === "" ? 0 : Math.min(Math.max(Number(value), min), max),
    });
  };

  return (
    <div className="grid grid-rows-[30px_40px_40px]">
      <div className="pl-10 pt-2 font-[Roboto-bold] text-[15px] text-[#9F9F9F]">
        <h2>Price Range</h2>
      </div>

      <div className="w-[80%] pl-10 grid grid-cols-2 pt-2">
        <div>
          <input
            type="number"
            placeholder="Min"
            value={state.isMinPrice}
            onChange={handleMinPriceChange}
            className="w-[150px] h-[20px] border border-black rounded-md pl-2 text-[13px]"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Max"
            value={state.isMaxPrice}
            onChange={handleMaxPriceChange}
            className="w-[150px] h-[20px] border border-black rounded-md pl-2 text-[13px]"
          />
        </div>
      </div>

      {/* Label Harga */}
      <div className="text-[10px] absolute mt-[80px] ml-7 text-[#04E824]">
        Rp 0
      </div>
      <div className="text-[10px] absolute mt-[80px] ml-[37%] text-[#04E824]">
        Rp 1.000.000
      </div>

      {/* Slider */}
      <div className="pl-10 pt-3">
        <div className="relative w-[300px]">
          <div
            className="w-[30px] absolute grid grid-cols-2 -top-3 text-green-600 text-[10px] font-semibold"
            style={{
              left: `${(state.isMaxPrice / max) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div>Rp</div>
            <div>{Number(state.isMaxPrice).toLocaleString("id-ID")}</div>
          </div>
        </div>

        <input
          type="range"
          min={min}
          max={max}
          value={state.isMaxPrice}
          onChange={handleMaxPriceChange}
          className="w-[320px] h-1 bg-[#04E824] appearance-none range-thumb"
        />
      </div>
    </div>
  );
}
