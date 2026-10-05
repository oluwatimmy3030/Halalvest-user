import { useEffect } from "react";
import SendPageInner from "@/components/halalvest/send-page";

export default function SendPage() {
  useEffect(() => { document.title = "Send Money — HalalVest"; }, []);
  return <SendPageInner />;
}