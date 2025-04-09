
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
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-4 border-b">
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          Key Metrics
          <Badge variant="outline" className="bg-white/50 dark:bg-slate-800/50 ml-2 backdrop-blur-sm">Updated</Badge>
        </CardTitle>
      </div>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} 
                className="p-4 rounded-xl transition-all duration-300 hover:shadow-md bg-white dark:bg-slate-800 
                border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900 
                hover:translate-y-[-2px] group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-slate-900">
                  {metric.icon}
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{metric.label}</div>
              </div>
              <div className="font-bold text-lg ml-11 text-slate-900 dark:text-white">{metric.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
