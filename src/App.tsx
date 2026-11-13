import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "./routes/Home";
import { ScrollToTop } from "@/components/site/ScrollToTop";

/*
 * Only the homepage ships in the first chunk. Every other route — including
 * the 964-line content module most of them pull in — is fetched on demand,
 * which keeps the initial payload off the critical path on a 4G connection.
 */
const About = lazy(() => import("./routes/About"));
const Doctors = lazy(() => import("./routes/Doctors"));
const Infrastructure = lazy(() => import("./routes/Infrastructure"));
const Orthopedics = lazy(() => import("./routes/Orthopedics"));
const Services = lazy(() => import("./routes/Services"));
const GynecologyObstetrics = lazy(() => import("./routes/GynecologyObstetrics"));
const GeneralSurgery = lazy(() => import("./routes/GeneralSurgery"));
const ENT = lazy(() => import("./routes/ENT"));
const Appointment = lazy(() => import("./routes/Appointment"));
const Departments = lazy(() => import("./routes/Departments"));
const Facilities = lazy(() => import("./routes/Facilities"));
const Contact = lazy(() => import("./routes/Contact"));
const NotFound = lazy(() => import("./routes/NotFound"));
const Infertility = lazy(() => import("./routes/Infertility"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

/** Holds the viewport height during a route chunk fetch so nothing jumps. */
function RouteFallback() {
  return <div className="min-h-dvh bg-background" aria-busy="true" />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/orthopedics" element={<Orthopedics />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gynecology-obstetrics" element={<GynecologyObstetrics />} />
            <Route path="/infertility" element={<Infertility />} />
            <Route path="/general-surgery" element={<GeneralSurgery />} />
            <Route path="/ent" element={<ENT />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
