
import { Card, CardContent } from './ui/card';

export default function MarketSummary() {
  return (
    <Card className="bg-slate-800 text-slate-100">
      <CardContent className="p-6 space-y-4">
        <p>
          Bitcoin price today is $43,975.72 with a 24-hour trading volume of $22.82B, market cap of $826.44B, and market dominance of 58.40%. The BTC price increased <span className="text-positive font-semibold">0.26%</span> in the last 24 hours.
        </p>
        
        <p>
          Bitcoin reached its highest price on Mar 14, 2024 when it was trading at its all-time high of $73,750.00, while Bitcoin's lowest price was recorded on Jul 17, 2010 when it was trading at its all-time low of $0.05. The lowest price since it's ATH was $15,599.05 (cycle low). The highest BTC price since the last cycle low was $73,750.00 (cycle high). The Bitcoin price sentiment is currently <span className="text-positive font-semibold">bullish</span>, while Fear & Greed Index is showing <span className="text-lime-500 font-semibold">69 (Greed)</span>.
        </p>
        
        <p>
          Bitcoin's current circulating supply is 18.95M BTC out of max supply of 21.00M BTC. The current yearly supply inflation rate is 1.18% meaning <span className="font-semibold">231,034 BTC</span> were created in the last year. In terms of market cap, Bitcoin is currently ranked #1 in the <span className="text-slate-300 font-semibold">Proof-of-Work Coins</span> sector and ranked #1 in the <span className="text-slate-300 font-semibold">Layer 1</span> sector.
        </p>
      </CardContent>
    </Card>
  );
}
