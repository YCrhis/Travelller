import { Routes, Route } from "react-router-dom";
import Application from "../layout/Application";
import Home from "../pages/Home";
import NewPlace from "../pages/NewPlace";
import Place from "../pages/Place";
import Search from "../pages/Search";

function Routers() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Application />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/new" element={<NewPlace />} />
          <Route path="/place/:id" element={<Place />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Routers;
