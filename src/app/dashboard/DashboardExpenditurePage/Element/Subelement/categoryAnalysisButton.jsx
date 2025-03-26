export default function CategoryAnalysisButton({
  category,
  categoryAnalysis,
  setCategoryAnalysis,
}) {
  return (
    <div className="flex justify-end">
      <button
        className={`lg:w-[8vw] md:w-[7vw] h-[30px] ${
          categoryAnalysis === category ? "bg-[#04E824] text-white" : ""
        }  lg:text-[0.8rem] md:text-[0.6rem] border-[1.5px] border-black  font-[Roboto-reguler] rounded-md`}
        onClick={() => setCategoryAnalysis(category)}
      >
        {category}
      </button>
    </div>
  );
}
