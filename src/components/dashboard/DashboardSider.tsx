import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { BiCategoryAlt } from "react-icons/bi";
import { CiDatabase, CiDeliveryTruck, CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { MdOutlineCategory, MdOutlinePayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const DashboardSider = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();

  function handleRouteChange({ key }: { key: string }) {
    navigate(`/dashboard/${key}`);
  }

  return (
    <Sider collapsed={collapsed} theme="light">
      <Menu
        mode="inline"
        onClick={handleRouteChange}
        items={[
          {
            label: "Order",
            key: "order",
            icon: <CiShoppingCart />,
          },
          {
            label: "Delivery",
            key: "delivery",
            icon: <CiDeliveryTruck />,
          },
          {
            label: "Master Data",
            key: "masterdata",
            icon: <CiDatabase />,
            children: [
              {
                label: "Product",
                key: "product",
                icon: <FiBox />,
              },
              {
                label: "Category",
                key: "category",
                icon: <BiCategoryAlt />,
              },
              {
                label: "User",
                key: "user",
                icon: <FaUser />,
              },
              {
                label: "Payment",
                key: "payment",
                icon: <MdOutlinePayment />,
              },
              {
                label: "Unit Category",
                key: "unitcategory",
                icon: <MdOutlineCategory />,
              },
            ],
          },
        ]}
      ></Menu>
    </Sider>
  );
};
