import {
  Button,
  Card,
  Flex,
  Form,
  GetProp,
  Image,
  Input,
  InputNumber,
  Select,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../model/Product";
import { UnitCategoryModel } from "../../model/UnitCategory";
import { CategoryModel } from "../../model/Category";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

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
    setPreviewImage("http://localhost:3000/products/image/" + data?.image);
  }, [data]);
  const OPTIONS: string[] = categories?.map((a) => a.name)!;
  const filteredOptions = OPTIONS?.filter((o) => !selectedItems?.includes(o));
  const [previewImage, setPreviewImage] = useState("");

  //const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const handleChange: UploadProps["onChange"] = async ({
    fileList: newFileList,
  }) => {
    if (newFileList[0].size! > 2 * 1024 * 1024) {
      return;
    }
    const url = await getBase64(newFileList[0].originFileObj!);
    setPreviewImage(url);
  };
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
  };

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
              <Flex
                justify="center"
                align="center"
                vertical
                style={{
                  margin: 12,
                  width: 200,
                }}
              >
                <Form.Item style={{ marginTop: 10 }}>
                  <Image
                    style={{ width: 200, height: 200 }}
                    src={previewImage}
                  ></Image>

                  <Upload
                    style={{ width: 200 }}
                    multiple={false}
                    name="file"
                    accept=".png,.jpg,.jpeg"
                    showUploadList={true}
                    beforeUpload={(file) => {
                      const isLt2M = file.size / 1024 / 1024 < 2;
                      if (!isLt2M) {
                        message.error("Image must smaller than 2MB!");
                      }
                      return isLt2M;
                    }}
                    fileList={[]}
                    onChange={handleChange}
                    onPreview={handlePreview}
                  >
                    <Button
                      type="primary"
                      style={{ width: 200, marginTop: 10 }}
                    >
                      Upload Image
                    </Button>
                  </Upload>
                </Form.Item>
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

export default ProductDetailForm;
