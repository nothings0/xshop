import { PieChart, Pie, Cell } from "recharts";
import { Text } from "ui/mantine";

interface IProp {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

const PieChartContainer = ({ data }: IProp) => {
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        paddingAngle={3}
      >
        {data.map((item, index) => (
          <Cell key={`cell-${index}`} fill={item.color} />
        ))}
      </Pie>
      <Text>{}</Text>
    </PieChart>
  );
};

export default PieChartContainer;
