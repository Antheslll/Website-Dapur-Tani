export default function Searchbar() {
  return (
    <>
      <input
        type="text"
        className="bg-[#6E6E6E] h-[30px] w-[380px] pl-2"
        placeholder="Search for..."
      />
      <button className="w-[60px] h-[30px] bg-[#3F4B3B] flex justify-center items-center rounded-md absolute ml-[58%]">
        <div className="scale-[80%]">
          <SearchIconWhite />
        </div>
      </button>
    </>
  );
}
