import { Button, Card, Col, Input, Row, Select, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <Title level={2}>Product Page</Title>
      <Row>
        <Card style={{ width: "100%" }}>
          <Row style={{ marginBottom: 10 }}>
            <Col>
              <Select
                defaultValue="10"
                style={{ width: 120 }}
                //   onChange={handleChange}
                options={[
                  { value: "10", label: "10 Rows" },
                  { value: "20", label: "20 Rows" },
                  { value: "50", label: "50 Rows" },
                  { value: "100", label: "100 Rows" },
                ]}
              />
              <Button
                type="primary"
                style={{ marginLeft: 20 }}
                onClick={() => {
                  navigate("../dashboard/createproduct");
                }}
              >
                + Add New Product
              </Button>
            </Col>
            <Col span={6} style={{ marginLeft: "auto" }}>
              <Input placeholder="Search" prefix={<CiSearch />} />
            </Col>
          </Row>
          <Table
            bordered
            dataSource={data}
            rowKey={(record) => record.id}
            columns={[
              {
                dataIndex: "index",
                title: "No",
                key: "index",
                width: 60,
                render: (_, __, index) => <>{++index}</>,
              },
              {
                dataIndex: "name",
                title: "Name",
                key: "name",
              },
              {
                dataIndex: "qty",
                title: "Qty",
                key: "qty",
                width: 100,
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
                      <Button style={{ width: 80 }}>Detail</Button>
                      <Button danger type="primary" style={{ width: 80 }}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </>
                ),
              },
            ]}
          ></Table>
        </Card>
      </Row>
    </>
  );
};
