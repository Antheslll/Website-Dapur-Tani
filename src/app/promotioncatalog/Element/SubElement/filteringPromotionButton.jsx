export default function FilteringPromotionButton({ text, click, setClick }) {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`w-[15vw] h-[40px]  text-[1.5vw] font-[Roboto-reguler] rounded-[50px] ${
          click === text
            ? "bg-[#04E824] text-white"
            : "bg-[#D9D9D9] text-[#9F9F9F]"
        }`}
        onClick={() => setClick(text)}
      >
        {text}
      </button>
    </div>
  );
}
