import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CandidaturaPage from "./pages/Candidatura";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
          <BrowserRouter basename="/se-investing/">
            <Routes>
              <Route path="" element={<Index />} />
              <Route path="candidatura" element={<CandidaturaPage />} />
              <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
  </QueryClientProvider>
);

export default App;