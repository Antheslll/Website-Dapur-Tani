import { useOrderStatusStore } from "@/app/GlobalComponent/Store/orderStatusStore";
import {
  Completed,
  CompletedOn,
  Packed,
  PackedOn,
  Payment,
  Shipped,
  ShippedOn,
} from "@/app/icons/orderstatus-icon";

export default function OrderStep({ isStep, handleStep }) {
  return (
    <div className="flex justify-center pt-2">
      <div className="w-[65%] grid grid-cols-[12%_17.3%_12%_17.3%_12%_17.3%_12%]">
        <Step
          stepIcon={<Payment />}
          stepIconOn={<Payment />}
          stepNumber={1}
          statusOn={true}
          handleStep={handleStep}
          step="Payment"
        />
        <Flow lineOn={[2, 3, 4].includes(isStep) ? true : false} />
        <Step
          stepIcon={<Packed />}
          stepIconOn={<PackedOn />}
          stepNumber={2}
          statusOn={[2, 3, 4].includes(isStep) ? true : false}
          handleStep={handleStep}
          step="Packed"
        />
        <Flow lineOn={[3, 4].includes(isStep) ? true : false} />
        <Step
          stepIcon={<Shipped />}
          stepIconOn={<ShippedOn />}
          stepNumber={3}
          statusOn={[3, 4].includes(isStep) ? true : false}
          handleStep={handleStep}
          step="Delivered"
        />
        <Flow lineOn={[4].includes(isStep) ? true : false} />
        <Step
          stepIcon={<Completed />}
          stepIconOn={<CompletedOn />}
          stepNumber={4}
          statusOn={[4].includes(isStep) ? true : false}
          handleStep={handleStep}
          step="Completed"
        />
      </div>
    </div>
  );
}

const Step = ({
  stepIcon,
  stepIconOn,
  stepNumber,
  handleStep,
  statusOn,
  step,
}) => {
  const { setStatus } = useOrderStatusStore();
  return (
    <div
      className=" flex justify-center pt-2 cursor-pointer"
      onClick={() => {
        handleStep(stepNumber);
        setStatus(step);
      }}
    >
      <div
        className={`w-[62px] h-[62px] rounded-[50px] border-2  flex justify-center items-center ${
          statusOn === true ? "border-[#04E824]" : "border-[#9F9F9F]"
        }`}
      >
        {statusOn === true ? stepIconOn : stepIcon}
      </div>
    </div>
  );
};

const Flow = ({ lineOn }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={` w-full h-[2px] ${
          lineOn === true ? "bg-[#04E824]" : "bg-[#9F9F9F]"
        }`}
      ></div>
    </div>
  );
};
