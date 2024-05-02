import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { UnitCategory } from "./pages/Dashboard/UnitCategory/UnitCategory";
import { Order } from "./pages/Dashboard/Order/Order";
import { Delivery } from "./pages/Dashboard/Delivery/Delivery";
import { User } from "./pages/Dashboard/User/User";
import { Product } from "./pages/Dashboard/Product/Product";
import { ProductDetail } from "./pages/Dashboard/Product/ProductDetail";
import { CreateProduct } from "./pages/Dashboard/Product/CreateProduct";
import { Category } from "./pages/Dashboard/Category/Category";
import { Payment } from "./pages/Dashboard/Payment/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="product" element={<Product />}></Route>
          <Route path="unitcategory" element={<UnitCategory />}></Route>
          <Route path="order" element={<Order />}></Route>
          <Route path="delivery" element={<Delivery />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="payment" element={<Payment />}></Route>

          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="productdetail/:slug" element={<ProductDetail />} />
        </Route>
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}

        <Route path="/cart" />
      </Routes>
    </>
  );
}

export default App;
