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
  { name: 'Jan', income: 100, pv: 2400, amt: 2400 },
  { name: 'Feb', income: 300, pv: 2400, amt: 2400 },
  { name: 'Mar', income: 149, pv: 2400, amt: 2400 },
  { name: 'Apr', income: 429, pv: 2400, amt: 2400 },
  { name: 'May', income: 109, pv: 2400, amt: 2400 },
  { name: 'Jun', income: 349, pv: 2400, amt: 2400 },
  { name: 'Jul', income: 280, pv: 2400, amt: 2400 },
  { name: 'Aug', income: 100, pv: 2400, amt: 2400 },
  { name: 'Sep', income: 300, pv: 2400, amt: 2400 },
  { name: 'Oct', income: 149, pv: 2400, amt: 2400 },
  { name: 'Nov', income: 429, pv: 2400, amt: 2400 },
  { name: 'Dec', income: 109, pv: 2400, amt: 2400 },
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
        <Line type='monotone' dataKey='income' stroke='#8884d8' />
        <Tooltip />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
}
