import { Link } from "wouter";
import { Star, Users, Clock, BookOpen } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function CourseCard({ course }) {
  const { t, language } = useLanguage();
  
  const title = language === 'ar' ? course.title : course.titleEn || course.title;
  const description = language === 'ar' ? course.shortDescription : course.shortDescriptionEn || course.shortDescription;
  const instructorName = language === 'ar' ? course.instructor.name : course.instructor.nameEn || course.instructor.name;

  return (
    <Link href={`/course/${course.slug}`}>
      <div className="card hover-lift overflow-hidden cursor-pointer group h-full flex flex-col">
        {/* Course Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={course.thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {course.isFeatured && (
            <div className="absolute top-3 left-3">
              <span className="badge badge-warning px-3 py-1 text-xs font-bold shadow-lg">
                ⭐ {language === 'ar' ? 'مميز' : 'Featured'}
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className={`badge px-3 py-1 text-xs font-bold shadow-lg ${
              course.level === 'Beginner' ? 'level-beginner' :
              course.level === 'Intermediate' ? 'level-intermediate' :
              'level-advanced'
            }`}>
              {t(`levels.${course.level}`)}
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Category */}
          <div className="mb-3">
            <span className="badge badge-primary text-xs">
              {course.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {description}
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src={course.instructor.avatar}
              alt={instructorName}
              className="w-8 h-8 rounded-full object-cover border-2 border-border"
            />
            <span className="text-sm text-muted-foreground font-medium">
              {instructorName}
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b border-border">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-yellow-500" />
              <span className="font-bold text-foreground">{course.rating}</span>
              <span className="text-muted-foreground">
                ({course.reviewCount.toLocaleString()})
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-xs">{course.studentCount.toLocaleString()}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <BookOpen className="w-4 h-4" />
                <span>
                  {course.curriculum.reduce((acc, section) => acc + section.lectures.length, 0)} {t('course.lectures')}
                </span>
              </div>
            </div>
            <div className="text-xl font-bold text-primary">
              ${course.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
