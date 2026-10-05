import { useEffect } from "react";
import { HomePage as HomePageInner } from "@/components/halalvest/home-page";

export default function HomePage() {
  useEffect(() => { document.title = "Dashboard — HalalVest"; }, []);
  return <HomePageInner />;
}
