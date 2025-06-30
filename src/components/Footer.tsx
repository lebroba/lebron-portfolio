import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-tactical-dark border-t border-primary/20 h-[60px] flex items-center z-50" role="contentinfo">
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        {/* Left side - 508 Compliance Statement */}
        <p className="text-xs text-muted-foreground font-rajdhani flex-shrink-0">
          This website meets Section 508 accessibility standards and WCAG 2.1 AA guidelines.
        </p>
        
        {/* Center - Description and Copyright */}
        <div className="flex flex-col items-center text-center">
          <p className="text-muted-foreground font-rajdhani text-sm">
            Military Graphic Artist & Tactical Design Specialist
          </p>
          <p className="text-xs text-muted-foreground font-rajdhani">
            © 2025 Ben LeBron. All rights reserved. | Designed with military precision.
          </p>
        </div>
        
        {/* Right side - Logo and Name */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-sm flex items-center justify-center">
            <span className="text-background font-orbitron font-bold text-xs" aria-hidden="true">BL</span>
          </div>
          <span className="font-orbitron font-bold text-lg tracking-wider text-foreground">
            Ben LeBron
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;