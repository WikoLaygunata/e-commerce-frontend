import { Header } from "antd/es/layout/layout";
import { GiHamburgerMenu } from "react-icons/gi";

export const DashboardHeader = ({
  setCollapsed,
}: {
  setCollapsed: Function;
}) => {
  return (
    <>
      <Header style={{ backgroundColor: "azure" }}>
        <div style={{ display: "flex", alignItems: "center", marginLeft: -20 }}>
          <GiHamburgerMenu
            size={20}
            style={{ marginRight: 20 }}
            onClick={() => setCollapsed()}
          />
          <div className="brand">Dashboard</div>
        </div>
      </Header>
    </>
  );
};
