
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import MarketStatsCard from '@/components/MarketStatsCard';
import PriceChart from '@/components/PriceChart';
import MarketSummary from '@/components/MarketSummary';
import TopMarkets from '@/components/TopMarkets';
import ConversionTable from '@/components/ConversionTable';
import TrendingCoins from '@/components/TrendingCoins';
import AboutBitcoin from '@/components/AboutBitcoin';
import KeyMetrics from '@/components/KeyMetrics';
import StrengthWeakness from '@/components/StrengthWeakness';
import PopularCryptos from '@/components/PopularCryptos';
import GoogleTrends from '@/components/GoogleTrends';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <MarketStatsCard />
            </div>
            <div className="lg:col-span-3">
              <PriceChart />
            </div>
          </div>

          <MarketSummary />
          
          <StrengthWeakness />
          
          <Tabs defaultValue="markets" className="w-full">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="markets">Market Data</TabsTrigger>
              <TabsTrigger value="about">About Bitcoin</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
            
            <div className="space-y-6">
              <TopMarkets />
              <ConversionTable />
              <TrendingCoins />
            </div>
          </Tabs>
          
          {/* Google Trends integration */}
          <div className="py-4">
            <GoogleTrends />
          </div>
          
          <div className="py-4">
            <AboutBitcoin />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <KeyMetrics />
            </div>
            <div>
              <PopularCryptos />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
