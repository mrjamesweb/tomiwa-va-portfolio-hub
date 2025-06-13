
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { WhatsAppWidget } from "./WhatsAppWidget";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <WhatsAppWidget />
    </div>
  );
};
