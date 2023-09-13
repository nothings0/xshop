import {
  Box,
  Button,
  Flex,
  Group,
  Radio,
  Text,
  createStyles,
} from "ui/mantine";
import PieChartContainer from "./PieChart";
import LineChartContainer from "./LineChart";
import { IconArrowBigDownLine } from "ui/tabler";

const useStyles = createStyles((theme) => ({
  box: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    margin: "4rem 0",
    padding: "0 1rem",
    [theme.fn.smallerThan("lg")]: {
      flexDirection: "column",
    },
  },
  boxItem: {
    padding: "20px",
    background: "#fff",
    height: "260px",
    width: "50%",
    borderRadius: "10px",
    [theme.fn.smallerThan("lg")]: {
      width: "100%",
    },
  },
  chartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const data = [
  {
    title: "orders",
    data: [
      { name: "Group A", value: 35, color: "#0088FE" },
      { name: "Group B", value: 65, color: "#0088FE1A" },
    ],
  },
  {
    title: "delivered",
    data: [
      { name: "Group A", value: 65, color: "#0088FE" },
      { name: "Group B", value: 35, color: "#0088FE1A" },
    ],
  },
  {
    title: "canceled",
    data: [
      { name: "Group A", value: 15, color: "#0088FE" },
      { name: "Group B", value: 85, color: "#0088FE1A" },
    ],
  },
];

const ChartContainer = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.box}>
      <Box className={classes.boxItem}>
        <Flex align="center" justify={"space-between"}>
          <Text sx={{ fontSize: "25px", fontWeight: 700 }}>Pie chart</Text>
          <Radio.Group>
            <Group>
              <Radio label="Chart" color="cyan" value="chart" />
              <Radio label="Show value" color="red" value="value" />
            </Group>
          </Radio.Group>
        </Flex>

        <Box className={classes.chartItem}>
          {data.map((item, index) => (
            <PieChartContainer key={index} data={item} />
          ))}
        </Box>
      </Box>
      <Box className={classes.boxItem} sx={{ justifyContent: "center" }}>
        <Flex
          align="center"
          justify={"space-between"}
          sx={{ marginBottom: "15px" }}
        >
          <Box>
            <Text sx={{ fontSize: "25px", fontWeight: 700 }}>Chart order</Text>
            <Text sx={{ fontSize: "15px", fontWeight: 400, opacity: 0.7 }}>
              Lorem ipsum dolor sit amet
            </Text>
          </Box>
          <Button
            leftIcon={<IconArrowBigDownLine />}
            variant="outline"
            radius={10}
          >
            Save export
          </Button>
        </Flex>
        <Box className={classes.chartItem} sx={{ justifyContent: "center" }}>
          <LineChartContainer />
        </Box>
      </Box>
    </Box>
  );
};

export default ChartContainer;
