
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '../lib/utils';

const popularCryptos = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$43,984.73', change: 1.24, icon: '₿', color: 'bitcoin' },
  { name: 'Ethereum', symbol: 'ETH', price: '$2,741.56', change: 2.71, icon: 'Ξ', color: '#627EEA' },
  { name: 'Solana', symbol: 'SOL', price: '$139.67', change: 5.77, icon: '◎', color: '#00FFA3' },
  { name: 'Cardano', symbol: 'ADA', price: '$0.35', change: -1.2, icon: '₳', color: '#0033AD' },
  { name: 'Binance Coin', symbol: 'BNB', price: '$558.43', change: 1.7, icon: 'BNB', color: '#F3BA2F' },
  { name: 'Polkadot', symbol: 'DOT', price: '$3.61', change: 0.8, icon: 'DOT', color: '#E6007A' }
];

export default function PopularCryptos() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Popular Cryptocurrencies</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          {popularCryptos.map((crypto, index) => (
            <div key={index} className="flex justify-between items-center p-2 hover:bg-secondary/50 rounded-md transition-colors">
              <div className="flex items-center gap-3">
                <div 
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: crypto.color === 'bitcoin' ? '#f7931a' : crypto.color }}
                >
                  {crypto.icon}
                </div>
                <div>
                  <div className="font-medium">{crypto.name}</div>
                  <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-semibold">{crypto.price}</div>
                <div className={cn(
                  "flex items-center justify-end text-xs font-medium",
                  crypto.change > 0 ? "text-positive" : "text-negative"
                )}>
                  {crypto.change > 0 ? (
                    <><ArrowUp className="h-3 w-3 mr-0.5" />+{crypto.change}%</>
                  ) : (
                    <><ArrowDown className="h-3 w-3 mr-0.5" />{crypto.change}%</>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
