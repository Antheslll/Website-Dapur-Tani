export default function Dot() {
  const dots = [];

  for (let i = 0; i < 15; i++) {
    dots.push(
      <div key={i} className="grid grid-cols-1">
        <div className="grid grid-rows-9 gap-7 ml-11">
          <PerDot i={i} />
          <PerDot i={i} />
          <PerDot i={i} />
          <PerDot i={i} />
          <PerDot i={i} />
          <PerDot i={i} />
          <PerDot i={i} />
          <PerDot i={i} />
          <PerDot i={i} />
        </div>
      </div>
    );
  }

  return <div className="flex gap-2">{dots}</div>;
}
function PerDot({ i }) {
  return (
    <div
      className={`${
        i === 0
          ? "bg-black/20"
          : i === 1
          ? "bg-black/50"
          : i === 2
          ? "bg-black/80"
          : "bg-black"
      } w-[10px] h-[10px] rounded-[5px]`}
    ></div>
  );
}
