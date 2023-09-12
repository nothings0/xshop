import { Box, Text } from "ui/mantine";
import OrderWrap from "../components/OrderWrap";

const Order = () => {
  return (
    <Box>
      <Text component="h3" ml={1} size={"xl"} color="dark">
        Danh sách đơn hàng
      </Text>
      <OrderWrap />
    </Box>
  );
};

export default Order;
