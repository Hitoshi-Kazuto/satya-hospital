import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { btn } from "@/components/site/buttons";
import { contactInfo } from "@/lib/hospital-data";

function NotFound() {
  return (
    <SiteLayout>
      <section className="gradient-brand text-white">
        <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-mint)]">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-6xl font-semibold sm:text-7xl">Page not found</h1>
          <p className="mt-4 max-w-md text-white/80">
            The page you're looking for doesn't exist or has been moved. For help, call our front
            office or return to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full gradient-signal px-6 py-3.5 text-sm font-semibold text-[#16220a] shadow-signal transition duration-200 hover:brightness-105"
            >
              Go to homepage <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-white/20"
            >
              <Phone className="h-4 w-4" /> {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default NotFound;
