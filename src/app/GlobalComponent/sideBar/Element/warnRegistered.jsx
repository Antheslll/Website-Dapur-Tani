export default function WarnRegistered({ registeredRestricted }) {
  return (
    <div
      className={`absolute w-full h-[100vh] flex justify-center items-center ${
        registeredRestricted === true ? "" : "hidden"
      }`}
    >
      <span className="text-red-600 font-bold font-[Roboto-bold] text-[25px]">
        You Must Registered to access this page!
      </span>
    </div>
  );
}
