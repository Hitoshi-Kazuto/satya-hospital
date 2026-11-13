import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { btn } from "@/components/site/buttons";
import { contactInfo } from "@/lib/hospital-data";

function NotFound() {
  return (
    <SiteLayout>
      <section className="bg-brand-deep text-white">
        <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
          <p className="flex items-center gap-3 text-label font-semibold uppercase text-lime">
            <span aria-hidden className="h-[2px] w-6 rounded-full bg-lime" />
            Error 404
          </p>
          <h1 className="mt-5 font-display text-display text-white">Page not found</h1>
          <p className="measure-tight mt-5 text-lead text-white/80">
            The page you're looking for doesn't exist or has been moved. For help, call our front
            office or return to the homepage.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/" className={btn.onDark}>
              Go to homepage <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a href={contactInfo.phoneHref} className={btn.onDarkGhost}>
              <Phone aria-hidden className="h-4 w-4" /> {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default NotFound;
