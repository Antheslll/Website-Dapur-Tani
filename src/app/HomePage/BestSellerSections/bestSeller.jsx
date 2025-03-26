"use client";
import { useState } from "react";

import BestSellerNav from "./Element/bestSellerNav";
import ProductCard from "@/app/GlobalComponent/ProductCard/productCard";

export default function BestSeller() {
  const [filter, setFilter] = useState("Fruit");

  return (
    <>
      <div className="w-[100%] h-[50px] ">
        <BestSellerNav setFilter={setFilter} />
      </div>
      <div className="w-[100%] h-[400px] flex items-center justify-center overflow-x-scroll overflow-y-hidden scroll-smooth">
        <div className="min-[667px]:pl-[45vw] min-[667px]:gap-[3%] lg:w-[90%] h-[400px] flex flex-row flex-nowrap lg:gap-[3%] xl:gap-x-[5%] py-10 lg:pl-[2.5%] md:gap-[2%] min-[820px]:w-full min-[820px]:pl-[2%]">
          {infoBestSeller
            .filter((item) => item.category === filter)
            .slice(0, 5)
            .map((item) => (
              <ProductCard
                key={item.key}
                imageRef={item.imageRef}
                brand={item.brand}
                productName={item.productName}
                star={item.star}
                unit={item.unit}
                price={item.price}
                undiscountPrice={item.undiscountPrice}
                sold={item.sold}
                productKey={item.key}
                productCategory={item.category}
                supplierCertificate={item.certificate.legality}
                productType={item.type}
                productDescription={item.productDescription}
                productPromotionType={item.promotion.type}
                productPromotionValue={item.promotion.value}
              />
            ))}
        </div>
      </div>
    </>
  );
}

const infoBestSeller = [
  {
    key: "FREF01",
    category: "Fruit",
    imageRef: "/bestSeller/apple.jpg",
    brand: "Fruit Fusion",
    productName:
      "Apple Fuji – Rp 40,000/kg [ Sweet and crisp, perfect for snacks or pies. ]",
    star: 5,
    unit: "1kg",
    price: 40000,
    sold: "(50.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-FruitFusion.pdf",
      legality: "certified",
    },
    productDescription:
      "Apple Fuji – Fruit Fusion 🍎\n\nEnjoy the sweet and crisp taste of our Fuji apples, perfect for snacks or pies.\n\nWhy Choose Our Apples?\n\n✅ 100% Fresh & Organic.\n✅ Naturally Sweet – No added sugar.\n✅ Crisp Texture – Perfect for various uses.\n\n💡 Storage Tips:\nKeep in a cool, dry place.\nOrder now and enjoy Fruit Fusion Apples! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 14,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FREF02",
    category: "Fruit",
    imageRef: "/bestSeller/grapes.jpg",
    brand: "Pure Harvest",
    productName:
      "Grapes – Rp 50,000/kg [ Sweet and juicy, perfect for snacking or salads. ]",
    star: 5,
    unit: "1kg",
    price: 50000,
    sold: "(52.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-PureHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Grapes – Pure Harvest 🍇\n\nEnjoy the sweet and juicy taste of our fresh grapes, perfect for snacks or salads.\n\nWhy Choose Our Grapes?\n\n✅ 100% Fresh & Organic.\n✅ Naturally Sweet – No added sugar.\n✅ Juicy and Refreshing.\n\n💡 Storage Tips:\nKeep refrigerated for best quality.\nOrder now and enjoy Pure Harvest Grapes! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "SPIC01",
    category: "Spice",
    imageRef: "/bestSeller/chilli.jpg",
    brand: "Spicy Essence",
    productName:
      "Chilli – Rp 30,000/kg [ Spicy and vibrant, adds heat to any dish. ]",
    star: 5,
    unit: "1kg",
    price: 30000,
    sold: "(70.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-SpicyEssence.pdf",
      legality: "certified",
    },
    productDescription:
      "Chilli – Spicy Essence 🌶️\n\nAdd heat to your dishes with our vibrant and spicy chillies.\n\nWhy Choose Our Chillies?\n\n✅ 100% Fresh & Organic.\n✅ Naturally Spicy – No additives.\n✅ Versatile for various cuisines.\n\n💡 Storage Tips:\nKeep in a cool, dry place.\nOrder now and enjoy Spicy Essence Chillies! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 10,
      week: 0,
      month: 0,
    },
  },
  {
    key: "MEAT01",
    category: "Meat",
    imageRef: "/bestSeller/sirloin.jpg",
    brand: "Prime Cuts",
    productName:
      "Sirloin Beef – Rp 150,000/kg [ Tender and flavorful, ideal for grilling or steaks. ]",
    star: 5,
    unit: "1kg",
    price: 150000,
    sold: "(30.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-PrimeCuts.pdf",
      legality: "certified",
    },
    productDescription:
      "Sirloin Beef – Prime Cuts 🥩\n\nEnjoy tender and flavorful sirloin beef, ideal for grilling or steaks.\n\nWhy Choose Our Beef?\n\n✅ 100% Premium Quality.\n✅ Naturally Tender – No additives.\n✅ Perfect for grilling.\n\n💡 Storage Tips:\nKeep refrigerated and consume within 3 days.\nOrder now and enjoy Prime Cuts Beef! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 3,
      week: 0,
      month: 0,
    },
  },
  {
    key: "PROC01",
    category: "Processed Produce",
    imageRef: "/bestSeller/milk.jpg",
    brand: "Farm Fresh",
    productName:
      "Fresh Milk – Rp 20,000/liter [ Fresh and creamy, perfect for coffee or cereal. ]",
    star: 5,
    unit: "1liter",
    price: 20000,
    sold: "(100.000 unit)",
    type: "Processed",
    certificate: {
      file: "certificate-FarmFresh.pdf",
      legality: "certified",
    },
    productDescription:
      "Fresh Milk – Farm Fresh 🥛\n\nEnjoy fresh and creamy milk, perfect for coffee or cereal.\n\nWhy Choose Our Milk?\n\n✅ 100% Fresh & Natural.\n✅ Creamy Texture.\n✅ No preservatives.\n\n💡 Storage Tips:\nKeep refrigerated and consume within 7 days.\nOrder now and enjoy Farm Fresh Milk! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FREF03",
    category: "Fruit",
    imageRef: "/bestSeller/salak.jpg",
    brand: "Exotic Harvest",
    productName:
      "Salak – Rp 35,000/kg [ Sweet and crunchy, also known as snake fruit due to its scaly skin. ]",
    star: 4,
    unit: "1kg",
    price: 35000,
    sold: "(25.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-ExoticHarvest.pdf",
      legality: "certified",
    },
    productDescription:
      "Salak – Exotic Harvest 🐍\n\nEnjoy the sweet and crunchy taste of our salak, also known as snake fruit.\n\nWhy Choose Our Salak?\n\n✅ 100% Fresh & Organic.\n✅ Unique Texture and Flavor.\n✅ Naturally Sweet.\n\n💡 Storage Tips:\nKeep in a cool, dry place.\nOrder now and enjoy Exotic Harvest Salak! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 10,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FREF04",
    category: "Fruit",
    imageRef: "/bestSeller/matoa.jpg",
    brand: "Tropical Delight",
    productName:
      "Matoa – Rp 60,000/kg [ Unique flavor resembling a mix of rambutan and lychee. ]",
    star: 5,
    unit: "1kg",
    price: 60000,
    sold: "(15.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-TropicalDelight.pdf",
      legality: "certified",
    },
    productDescription:
      "Matoa – Tropical Delight 🌴\n\nEnjoy the unique flavor of our matoa, resembling a mix of rambutan and lychee.\n\nWhy Choose Our Matoa?\n\n✅ 100% Fresh & Organic.\n✅ Exotic Flavor Profile.\n✅ Naturally Sweet.\n\n💡 Storage Tips:\nKeep in a cool, dry place.\nOrder now and enjoy Tropical Delight Matoa! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "FREF05",
    category: "Fruit",
    imageRef: "/bestSeller/kepel.jpg",
    brand: "Rare Bites",
    productName:
      "Kepel – Rp 80,000/kg [ Fragrant and sweet, known for its distinctive oval shape. ]",
    star: 4,
    unit: "1kg",
    price: 80000,
    sold: "(10.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-RareBites.pdf",
      legality: "certified",
    },
    productDescription:
      "Kepel – Rare Bites 🍈\n\nEnjoy the fragrant and sweet taste of our kepel fruit, known for its distinctive oval shape.\n\nWhy Choose Our Kepel?\n\n✅ 100% Fresh & Organic.\n✅ Unique Aroma and Flavor.\n✅ Naturally Sweet.\n\n💡 Storage Tips:\nKeep in a cool, dry place.\nOrder now and enjoy Rare Bites Kepel! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 7,
      week: 0,
      month: 0,
    },
  },
  {
    key: "MEAT02",
    category: "Meat",
    imageRef: "/bestSeller/chicken-breast.jpg",
    brand: "Poultry Prime",
    productName:
      "Chicken Breast – Rp 70,000/kg [ Lean and tender, great for grilling or salads. ]",
    star: 4,
    unit: "1kg",
    price: 70000,
    sold: "(45.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-PoultryPrime.pdf",
      legality: "certified",
    },
    productDescription:
      "Chicken Breast – Poultry Prime 🍗\n\nEnjoy lean and tender chicken breast, great for grilling or salads.\n\nWhy Choose Our Chicken?\n\n✅ 100% Premium Quality.\n✅ Lean and Tender.\n✅ No hormones added.\n\n💡 Storage Tips:\nKeep refrigerated and consume within 3 days.\nOrder now and enjoy Poultry Prime Chicken! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 3,
      week: 0,
      month: 0,
    },
  },
  {
    key: "MEAT03",
    category: "Meat",
    imageRef: "/bestSeller/lamb-chops.jpg",
    brand: "Mountain Meat",
    productName:
      "Lamb Chops – Rp 200,000/kg [ Juicy and flavorful, perfect for roasting or grilling. ]",
    star: 5,
    unit: "1kg",
    price: 200000,
    sold: "(25.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-MountainMeat.pdf",
      legality: "certified",
    },
    productDescription:
      "Lamb Chops – Mountain Meat 🐑\n\nEnjoy juicy and flavorful lamb chops, perfect for roasting or grilling.\n\nWhy Choose Our Lamb?\n\n✅ 100% Premium Quality.\n✅ Naturally Flavorful.\n✅ Perfect for special occasions.\n\n💡 Storage Tips:\nKeep refrigerated and consume within 3 days.\nOrder now and enjoy Mountain Meat Lamb! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 3,
      week: 0,
      month: 0,
    },
  },
  {
    key: "MEAT04",
    category: "Meat",
    imageRef: "/bestSeller/salmon.png",
    brand: "Ocean's Best",
    productName:
      "Salmon Fillet – Rp 180,000/kg [ Rich in Omega-3, ideal for grilling or sushi. ]",
    star: 5,
    unit: "1kg",
    price: 180000,
    sold: "(35.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-OceansBest.pdf",
      legality: "certified",
    },
    productDescription:
      "Salmon Fillet – Ocean's Best 🐟\n\nEnjoy our salmon fillet rich in Omega-3, ideal for grilling or sushi.\n\nWhy Choose Our Salmon?\n\n✅ 100% Fresh & Premium Quality.\n✅ Rich in Omega-3.\n✅ Versatile for various dishes.\n\n💡 Storage Tips:\nKeep refrigerated and consume within 2 days.\nOrder now and enjoy Ocean's Best Salmon! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 2,
      week: 0,
      month: 0,
    },
  },
  {
    key: "MEAT05",
    category: "Meat",
    imageRef: "/bestSeller/ribeye.png",
    brand: "Carnivore's Choice",
    productName:
      "Ribeye Steak – Rp 250,000/kg [ Tender and marbled, great for grilling. ]",
    star: 5,
    unit: "1kg",
    price: 250000,
    sold: "(20.000 unit)",
    type: "Fresh",
    certificate: {
      file: "certificate-CarnivoresChoice.pdf",
      legality: "certified",
    },
    productDescription:
      "Ribeye Steak – Carnivore's Choice 🥩\n\nEnjoy tender and marbled ribeye steak, great for grilling.\n\nWhy Choose Our Ribeye?\n\n✅ 100% Premium Quality.\n✅ Well-Marbled for Flavor.\n✅ Perfect for steak lovers.\n\n💡 Storage Tips:\nKeep refrigerated and consume within 3 days.\nOrder now and enjoy Carnivore's Choice Ribeye! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 3,
      week: 0,
      month: 0,
    },
  },
  {
    key: "SPIC02",
    category: "Spice",
    imageRef: "/bestSeller/black-pepper.png",
    brand: "Spice King",
    productName:
      "Black Pepper – Rp 25,000/100g [ Aromatic and bold, essential for seasoning. ]",
    star: 4,
    unit: "100g",
    price: 25000,
    sold: "(60.000 unit)",
    type: "Dried",
    certificate: {
      file: "certificate-SpiceKing.pdf",
      legality: "certified",
    },
    productDescription:
      "Black Pepper – Spice King \n\nAdd aromatic and bold flavor to your dishes with our premium black pepper.\n\nWhy Choose Our Black Pepper?\n\n✅ 100% Pure & Natural.\n✅ Aromatic and Bold.\n✅ Essential for seasoning.\n\n💡 Storage Tips:\nKeep in an airtight container in a cool, dry place.\nOrder now and enjoy Spice King Black Pepper! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 12,
    },
  },
  {
    key: "SPIC03",
    category: "Spice",
    imageRef: "/bestSeller/turmeric.png",
    brand: "Golden Roots",
    productName:
      "Turmeric Powder – Rp 20,000/100g [ Earthy and vibrant, perfect for curries. ]",
    star: 5,
    unit: "100g",
    price: 20000,
    sold: "(55.000 unit)",
    type: "Powder",
    certificate: {
      file: "certificate-GoldenRoots.pdf",
      legality: "certified",
    },
    productDescription:
      "Turmeric Powder – Golden Roots \n\nAdd earthy and vibrant flavor to your curries with our premium turmeric powder.\n\nWhy Choose Our Turmeric?\n\n✅ 100% Pure & Natural.\n✅ Rich Golden Color.\n✅ Perfect for curries and health drinks.\n\n💡 Storage Tips:\nKeep in an airtight container in a cool, dry place.\nOrder now and enjoy Golden Roots Turmeric! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 12,
    },
  },
  {
    key: "SPIC04",
    category: "Spice",
    imageRef: "/bestSeller/cinnamon.png",
    brand: "Sweet Spice",
    productName:
      "Cinnamon Sticks – Rp 30,000/100g [ Warm and sweet, great for desserts. ]",
    star: 5,
    unit: "100g",
    price: 30000,
    sold: "(40.000 unit)",
    type: "Dried",
    certificate: {
      file: "certificate-SweetSpice.pdf",
      legality: "certified",
    },
    productDescription:
      "Cinnamon Sticks – Sweet Spice \n\nAdd warm and sweet flavor to your desserts with our premium cinnamon sticks.\n\nWhy Choose Our Cinnamon?\n\n✅ 100% Pure & Natural.\n✅ Aromatic and Sweet.\n✅ Perfect for desserts and beverages.\n\n💡 Storage Tips:\nKeep in an airtight container in a cool, dry place.\nOrder now and enjoy Sweet Spice Cinnamon! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 12,
    },
  },
  {
    key: "SPIC05",
    category: "Spice",
    imageRef: "/bestSeller/oregano.png",
    brand: "Herbal Essence",
    productName:
      "Dried Oregano – Rp 15,000/50g [ Aromatic and flavorful, perfect for pasta. ]",
    star: 4,
    unit: "50g",
    price: 15000,
    sold: "(50.000 unit)",
    type: "Dried",
    certificate: {
      file: "certificate-HerbalEssence.pdf",
      legality: "certified",
    },
    productDescription:
      "Dried Oregano – Herbal Essence \n\nAdd aromatic and flavorful oregano to your pasta dishes.\n\nWhy Choose Our Oregano?\n\n✅ 100% Pure & Natural.\n✅ Aromatic and Flavorful.\n✅ Perfect for Italian cuisine.\n\n💡 Storage Tips:\nKeep in an airtight container in a cool, dry place.\nOrder now and enjoy Herbal Essence Oregano! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 12,
    },
  },
  {
    key: "PROC02",
    category: "Processed Produce",
    imageRef: "/bestSeller/instant-noodles.png",
    brand: "Instant Delight",
    productName:
      "Instant Noodles – Rp 5,000/pack [ Quick and tasty, perfect for a fast meal. ]",
    star: 4,
    unit: "pack",
    price: 5000,
    sold: "(200.000 unit)",
    type: "Packaged",
    certificate: {
      file: "certificate-InstantDelight.pdf",
      legality: "certified",
    },
    productDescription:
      "Instant Noodles – Instant Delight \n\nEnjoy quick and tasty instant noodles, perfect for a fast meal.\n\nWhy Choose Our Noodles?\n\n✅ Quick and Convenient.\n✅ Delicious Flavor.\n✅ Affordable Meal Solution.\n\n💡 Storage Tips:\nStore in a cool, dry place.\nOrder now and enjoy Instant Delight Noodles! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "PROC03",
    category: "Processed Produce",
    imageRef: "/bestSeller/breakfast-cereal.png",
    brand: "Morning Crunch",
    productName:
      "Breakfast Cereal – Rp 35,000/box [ Nutritious and crunchy, perfect for mornings. ]",
    star: 5,
    unit: "box",
    price: 35000,
    sold: "(70.000 unit)",
    type: "Packaged",
    certificate: {
      file: "certificate-MorningCrunch.pdf",
      legality: "certified",
    },
    productDescription:
      "Breakfast Cereal – Morning Crunch \n\nStart your day with our nutritious and crunchy breakfast cereal.\n\nWhy Choose Our Cereal?\n\n✅ Nutritious and Delicious.\n✅ Crunchy Texture.\n✅ Perfect for busy mornings.\n\n💡 Storage Tips:\nKeep in an airtight container after opening.\nOrder now and enjoy Morning Crunch Cereal! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "PROC04",
    category: "Processed Produce",
    imageRef: "/bestSeller/chocolate-biscuits.png",
    brand: "Sweet Bites",
    productName:
      "Chocolate Biscuits – Rp 25,000/pack [ Crispy and sweet, great for snacking. ]",
    star: 5,
    unit: "pack",
    price: 25000,
    sold: "(90.000 unit)",
    type: "Packaged",
    certificate: {
      file: "certificate-SweetBites.pdf",
      legality: "certified",
    },
    productDescription:
      "Chocolate Biscuits – Sweet Bites \n\nEnjoy crispy and sweet chocolate biscuits, great for snacking.\n\nWhy Choose Our Biscuits?\n\n✅ Delicious Chocolate Flavor.\n✅ Crispy Texture.\n✅ Perfect for tea time.\n\n💡 Storage Tips:\nKeep in an airtight container to maintain freshness.\nOrder now and enjoy Sweet Bites Biscuits! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 6,
    },
  },
  {
    key: "PROC05",
    category: "Processed Produce",
    imageRef: "/bestSeller/tomato-sauce.png",
    brand: "Flavour Fusion",
    productName:
      "Tomato Sauce – Rp 15,000/bottle [ Rich and tangy, perfect for pasta or dips. ]",
    star: 4,
    unit: "bottle",
    price: 15000,
    sold: "(80.000 unit)",
    type: "Packaged",
    certificate: {
      file: "certificate-FlavourFusion.pdf",
      legality: "certified",
    },
    productDescription:
      "Tomato Sauce – Flavour Fusion \n\nAdd rich and tangy flavor to your pasta or dips with our tomato sauce.\n\nWhy Choose Our Sauce?\n\n✅ Rich Tomato Flavor.\n✅ Versatile for various dishes.\n✅ No artificial preservatives.\n\n💡 Storage Tips:\nRefrigerate after opening and consume within 1 month.\nOrder now and enjoy Flavour Fusion Sauce! 🌱✨",
    promotion: {
      type: "none",
    },
    storageTime: {
      day: 0,
      week: 0,
      month: 12,
    },
  },
];
