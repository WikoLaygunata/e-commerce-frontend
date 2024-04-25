import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route
          path="/dashboard/createproduct"
          element={<Dashboard special="createproduct" />}
        />
        <Route
          path="/dashboard/productdetail/:slug"
          element={<Dashboard special="productdetail" />}
        />

        <Route path="/cart" />
      </Routes>
    </>
  );
}

export default App;
