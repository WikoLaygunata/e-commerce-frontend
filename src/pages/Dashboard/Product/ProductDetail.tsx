import Title from "antd/es/typography/Title";
import { BackButton } from "../../../components/BackButton";
import { Flex } from "antd";
import { ProductDetailForm } from "../../../components/dashboard/ProductDetailForm";

export const ProductDetail = () => {
  return (
    <>
      <Flex justify="space-between">
        <Title level={2}>Product Detail Page</Title>
        <BackButton to="../dashboard/product" />
      </Flex>
      <ProductDetailForm />
    </>
  );
};
