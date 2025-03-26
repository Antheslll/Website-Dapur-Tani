import { useRegistrationHooks } from "@/app/GlobalComponent/Store/registationStore";
import EnglishFlag from "@/app/icons/flag-icon";
import { IndonesiaFlag } from "@/app/icons/flag-icon";

const LanguageChoice = () => {
  return (
    <div className="w-[60px] h-[65px] border flex flex-col px-[5px] absolute my-8 rounded-xl ">
      <OptionLangButtons languagePicked="IN" flag={<IndonesiaFlag />} />
      <OptionLangButtons languagePicked="EN" flag={<EnglishFlag />} />
    </div>
  );
};

export default LanguageChoice;

function OptionLangButtons({ languagePicked, flag }) {
  const { setLangOpen, setLang } = useRegistrationHooks();
  return (
    <button
      className="w-[50px] h-[25px] mt-1 border border-[#cdcdcd] bg-none white rounded-xl grid grid-cols-[20px_30px]"
      onClick={() => {
        setLangOpen(false);
        setLang(languagePicked);
      }}
    >
      <div className="m-auto">{flag}</div>
      <div className="m-auto pr-3 pt-0.5">
        <p className="text-[10px] font-bold font-[Roboto-bold]">
          {languagePicked}
        </p>
      </div>
    </button>
  );
}
