
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function AboutBitcoin() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">
          About <span className="text-bitcoin">Bitcoin</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 text-sm">
        <p className="leading-relaxed">
          Bitcoin is the world's first decentralized cryptocurrency, invented in 2008 by an unknown person or group known as Satoshi Nakamoto. It was introduced in a whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System," which outlined a revolutionary digital currency that could operate without a central authority.
        </p>
        
        <p className="leading-relaxed">
          Bitcoin's history began on January 3, 2009, when the first block (the "genesis block") was mined. The first real-world Bitcoin transaction occurred in 2010 when 10,000 BTC were used to purchase two pizzas, an event now celebrated annually as "Bitcoin Pizza Day" on May 22.
        </p>
        
        <p className="leading-relaxed">
          Bitcoin works through a technology called blockchain, a distributed public ledger that records all transactions across a network of computers. Transactions are verified by network participants called "miners" who use computing power to solve complex mathematical problems, securing the network and processing transactions. As a reward, miners receive newly created Bitcoin and transaction fees.
        </p>
        
        <div className="pt-4 border-t mt-6">
          <h3 className="font-semibold text-base mb-2">Who is Satoshi Nakamoto?</h3>
          <p className="leading-relaxed">
            Satoshi Nakamoto is the pseudonym used by the unknown person or group of people who developed Bitcoin. Despite numerous investigations and claims, the true identity of Satoshi Nakamoto remains unknown. Nakamoto was active in the development of Bitcoin until December 2010, at which point they handed over control of the source code repository and network alert key to Gavin Andresen, and transferred several related domains to various prominent members of the Bitcoin community.
          </p>
        </div>
        
        <div className="pt-4 border-t">
          <h3 className="font-semibold text-base mb-2">The Bitcoin Blockchain</h3>
          <p className="leading-relaxed">
            Bitcoin's blockchain is a decentralized, distributed ledger that records all transactions across thousands of computers worldwide. This technology eliminates the need for trusted third parties such as banks to verify transactions. The blockchain is maintained by network nodes through cryptography and recorded in a public distributed ledger where anyone can verify and check transactions.
          </p>
        </div>
        
        <div className="pt-4 border-t">
          <h3 className="font-semibold text-base mb-2">Bitcoin Halving</h3>
          <p className="leading-relaxed">
            Bitcoin has a built-in mechanism called "halving" that reduces the reward for mining new blocks by half approximately every four years (or every 210,000 blocks). This process is designed to create scarcity and control inflation by slowing the rate at which new bitcoins are created.
          </p>
          <p className="leading-relaxed mt-2">
            The most recent halving occurred in April 2024, reducing the block reward from 6.25 to 3.125 BTC. This event is significant for Bitcoin's economy as it directly affects the supply of new bitcoins entering circulation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
