
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, X } from 'lucide-react';

const strengths = [
  'Decentralized and permission-less network',
  'Limited supply (21 million coins) creates digital scarcity',
  'Borderless transactions without intermediaries',
  'Growing institutional adoption and infrastructure',
  'Hedge against inflation and currency devaluation'
];

const weaknesses = [
  'High price volatility and market speculation',
  'Energy consumption concerns due to proof-of-work',
  'Scalability limitations in its base layer',
  'Regulatory uncertainty in many jurisdictions',
  'Security risks for inexperienced users (key management)'
];

export default function StrengthWeakness() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Strength</CardTitle>
        </CardHeader>
        
        <CardContent>
          <ul className="space-y-3">
            {strengths.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 bg-positive/10 rounded-full flex items-center justify-center text-positive flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Weakness</CardTitle>
        </CardHeader>
        
        <CardContent>
          <ul className="space-y-3">
            {weaknesses.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 bg-negative/10 rounded-full flex items-center justify-center text-negative flex-shrink-0 mt-0.5">
                  <X className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
