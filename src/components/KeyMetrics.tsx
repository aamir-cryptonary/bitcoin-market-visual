
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const metrics = [
  { label: 'Market Cap', value: '$859.5 billion' },
  { label: '24h Trading Volume', value: '$28.5 billion' },
  { label: 'Circulating Supply', value: '19.5 million BTC' },
  { label: 'Est. Halving (Apr 2024)', value: 'Completed' },
  { label: 'Total Nodes', value: '15,000+ active nodes' },
  { label: 'Max Supply', value: '21 million BTC' }
];

export default function KeyMetrics() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Key Metrics</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <div className="text-sm text-muted-foreground">{metric.label}</div>
              <div className="font-semibold mt-1">{metric.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
