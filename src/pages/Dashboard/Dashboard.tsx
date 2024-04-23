import { Button, Col, Layout, Menu, Row, Table, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import "../../assets/styles/dashboard.css";
import { CiDatabase, CiDeliveryTruck, CiShoppingCart } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdOutlineCategory, MdOutlinePayment } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonGroup from "antd/es/button/button-group";

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <Layout className="container">
      <Header style={{ backgroundColor: "azure" }}>
        <div style={{ display: "flex", alignItems: "center", marginLeft: -20 }}>
          <GiHamburgerMenu
            size={20}
            style={{ marginRight: 20 }}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div className="brand">Dashboard</div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu
            mode="inline"
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
                    key: "Unit Category",
                    icon: <MdOutlineCategory />,
                  },
                ],
              },
            ]}
          ></Menu>
        </Sider>
        <Content className="content">
          <Typography.Title level={2}>Order Page</Typography.Title>
          <Row>
            <Col span={24}>
              <Table
                bordered
                dataSource={data}
                columns={[
                  {
                    dataIndex: "name",
                    title: "Name",
                    key: "name",
                  },
                  {
                    dataIndex: "qty",
                    title: "Qty",
                    key: "qty",
                  },
                  {
                    dataIndex: "price",
                    title: "Price",
                    key: "price",
                  },
                  {
                    dataIndex: ["unitcategory", "name"],
                    title: "Unit",
                    key: "unitcategory.id",
                  },
                  {
                    title: "Action",
                    align: "center",
                    width: 300,
                    render: () => (
                      <>
                        <ButtonGroup>
                          <Button>Detail</Button>
                          <Button danger type="primary">
                            Delete
                          </Button>
                        </ButtonGroup>
                      </>
                    ),
                  },
                ]}
              ></Table>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
