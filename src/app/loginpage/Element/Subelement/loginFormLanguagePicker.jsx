import EnglishFlag, { IndonesiaFlag } from "@/app/icons/flag-icon";
import LanguageChoice from "./languageChoice";
import { useRegistrationHooks } from "@/app/GlobalComponent/Store/registationStore";

export default function RegistrationFormLanguagePicker() {
  const { langOpen, setLangOpen, lang } = useRegistrationHooks();
  return (
    <div className="grid grid-cols-2 ">
      <div>
        <p className="font-[Roboto-bold] text-[17px] pl-[2%] ">DAPUR TANI</p>
      </div>
      <div className="flex justify-end ">
        <button
          className="w-[50px] h-[25px] my-1 border border-[#cdcdcd] bg-none white rounded-xl grid grid-cols-[20px_30px]"
          onClick={() => {
            setLangOpen(true);
          }}
        >
          <div className="m-auto">
            {lang === "EN" ? <EnglishFlag /> : <IndonesiaFlag />}
          </div>
          <div className="m-auto pr-3 pt-0.5">
            <p className="text-[10px] font-bold font-[Roboto-bold]">
              {lang === "EN" ? "EN" : "IN"}
            </p>
          </div>
        </button>
        {langOpen === true ? <LanguageChoice /> : null}
      </div>
    </div>
  );
}
