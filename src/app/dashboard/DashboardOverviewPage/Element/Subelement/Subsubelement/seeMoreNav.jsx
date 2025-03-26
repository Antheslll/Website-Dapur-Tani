import { useSideDashboard } from "@/app/GlobalComponent/Hooks/dashboardSideContext";

export default function SeeMoreNav({ page }) {
  const { handleNavClicked } = useSideDashboard();
  return (
    <h6
      className="text-[10px] text-[#3D57FF]"
      onClick={() => {
        handleNavClicked(page);
      }}
    >
      <u className="cursor-pointer">See More</u>
    </h6>
  );
}
