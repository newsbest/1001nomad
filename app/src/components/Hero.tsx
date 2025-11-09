import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-freelancer.jpg";
import { ArrowLeft, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Right side in RTL */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
            <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-lg px-4 py-2 w-fit">
              <Sparkles className="ml-2 h-5 w-5" />
              توانمندسازی زنان ایرانی
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              هزار و یک{" "}
              <span className="text-gradient-primary">زن جهانگرد</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              پلتفرم دیجیتال توانمندسازی زنان ایرانی از طریق رسانه، آموزش مهارت‌ها، منتورینگ و{" "}
              <span className="font-bold text-accent">ارتباط امن با جهان</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="xl"
                variant="hero"
                className="group animate-delay-100"
                onClick={() => scrollToSection("cta")}
              >
                عضویت رایگان
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>

              <Button
                size="xl"
                variant="outline"
                className="animate-delay-200"
                onClick={() => scrollToSection("about")}
              >
                بیشتر بدانید
              </Button>
            </div>
          </div>

          {/* Video - Left side in RTL */}
          <div className="order-1 lg:order-2 relative animate-fade-in-up animate-delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift aspect-video">
              <iframe
                src="https://www.youtube.com/embed/XBrvdiS5dIA"
                title="1001 Nomads Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="currentColor" className="text-background"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;