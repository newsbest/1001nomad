import { Briefcase, GraduationCap, Heart, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const genderGapPillars = [
  {
    icon: Briefcase,
    title: "مشارکت و فرصت اقتصادی",
    description: "دسترسی محدود به بازار کار و فرصت‌های شغلی برابر"
  },
  {
    icon: GraduationCap,
    title: "دستیابی به آموزش",
    description: "کمبود دسترسی به آموزش‌های کیفیت و مهارت‌های دیجیتال"
  },
  {
    icon: Heart,
    title: "سلامت و بقا",
    description: "نیاز به حمایت و منابع برای سلامت و رفاه"
  },
  {
    icon: Scale,
    title: "توانمندسازی سیاسی",
    description: "محدودیت در مشارکت و بیان آزاد در عرصه‌های عمومی"
  }
];

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-block px-6 py-2 bg-destructive/10 text-destructive rounded-full font-bold text-lg">
            رتبه ۱۴۳ از ۱۴۶ کشور در شکاف جنسیتی جهانی
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            چهار رکن <span className="text-gradient-primary">شکاف جنسیتی</span> در ایران
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            بر اساس گزارش جهانی شکاف جنسیتی، ایران در چهار حوزه اصلی با چالش‌های جدی مواجه است
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {genderGapPillars.map((pillar, index) => (
            <Card
              key={index}
              className={`hover-lift border-2 bg-card/80 backdrop-blur-sm animate-fade-in-up animate-delay-${index + 1}00`}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;