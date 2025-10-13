import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" }
  ];

  const isActivePage = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-primary/20 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center">
            <span className="text-background font-orbitron font-bold text-sm" aria-hidden="true">BL</span>
          </div>
          <span className="font-orbitron font-bold text-xl tracking-wider">
            Ben LeBron
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-foreground hover:text-primary transition-colors duration-200 font-rajdhani font-medium uppercase tracking-wide text-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 ${
                isActivePage(item.href) ? 'text-primary border-b-2 border-primary' : ''
              }`}
              aria-label={`Navigate to ${item.name} section`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-sm border-b border-primary/20 md:hidden animate-fade-in"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-foreground hover:text-primary transition-colors duration-200 font-rajdhani font-medium uppercase tracking-wide text-sm py-2 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 ${
                    isActivePage(item.href) ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
