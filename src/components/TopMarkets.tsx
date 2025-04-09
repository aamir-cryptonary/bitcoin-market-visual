
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
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
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-none overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Bitcoin className="h-6 w-6 text-brandBlue" />
          Top BTC Markets
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="w-fit bg-gray-100 p-1 rounded-full">
            <TabsTrigger 
              value="all" 
              className="rounded-full data-[state=active]:bg-brandBlue data-[state=active]:text-white px-6"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="fiat" 
              className="rounded-full data-[state=active]:bg-brandBlue data-[state=active]:text-white px-6"
            >
              Fiat
            </TabsTrigger>
            <TabsTrigger 
              value="crypto" 
              className="rounded-full data-[state=active]:bg-brandBlue data-[state=active]:text-white px-6"
            >
              Crypto
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topMarkets.map((market, index) => (
                <MarketItem key={index} market={market} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fiat">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topMarkets.filter(m => !m.pair.includes('/ETH')).map((market, index) => (
                <MarketItem key={index} market={market} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="crypto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topMarkets.filter(m => m.pair.includes('/ETH') || m.pair.includes('/USDT')).map((market, index) => (
                <MarketItem key={index} market={market} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function MarketItem({ market }: { market: any }) {
  const isPositive = market.change > 0;
  
  return (
    <div className="bg-white rounded-xl p-5 hover:shadow-md transition-all hover:translate-y-[-2px] border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full flex items-center justify-center text-brandBlue bg-brandBlue/10 font-bold">
          {market.symbol}
        </div>
        <span className="font-semibold text-gray-800">{market.pair}</span>
      </div>
      <div className="text-2xl font-bold mb-2">{market.value}</div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Volume: {market.volume}</span>
        <div className={cn(
          "text-sm font-medium px-2 py-1 rounded-md",
          isPositive ? "bg-positive/10 text-positive" : "bg-negative/10 text-negative"
        )}>
          {isPositive ? '+' : ''}{market.change}%
        </div>
      </div>
    </div>
  );
}
