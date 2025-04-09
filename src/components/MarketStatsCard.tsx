
import { ArrowUp, ArrowDown, Info, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';

export default function MarketStatsCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Market Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Coin info */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-bitcoin/10 rounded-full flex items-center justify-center">
            <span className="text-bitcoin text-2xl font-bold">₿</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">Bitcoin</h3>
                <span className="text-sm text-muted-foreground">BTC</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Star className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>

        {/* Rank */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="font-normal">Rank #1</Badge>
          <Badge variant="secondary" className="font-normal">Coin</Badge>
          <span className="text-xs text-muted-foreground mt-1">On 2,771,773 watchlists</span>
        </div>

        {/* Price */}
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold">$43,975.72</h2>
            <div className="flex items-center text-positive">
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm font-medium">2%</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <span>Bitcoin Price (USD)</span>
            <Info className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* High / Low */}
        <div>
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium">High / Low Price</span>
            <span className="text-muted-foreground">24h</span>
          </div>
          <div className="high-low-progress mt-2">
            <div className="progress-fill"></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Low: $37,005.19</span>
            <span>High: $47,325.13</span>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-4">
          <MetricCard 
            title="Market Cap" 
            value="$826.4B" 
            change={2} 
            icon="chart" 
            color="chartBlue"
          />
          <MetricCard 
            title="Fully Diluted" 
            value="$915.4B" 
            change={-28} 
            icon="water" 
            color="chartRed"
          />
          <MetricCard 
            title="24h Volume" 
            value="$22.8B" 
            change={2} 
            icon="activity" 
            color="chartGreen"
          />
          <MetricCard 
            title="Circulating Supply" 
            value="18.95M BTC" 
            subtitle="Max supply 21M"
            icon="coins" 
            color="chartPurple"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: number;
  icon: string;
  color: string;
}

function MetricCard({ title, value, subtitle, change, icon, color }: MetricCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;
  
  const getIcon = () => {
    switch(icon) {
      case 'chart': return <div className={`h-8 w-8 bg-${color}/10 rounded-full flex items-center justify-center`}>📈</div>;
      case 'water': return <div className={`h-8 w-8 bg-${color}/10 rounded-full flex items-center justify-center`}>💧</div>;
      case 'activity': return <div className={`h-8 w-8 bg-${color}/10 rounded-full flex items-center justify-center`}>📊</div>;
      case 'coins': return <div className={`h-8 w-8 bg-${color}/10 rounded-full flex items-center justify-center`}>🪙</div>;
      default: return null;
    }
  };

  return (
    <div className={cn("metric-card")}>
      <div className="flex items-start gap-2 mb-2">
        {getIcon()}
        <div>
          <div className="metric-title">{title}</div>
          <div className="metric-value">{value}</div>
          {subtitle && <div className="text-xs text-muted-foreground">{subtitle}</div>}
          {change !== undefined && (
            <div className={cn(
              "text-xs font-medium flex items-center mt-1",
              isPositive && "text-positive",
              isNegative && "text-negative"
            )}>
              {isPositive ? <ArrowUp className="h-3 w-3 mr-0.5" /> : <ArrowDown className="h-3 w-3 mr-0.5" />}
              {Math.abs(change)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
