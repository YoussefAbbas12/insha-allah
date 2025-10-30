import { Link } from "wouter";
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: t('nav.home'), href: "/" },
      { label: t('nav.courses'), href: "/courses" },
      { label: t('nav.categories'), href: "/categories" },
    ],
    social: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Youtube, href: "#", label: "YouTube" },
    ]
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">LearnHub</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              {language === 'ar' 
                ? 'منصة تعليمية شاملة توفر آلاف الكورسات في مختلف المجالات'
                : 'Comprehensive learning platform offering thousands of courses in various fields'}
            </p>
            <div className="flex items-center gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-foreground mb-4">
              {t('categories.title')}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/courses?category=Development"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Development</span></Link></li>
              <li><Link href="/courses?category=Data Science"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Data Science</span></Link></li>
              <li><Link href="/courses?category=Marketing"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Marketing</span></Link></li>
              <li><Link href="/courses?category=Design"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Design</span></Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-foreground mb-4">
              {language === 'ar' ? 'اشترك في النشرة' : 'Newsletter'}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              {language === 'ar' 
                ? 'احصل على آخر التحديثات والعروض'
                : 'Get the latest updates and offers'}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                className="flex-1 px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} LearnHub. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
          </p>
        </div>
      </div>
    </footer>
  );
}
