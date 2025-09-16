import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PreventivoModal from "./pages/PreventivoModal";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import About from "./pages/About";
import CandidaturaPage from "./pages/Candidatura";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import Impact from "./pages/Impact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
          <BrowserRouter basename="/se-investing/">
            <Routes>
              {/* Multilingual magazine article route */}
              <Route path="magazine/:lang/:slug" element={<Article />} />
              <Route path="magazine" element={<Articles />} />
              <Route path="about" element={<About />} />
              <Route path="" element={<Index />} />
              <Route path="candidatura" element={<CandidaturaPage />} />
              <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
              <Route path="impact" element={<Impact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <PreventivoModal />
  </QueryClientProvider>
);

export default App;