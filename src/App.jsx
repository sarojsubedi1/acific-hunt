import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./Home";
import JobPage from "./job";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="jobs" element={<JobPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
