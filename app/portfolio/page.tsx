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
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold text-foreground">A simulated portfolio managed with institutional rigor.</h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Our holdings reflect disciplined research, strict risk limits, and diversified exposure across the UAE market and global equities.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Current Holdings</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              { name: "Borouge", ticker: "UAE Market", weight: 5 },
              { name: "Walmart", ticker: "Global Large Cap", weight: 5 },
            ].map((holding) => (
              <div key={holding.name} className="rounded-2xl border border-border/70 bg-card/80 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{holding.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{holding.ticker}</p>
                  </div>
                  <div className="text-xl font-semibold text-foreground">{holding.weight}%</div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: `${holding.weight}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Performance Snapshot</h2>
          <div className="mt-6 rounded-2xl border border-border/70 bg-card/80 p-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Borouge Returns</h3>
                {isLoading ? (
                  <div className="mt-3 animate-pulse text-sm text-muted-foreground">Loading latest quote...</div>
                ) : borougeData ? (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">Since March 23rd, 2025</p>
                    <div className="mt-3 flex items-center gap-2">
                      <p className={`text-2xl font-semibold ${borougeData.changePercent >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                        {borougeData.changePercent}%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ({borougeData.change >= 0 ? "+" : ""}
                        {borougeData.change})
                      </p>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <p>Current Price: AED {borougeData.currentPrice}</p>
                      <p>March 23rd Price: AED {borougeData.previousClose}</p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-red-500">Error loading stock data.</p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Portfolio Impact</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  With a 5% allocation to Borouge, these returns represent:
                </p>
                {borougeData && (
                  <div className="mt-4">
                    <p className="text-lg font-semibold text-foreground">
                      {borougeData.changePercent >= 0 ? "+" : ""}
                      {(borougeData.changePercent * 0.05).toFixed(2)}% contribution
                    </p>
                    <p className="text-sm text-muted-foreground">Based on a $100,000 simulated portfolio value.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Investment Philosophy</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-card/70 p-6 text-sm text-muted-foreground">
              We focus on long-term value creation, emphasizing durable business models, capital discipline, and prudent valuation.
            </div>
            <div className="rounded-2xl border border-border/70 bg-card/70 p-6 text-sm text-muted-foreground">
              Portfolio construction balances conviction with diversification, ensuring risk-adjusted performance over full cycles.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
