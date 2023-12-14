import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balanceDisplay = useSelector(store => store.account.balance);
  return <div className="balance">{formatCurrency(balanceDisplay)}</div>;
}

export default BalanceDisplay;
