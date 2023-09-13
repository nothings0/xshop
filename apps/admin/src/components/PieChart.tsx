import { PieChart, Pie, Cell } from "recharts";
import { Box, Text } from "ui/mantine";

interface IProp {
  data: {
    title: string;
    data: {
      name: string;
      value: number;
      color: string;
    }[];
  };
}

const PieChartContainer = ({ data }: IProp) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ position: "relative" }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data.data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={3}
          >
            {data.data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
        {/* <Text
          component="span"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-25%, -40%)",
            fontSize: "25px",
            fontWeight: 600,
          }}
        >
          {data.}
        </Text> */}
      </Box>
      <Text size="lg" fw={600} transform="capitalize">
        {data.title}
      </Text>
    </Box>
  );
};

export default PieChartContainer;
