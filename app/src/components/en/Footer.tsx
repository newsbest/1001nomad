import logo from "/logo-transparent.png";
import { Instagram, Send, Linkedin, Shield, Lock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="1001 Nomads" className="h-16 w-16 rounded-lg" />
              <div>
                <div className="text-2xl font-black">1001 Nomads</div>
                <div className="text-sm text-background/70">
                  A digital revolution for Iranian women
                </div>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              A digital platform empowering Iranian women through media, training,
              mentoring and a secure connection to the world.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-accent">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Safe and protected</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Lock className="h-5 w-5" />
                <span className="text-sm font-medium">Privacy preserved</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  Our mission
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  Platform features
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow us</h3>
            <p className="text-background/70">
              For the latest news and the most inspiring stories.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="bg-background/5 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Commitment to security and privacy</h4>
                <p className="text-background/80 text-sm leading-relaxed">
                  1001 Nomads is a secure, private platform. We use advanced technologies
                  to protect your information and guarantee open, uncensored access.
                  We do not perform any tracking that could put users at risk.
                  Your privacy is our priority.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-background/70">
            <p>
              © {currentYear} 1001 Nomads. All rights reserved • A secure platform
              for empowering Iranian women
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
