import FacingProblemElement from "./Element/facingProblemElement";
import FacingProblemText from "./Element/facingProblemText";
import FormalContact from "./Element/formalContact";
import NavbarCS from "./Element/navbarCS";
import NavToContact from "./Element/navToContact";

export default function CustomerServicePage() {
  return (
    <div className="w-full h-[700px] grid grid-rows-[70px_350px_70px_80px_50px]">
      <NavbarCS />
      <FacingProblemElement />
      <FacingProblemText />
      <NavToContact />
      <FormalContact />
    </div>
  );
}
