import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força o navegador a esquecer a posição anterior
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Tenta resetar em diferentes estágios do ciclo de vida da nova página
    resetScroll(); // Imediato
    
    const timers = [10, 100, 300, 600].map((ms) =>
      setTimeout(resetScroll, ms)
    );

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
