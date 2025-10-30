import { Link } from "wouter";
import { categories } from "../data";
import { BookOpen, TrendingUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Categories() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('categories.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/courses?category=${category.name}`}>
              <div className="category-card card p-8 text-center hover-lift cursor-pointer group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>{category.courseCount} {t('categories.courses')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center card p-12 bg-gradient-to-r from-primary/5 to-purple-600/5">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('home.hero.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/courses">
            <button className="btn-primary text-lg">
              {t('home.hero.cta')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
