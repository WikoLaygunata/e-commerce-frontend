import { Button, Col, Input, Row, Select } from "antd";
import { CiSearch } from "react-icons/ci";

export const UpsideTable = () => {
  return (
    <>
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
          <Button type="primary" style={{ marginLeft: 20 }}>
            + Add New Product
          </Button>
        </Col>
        <Col span={6} style={{ marginLeft:"auto" }}>
          <Input placeholder="Search" prefix={<CiSearch />} />
        </Col>
      </Row>
    </>
  );
};
