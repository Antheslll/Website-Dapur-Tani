export default function SpeficationProductLines({ col1, col2 }) {
  return (
    <div className="grid grid-cols-[15%_85%]">
      <div className="flex items-center">
        <span className="text-[#9F9F9F] text-[13px]">{col1}</span>
      </div>
      <div className="flex items-center">
        <span className="text-[13px]">{col2}</span>
      </div>
    </div>
  );
}
