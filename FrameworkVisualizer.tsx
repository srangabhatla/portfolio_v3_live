import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';

interface FrameworkVisualizerProps {
  type: string;
}

export default function FrameworkVisualizer({ type }: FrameworkVisualizerProps) {
  if (type === 'metrics-framework') {
    const data = [
      { name: 'North Star', value: 100, color: '#ffffff' },
      { name: 'Drivers', value: 80, color: '#a1a1aa' },
      { name: 'Health', value: 60, color: '#71717a' },
      { name: 'Leading', value: 40, color: '#3f3f46' },
    ];

    return (
      <div className="h-64 w-full mt-8 bg-white/5 rounded-2xl p-6 border border-white/10">
        <h5 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-4">Conceptual Hierarchy</h5>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" stroke="#71717a" fontSize={10} width={80} />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'prioritization-framework') {
    const data = [
      { name: 'Strategic Alignment', value: 40 },
      { name: 'Impact/Effort', value: 30 },
      { name: 'Sequencing', value: 20 },
      { name: 'Communication', value: 10 },
    ];
    const COLORS = ['#ffffff', '#a1a1aa', '#71717a', '#3f3f46'];

    return (
      <div className="h-64 w-full mt-8 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center">
        <h5 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-4 self-start">Priority Weighting</h5>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}
