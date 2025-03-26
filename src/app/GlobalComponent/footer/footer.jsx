import Image from "next/image";
import ContactInfo from "./Element/contactInfo";
import FooterServiceText from "./Element/footerServiceText";
import FooterButton from "./Element/footerButton";
export default function Footer() {
  return (
    <div className="w-full h-[400px] grid grid-rows-[280px_120px] bg-[#04E824]">
      <div className="grid grid-cols-2 ">
        <div className="grid grid-rows-[100px_180px] pt-5">
          <div className="w-[80%]">
            <Image
              src="/logo/Dapur Tani logo.png"
              alt="Logo Dapur Tani"
              width={500}
              height={500}
              className="scale-[85%] h-[110px] w-[80%] object-cover -ml-[7%]"
            />
          </div>
          <div className="min-[667px]:pl-[10%] min-[820px]:w-[60%] min-[667px]:w-[80%] grid min-[820px]:grid-cols-2 min-[667px]:grid-cols-[60%_40%] pt-5">
            <ContactInfo contactFormat="Email" contact="dapurtani@gmail.com" />
            <ContactInfo contactFormat="Phone" contact="+628111267867" />
          </div>
        </div>
        <div className="grid grid-rows-[200px_100px] px-[15%] -py-2">
          <div>
            <FooterServiceText />
          </div>
          <div className="w-[72%] ml-[33%]">
            <div className="grid grid-cols-2">
              <FooterButton buttonText="Buy Now!" />
              <FooterButton buttonText="Dashboard" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[90%] h-[5px] bg-white"></div>
      </div>
    </div>
  );
}
