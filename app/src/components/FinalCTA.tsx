import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white">
            <Heart className="h-5 w-5" />
            <span className="font-medium">حمایت از پروژه توانمندسازی زنان</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            با کمک شما، آینده‌ای برابر می‌سازیم
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
۱۰۰۱nomadپلتفرم دیجیتال برای توانمندسازی زنان ایرانی است 
شما با کمک خود  شکاف جنسیتی را در ایران کمتر می کنید          </p>

          <div className="max-w-2xl mx-auto space-y-6 pt-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-16 px-12"
            >
              <Heart className="ml-2 h-6 w-6" />
              حمایت مالی کنید
            </Button>

            <p className="text-white/80 text-sm">
              هر کمک کوچک یا بزرگ، تأثیری بزرگ در زندگی زنان دارد
            </p>
          </div>

          {/* Impact badges */}

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;