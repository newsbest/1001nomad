import { Check } from "lucide-react";

const benefits = [
  "آموزش مهارت‌های دیجیتال",
  "اتصال به منتورهای بین‌المللی",
  "امنیت و مشاوره حقوقی",
  "بستری برای شنیده شدن صدای جهانی",
  "نخستین پلتفرم دیجیتال برای توانمندسازی زنان ایرانی",
  "توانمندسازی در اقتصاد جهانی"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              چرا <span className="text-gradient-primary">۱۰۰۱ نومد</span>؟
            </h2>
            {/* <p className="text-xl text-muted-foreground">
              دلایلی که ما را انتخاب متفاوتی می‌کند
            </p> */}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 text-center">
            <p className="text-xl font-medium leading-relaxed">
              ما فقط یک پلتفرم نیستیم؛ ما یک انقلاب دیجیتال برای زنان ایرانی هستیم.
              و امروز، شما می‌تونید شریک ساختن این آینده برابر باشید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;