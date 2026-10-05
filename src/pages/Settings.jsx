import { useEffect } from "react";
import ProfilePageInner from "@/components/halalvest/profile-page";

export default function SettingsPage() {
  useEffect(() => { document.title = "Settings — HalalVest"; }, []);
  return <ProfilePageInner />;
}