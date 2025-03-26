import Image from "next/image";
export default function AbouUsBanner() {
  return (
    <>
      <Image
        src="/aboutus/banner about us.png"
        alt="banner-aboutus"
        className="w-full h-full object-cover "
        width={1440}
        height={482}
      />
      <div className="w-full h-[450px] bg-black/90 absolute inset-0 flex justify-center items-center">
        <div className="text-white">
          <h1 className="font-[Roboto-bold] text-[50px] text-center">
            About Us
          </h1>
          <h5 className="font-[Roboto-reguler]">
            Menhubungkan Hasil Bumi dengan Meja Makan Anda{" "}
          </h5>
        </div>
      </div>
    </>
  );
}
