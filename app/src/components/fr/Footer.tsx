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
              <img src={logo} alt="1001 Nomades" className="h-16 w-16 rounded-lg" />
              <div>
                <div className="text-2xl font-black">1001 Nomades</div>
                <div className="text-sm text-background/70">
                  Une révolution numérique pour les femmes iraniennes
                </div>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Une plateforme numérique pour l'autonomisation des femmes iraniennes
              à travers les médias, la formation, le mentorat et une connexion
              sécurisée au monde.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-accent">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Sûr et protégé</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Lock className="h-5 w-5" />
                <span className="text-sm font-medium">Vie privée préservée</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  Notre mission
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  Fonctionnalités de la plateforme
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/70 hover:text-background transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Suivez-nous</h3>
            <p className="text-background/70">
              Pour les dernières actualités et les histoires les plus inspirantes.
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
                <h4 className="font-bold text-lg">
                  Engagement pour la sécurité et la confidentialité
                </h4>
                <p className="text-background/80 text-sm leading-relaxed">
                  1001 Nomades est une plateforme sécurisée et privée. Nous utilisons
                  des technologies de pointe pour protéger vos informations et
                  garantir un accès libre et sans censure. Aucun suivi pouvant mettre
                  les utilisateurs en danger n'est effectué. Votre vie privée est
                  notre priorité.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-background/70">
            <p>
              © {currentYear} 1001 Nomades. Tous droits réservés • Une plateforme
              sécurisée pour l'autonomisation des femmes iraniennes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
