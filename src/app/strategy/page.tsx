import Navigation from '@/components/Navigation'

export default function Strategy() {
  return (
    <>
      <Navigation />
      <div className="md:mx-40 md:my-30 my-10 mx-5 text-center">
        <h1>Investment Strategy</h1>
        <p>The Falcon Student Investment Fund is dedicated to long-term capital growth, focusing on a diversified portfolio of equities across the UAE, Developed Markets, and Emerging Markets. Our strategy combines quantitative and qualitative analyses to surpass the market averages.</p>

        <div className="section mt-8">
          <h2 className="font-bold text-xl mb-4">Investment Focus</h2>
          <p>We invest solely in public equities and ETFs, prioritizing assets that show strong potential for growth. We maintain a rigorous equity screening process to ensure each investment aligns with our high standards of financial health and market potential.</p>
        </div>

        <div className="section mt-8">
          <h2 className="font-bold text-xl mb-4">Risk Management</h2>
          <p>Our fund employs a disciplined approach to risk, aligning closely with our bespoke benchmarks and adhering strictly to predefined risk tolerance levels. Continuous assessment and realignment ensure we meet our objectives while adapting to market dynamics.</p>
        </div>

        <div className="section mt-8">
          <h2 className="font-bold text-xl mb-4">Operational Excellence</h2>
          <p>Our operations are characterized by active management throughout the academic year, complemented by ongoing training and strategic adjustments during breaks to keep our portfolio responsive and robust against market fluctuations.</p>
        </div>
      </div>
    </>
  )
}