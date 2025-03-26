"use client";

import { useCatalogHooks } from "@/app/GlobalComponent/Hooks/catalogHooks";
import { NextIconB, PrevIconB } from "@/app/icons/navIcon";

export default function NavigationInCatalog() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[130px] h-[50px] grid grid-cols-[20px_30px_30px_30px_20px] ">
        <div className="scale-[60%] flex justify-center items-center">
          <PrevIconB />
        </div>
        <NavCatalogInPage page={1} />
        <NavCatalogInPage page={2} />
        <NavCatalogInPage page={3} />
        <div className="scale-[60%] flex justify-center items-center">
          <NextIconB />
        </div>
      </div>
    </div>
  );
}

function NavCatalogInPage({ page }) {
  const { state, dispatch } = useCatalogHooks();
  return (
    <div className="flex justify-center items-center">
      <button
        className={`${
          state.isPageActive === page ? "bg-[#04E824] text-white" : "bg-white"
        } w-[25px] h-[25px] font-[Roboto-bold] rounded-md shadow-md shadow-black `}
        onClick={() => {
          dispatch({ type: "SET_PAGE_ACTIVE", payload: page });
        }}
      >
        {page}
      </button>
    </div>
  );
}
