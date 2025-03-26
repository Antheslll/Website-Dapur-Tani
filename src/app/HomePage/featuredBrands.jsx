"use client";
import FeaturedBrandCard from "./featuredBrandCard";
import { useState, useEffect } from "react";
import OverlayFB from "./overlayFeaturedBrand";
// import { PrevIcon, NextIcon } from "../../icons/navIcon";

export default function FeaturedBrands() {
  const [isClicked, setIsClicked] = useState(null);
  const [isArrowClicked, setIsArrowClick] = useState(1);
  const [overlayData, setOverlayData] = useState({
    image: "",
    brand: "",
    text: "",
  });
  const prevClick = (e) => {
    e.stopPropagation();
    setIsArrowClick((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const nextClick = (e) => {
    e.stopPropagation();
    setIsArrowClick((prev) => (prev < 3 ? prev + 1 : prev));
  };
  const handleClick = (id) => {
    setIsClicked(id);
    setIsArrowClick(1);
  };

  useEffect(() => {
    isClicked && isClicked >= 1 && isClicked <= FBD.length
      ? isArrowClicked === 1
        ? setOverlayData({
            image: FBD[isClicked - 1].img1,
            brand: FBD[isClicked - 1].brand,
            text: FBD[isClicked - 1].text1,
          })
        : isArrowClicked === 2
        ? setOverlayData({
            image: FBD[isClicked - 1].img2,
            brand: FBD[isClicked - 1].brand,
            text: FBD[isClicked - 1].text2,
          })
        : setOverlayData({
            image: FBD[isClicked - 1].img3,
            brand: FBD[isClicked - 1].brand,
            text: FBD[isClicked - 1].text3,
          })
      : null;
  }, [isClicked, isArrowClicked]);

  // useEffect(() => {
  //   console.log("isArrowClicked:", isArrowClicked);
  // }, [isArrowClicked]);

  return (
    <>
      <div className=" w-[100%] h-[350px] grid grid-rows-[50px_300px] ">
        <div className="mx-5">
          <h1 className="text-[25px] font-[Roboto-bold]">Featured Brand</h1>
        </div>
        <div className="w-[100%] h-[300px] flex flex-row max-[668px]:gap-5 max-[668px]:pl-[2vw] ">
          {FBD.map((item) => (
            <FeaturedBrandCard
              key={item.id}
              imageRef={item.image}
              brand={item.brand}
              text={item.text}
              clicker={handleClick}
              keyId={item.id}
            />
          ))}
        </div>
        {isClicked === 1 ? (
          <OverlayFB
            {...overlayData}
            setIsClicked={setIsClicked}
            setIsArrowClick={setIsArrowClick}
            prevClick={prevClick}
            nextClick={nextClick}
            isArrowClicked={isArrowClicked}
          />
        ) : isClicked === 2 ? (
          <OverlayFB
            {...overlayData}
            setIsClicked={setIsClicked}
            setIsArrowClick={setIsArrowClick}
            prevClick={prevClick}
            nextClick={nextClick}
            isArrowClicked={isArrowClicked}
          />
        ) : isClicked === 3 ? (
          <OverlayFB
            {...overlayData}
            setIsClicked={setIsClicked}
            setIsArrowClick={setIsArrowClick}
            prevClick={prevClick}
            nextClick={nextClick}
            isArrowClicked={isArrowClicked}
          />
        ) : isClicked === 4 ? (
          <OverlayFB
            {...overlayData}
            setIsClicked={setIsClicked}
            setIsArrowClick={setIsArrowClick}
            prevClick={prevClick}
            nextClick={nextClick}
            isArrowClicked={isArrowClicked}
          />
        ) : null}
      </div>
    </>
  );
}

const FBD = [
  {
    id: 1,
    image: "/featuredBrands/fb-3.jpg",
    brand: "AGRINOVA",
    text: "Go Along with us, 100% fresh!",
    img1: "/featuredBrands/fbslide-1.png",
    text1:
      "Menyediakan Kualitas, membangun kepercayaan, \n dan menghadirkan inovasi di setiap produk",
    img2: "/featuredBrands/fbslide-2.png",
    text2:
      "Menyatukan Inovasi dan ketahanan dalam setiap pasokan, karena kualitas adalah fondasi bisnis yang berkelanjutan",
    img3: "/featuredBrands/fbslide-3.png",
    text3:
      "Dari sumber terbaik hingga pelanggan, Agrinova memastikan setiap rantai pasokan berjalan dengan presisi dan keunggulan.",
  },
  {
    id: 2,
    image: "/featuredBrands/fb-2.jpg",
    brand: "PRIME CUTS DISTRIBUTION",
    text: "Premiiun cuts, fresh and ready to cook",
    img1: "/featuredBrands/fbslidem-1.png",
    text1:
      "Kualitas daging premium, dipilih dengan teliti \n untuk rasa yang tak terlupakan di setiap hidangan.",
    img2: "/featuredBrands/fbslidem-2.png",
    text2:
      "Dari peternakan terbaik ke meja makan Anda, \n kami menjamin kesegaran dan kelezatan yang otentik.",
    img3: "/featuredBrands/fbslidem-3.png",
    text3:
      "Prime Cuts Distribution: Memastikan setiap potongan daging adalah perpaduan sempurna antara kualitas dan cita rasa.",
  },
  {
    id: 3,
    image: "/featuredBrands/fb-4.jpg",
    brand: "SPICE ESSENCE",
    text: "Nature's flavors, harvested for you",
    img1: "/featuredBrands/fbslideh-1.png",
    text1:
      "Menghadirkan aroma autentik, \n membawa cita rasa nusantara ke setiap masakan.",
    img2: "/featuredBrands/fbslideh-2.png",
    text2:
      "Dipilih dari sumber terbaik, \n memastikan kekayaan rasa dan kesegaran dalam setiap butir.",
    img3: "/featuredBrands/fbslideh-3.png",
    text3:
      "Rempah Rempah: Rahasia kelezatan yang memperkaya \n setiap hidangan dengan kehangatan dan keotentikan rasa.",
  },
  {
    id: 4,
    image: "/featuredBrands/fb-1.jpg",
    brand: "BULK HARVEST SUPPLY",
    text: "Bul pricing for all your needs",
    img1: "/featuredBrands/fbslidew-1.png",
    text1:
      "Solusi grosir terpercaya, \n memenuhi kebutuhan bisnis Anda dengan efisiensi.",
    img2: "/featuredBrands/fbslidew-2.png",
    text2:
      "Harga bersaing dan kualitas terjamin, \n mendukung pertumbuhan usaha tanpa kompromi.",
    img3: "/featuredBrands/fbslidew-3.png",
    text3:
      "Dari gudang hingga toko Anda, \n Wholesale hadir dengan kecepatan dan ketepatan pengiriman.",
  },
];
