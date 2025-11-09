import { UserPlus, Map, GraduationCap, DollarSign } from "lucide-react";

const steps = [
  {
    number: "۱",
    icon: UserPlus,
    title: "ثبت‌نام رایگان",
    description: "در چند ثانیه ثبت‌نام کنید و به پلتفرم دسترسی داشته باشید"
  },
  {
    number: "۲",
    icon: Map,
    title: "انتخاب مسیر یادگیری",
    description: "از میان مهارت‌های مختلف، مسیری که به آن علاقه دارید را انتخاب کنید"
  },
  {
    number: "۳",
    icon: GraduationCap,
    title: "یادگیری با راهنمایی",
    description: "با کمک منتورها و هوش مصنوعی، مهارت‌های جدید یاد بگیرید"
  },
  {
    number: "۴",
    icon: DollarSign,
    title: "شروع کسب درآمد",
    description: "با مهارت‌های جدید، شروع به کار به‌عنوان فریلنسر کنید"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
                          فقط چهار قدم ساده تا 
 <span className="text-gradient-primary">شروع مسیر جدید شما</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            فقط چهار قدم ساده تا شروع مسیر جدید شما
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-l from-primary via-secondary to-accent opacity-20" style={{ top: '6rem' }} />
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative animate-fade-in-up animate-delay-${index + 1}00`}
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover-lift border-2 border-border/50 hover:border-primary/50 transition-colors">
                {/* Step number badge */}
                <div className="absolute -top-6 right-8">
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