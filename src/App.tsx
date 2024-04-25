import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard/delivery" element={<Dashboard />} />
        <Route path="/dashboard/product" element={<Dashboard />} />
        <Route path="/dashboard/category" element={<Dashboard />} />
        <Route path="/dashboard/user" element={<Dashboard />} />
        <Route path="/dashboard/payment" element={<Dashboard />} />
        <Route path="/dashboard/unitcategory" element={<Dashboard />} />

        <Route path="/cart" />
      </Routes>
    </>
  );
}

export default App;
