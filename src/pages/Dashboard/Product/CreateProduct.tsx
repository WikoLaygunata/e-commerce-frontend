import Title from "antd/es/typography/Title";
import { BackButton } from "../../../components/BackButton";
import { Flex } from "antd";
import { ProductForm } from "../../../components/dashboard/ProductForm";

export const CreateProduct = () => {
  return (
    <>
      <Flex justify="space-between">
        <Title level={2}>Create Product Page</Title>
        <BackButton />
      </Flex>
      <ProductForm />
    </>
  );
};
