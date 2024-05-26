import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Installation from "./pages/Installation";
import HowToGet from "./pages/HowToGet";
import HelpCenter from "./pages/HelpCenter";
import SelfAssistance from "./pages/SelfAssistance";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/installation":
        title = "";
        metaDescription = "";
        break;
      case "/howtoget":
        title = "";
        metaDescription = "";
        break;
      case "/helpcenter":
        title = "";
        metaDescription = "";
        break;
      case "/selfassistance":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/installation" element={<Installation />} />
      <Route path="/howtoget" element={<HowToGet />} />
      <Route path="/helpcenter" element={<HelpCenter />} />
      <Route path="/selfassistance" element={<SelfAssistance />} />
    </Routes>
  );
}
export default App;
