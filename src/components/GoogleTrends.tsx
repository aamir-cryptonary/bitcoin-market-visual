
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChartLine } from 'lucide-react';

const GoogleTrends: React.FC = () => {
  const trendsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only execute after component mounts
    const script = document.createElement('script');
    script.src = 'https://ssl.gstatic.com/trends_nrtr/3620_RC01/embed_loader.js';
    script.async = true;
    
    script.onload = () => {
      if (window.trends && trendsRef.current) {
        window.trends.embed.renderExploreWidgetTo(
          trendsRef.current,
          "TIMESERIES",
          {
            comparisonItem: [
              { keyword: "Bitcoin", geo: "", time: "today 12-m" },
              { keyword: "Ethereum", geo: "", time: "today 12-m" },
              { keyword: "Cryptocurrency", geo: "", time: "today 12-m" }
            ],
            category: 0,
            property: "",
          },
          {
            exploreQuery: "q=bitcoin&date=today 12-m",
            guestPath: "https://trends.google.com:443/trends/embed/"
          }
        );
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <Card className="overflow-hidden border-none shadow-xl bg-slate-900">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 border-b border-slate-700">
        <CardTitle className="text-xl font-bold flex items-center gap-2 text-white">
          Search Interest Trends
          <ChartLine className="h-5 w-5 text-chartBlue ml-2" />
          <Badge variant="outline" className="bg-slate-800/80 border-slate-700 ml-2 backdrop-blur-sm text-slate-300">
            Live Data
          </Badge>
        </CardTitle>
      </div>
      
      <CardContent className="p-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="w-full relative" style={{ height: "400px" }}>
          <div 
            ref={trendsRef} 
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};

// Add TypeScript interface for the global trends object
declare global {
  interface Window {
    trends?: {
      embed: {
        renderExploreWidgetTo: (
          element: HTMLElement,
          type: string,
          options: any,
          moreOptions: any
        ) => void;
      };
    };
  }
}

export default GoogleTrends;
