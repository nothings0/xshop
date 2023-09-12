import {
  ActionIcon,
  Box,
  Center,
  Loader,
  Space,
  Text,
  createStyles,
} from "ui/mantine";
import iphone from "../assets/iphone.webp";
import { useQuery } from "ui/ReactQuery";
import { GetProducts } from "../apiRequest";
import { IProduct } from "ui/type";
import { IconPencil, IconTrash } from "ui/tabler";
import { Link, useNavigate } from "react-router-dom";

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

const ProductWrap = ({ isBtn }: { isBtn?: boolean }) => {
  const { classes } = useStyles();

  const { data, isLoading } = useQuery({
    queryFn: () => GetProducts(),
    queryKey: "product",
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
        <Box sx={{ flex: 2 }}>Sản phẩm</Box>
        <Box sx={{ flex: 1 }}>Số lượng</Box>
        <Box sx={{ flex: 1 }}>Giá</Box>
        {isBtn && <Space sx={{ flex: 1 }}></Space>}
      </Box>
      {data?.data.map((item, index) => (
        <ProductItem key={index} data={item} isBtn={isBtn} />
      ))}
    </Box>
  );
};

export const ProductItem = ({
  data,
  isBtn,
}: {
  data: IProduct;
  isBtn?: boolean;
}) => {
  const navigate = useNavigate();
  const handleEdit = (id: number) => {
    navigate(`/edit/${id}`);
  };

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
        sx={{ display: "flex", gap: "0 10px", flex: 2, alignItems: "center" }}
      >
        <Box sx={{ width: "80px" }}>
          <img
            src={iphone}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box>
          <Link to={`/product/${data.id}`}>
            <Text sx={{ fontSize: "19px", fontWeight: 600 }}>
              {data.attributes.name}
            </Text>
          </Link>
        </Box>
      </Box>
      <Box sx={{ fontSize: "16px", flex: 1 }}>
        <Text>{data.attributes.quantity}</Text>
      </Box>
      <Box sx={{ fontSize: "16px", flex: 1 }}>
        <Text>{data.attributes.price}</Text>
      </Box>
      {isBtn && (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          <ActionIcon
            color="blue"
            size={"xl"}
            onClick={() => handleEdit(data.id)}
          >
            <IconPencil />
          </ActionIcon>
          <ActionIcon color="red" size={"xl"}>
            <IconTrash />
          </ActionIcon>
        </Box>
      )}
    </Box>
  );
};

export default ProductWrap;
