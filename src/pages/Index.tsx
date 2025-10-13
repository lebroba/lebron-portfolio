import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-background px-4 py-2 rounded-md z-50 font-rajdhani font-medium"
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" role="main">
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
