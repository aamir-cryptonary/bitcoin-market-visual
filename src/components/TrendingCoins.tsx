
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Star, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';

const trendingCoins = [
  { name: 'Ethervista', symbol: 'EV', price: '$40.60', change: 21.1, chartPath: 'M0,28 L5,26 L10,24 L15,22 L20,19 L25,15 L30,12 L35,9 L40,7 L45,6 L50,4 L55,3 L60,2 L65,3 L70,5 L75,6 L80,7 L85,9 L90,10 L95,12 L100,10' },
  { name: 'Grass', symbol: 'GRASS', price: '$1.62', change: 15.8, chartPath: 'M0,25 L5,24 L10,23 L15,22 L20,21 L25,20 L30,19 L35,17 L40,16 L45,15 L50,14 L55,12 L60,10 L65,9 L70,8 L75,7 L80,6 L85,5 L90,4 L95,5 L100,6' },
  { name: 'Peanut', symbol: 'PEANUT', price: '$0.05537', change: 56.7, chartPath: 'M0,15 L5,10 L10,5 L15,8 L20,6 L25,10 L30,12 L35,8 L40,10 L45,15 L50,18 L55,20 L60,22 L65,24 L70,25 L75,23 L80,21 L85,20 L90,22 L95,25 L100,28' },
  { name: 'MANTRA', symbol: 'MANTRA', price: '$1.31', change: -3.8, chartPath: 'M0,10 L5,12 L10,8 L15,15 L20,10 L25,12 L30,15 L35,17 L40,13 L45,16 L50,18 L55,15 L60,17 L65,20 L70,18 L75,20 L80,22 L85,24 L90,21 L95,23 L100,25' },
  { name: 'MAGA', symbol: 'MAGA', price: '$3.46', change: 15.1, chartPath: 'M0,18 L5,15 L10,12 L15,14 L20,12 L25,10 L30,15 L35,18 L40,20 L45,18 L50,16 L55,15 L60,17 L65,19 L70,21 L75,20 L80,22 L85,24 L90,25 L95,24 L100,25' },
  { name: 'Sui', symbol: 'SUI', price: '$1.89', change: 0.9, chartPath: 'M0,20 L5,18 L10,16 L15,15 L20,13 L25,10 L30,8 L35,7 L40,6 L45,7 L50,8 L55,10 L60,9 L65,11 L70,13 L75,14 L80,15 L85,17 L90,16 L95,17 L100,16' },
  { name: 'Scroll', symbol: 'SCRL', price: '$0.5917', change: -7.0, chartPath: 'M0,5 L5,7 L10,8 L15,10 L20,12 L25,13 L30,15 L35,17 L40,18 L45,20 L50,21 L55,22 L60,23 L65,24 L70,25 L75,26 L80,25 L85,24 L90,25 L95,26 L100,27' },
  { name: 'Solana', symbol: 'SOL', price: '$163.23', change: 0.5, chartPath: 'M0,12 L5,10 L10,8 L15,9 L20,7 L25,8 L30,10 L35,12 L40,15 L45,17 L50,16 L55,18 L60,20 L65,21 L70,19 L75,20 L80,22 L85,23 L90,24 L95,22 L100,23' }
];

export default function TrendingCoins() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-bitcoin" />
          Trending Coins
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendingCoins.map((coin, index) => (
            <CoinCard key={index} coin={coin} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CoinCard({ coin }: { coin: any }) {
  const isPositive = coin.change > 0;
  
  return (
    <div className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium">{coin.name}</h3>
          <div className="text-xs text-muted-foreground">{coin.symbol}</div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Star className="h-4 w-4" />
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">{coin.price}</span>
        <span className={cn(
          "text-xs font-medium",
          isPositive ? "text-positive" : "text-negative"
        )}>
          {isPositive ? '+' : ''}{coin.change}%
        </span>
      </div>
      
      <svg className="w-full h-10 mt-2" viewBox="0 0 100 30" preserveAspectRatio="none">
        <path 
          d={coin.chartPath} 
          stroke={isPositive ? "#10b981" : "#ef4444"} 
          strokeWidth="1.5" 
          fill="none"
        />
      </svg>
    </div>
  );
}
