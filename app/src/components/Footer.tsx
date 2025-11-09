import logo from "/logo-transparent.png";
import { Instagram, Send, Linkedin, Shield, Lock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="1001Nomads" className="h-16 w-16 rounded-lg" />
              <div>
                <div className="text-2xl font-black">۱۰۰۱ نومد</div>
                <div className="text-sm text-background/70">راه شما به آزادی اقتصادی</div>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              پلتفرم دیجیتال توانمندسازی زنان ایرانی از طریق رسانه، آموزش، منتورینگ و ارتباط امن با جهان
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-accent">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">امن و محافظت‌شده</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Lock className="h-5 w-5" />
                <span className="text-sm font-medium">حریم خصوصی محفوظ</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  ماموریت ما
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  ویژگی‌های پلتفرم
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/70 hover:text-background transition-colors">
                  نظرات کاربران
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  سیاست حریم خصوصی
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  شرایط استفاده
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ما را دنبال کنید</h3>
            <p className="text-background/70">
              برای دریافت آخرین اخبار و الهام‌بخش‌ترین داستان‌ها
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Security and Privacy Statement */}
        <div className="pt-8 border-t border-background/20">
          <div className="bg-background/5 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-bold text-lg">تعهد به امنیت و حریم خصوصی</h4>
                <p className="text-background/80 text-sm leading-relaxed">
                  ۱۰۰۱ نومد یک پلتفرم امن و خصوصی است. ما از فناوری‌های پیشرفته برای محافظت از اطلاعات شما و
                  تضمین دسترسی آزاد و بدون سانسور استفاده می‌کنیم. هیچ‌گونه ردیابی که ممکن است کاربران را به خطر
                  بیاندازد، انجام نمی‌شود. حریم خصوصی شما برای ما اولویت است.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-background/70">
            <p>© {currentYear} 1001Nomads. تمامی حقوق محفوظ است • پلتفرم امن توانمندسازی زنان ایرانی</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;