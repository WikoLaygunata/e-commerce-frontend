import { Button, Card, Row, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Title from "antd/es/typography/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { UpsideTable } from "../../../components/dashboard/UpsideTable";

export const Product = () => {
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
          <UpsideTable />
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
