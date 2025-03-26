export default function ContactNavButton({ icon, contactType, buttonColor }) {
  return (
    <div className="flex justify-center">
      <button
        className={`grid grid-cols-[50px_100px] w-[150px] h-[50px] ${buttonColor} rounded-[50px]`}
      >
        <div className="flex justify-center items-center">{icon}</div>
        <div className="flex text-white items-center">{contactType}</div>
      </button>
    </div>
  );
}
