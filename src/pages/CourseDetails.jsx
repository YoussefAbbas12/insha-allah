import { useRoute, Link } from "wouter";
import { getCourseBySlug } from "../data";
import { Star, Users, Clock, Play, CheckCircle2, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function CourseDetails() {
  const [, params] = useRoute("/course/:slug");
  const course = getCourseBySlug(params?.slug);
  const { t } = useLanguage();

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('course.overview')}</h1>
        <Link href="/courses">
          <button className="btn-primary">{t('nav.courses')}</button>
        </Link>
      </div>
    );
  }

  const totalLectures = course.curriculum.reduce((acc, section) => acc + section.lectures.length, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="badge bg-white/20 text-white backdrop-blur-sm px-4 py-2">
                {course.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {course.title}
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-white/90">
              {course.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{course.rating}</span>
                <span className="text-white/75">({course.reviewCount.toLocaleString()} {t('course.reviews')})</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{course.studentCount.toLocaleString()} {t('course.students')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-14 h-14 rounded-full border-2 border-white/30"
              />
              <div>
                <div className="font-semibold text-white">{course.instructor.name}</div>
                <div className="text-sm text-white/75">{course.instructor.title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">{t('course.whatYouLearn')}</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4">{t('course.curriculum')}</h2>
              <p className="text-muted-foreground mb-6">
                {course.curriculum.length} {t('course.lectures')} • {totalLectures} {t('course.lectures')} • {course.duration}
              </p>
              
              <div className="space-y-4">
                {course.curriculum.map((section, index) => (
                  <div key={index} className="curriculum-section">
                    <div className="curriculum-header">
                      <h3 className="font-bold text-foreground">{section.sectionTitle}</h3>
                      <span className="text-sm text-muted-foreground">
                        {section.lectures.length} {t('course.lectures')}
                      </span>
                    </div>
                    <div>
                      {section.lectures.map((lecture, lectureIndex) => (
                        <div key={lectureIndex} className="curriculum-lecture flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Play className="w-4 h-4 text-muted-foreground" />
                            <span className="text-foreground">{lecture.title}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{lecture.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">{t('course.reviews')}</h2>
              <div className="space-y-4">
                {course.reviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-foreground">{review.userName}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-20">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-4xl font-bold text-primary mb-6">
                ${course.price}
              </div>
              
              <Link href={`/learn/${course.slug}`}>
                <button className="btn-primary w-full mb-4">
                  {t('course.startLearning')}
                </button>
              </Link>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{t('course.level')}</span>
                  <span className="font-semibold text-foreground">{course.level}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{t('course.duration')}</span>
                  <span className="font-semibold text-foreground">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">{t('course.lectures')}</span>
                  <span className="font-semibold text-foreground">{totalLectures}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
