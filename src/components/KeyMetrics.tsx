
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  CircleDollarSign, 
  BarChart3, 
  Coins, 
  Calendar, 
  Network, 
  Database 
} from 'lucide-react';

const metrics = [
  { label: 'Market Cap', value: '$859.5 billion', icon: <CircleDollarSign className="text-chartBlue" /> },
  { label: '24h Trading Volume', value: '$28.5 billion', icon: <BarChart3 className="text-chartPurple" /> },
  { label: 'Circulating Supply', value: '19.5 million BTC', icon: <Coins className="text-chartGreen" /> },
  { label: 'Est. Halving (Apr 2024)', value: 'Completed', icon: <Calendar className="text-chartOrange" /> },
  { label: 'Total Nodes', value: '15,000+ active nodes', icon: <Network className="text-chartRed" /> },
  { label: 'Max Supply', value: '21 million BTC', icon: <Database className="text-bitcoin" /> }
];

export default function KeyMetrics() {
  return (
    <Card className="overflow-hidden border-none shadow-xl bg-slate-900">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 border-b border-slate-700">
        <CardTitle className="text-xl font-bold flex items-center gap-2 text-white">
          Key Metrics
          <Badge variant="outline" className="bg-slate-800/80 border-slate-700 ml-2 backdrop-blur-sm text-slate-300">Updated</Badge>
        </CardTitle>
      </div>
      
      <CardContent className="p-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} 
                className="p-4 rounded-xl transition-all duration-300 hover:shadow-md bg-slate-900 
                border border-slate-800 hover:border-blue-900
                hover:translate-y-[-2px] group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-slate-800 group-hover:bg-slate-700">
                  {metric.icon}
                </div>
                <div className="text-sm font-medium text-slate-400">{metric.label}</div>
              </div>
              <div className="font-bold text-lg ml-11 text-white">{metric.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
