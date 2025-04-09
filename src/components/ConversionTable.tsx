
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowUpDown } from 'lucide-react';
import { cn } from '../lib/utils';

const conversionData = [
  { currency: 'USD', symbol: '$', price: '43,975.72', change: 0.34, volume: '$16.3B' },
  { currency: 'EUR', symbol: '€', price: '40,236.55', change: 0.28, volume: '€4.7B' },
  { currency: 'GBP', symbol: '£', price: '34,521.18', change: 0.31, volume: '£2.9B' },
  { currency: 'JPY', symbol: '¥', price: '6,527,938', change: 0.42, volume: '¥1.2T' },
  { currency: 'AUD', symbol: 'A$', price: '65,842.97', change: -0.12, volume: 'A$1.5B' },
  { currency: 'CAD', symbol: 'C$', price: '59,631.24', change: 0.23, volume: 'C$980M' },
  { currency: 'CHF', symbol: '₣', price: '39,127.55', change: 0.18, volume: '₣620M' },
  { currency: 'INR', symbol: '₹', price: '3,657,819.32', change: -0.22, volume: '₹387B' },
  { currency: 'SGD', symbol: '$', price: '58,925.67', change: 0.16, volume: 'S$525M' },
  { currency: 'CNY', symbol: '¥', price: '318,465.92', change: 0.26, volume: '¥5.2B' }
];

export default function ConversionTable() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <ArrowUpDown className="h-5 w-5 text-bitcoin" />
          Bitcoin Prices Today
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Currency</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">BTC Price</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">24h Change</th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">24h Volume</th>
              </tr>
            </thead>
            <tbody>
              {conversionData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-7 w-7 rounded-full bg-secondary flex items-center justify-center font-semibold text-bitcoin">
                        {row.symbol}
                      </span>
                      <span>{row.currency}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-medium">{row.price}</td>
                  <td className={cn(
                    "px-4 py-3 text-right font-medium",
                    row.change > 0 ? "text-positive" : "text-negative"
                  )}>
                    {row.change > 0 ? '+' : ''}{row.change}%
                  </td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{row.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
