
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Bitcoin, Calendar, Users, Landmark, GitFork } from 'lucide-react';
import { Badge } from './ui/badge';

export default function AboutBitcoin() {
  return (
    <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <CardHeader className="pb-2 relative">
        <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
          <Bitcoin size={160} />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bitcoin/10 backdrop-blur-sm">
            <Bitcoin className="h-5 w-5 text-bitcoin" />
          </div>
          <CardTitle className="text-xl font-medium">
            About <span className="bg-gradient-to-r from-bitcoin to-orange-500 bg-clip-text text-transparent font-bold">Bitcoin</span>
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="relative">
          <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-bitcoin/40 to-blue-500/20 rounded-full"></div>
          
          <div className="pl-10 space-y-6">
            <div className="relative">
              <Badge className="absolute -left-14 top-0 bg-bitcoin/10 text-bitcoin hover:bg-bitcoin/20 backdrop-blur-sm border-none font-normal">
                Origin
              </Badge>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                Bitcoin is the world's first decentralized cryptocurrency, invented in 2008 by an unknown person or group known as 
                <span className="font-medium text-gray-900 dark:text-white"> Satoshi Nakamoto</span>. 
                It was introduced in a whitepaper titled 
                <span className="italic"> "Bitcoin: A Peer-to-Peer Electronic Cash System,"</span> which outlined a revolutionary digital currency that could operate without a central authority.
              </p>
            </div>
            
            <div className="relative">
              <Badge className="absolute -left-14 top-0 bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 backdrop-blur-sm border-none font-normal dark:text-blue-400">
                History
              </Badge>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                Bitcoin's history began on January 3, 2009, when the first block (the "genesis block") was mined. The first real-world Bitcoin transaction occurred in 2010 when 10,000 BTC were used to purchase two pizzas, an event now celebrated annually as 
                <span className="font-medium text-gray-900 dark:text-white"> "Bitcoin Pizza Day"</span> on May 22.
              </p>
            </div>
            
            <div className="relative">
              <Badge className="absolute -left-14 top-0 bg-green-500/10 text-green-600 hover:bg-green-500/20 backdrop-blur-sm border-none font-normal dark:text-green-400">
                Technology
              </Badge>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                Bitcoin works through a technology called 
                <span className="font-medium text-gray-900 dark:text-white"> blockchain</span>, 
                a distributed public ledger that records all transactions across a network of computers. Transactions are verified by network participants called "miners" who use computing power to solve complex mathematical problems, securing the network and processing transactions. As a reward, miners receive newly created Bitcoin and transaction fees.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-none shadow-md hover:shadow-lg transition-all duration-300 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10">
                  <Users className="h-4 w-4 text-amber-500" />
                </div>
                <h3 className="font-semibold text-base">Who is Satoshi Nakamoto?</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Satoshi Nakamoto is the pseudonym used by the unknown creator(s) of Bitcoin. Despite numerous investigations, their true identity remains unknown. Nakamoto was active until December 2010, when they handed over control to Gavin Andresen and disappeared.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-md hover:shadow-lg transition-all duration-300 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10">
                  <Landmark className="h-4 w-4 text-blue-500" />
                </div>
                <h3 className="font-semibold text-base">The Bitcoin Blockchain</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Bitcoin's blockchain is a decentralized ledger recording all transactions across thousands of computers worldwide, eliminating the need for trusted third parties to verify transactions. Anyone can verify and check the public ledger.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-none shadow-md hover:shadow-lg transition-all duration-300 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-5">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <GitFork className="h-4 w-4 text-green-500" />
                </div>
                <h3 className="font-semibold text-base">Bitcoin Halving</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Bitcoin has a "halving" mechanism that reduces mining rewards by half every four years (210,000 blocks), creating scarcity. The most recent halving occurred in April 2024, reducing the reward from 6.25 to 3.125 BTC.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-4 border border-orange-200 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bitcoin/10">
              <Calendar className="h-4 w-4 text-bitcoin" />
            </div>
            <h3 className="font-semibold text-base">Bitcoin Timeline</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="text-center p-2 bg-white/60 backdrop-blur-sm rounded-md dark:bg-gray-800/60">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">2008</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Bitcoin Whitepaper</p>
            </div>
            <div className="text-center p-2 bg-white/60 backdrop-blur-sm rounded-md dark:bg-gray-800/60">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">2009</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Genesis Block Mined</p>
            </div>
            <div className="text-center p-2 bg-white/60 backdrop-blur-sm rounded-md dark:bg-gray-800/60">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">2010</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">First Bitcoin Purchase</p>
            </div>
            <div className="text-center p-2 bg-white/60 backdrop-blur-sm rounded-md dark:bg-gray-800/60">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">2024</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Fourth Halving Event</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
