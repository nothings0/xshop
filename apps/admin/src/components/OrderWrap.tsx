import { Box, Center, Loader, Text, createStyles } from "ui/mantine";
import iphone from "../assets/iphone.webp";
import { useQuery } from "ui/ReactQuery";
import { GetOrders } from "../apiRequest";
import { IAOrderServer } from "ui/type";
import { Link } from "react-router-dom";
import { fomatCurrency } from "ui/util";

const useStyles = createStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    background: "#fff",
    "&>div": {
      fontSize: "18px",
      fontWeight: 600,
    },
  },
}));

const OrderWrap = () => {
  const { classes } = useStyles();

  const { data, isLoading } = useQuery({
    queryFn: () => GetOrders(),
    queryKey: "order",
    staleTime: 3 * 60 * 1000,
  });

  if (isLoading)
    return (
      <Center>
        <Loader size={"xl"} />
      </Center>
    );

  return (
    <Box>
      <Box className={classes.header}>
        <Box sx={{ flex: 3 }}>Sản phẩm</Box>
        <Box sx={{ flex: 1 }}>Số lượng</Box>
        <Box sx={{ flex: 1 }}>Thành tiền</Box>
      </Box>
      {data?.data.map((item, index) => (
        <OrderItem key={index} data={item} />
      ))}
    </Box>
  );
};

const useOrderStyle = createStyles(() => ({
  warning: {
    color: "#fff",
    background: "#ff3c3c",
  },
  pending: {
    color: "#fff",
    background: "cyan",
  },
  success: {
    color: "#fff",
    background: "green",
  },
}));

const OrderItem = ({ data }: { data: IAOrderServer }) => {
  const { classes } = useOrderStyle();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        marginTop: "1rem",
        background: "#fff",
      }}
    >
      <Box
        sx={{ display: "flex", gap: "0 10px", flex: 3, alignItems: "center" }}
      >
        <Box sx={{ width: "80px" }}>
          <img
            src={iphone}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <Link to={`/order/${data.id}`}>
            <Text
              sx={{ fontSize: "19px", fontWeight: 600, marginBottom: "8px" }}
            >
              {
                data.attributes.order_details.data[0].attributes.product.data
                  .attributes.name
              }
            </Text>
          </Link>
          <Text
            sx={{
              fontSize: "17px",
              padding: "4px 8px",
              display: "inline",
              borderRadius: "5px",
            }}
            component="p"
            className={`${
              data.attributes.status.data.attributes.name === "pending"
                ? classes.pending
                : data.attributes.status.data.attributes.name === "faild"
                ? classes.warning
                : classes.success
            }`}
          >
            {data.attributes.status.data.attributes.name}
          </Text>
        </Box>
      </Box>
      <Box sx={{ fontSize: "16px", flex: 1 }}>
        <Text>{data.attributes.order_details.data[0].attributes.quantity}</Text>
      </Box>
      <Box sx={{ fontSize: "16px", flex: 1 }}>
        <Text>
          {fomatCurrency(
            data.attributes.order_details.data[0].attributes.product.data
              .attributes.price
          )}
        </Text>
      </Box>
    </Box>
  );
};

export default OrderWrap;
