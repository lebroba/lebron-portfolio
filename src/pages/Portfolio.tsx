
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main" className="pt-20 pb-20">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
