import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./Components/TopNav";
import SiteContent from "./Pages/SiteContent";
import useWindowSize from "./helpers";
import MobileNavigation from "./Components/Mobile/MobileNavigation";

function App() {
  const windowSize = useWindowSize() || { width: 0, height: 0 };
  return (
    <div className="App">
      <Router>
        {windowSize.width <= 768 ? <MobileNavigation /> : <TopNav />}
        <div className="site-content">
          <SiteContent />
        </div>
      </Router>
    </div>
  );
}

export default App;
