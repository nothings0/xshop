import { useQuery } from "ui/ReactQuery";
import { Box, Button, Center, Loader, Text, createStyles } from "ui/mantine";
import { GetOrder } from "../apiRequest";
import { useParams } from "react-router-dom";
import { ProductItem } from "../components/ProductWrap";
import { useFetch } from "ui/Hooks";
import { IResAOrderServer } from "ui/type";

const useStyles = createStyles(() => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(11rem,1fr))",
    gap: "10px",
  },
}));

const OrderDetailPage = () => {
  const { classes } = useStyles();
  const { id } = useParams();
  // const { data, isLoading } = useQuery({
  //   queryFn: () => GetOrder(id!),
  //   staleTime: 3 * 60 * 1000,
  //   queryKey: "order-detail",
  // });

  const { data, isLoading } = useFetch<IResAOrderServer>(
    "order-detail",
    `orders/${id}?populate[0]=order_details.product.picture_cover&populate[1]=status`
  );

  if (isLoading)
    return (
      <Center>
        <Loader size={"xl"} />
      </Center>
    );

  return (
    <Box>
      <Box className={classes.flex}>
        <Text sx={{ fontSize: "17px", fontWeight: 600 }}>
          Chi tiết đơn hàng #{data?.data.id}-
          {data?.data.attributes.status.data.attributes.name}
        </Text>
        <Text sx={{ fontSize: "17px" }}>Ngày đặt hàng: 29-08-2023</Text>
      </Box>
      <Box className={classes.grid} sx={{ gap: "1rem", margin: "1rem 0" }}>
        <Box
          sx={{
            padding: "1rem",
            flex: 1,
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <Text sx={{ fontSize: "17px", fontWeight: 600 }}>
            Địa chỉ người nhận
          </Text>
          <Text sx={{ fontSize: "15px", marginTop: "1.5rem" }}>
            Địa chỉ: 52 tu liem, Phường Cửa Nam, Quận Hoàn Kiếm, Hà Nội, Việt
            Nam
          </Text>
        </Box>
        <Box
          sx={{
            padding: "1rem",
            flex: 1,
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <Text sx={{ fontSize: "17px", fontWeight: 600 }}>
            Hình thức giao hàng
          </Text>
          <Text sx={{ fontSize: "15px", marginTop: "1.5rem" }}>
            Fast - giao hàng tiết kiệm
          </Text>
        </Box>
        <Box
          sx={{
            padding: "1rem",
            flex: 1,
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <Text sx={{ fontSize: "17px", fontWeight: 600 }}>
            Hình thức thanh toán
          </Text>
          <Text sx={{ fontSize: "15px", marginTop: "1.5rem" }}>
            Thanh toán tiền mặt khi nhận hàng
          </Text>
        </Box>
      </Box>
      <Box>
        {data?.data.attributes.order_details.data.map((item, idx) => (
          <>
            <ProductItem data={item.attributes.product.data} key={idx} />
          </>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "0 20px",
          marginTop: "1rem",
        }}
      >
        <Button color="gray">Hủy đơn hàng</Button>
        <Button>Xác nhận</Button>
      </Box>
    </Box>
  );
};

export default OrderDetailPage;
