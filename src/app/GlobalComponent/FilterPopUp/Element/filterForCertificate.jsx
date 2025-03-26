import UnPickedButton from "../../Button/PickedButton/unPickedButton";

export default function FilterForCertificate() {
  return (
    <div className="grid grid-rows-[40px_40px]">
      <div className="pl-10 pt-2 font-[Roboto-bold] text-[15px] text-[#9F9F9F]">
        <h2>Certified</h2>
      </div>
      <div className="pl-10 w-[60%] grid grid-cols-2">
        <div>
          <UnPickedButton textPicked="CERTIFIED" objective="Certification" />
        </div>
        <div>
          <UnPickedButton
            textPicked="NOT CERTIFIED"
            objective="Certification"
          />
        </div>
      </div>
    </div>
  );
}
