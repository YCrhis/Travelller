import { Routes, Route } from "react-router-dom";
import App from "../layout/admin/App";
import Application from "../layout/Application";
import Home from "../pages/Home";
import NewPlace from "../pages/NewPlace";
import Place from "../pages/Place";
import Search from "../pages/Search";
import HomeAdmin from "../pages/admin/Home"

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
        <Route path="admin/" element={<App/>}>
          <Route index element={<HomeAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Routers;
