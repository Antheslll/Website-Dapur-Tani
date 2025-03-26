import { useCatalogHooks } from "../../Hooks/catalogHooks";
import { useOpenPayment } from "../../Store/bankStore";
import {
  useAutomationStorage,
  useCalenderOpen,
  useTempAutomationList,
} from "../../Store/calendarStore";
import { useCartStore } from "../../Store/cartStore";
import { usePurchaseList } from "../../Store/openPurchase";
import { useProcessedTotal } from "../../Store/processedTotalStore";

export default function ConfirmationButton({
  confirmationText,
  buttonWidth,
  styleAdd,
  buttonKey,
}) {
  const { state, dispatch } = useCatalogHooks();
  const { setOpenPayment } = useOpenPayment();
  const { updateAllCartChecked } = useCartStore();
  const {
    setFixTempAutomationOrderList,
    setTempAutomationOrderList,
    setRefereshTempAutomationOrderList,
    tempAutomationOrderList,
    fixTempAutomationOrderList,
  } = useTempAutomationList();
  const {
    setSearchAutomationOpen,
    setDate,
    setTimeframe,
    date,
    timeframePicked,
    setCalenderSettingsOpen,
  } = useCalenderOpen();
  const {
    updateSelectedShipping,
    updatePromotionPrice,
    updateSelectedPromotion,
    updateProcessedTotal,
    updateShippingPrice,
  } = useProcessedTotal();
  const { updateUse } = usePurchaseList();

  const { setAutomationOrderList } = useAutomationStorage();

  const closePaymeth = () => {
    setOpenPayment(false);
    updateUse(false);
    updateSelectedShipping(0);
    updatePromotionPrice(0);
    updateSelectedPromotion("");
    updateShippingPrice(0);
    updateProcessedTotal(0);
    updateAllCartChecked({ checked: false });
  };

  const handleApply = () => {
    dispatch({
      type: "SET_ADVANCE_FILTER",
      payload: false,
    });
    dispatch({
      type: "SET_EXECUTION_STATE",
      payload: {
        isTypeExecute: state.isTypeFilter,
        isStarExecute: state.isStarPicked,
        isCertifiedExecute: state.isCertified,
        isMinStorageTimeExecute: state.isMinStorageTime,
        isMaxStorageTimeExecute: state.isMaxStorageTime,
        istimeFrameExecute: state.timeFrame,
        isPromotionExecute: state.isPromotion,
        isLocationExecute: state.isLocation,
        isMinPriceExecute: state.isMinPrice,
        isMaxPriceExecute: state.isMaxPrice,
      },
    });
    dispatch({
      type: "SET_FILTER_APPLIED",
      payload: true,
    });
  };

  const handleAddToAutomationList = () => {
    setSearchAutomationOpen(false);
    setFixTempAutomationOrderList(tempAutomationOrderList);
  };
  const handleApplyAutomation = () => {
    if (
      date !== "" ||
      timeframePicked !== "" ||
      fixTempAutomationOrderList !== ""
    ) {
      setAutomationOrderList({
        date: date,
        timeframePicked: timeframePicked,
        product: fixTempAutomationOrderList,
      });
      setRefereshTempAutomationOrderList();
      setDate("");
      setFixTempAutomationOrderList("");
      setTimeframe("");
      setCalenderSettingsOpen(false);
    }
  };
  return (
    <button
      className={`${buttonWidth} ${styleAdd} h-[30px] bg-[#04E824] text-[13px] text-white rounded-full`}
      onClick={
        buttonKey === "FILTER_APPLY"
          ? handleApply
          : buttonKey === "addToAutomationList"
          ? handleAddToAutomationList
          : buttonKey === "ApplyAutomation"
          ? handleApplyAutomation
          : (buttonKey = "paymeths" ? closePaymeth : undefined)
      }
    >
      {confirmationText}
    </button>
  );
}
