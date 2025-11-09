import { Globe, Gift, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Globe,
    number: "۴.۵ تریلیون",
    label: "دلار",
    description: "حجم بازار جهانی فریلنسینگ"
  },
  {
    icon: Gift,
    number: "۱۰۰٪",
    label: "رایگان",
    description: "برای همیشه، بدون هیچ هزینه‌ای"
  },
  {
    icon: Users,
    number: "۲۴/۷",
    label: "پشتیبانی",
    description: "راهنمایی هوشمند و انسانی"
  },
  {
    icon: Shield,
    number: "امن",
    label: "و قابل اعتماد",
    description: "جامعه‌ای حمایتی و امن"
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            با اعداد و ارقام آشنا شوید
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            آمارهایی که نشان‌دهنده قدرت و پتانسیل این پلتفرم است
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`bg-white/10 backdrop-blur-md border-white/20 hover-lift animate-fade-in-up animate-delay-${index + 1}00`}
            >
              <CardContent className="p-8 text-center space-y-4 text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8" />
                </div>
                
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-black">{stat.number}</div>
                  <div className="text-xl font-bold">{stat.label}</div>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            به جمع هزاران زنی بپیوندید که با ۱۰۰۱ نومد مسیر موفقیت خود را آغاز کرده‌اند
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;