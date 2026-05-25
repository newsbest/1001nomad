import { Radio, GraduationCap, Users, Shield } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const platformFeatures = [
  {
    icon: Radio,
    title: "Les femmes dans les médias",
    description: "",
    features: [
      "Actualités des femmes",
      "Union nationale des femmes",
      "Femmes influentes",
    ],
    gradient: "from-primary to-primary-dark",
  },
  {
    icon: GraduationCap,
    title: "Formation aux compétences",
    description: "",
    features: [
      "Des cours complets et à jour",
      "Apprentissage interactif",
      "Projets concrets et pratiques",
    ],
    gradient: "from-secondary to-secondary-light",
  },
  {
    icon: Users,
    title: "Mentor IA",
    description: "",
    features: [
      "Mentorat spécialisé",
      "Adapté à votre profil",
      "Disponible 24h/24",
    ],
    gradient: "from-accent to-accent-light",
  },
  {
    icon: Shield,
    title: "Internet libre",
    description: "",
    features: [
      "Connexion sécurisée à la communauté internationale",
      "Vie privée protégée",
      "VPN rapide et sécurisé",
    ],
    gradient: "from-primary via-secondary to-accent",
  },
];

const Solution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Notre solution : quatre{" "}
            <span className="text-gradient-primary">piliers de la plateforme</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Avec les médias, la formation, le mentorat et un réseau sécurisé,
            nous facilitons votre chemin vers l'autonomie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platformFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`hover-lift border-0 shadow-xl bg-gradient-to-br ${feature.gradient} text-white animate-fade-in-up animate-delay-${index + 1}00`}
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <feature.icon className="h-8 w-8" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-white/20">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-xl">✓</span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
