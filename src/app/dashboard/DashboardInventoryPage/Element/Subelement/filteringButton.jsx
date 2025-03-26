export default function FilteringButton({ filter }) {
  return (
    <div className="flex justify-center items-center">
      <button className="w-[110px] h-[30px] font-[Roboto-reguler] text-white text-[13px] bg-[#04E824] rounded-[50px]">
        {filter}
      </button>
    </div>
  );
}
