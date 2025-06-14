
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { WhatsAppWidget } from "./WhatsAppWidget";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};
