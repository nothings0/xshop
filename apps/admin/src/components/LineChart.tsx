import { AreaChart, Area, Tooltip, Legend, XAxis } from "recharts";

const data = [
  {
    name: "A",
    uv: 200,
  },
  {
    name: "B",
    uv: 3000,
  },
  {
    name: "C",
    uv: 2000,
  },
  {
    name: "D",
    uv: 2780,
  },
  {
    name: "E",
    uv: 1890,
  },
  {
    name: "F",
    uv: 2390,
  },
  {
    name: "G",
    uv: 300,
  },
];

const LineChartContainer = () => {
  return (
    // <ResponsiveContainer width="100%" height="200px">
    <AreaChart
      width={500}
      height={150}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <Tooltip />
      {/* <Legend /> */}
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        strokeWidth={3}
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
    // </ResponsiveContainer>
  );
};

export default LineChartContainer;
