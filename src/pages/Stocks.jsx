import { useEffect } from "react";
import StocksPageInner from "@/components/halalvest/stocks-page";

export default function StocksPage() {
  useEffect(() => { document.title = "Halal Equities — HalalVest"; }, []);
  return <StocksPageInner />;
}