import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { MobileActionBar } from "./MobileActionBar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      {/* Clears the sticky mobile action bar so it never covers the footer. */}
      <div aria-hidden className="pb-actionbar" />
      <FloatingActions />
      <MobileActionBar />
    </div>
  );
}
