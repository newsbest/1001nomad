import { Button } from "../ui/button";
import { Heart } from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      id="donate"
      className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white">
            <Heart className="h-5 w-5" />
            <span className="font-medium">
              Soutenez l'autonomisation des femmes
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Avec votre aide, nous bâtissons un avenir plus égalitaire
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            1001 Nomades est une plateforme numérique pour l'autonomisation
            des femmes iraniennes. Votre soutien aide à réduire l'écart entre
            les genres en Iran.
          </p>

          <div className="max-w-2xl mx-auto space-y-6 pt-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-16 px-12"
            >
              <Heart className="mr-2 h-6 w-6" />
              Faire un don
            </Button>

            <p className="text-white/80 text-sm">
              Chaque contribution, petite ou grande, change la vie des femmes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
