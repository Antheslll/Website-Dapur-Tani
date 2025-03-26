import { TelegramIcon, WAIcon } from "@/app/icons/buttonCS-icon";
import ContactNavButton from "./Subelement/contactNavButton";

export default function NavToContact() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="w-[27%] max-[900px]:w-[40%] grid grid-cols-2">
          <ContactNavButton
            icon={<WAIcon />}
            contactType="Whatsapp"
            buttonColor="bg-[#04E824]"
          />
          <ContactNavButton
            icon={<TelegramIcon />}
            contactType="Telegram"
            buttonColor=" bg-[#0084FF]"
          />
        </div>
      </div>
    </div>
  );
}
