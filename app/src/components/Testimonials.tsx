import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-woman-1.jpg";
import testimonial2 from "@/assets/testimonial-woman-2.jpg";

const testimonials = [
  {
    image: testimonial1,
    quote: "۱۰۰۱ نومد زندگی من را تغییر داد. حالا از خانه کار می‌کنم و درآمد مستقل دارم. احساس آزادی واقعی می‌کنم",
    name: "مریم احمدی",
    role: "طراح گرافیک فریلنسر"
  },
  {
    image: testimonial2,
    quote: "با راهنمایی منتورهای عالی، توانستم مسیر شغلی جدیدی بسازم. پشتیبانی ۲۴ ساعته و جامعه حمایتی، کلید موفقیت من بود",
    name: "سارا رضایی",
    role: "متخصص بازاریابی دیجیتال"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            داستان‌های <span className="text-gradient-primary">الهام‌بخش</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            زنانی که با ۱۰۰۱ نومد زندگی‌شان را تغییر دادند
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`hover-lift border-2 bg-card/80 backdrop-blur-sm animate-fade-in-up animate-delay-${index + 1}00`}
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="h-12 w-12 text-primary/30" />
                
                <p className="text-lg leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;