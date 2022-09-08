import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@routes/Home";
import Navbar from "@components/Navbar";
import CreateDao from "@routes/Dao/CreateDao";
import Login from "@routes/Login";
import Explore from "@routes/Explore/Explore";
import AllDao from "@routes/Dao/AllDao";
import ReadPost from "@routes/Explore/ReadPost";

const App = () => {
  return (
    <Router>
      <div>
        <div className="h-16">
          <Navbar />
        </div>
        <div className="mx-auto max-w-screen-xl px-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dao/create" element={<CreateDao />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/all-daos" element={<AllDao />} />
            <Route path="/:id/:title" element={<ReadPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
