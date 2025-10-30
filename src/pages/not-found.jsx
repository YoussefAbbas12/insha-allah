import { Link } from "wouter";
import { Home, Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t('nav.home')}
          </h1>
          <p className="text-muted-foreground">
            الصفحة التي تبحث عنها غير موجودة
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="btn-primary inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              {t('nav.home')}
            </button>
          </Link>
          <Link href="/courses">
            <button className="btn-secondary inline-flex items-center gap-2">
              <Search className="w-5 h-5" />
              {t('nav.courses')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
