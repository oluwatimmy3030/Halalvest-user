import { useEffect } from "react";
import WealthPageInner from "@/components/halalvest/wealth-page";

export default function WealthPage() {
  useEffect(() => { document.title = "Investments — HalalVest"; }, []);
  return <WealthPageInner />;
}
