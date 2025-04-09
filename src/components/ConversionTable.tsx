
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowUpDown, Bitcoin } from 'lucide-react';
import { cn } from '../lib/utils';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table';

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
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-none overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Bitcoin className="h-6 w-6 text-brandBlue" />
          Bitcoin Prices Today
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="overflow-x-auto rounded-md">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow className="border-none hover:bg-transparent">
                <TableHead className="text-brandBlue font-medium">Currency</TableHead>
                <TableHead className="text-right text-brandBlue font-medium">BTC Price</TableHead>
                <TableHead className="text-right text-brandBlue font-medium">24h Change</TableHead>
                <TableHead className="text-right text-brandBlue font-medium">24h Volume</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conversionData.map((row, index) => (
                <TableRow 
                  key={index} 
                  className="border-b hover:bg-blue-50/30 transition-colors cursor-pointer card-hover-effect"
                >
                  <TableCell>
                    <div className="flex items-center gap-2 pl-1">
                      <div className="h-8 w-8 rounded-full flex items-center justify-center bg-brandBlue/10 text-brandBlue font-medium">
                        {row.symbol}
                      </div>
                      <span className="font-medium">{row.currency}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold">{row.price}</TableCell>
                  <TableCell className={cn(
                    "text-right font-medium",
                    row.change > 0 ? "text-positive" : "text-negative"
                  )}>
                    <div className={cn(
                      "inline-flex items-center justify-center px-2 py-1 rounded-full text-xs",
                      row.change > 0 ? "bg-positive/10 text-positive" : "bg-negative/10 text-negative"
                    )}>
                      {row.change > 0 ? '+' : ''}{row.change}%
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground font-medium">{row.volume}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
