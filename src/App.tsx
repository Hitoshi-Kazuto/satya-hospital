import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Doctors from "./routes/Doctors";
import Infrastructure from "./routes/Infrastructure";
import Orthopedics from "./routes/Orthopedics";
import Services from "./routes/Services";
import GynecologyObstetrics from "./routes/GynecologyObstetrics";
import GeneralSurgery from "./routes/GeneralSurgery";
import ENT from "./routes/ENT";
import NeuroSurgery from "./routes/NeuroSurgery";
import Appointment from "./routes/Appointment";
import Departments from "./routes/Departments";
import Facilities from "./routes/Facilities";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/orthopedics" element={<Orthopedics />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gynecology-obstetrics" element={<GynecologyObstetrics />} />
          <Route path="/general-surgery" element={<GeneralSurgery />} />
          <Route path="/ent" element={<ENT />} />
          <Route path="/neuro-surgery" element={<NeuroSurgery />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
