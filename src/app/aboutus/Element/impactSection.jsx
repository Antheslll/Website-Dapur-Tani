import RegisterHookButton from "./registerButtonHook";

export default function ImpactSection() {
  return (
    <div className="pt-[80px]">
      <h2 className="text-[#00620E] font-[Roboto-bold] text-center text-[40px]">
        Impact
      </h2>
      <p className="text-center mx-[30%] max-[900px]:mx-[20%] text-[12px] mt-5">
        Dapur Tani has a positive impact by supporting local farmers through
        fair partnerships, providing quality food from natural ingredients, and
        promoting environmental sustainability. The impacts include improving
        the economy of farmers, consuming healthy food that has a positive
        impact on society, and contributing to the sustainability of nature.
      </p>
      <div className="flex justify-center mt-11">
        <RegisterHookButton hookText="Get Started!" />
      </div>
    </div>
  );
}
