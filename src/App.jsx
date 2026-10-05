import { Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/halalvest/app-shell";
import { HalalvestProvider } from "@/state/halalvest-context";
import HomePage from "@/pages/Home";
import WalletPage from "@/pages/Wallet";
import TransactionsPage from "@/pages/Transactions";
import StocksPage from "@/pages/Stocks";
import WealthPage from "@/pages/Wealth";
import SendPage from "@/pages/Send";
import AccountsPage from "@/pages/Accounts";
import SettingsPage from "@/pages/Settings";
import HelpPage from "@/pages/Help";
import ProfilePage from "@/pages/Profile";
import NotificationsPage from "@/pages/Notifications";
import { NotFound } from "@/components/halalvest/not-found";

function Layout() {
  return (
    <HalalvestProvider>
      <AppShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/wealth" element={<WealthPage />} />
          <Route path="/send" element={<SendPage />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </HalalvestProvider>
  );
}

export default function App() { return <Layout />; }