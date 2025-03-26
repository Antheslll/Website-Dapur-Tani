import BuyNowButton from "@/app/GlobalComponent/Button/BuyNowButton/buyNowButton";
import { useButtonContext } from "@/app/GlobalComponent/Hooks/activeButtonContext";
import NextPrevButton from "../../nextPrevButton";

export default function SlideShowContent() {
  const { activeButton } = useButtonContext();

  return (
    <div className="w-[100%] h-[400px] dark-green-bg grid  ">
      <div className="w-[80vw] h-[330px]  m-auto my-8.5 flex flex-row gap-10 overflow-hidden">
        <Slide
          imageRef="/slideShow/slideBackground1.png"
          header={
            <>
              Dapat Sayur Segar
              <br /> Langsung dari Alam
            </>
          }
          subheader="Diskon Spesial untuk Sayur Pilihan!"
          margin={activeButton === "next" ? "-40vw" : "0px"}
          type="vegetable"
        />

        <Slide
          imageRef="/slideShow/slideBackground2.png"
          header={
            <>
              Dapatkan Daging Segar,
              <br /> Lezat & Berkualitas
            </>
          }
          subheader="Potongan Harga untuk Semua Jenis Daging!"
          type="fruit"
        />
      </div>
    </div>
  );
}

function Slide({ imageRef, header, subheader, margin, type }) {
  return (
    <div
      className="flex-shrink-0 w-[57vw] h-[330px]"
      style={{
        marginLeft: margin,
        transition: "margin-left 1s ease-in-out",
      }}
    >
      <img
        className="relative z-0 inset-0 object-cover w-[57vw] h-[330px] rounded-2xl "
        src={imageRef || null}
      />
      <div className="w-[57vw] h-[330px] sticky inset-0  bg-black/50 rounded-2xl grid -my-[2px]">
        <div className=" text-white relative z-10 mx-5 my-10 grid-row-[300px_200px] ">
          <div className="">
            <h1 className="text-2xl font-bold  font-[Verdana]">{header}</h1>
            <p className="text-[12px] my-2">{subheader}</p>
          </div>
          <div className="grid grid-cols-[28.5vw_28.5vw] w-[57vw] relative z-20">
            <div className="">
              <BuyNowButton type={type} />
            </div>
            <div className="grid w-[28.5vw] ">
              <NextPrevButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
