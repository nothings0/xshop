import { Box, Text } from "ui/mantine";
import ProductWrap from "../components/ProductWrap";

const ProductPage = () => {
  return (
    <Box>
      <Text component="h3" ml={1} size={"xl"} color="dark">
        Danh sách sản phẩm
      </Text>
      <ProductWrap isBtn />
    </Box>
  );
};

export default ProductPage;
