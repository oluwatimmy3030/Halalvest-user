import { useEffect } from "react";
import WalletPageInner from "@/components/halalvest/wallet-page";

export default function AccountsPage() {
  useEffect(() => { document.title = "Accounts — HalalVest"; }, []);
  return <WalletPageInner />;
}