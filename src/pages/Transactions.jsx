import { useEffect } from "react";
import TransactionsPageInner from "@/components/halalvest/transactions-page";

export default function TransactionsPage() {
  useEffect(() => { document.title = "Transactions — HalalVest"; }, []);
  return <TransactionsPageInner />;
}
