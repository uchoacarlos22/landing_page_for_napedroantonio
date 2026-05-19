import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SolarLayout from "./layouts/SolarLayout";
import ScrollToTop from "./components/ScrollToTop";
const HomePage = lazy(() => import("./pages/HomePage"));
const ResidencialPage = lazy(() => import("./pages/ResidencialPage"));
const EmpresasPage = lazy(() => import("./pages/EmpresasPage"));

// Lazy-load the solar sub-pages for performance
const SolarPage = lazy(() => import("./pages/energia-solar/SolarPage"));
const SolarEmpresasPage = lazy(() => import("./pages/energia-solar/SolarEmpresasPage"));
const CondominiosPage = lazy(() => import("./pages/energia-solar/CondominiosPage"));
const MobilidadePage = lazy(() => import("./pages/energia-solar/MobilidadePage"));
const SolarResidencialPage = lazy(() => import("./pages/energia-solar/SolarResidencialPage"));

// ─── App with routing ─────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="text-white text-xl">Carregando...</div></div>}>
        <Routes>
          {/* Main Entry — Steering Page */}
          <Route path="/" element={<HomePage />} />

          {/* Construction Routes wrapped in MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/residencial" element={<ResidencialPage />} />
            <Route path="/empresas" element={<EmpresasPage />} />
          </Route>

          {/* Energia Solar sub-pages wrapped in SolarLayout */}
          <Route element={<SolarLayout />}>
            <Route path="/energia-solar" element={<SolarPage />} />
            <Route path="/energia-solar/residencial" element={<SolarResidencialPage />} />
            <Route path="/energia-solar/empresas" element={<SolarEmpresasPage />} />
            <Route path="/energia-solar/condominios" element={<CondominiosPage />} />
            <Route path="/energia-solar/mobilidade-eletrica" element={<MobilidadePage />} />
          </Route>

          {/* Legacy route redirection */}
          <Route path="/energia-solar/mobilidade" element={<Navigate to="/energia-solar/mobilidade-eletrica" replace />} />

          {/* Catch-all → home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


