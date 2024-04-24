import { Button, Card, Flex, Form, Input, InputNumber, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

export const ProductForm = () => {
  const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <>
      <Card>
        <Form
          layout="horizontal"
          name="createProduct"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          style={{ width: "100%" }}
          onFinish={(values) => {
            console.log(values);
          }}
        >
          <Flex>
            <Flex vertical style={{ margin: 12 }}>
              <img src="" alt="" width={200} height={200} />
              <Button type="primary" style={{ marginTop: 10 }}>
                Input Image
              </Button>
            </Flex>
            <Flex vertical style={{ width: "100%", marginLeft: -24 }}>
              <Form.Item
                name={"name"}
                label={"Name"}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={"slug"}
                label={"Slug"}
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={"qty"}
                label={"Qty"}
                rules={[{ required: true }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name={"price"}
                label={"Price"}
                rules={[{ required: true }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item name={"unitcategory"} label={"Unit"}>
                <Select>
                  <Select.Option value="unitcategory1">Demo</Select.Option>
                </Select>
              </Form.Item>
            </Flex>
            <Flex
              vertical
              style={{
                width: "100%",
                height: "100%",
                marginLeft: 40,
                marginRight: 8,
              }}
            >
              <Form.Item
                name={"description"}
                label={"Description"}
                style={{ width: 500 }}
                labelCol={{ span: 24 }}
              >
                <TextArea style={{ height: 220, maxHeight: 220 }} />
              </Form.Item>
            </Flex>
          </Flex>
          <div style={{ width: "100%" }}>
            <h3>Product Categories</h3>
            <Form.Item name={"categories"}>
              <Select
                mode="multiple"
                placeholder="Product Categories"
                value={selectedItems}
                onChange={setSelectedItems}
                style={{ width: "100%" }}
                options={filteredOptions.map((item, i) => ({
                  value: item,
                  label: item,
                  key: i,
                }))}
              />
            </Form.Item>
          </div>
          <Flex justify="center">
            <Button
              htmlType="submit"
              type="primary"
              style={{ width: "20%", margin: 15, height: 40 }}
            >
              Submit
            </Button>
          </Flex>
        </Form>
      </Card>
    </>
  );
};
