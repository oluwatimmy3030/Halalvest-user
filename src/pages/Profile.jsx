import { useEffect } from "react";
import ProfilePageInner from "@/components/halalvest/profile-page";

export default function ProfilePage() {
  useEffect(() => { document.title = "Profile & Security — HalalVest"; }, []);
  return <ProfilePageInner />;
}
