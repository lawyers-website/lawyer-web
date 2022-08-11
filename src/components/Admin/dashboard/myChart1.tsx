import { useBreakpointValue } from '@chakra-ui/react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', uv: 100, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Mar', uv: 149, pv: 2400, amt: 2400 },
  { name: 'Apr', uv: 429, pv: 2400, amt: 2400 },
  { name: 'May', uv: 109, pv: 2400, amt: 2400 },
  { name: 'Jun', uv: 349, pv: 2400, amt: 2400 },
  { name: 'Jul', uv: 280, pv: 2400, amt: 2400 },
  { name: 'Aug', uv: 100, pv: 2400, amt: 2400 },
  { name: 'Sep', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Oct', uv: 149, pv: 2400, amt: 2400 },
  { name: 'Nov', uv: 429, pv: 2400, amt: 2400 },
  { name: 'Dec', uv: 109, pv: 2400, amt: 2400 },
];

export default function MyChart1() {
  const height = useBreakpointValue({ base: 900, lg: 300 });
  const aspect = useBreakpointValue({ base: 2, lg: 3 });
  return (
    <ResponsiveContainer width='100%' aspect={aspect}>
      <LineChart
        width={1000}
        height={height}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        <Tooltip />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
}
