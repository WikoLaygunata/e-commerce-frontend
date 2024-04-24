import { Layout } from "antd";
import "../../assets/styles/dashboard.css";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardSider } from "../../components/dashboard/DashboardSider";
import { CreateProduct } from "./Product/CreateProduct";
import { Product } from "./Product/Product";

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="container">
      <DashboardHeader setCollapsed={() => setCollapsed(!collapsed)} />
      <Layout>
        <DashboardSider collapsed={collapsed} />
        <Content className="content">
          <CreateProduct/>
          <Product />
        </Content>
      </Layout>
    </Layout>
  );
};
