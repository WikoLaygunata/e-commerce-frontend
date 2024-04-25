import { Layout } from "antd";
import "../../assets/styles/dashboard.css";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardSider } from "../../components/dashboard/DashboardSider";
import { Order } from "./Order/Order";
import { Delivery } from "./Delivery/Delivery";
import { Product } from "./Product/Product";
import { User } from "./User/User";
import { Payment } from "./Payment/Payment";
import { Category } from "./Category/Category";
import { UnitCategory } from "./UnitCategory/UnitCategory";
import { CreateProduct } from "./Product/CreateProduct";

export const Dashboard = ({ special }: { special?: string }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("order");

  let specialMenu = special;

  const menuSwitch = (key: string) => {
    if (specialMenu != undefined) {
      switch (specialMenu) {
        case "createproduct":
            specialMenu = "";
            return <CreateProduct />;
        default:
          return <div>Not Found</div>;
      }
    } else {
      switch (key) {
        case "order":
          return <Order />;
        case "delivery":
          return <Delivery />;
        case "product":
          return <Product />;
        case "unitcategory":
          return <UnitCategory />;
        case "category":
          return <Category />;
        case "payment":
          return <Payment />;
        case "user":
          return <User />;
        default:
          break;
      }
    }
  };

  return (
    <Layout className="container">
      <DashboardHeader setCollapsed={() => setCollapsed(!collapsed)} />
      <Layout>
        <DashboardSider
          collapsed={collapsed}
          setSelectedMenu={setSelectedMenu}
        />
        <Content className="content">{menuSwitch(selectedMenu)}</Content>
      </Layout>
    </Layout>
  );
};
