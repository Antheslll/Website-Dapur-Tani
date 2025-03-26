import WarningIcon from "@/app/icons/warning-icon";
import MoneyIcon from "@/app/icons/money-icon";
import GraphExpenditureIcon from "@/app/icons/graphExpenditure-icon";
export const notification = [
  {
    key: "notif1",
    symbol: <WarningIcon />,
    header: "Inventory",
    content: "10 Items are expired",
  },
  {
    key: "notif2",
    symbol: <MoneyIcon />,
    header: "Expenditure",
    content: "The expenditure was too high!",
  },

  {
    key: "notif3",
    symbol: <GraphExpenditureIcon />,
    header: "Recommendation",
    content: "you can auto most of your order",
  },
];
