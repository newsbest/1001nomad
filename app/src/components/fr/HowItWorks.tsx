import { UserPlus, Map, GraduationCap, DollarSign } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Inscription gratuite",
    description:
      "Inscrivez-vous en quelques secondes et accédez à toute la plateforme.",
  },
  {
    number: "2",
    icon: Map,
    title: "Choisissez votre parcours",
    description:
      "Parmi de nombreuses compétences, choisissez le parcours qui vous passionne.",
  },
  {
    number: "3",
    icon: GraduationCap,
    title: "Apprenez avec un accompagnement",
    description:
      "Acquérez de nouvelles compétences avec l'aide de mentors humains et de l'IA.",
  },
  {
    number: "4",
    icon: DollarSign,
    title: "Commencez à gagner votre vie",
    description:
      "Utilisez vos nouvelles compétences pour démarrer comme freelance.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Quatre étapes simples pour{" "}
            <span className="text-gradient-primary">commencer votre nouvelle voie</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20"
            style={{ top: "6rem" }}
          />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative animate-fade-in-up animate-delay-${index + 1}00`}
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover-lift border-2 border-border/50 hover:border-primary/50 transition-colors">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold">{step.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
