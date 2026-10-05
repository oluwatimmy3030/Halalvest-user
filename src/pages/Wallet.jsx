import { useEffect } from "react";
import WalletPageInner from "@/components/halalvest/wallet-page";

export default function WalletPage() {
  useEffect(() => { document.title = "Wallet — HalalVest"; }, []);
  return <WalletPageInner />;
}
