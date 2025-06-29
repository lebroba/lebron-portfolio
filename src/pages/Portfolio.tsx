
import Header from "@/components/Header";
import PortfolioSection from "@/components/PortfolioSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main" className="pt-20">
        <PortfolioSection />
      </main>
    </div>
  );
};

export default Portfolio;
