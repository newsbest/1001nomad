import { 
  Palette, 
  Code, 
  TrendingUp, 
  PenTool, 
  Share2, 
  Languages,
  Briefcase,
  Video
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Palette,
    title: "طراحی گرافیک",
    description: "طراحی لوگو، پوستر، و محتوای بصری"
  },
  {
    icon: Code,
    title: "توسعه وب",
    description: "ساخت وبسایت و اپلیکیشن‌های وب"
  },
  {
    icon: TrendingUp,
    title: "بازاریابی دیجیتال",
    description: "SEO، تبلیغات آنلاین و تحلیل داده"
  },
  {
    icon: PenTool,
    title: "تولید محتوا و کپی‌رایتینگ",
    description: "نوشتن محتوای تبلیغاتی و وبلاگ"
  },
  {
    icon: Share2,
    title: "مدیریت شبکه‌های اجتماعی",
    description: "مدیریت و استراتژی محتوای سوشال مدیا"
  },
  {
    icon: Languages,
    title: "ترجمه",
    description: "ترجمه متون و مکالمات به زبان‌های مختلف"
  },
  {
    icon: Briefcase,
    title: "دستیار مجازی",
    description: "مدیریت ایمیل، قرار ملاقات و وظایف اداری"
  },
  {
    icon: Video,
    title: "تدوین ویدیو",
    description: "ویرایش و تدوین ویدیوهای حرفه‌ای"
  }
];

const CourseAreas = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            مهارت‌های <span className="text-gradient-primary">پرتقاضای</span> دیجیتال
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            بر اساس نیاز بازار جهانی، مهارت‌هایی را یاد بگیرید که تضمین‌کننده موفقیت شماست
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className={`hover-lift border-2 hover:border-primary/50 transition-all group bg-card/50 backdrop-blur-sm animate-fade-in-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            و مهارت‌های بیشتر در راه است...
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseAreas;