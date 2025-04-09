
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Bitcoin } from 'lucide-react';
import { cn } from '../lib/utils';

const topMarkets = [
  { pair: 'BTC/USD', value: '$43,975.72', volume: '$16.3B', change: 0.34, symbol: '$' },
  { pair: 'BTC/EUR', value: '€40,236.55', volume: '€4.7B', change: 0.28, symbol: '€' },
  { pair: 'BTC/GBP', value: '£34,521.18', volume: '£2.9B', change: 0.31, symbol: '£' },
  { pair: 'BTC/JPY', value: '¥6,527,938', volume: '¥1.2T', change: 0.42, symbol: '¥' },
  { pair: 'BTC/ETH', value: '16.03 ETH', volume: '275K ETH', change: -0.15, symbol: 'Ξ' },
  { pair: 'BTC/USDT', value: '43,982.45 USDT', volume: '$12.8B', change: 0.12, symbol: '$' },
  { pair: 'BTC/AUD', value: 'A$65,842.97', volume: 'A$1.5B', change: -0.12, symbol: 'A$' },
  { pair: 'BTC/CAD', value: 'C$59,631.24', volume: 'C$980M', change: 0.23, symbol: 'C$' },
  { pair: 'BTC/CHF', value: 'CHF 39,127.55', volume: 'CHF 620M', change: 0.18, symbol: 'CHF' }
];

export default function TopMarkets() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Bitcoin className="h-5 w-5 text-bitcoin" />
          Top BTC Markets
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="all" className="mb-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fiat">Fiat</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topMarkets.map((market, index) => (
            <MarketItem key={index} market={market} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function MarketItem({ market }: { market: any }) {
  const isPositive = market.change > 0;
  
  return (
    <div className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center text-bitcoin font-bold">
          {market.symbol}
        </div>
        <span className="font-medium">{market.pair}</span>
      </div>
      <div className="text-xl font-semibold mb-1">{market.value}</div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Volume: {market.volume}</span>
        <span className={cn(
          isPositive ? "text-positive" : "text-negative",
          "font-medium"
        )}>
          {isPositive ? '+' : ''}{market.change}%
        </span>
      </div>
    </div>
  );
}
