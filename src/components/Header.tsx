
import { Bitcoin, Search, Star } from 'lucide-react';
import { Input } from './ui/input';

export default function Header() {
  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brandBlue rounded-lg p-1.5">
            <Bitcoin className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl">Cryptonary</span>
        </div>
        
        <div className="hidden md:flex items-center gap-3 relative max-w-xs w-full">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search cryptocurrencies"
            className="pl-9 h-9 md:w-[300px] lg:w-[320px] bg-secondary"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Star className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
