
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Bitcoin, ChevronsUpDown } from 'lucide-react';
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
    <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-blue-50 card-hover-effect">
      <CardHeader className="pb-3 border-b border-gray-100">
        <CardTitle className="text-xl font-semibold flex items-center gap-2 text-gray-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brandBlue/10">
            <Bitcoin className="h-4 w-4 text-brandBlue" />
          </div>
          Bitcoin Prices Today
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-transparent border-b border-gray-100">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-sm font-medium text-gray-500 pl-6">Currency</TableHead>
                <TableHead className="text-sm font-medium text-gray-500 text-right">BTC Price</TableHead>
                <TableHead className="text-sm font-medium text-gray-500 text-right">24h Change</TableHead>
                <TableHead className="text-sm font-medium text-gray-500 text-right pr-6">24h Volume</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conversionData.map((row, index) => (
                <TableRow 
                  key={index} 
                  className="table-row-hover border-b border-gray-100 last:border-0"
                >
                  <TableCell className="pl-6">
                    <div className="table-currency-cell">
                      <div className="table-currency-icon">
                        {row.symbol}
                      </div>
                      <span className="font-medium text-gray-800">{row.currency}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium text-gray-800">{row.price}</TableCell>
                  <TableCell className="text-right">
                    <span className={row.change > 0 ? "table-positive-change" : "table-negative-change"}>
                      {row.change > 0 ? `+${row.change}%` : `${row.change}%`}
                    </span>
                  </TableCell>
                  <TableCell className="text-right text-gray-500 pr-6">{row.volume}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
