
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Search, ChevronDown, LineChart, Maximize, MoreHorizontal } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Input } from './ui/input';

// Sample data
const priceData = [
  { time: '00:00', price: 39700 },
  { time: '02:00', price: 39900 },
  { time: '04:00', price: 41200 },
  { time: '06:00', price: 40800 },
  { time: '08:00', price: 42500 },
  { time: '10:00', price: 43100 },
  { time: '12:00', price: 42900 },
  { time: '14:00', price: 43400 },
  { time: '16:00', price: 43800 },
  { time: '18:00', price: 43600 },
  { time: '20:00', price: 44200 },
  { time: '22:00', price: 43975 },
];

const timeFrames = ['24h', '7d', '30d', '90d', '1y', 'All'];

export default function PriceChart() {
  const [activeTab, setActiveTab] = useState('price');
  const [timeFrame, setTimeFrame] = useState('24h');

  return (
    <Card className="h-full">
      <CardHeader className="pb-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <CardTitle className="text-lg font-medium">Bitcoin to USD Chart</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search coin name"
              className="pl-9 h-9 w-full max-w-[200px] bg-secondary"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <Tabs defaultValue="price" value={activeTab} onValueChange={setActiveTab} className="mb-4">
          <TabsList>
            <TabsTrigger value="price">Price</TabsTrigger>
            <TabsTrigger value="marketcap">Market Cap</TabsTrigger>
            <TabsTrigger value="tradeview">Trade View</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex justify-between items-center mb-4">
          <div className="relative inline-block">
            <Button variant="outline" className="text-sm pr-2 h-8" size="sm">
              {timeFrame} <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <LineChart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Maximize className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="h-[300px] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={priceData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0066FF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eeeeee" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }} 
                axisLine={false} 
                tickLine={false}
              />
              <YAxis 
                domain={['dataMin - 1000', 'dataMax + 1000']}
                tick={{ fontSize: 12 }} 
                axisLine={false} 
                tickLine={false}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip 
                formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Price']} 
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#0066FF" 
                fillOpacity={1} 
                fill="url(#colorPrice)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {timeFrames.map(frame => (
            <Button 
              key={frame}
              variant={timeFrame === frame ? "default" : "outline"} 
              size="sm"
              onClick={() => setTimeFrame(frame)}
              className={timeFrame === frame ? "bg-brandBlue hover:bg-brandBlue-dark" : ""}
            >
              {frame}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
