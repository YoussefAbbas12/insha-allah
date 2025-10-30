import { useState } from "react";
import { useRoute, Link } from "wouter";
import { getCourseBySlug } from "../data";
import { Play, CheckCircle2, ChevronLeft, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function CoursePlayer() {
  const [, params] = useRoute("/learn/:slug");
  const course = getCourseBySlug(params?.slug);
  const [currentVideo, setCurrentVideo] = useState(null);
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

  const selectedVideo = currentVideo || course.curriculum[0]?.lectures[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Video Player */}
        <div className="flex-1 bg-background p-4 lg:p-8">
          <Link href={`/course/${course.slug}`} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            {t('course.backToCourse')}
          </Link>
          
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {course.title}
            </h1>
            <h2 className="text-xl text-muted-foreground">
              {selectedVideo?.title}
            </h2>
          </div>

          {/* Video Container */}
          <div className="video-container bg-muted rounded-lg shadow-xl mb-6">
            <iframe
              src={selectedVideo?.videoUrl}
              title={selectedVideo?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>

          {/* Video Info */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('course.overview')}
            </h3>
            <p className="text-muted-foreground">
              {course.description}
            </p>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <div className="w-full lg:w-96 course-sidebar overflow-y-auto">
          <div className="p-4 lg:p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">
              {t('course.courseContent')}
            </h3>
            
            <div className="space-y-2">
              {course.curriculum.map((section, sectionIndex) => (
                <div key={sectionIndex} className="curriculum-section">
                  <div className="curriculum-header">
                    <h4 className="font-bold text-foreground">{section.sectionTitle}</h4>
                    <span className="text-xs text-muted-foreground">
                      {section.lectures.length} {t('course.lectures')}
                    </span>
                  </div>
                  <div>
                    {section.lectures.map((lecture, lectureIndex) => (
                      <button
                        key={lectureIndex}
                        onClick={() => setCurrentVideo(lecture)}
                        className={`curriculum-lecture w-full text-left ${
                          selectedVideo?.title === lecture.title
                            ? 'bg-primary/10 border-l-4 border-primary'
                            : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {selectedVideo?.title === lecture.title ? (
                            <Play className="w-4 h-4 text-primary fill-primary" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                          )}
                          <span className={`flex-1 ${
                            selectedVideo?.title === lecture.title
                              ? 'text-primary font-semibold'
                              : 'text-foreground'
                          }`}>
                            {lecture.title}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {lecture.duration}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
