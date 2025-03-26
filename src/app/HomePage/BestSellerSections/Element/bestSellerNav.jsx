"use Client";
import { useState } from "react";
export default function BestSellerNav({ setFilter }) {
  const [nowClicked, setNowClicked] = useState("fruit");

  return (
    <>
      <div className="w-[100%] h-[50px] grid grid-cols-[130px_80px_50px_50px_50px] mx-5">
        <div className="">
          <h1 className="text-[25px] font-[Roboto-bold] ">Best Seller</h1>
        </div>
        <BestSellerNavButton
          navName="Processed"
          setFilter={setFilter}
          navTo="Processed Produce"
          nowClicked={nowClicked}
          setNowClicked={setNowClicked}
        />
        <BestSellerNavButton
          navName="Fruit"
          setFilter={setFilter}
          navTo="Fruit"
          nowClicked={nowClicked}
          setNowClicked={setNowClicked}
        />

        <BestSellerNavButton
          navName="Spice"
          setFilter={setFilter}
          navTo="Spice"
          nowClicked={nowClicked}
          setNowClicked={setNowClicked}
        />
        <BestSellerNavButton
          navName="Meats"
          setFilter={setFilter}
          navTo="Meat"
          nowClicked={nowClicked}
          setNowClicked={setNowClicked}
        />
      </div>
    </>
  );
}

const BestSellerNavButton = ({
  navName,
  setFilter,
  navTo,
  nowClicked,
  setNowClicked,
}) => {
  return (
    <div>
      <button
        className={`btn text-center ${
          nowClicked === navTo ? "text-black" : "text-[grey]"
        }`}
        onClick={() => {
          setFilter(navTo);
          setNowClicked(navTo);
        }}
      >
        {navName}
      </button>
    </div>
  );
};
