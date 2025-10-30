import { Link } from "wouter";
import CourseCard from "../components/CourseCard";
import { getFeaturedCourses } from "../data";
import { ArrowRight, Users, BookOpen, Award, Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const featuredCourses = getFeaturedCourses();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <Link href="/courses">
              <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                {t('home.hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center stat-item">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">125K+</div>
              <div className="text-muted-foreground font-medium">{t('home.stats.students')}</div>
            </div>
            
            <div className="text-center stat-item">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">10K+</div>
              <div className="text-muted-foreground font-medium">{t('home.stats.courses')}</div>
            </div>
            
            <div className="text-center stat-item">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">5K+</div>
              <div className="text-muted-foreground font-medium">{t('home.stats.instructors')}</div>
            </div>
            
            <div className="text-center stat-item">
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-7 h-7 text-primary fill-primary" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">4.8</div>
              <div className="text-muted-foreground font-medium">{t('home.stats.rating')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {t('home.featured')}
              </h2>
              <p className="text-muted-foreground">
                {t('home.hero.subtitle')}
              </p>
            </div>
            <Link href="/courses">
              <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
                {t('nav.courses')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/courses">
              <button className="btn-primary inline-flex items-center gap-2">
                {t('home.hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('home.hero.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link href="/courses">
              <button className="btn-primary text-lg inline-flex items-center gap-2">
                {t('home.hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
