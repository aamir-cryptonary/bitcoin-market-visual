
import { Bitcoin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t mt-6 pt-6 pb-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Bitcoin className="h-5 w-5 text-bitcoin" />
            <span className="font-semibold">Cryptonary</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            © 2025 Cryptonary | All data is for informational purposes only | Not financial advice
          </div>
        </div>
      </div>
    </footer>
  );
}
