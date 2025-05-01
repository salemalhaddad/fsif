"use client"

import React, { useEffect, useState } from "react";

interface StockData {
  currentPrice: number;
  previousClose: number;
  change: number;
  changePercent: number;
}

export default function PortfolioPage() {
  const [borougeData, setBorougeData] = useState<StockData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        // Using Yahoo Finance API to get Borouge stock data
        const response = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/BOROUGE.ADX?interval=1d&range=1mo');
        const data = await response.json();

        if (data.chart && data.chart.result && data.chart.result.length > 0) {
          const result = data.chart.result[0];
          const latestQuote = result.indicators.quote[0];
          const timestamp = result.timestamp;

          // Find the price on March 23rd
          const march23 = new Date('2025-03-23').getTime() / 1000;
          const march23Index = timestamp.findIndex(t => t >= march23);

          if (march23Index !== -1) {
            const march23Price = latestQuote.close[march23Index];
            const currentPrice = latestQuote.close[latestQuote.close.length - 1];

            const change = currentPrice - march23Price;
            const changePercent = (change / march23Price) * 100;

            setBorougeData({
              currentPrice: parseFloat(currentPrice.toFixed(2)),
              previousClose: parseFloat(march23Price.toFixed(2)),
              change: parseFloat(change.toFixed(2)),
              changePercent: parseFloat(changePercent.toFixed(2))
            });
          }
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStockData();
  }, []);
  return (
    <main className="min-h-screen bg-background text-foreground px-4 md:px-12 py-10">
      <h1 className="text-5xl font-serif font-extrabold text-primary mb-12 tracking-tight text-center">Portfolio</h1>

      {/* Portfolio Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Current Holdings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Borouge Card */}
          <div className="bg-background/80 border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Borouge</h3>
                <p className="text-sm text-foreground/80">ADX: BOROUGE</p>
              </div>
              <div className="text-primary font-bold text-2xl">5%</div>
            </div>
            <div className="bg-primary/10 h-2 rounded-full">
              <div className="bg-primary h-2 rounded-full" style={{ width: "5%" }}></div>
            </div>
          </div>

          {/* Walmart Card */}
          <div className="bg-background/80 border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Walmart</h3>
                <p className="text-sm text-foreground/80">NYSE: WMT</p>
              </div>
              <div className="text-primary font-bold text-2xl">5%</div>
            </div>
            <div className="bg-primary/10 h-2 rounded-full">
              <div className="bg-primary h-2 rounded-full" style={{ width: "5%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Performance */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Performance</h2>
        <div className="bg-background/80 border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Borouge Returns</h3>
              {isLoading ? (
                <div className="animate-pulse">Loading...</div>
              ) : borougeData ? (
                <div>
                  <p className="text-lg text-foreground mb-2">Since March 23rd, 2025</p>
                  <div className="flex items-center">
                    <p className={`text-2xl font-bold ${borougeData.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {borougeData.changePercent}%
                    </p>
                    <p className="ml-2 text-sm text-foreground/80">
                      ({borougeData.change >= 0 ? '+' : ''}{borougeData.change})
                    </p>
                  </div>
                  <p className="text-sm text-foreground/80 mt-2">
                    Current Price: AED {borougeData.currentPrice}
                  </p>
                  <p className="text-sm text-foreground/80">
                    March 23rd Price: AED {borougeData.previousClose}
                  </p>
                </div>
              ) : (
                <p className="text-red-400">Error loading stock data</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Portfolio Impact</h3>
              <p className="text-sm text-foreground/80">
                With a 5% allocation to Borouge, these returns represent:
              </p>
              {borougeData && (
                <div className="mt-2">
                  <p className="text-lg font-semibold">
                    {borougeData.changePercent >= 0 ? '+' : ''}
                    {borougeData.changePercent * 0.05}% contribution to portfolio
                  </p>
                  <p className="text-sm text-foreground/80">
                    Based on $100,000 portfolio value
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">Investment Philosophy</h2>
        <div className="prose prose-invert max-w-none">
          <p>Our portfolio focuses on long-term value investing in established companies with strong fundamentals and growth potential. We maintain a disciplined approach to diversification and risk management.</p>
          <p>Current holdings include:</p>
          <ul className="list-disc pl-5">
            <li>Borouge - A leading petrochemical company in the UAE</li>
            <li>Walmart - A global retail giant with strong market position</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
