import { Flex, Layout } from "antd";
import "../../assets/styles/dashboard.css";
import { useState } from "react";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardSider } from "../../components/dashboard/DashboardSider";
import { Outlet } from "react-router-dom";
export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="container">
      <DashboardHeader setCollapsed={() => setCollapsed(!collapsed)} />
      <Layout>
        <DashboardSider collapsed={collapsed} />
        <Flex vertical style={{ width: "100%", margin: 20 }}>
          <Outlet />
        </Flex>
      </Layout>
    </Layout>
  );
};
