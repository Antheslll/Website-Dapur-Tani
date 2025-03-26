export default function FilteringOption({ op1, op2, op3, op4 }) {
  return (
    <div>
      <select className="border-[1.5px] text-[13px] pl-2 border-black w-[8.5vw] h-[25px] rounded-md">
        <option>{op1}</option>
        <option>{op2}</option>
        <option>{op3}</option>
        {op4 ? <option>{op4}</option> : ""}
      </select>
    </div>
  );
}
