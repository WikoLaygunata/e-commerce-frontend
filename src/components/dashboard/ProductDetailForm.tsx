import { Button, Card, Flex, Form, Input, InputNumber, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../model/Product";
import { UnitCategoryModel } from "../../model/UnitCategory";
import { CategoryModel } from "../../model/Category";

export const ProductDetailForm = () => {
  const { slug } = useParams();
  const [data, setData] = useState<ProductModel>();
  const [unitCategories, setUnitCategories] =
    useState<Array<UnitCategoryModel>>();
  const [categories, setCategories] = useState<Array<CategoryModel>>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products/" + slug).then((res) => {
      setData(res.data);
    });
    axios.get("http://localhost:3000/unitcategories").then((res) => {
      setUnitCategories(res.data);
    });
    axios.get("http://localhost:3000/productcategories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    setSelectedItems(data?.categories.map((x) => x.name)!);
  }, [data]);
  const OPTIONS: string[] = categories?.map((a) => a.name)!;

  const filteredOptions = OPTIONS?.filter((o) => !selectedItems?.includes(o));
  return (
    <>
      {data && unitCategories && selectedItems != undefined && (
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
                  initialValue={data.name}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={"slug"}
                  label={"Slug"}
                  rules={[{ required: true }]}
                  initialValue={data.slug}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={"qty"}
                  label={"Qty"}
                  rules={[{ required: true }]}
                  initialValue={data.qty}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name={"price"}
                  label={"Price"}
                  initialValue={data.price}
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  name={"unitcategory"}
                  label={"Unit"}
                  initialValue={data.unit_id}
                >
                  <Select>
                    {unitCategories.map((x) => (
                      <Select.Option key={x.id} value={x.id}>
                        {x.name}
                      </Select.Option>
                    ))}
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
                  initialValue={data.description}
                >
                  <TextArea style={{ height: 220, maxHeight: 220 }} />
                </Form.Item>
              </Flex>
            </Flex>
            <div style={{ width: "100%" }}>
              <h3>Product Categories</h3>
              <Form.Item name={"categories"} initialValue={selectedItems}>
                <Select
                  mode="multiple"
                  placeholder="Product Categories"
                  onChange={setSelectedItems}
                  style={{ width: "100%" }}
                  options={filteredOptions?.map((item, i) => ({
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
                Save
              </Button>
            </Flex>
          </Form>
        </Card>
      )}
    </>
  );
};
