
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" role="main" className="pt-20">
        <ContactSection />
      </main>
    </div>
  );
};

export default Contact;
