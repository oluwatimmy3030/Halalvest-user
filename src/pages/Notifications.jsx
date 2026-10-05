import { useEffect } from "react";
import NotificationsPageInner from "@/components/halalvest/notifications-page";

export default function NotificationsPage() {
  useEffect(() => { document.title = "Notifications — HalalVest"; }, []);
  return <NotificationsPageInner />;
}
