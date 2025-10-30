// ملف البيانات الوحيد - جميع بيانات الكورسات هنا
export const coursesData = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    slug: "complete-web-development-bootcamp",
    description: "Master modern web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 15+ real-world projects.",
    shortDescription: "From zero to full-stack developer in 3 months",
    price: 89.99,
    rating: 4.8,
    reviewCount: 12543,
    studentCount: 45678,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    category: "Development",
    level: "Beginner",
    duration: "52 hours",
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Full Stack Developer",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    curriculum: [
      {
        sectionTitle: "Introduction to Web Development",
        lectures: [
          { title: "Course Overview", duration: "5:23", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Setting Up Your Environment", duration: "12:45", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "How the Web Works", duration: "18:30", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
      },
      {
        sectionTitle: "HTML & CSS Fundamentals",
        lectures: [
          { title: "HTML Basics", duration: "25:15", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "CSS Styling", duration: "32:40", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Responsive Design", duration: "28:50", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
      }
    ],
    reviews: [
      {
        id: "1",
        userName: "Michael Chen",
        userAvatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        date: "2024-01-15",
        comment: "Excellent course! Very comprehensive and well-structured."
      }
    ],
    whatYouWillLearn: [
      "Build responsive websites with HTML, CSS, and JavaScript",
      "Create modern web applications with React",
      "Develop RESTful APIs with Node.js and Express",
      "Work with databases using MongoDB"
    ]
  },
  {
    id: "2",
    title: "Machine Learning A-Z: AI, Python & R",
    slug: "machine-learning-ai-python",
    description: "Learn Machine Learning, Data Science, Deep Learning, and AI with Python and R. Includes hands-on projects.",
    shortDescription: "Master ML algorithms and build intelligent applications",
    price: 94.99,
    rating: 4.7,
    reviewCount: 8921,
    studentCount: 32145,
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop",
    category: "Data Science",
    level: "Intermediate",
    duration: "44 hours",
    instructor: {
      name: "Dr. David Lee",
      title: "AI Research Scientist",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    curriculum: [
      {
        sectionTitle: "Introduction to Machine Learning",
        lectures: [
          { title: "What is Machine Learning?", duration: "8:45", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Python Setup", duration: "15:20", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
      }
    ],
    reviews: [
      {
        id: "2",
        userName: "Emma Wilson",
        userAvatar: "https://i.pravatar.cc/150?img=25",
        rating: 5,
        date: "2024-01-12",
        comment: "Great introduction to ML! Highly recommended."
      }
    ],
    whatYouWillLearn: [
      "Master Machine Learning algorithms",
      "Build AI models with Python",
      "Work with real datasets"
    ]
  },
  {
    id: "3",
    title: "Digital Marketing Masterclass 2024",
    slug: "digital-marketing-masterclass",
    description: "Complete digital marketing course covering SEO, Social Media, Email Marketing, and Analytics.",
    shortDescription: "Become a digital marketing expert",
    price: 79.99,
    rating: 4.6,
    reviewCount: 6234,
    studentCount: 28456,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    category: "Marketing",
    level: "Beginner",
    duration: "38 hours",
    instructor: {
      name: "Jessica Martinez",
      title: "Digital Marketing Expert",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    curriculum: [
      {
        sectionTitle: "Introduction to Digital Marketing",
        lectures: [
          { title: "What is Digital Marketing?", duration: "10:30", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Marketing Fundamentals", duration: "15:45", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
      }
    ],
    reviews: [
      {
        id: "3",
        userName: "Alex Brown",
        userAvatar: "https://i.pravatar.cc/150?img=15",
        rating: 4,
        date: "2024-01-08",
        comment: "Very informative and practical course."
      }
    ],
    whatYouWillLearn: [
      "Master SEO and content marketing",
      "Run effective social media campaigns",
      "Analyze marketing data"
    ]
  },
  {
    id: "4",
    title: "Graphic Design Masterclass",
    slug: "graphic-design-masterclass",
    description: "Learn graphic design from scratch using Adobe Photoshop, Illustrator, and InDesign.",
    shortDescription: "Create stunning designs professionally",
    price: 84.99,
    rating: 4.9,
    reviewCount: 9876,
    studentCount: 38912,
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop",
    category: "Design",
    level: "Beginner",
    duration: "42 hours",
    instructor: {
      name: "Robert Taylor",
      title: "Senior Graphic Designer",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    curriculum: [
      {
        sectionTitle: "Design Fundamentals",
        lectures: [
          { title: "Introduction to Design", duration: "12:20", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Color Theory", duration: "18:30", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
      }
    ],
    reviews: [
      {
        id: "4",
        userName: "Sophie Anderson",
        userAvatar: "https://i.pravatar.cc/150?img=35",
        rating: 5,
        date: "2024-01-05",
        comment: "Amazing course! Learned so much."
      }
    ],
    whatYouWillLearn: [
      "Master Adobe Creative Suite",
      "Create professional designs",
      "Build a design portfolio"
    ]
  },
  {
    id: "5",
    title: "Business Strategy & Leadership",
    slug: "business-strategy-leadership",
    description: "Learn strategic thinking, leadership skills, and business management fundamentals.",
    shortDescription: "Become an effective business leader",
    price: 99.99,
    rating: 4.7,
    reviewCount: 5432,
    studentCount: 21234,
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    category: "Business",
    level: "Advanced",
    duration: "36 hours",
    instructor: {
      name: "Amanda White",
      title: "Business Consultant",
      avatar: "https://i.pravatar.cc/150?img=20"
    },
    curriculum: [
      {
        sectionTitle: "Strategic Thinking",
        lectures: [
          { title: "Introduction to Strategy", duration: "14:15", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Leadership Fundamentals", duration: "20:30", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
      }
    ],
    reviews: [
      {
        id: "5",
        userName: "James Wilson",
        userAvatar: "https://i.pravatar.cc/150?img=8",
        rating: 5,
        date: "2024-01-03",
        comment: "Excellent insights and practical advice."
      }
    ],
    whatYouWillLearn: [
      "Develop strategic thinking skills",
      "Lead teams effectively",
      "Make better business decisions"
    ]
  },
  {
    id: "6",
    title: "Photography Masterclass",
    slug: "photography-masterclass",
    description: "Complete guide to photography - from basics to advanced techniques. Learn composition, lighting, and editing.",
    shortDescription: "Take stunning photos like a pro",
    price: 74.99,
    rating: 4.8,
    reviewCount: 7654,
    studentCount: 29876,
    thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=450&fit=crop",
    category: "Photography",
    level: "Beginner",
    duration: "40 hours",
    instructor: {
      name: "Chris Parker",
      title: "Professional Photographer",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    curriculum: [
      {
        sectionTitle: "Photography Basics",
        lectures: [
          { title: "Camera Fundamentals", duration: "16:40", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
          { title: "Composition Rules", duration: "22:15", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
      }
    ],
    reviews: [
      {
        id: "6",
        userName: "Lisa Garcia",
        userAvatar: "https://i.pravatar.cc/150?img=28",
        rating: 5,
        date: "2024-01-01",
        comment: "Best photography course ever!"
      }
    ],
    whatYouWillLearn: [
      "Master camera settings",
      "Capture amazing photos",
      "Edit like a professional"
    ]
  }
];

// الفئات المتاحة
export const categories = [
  { id: "1", name: "Development", icon: "Code", courseCount: 1 },
  { id: "2", name: "Data Science", icon: "BarChart", courseCount: 1 },
  { id: "3", name: "Marketing", icon: "TrendingUp", courseCount: 1 },
  { id: "4", name: "Design", icon: "Palette", courseCount: 1 },
  { id: "5", name: "Business", icon: "Briefcase", courseCount: 1 },
  { id: "6", name: "Photography", icon: "Camera", courseCount: 1 }
];

// دالة للحصول على جميع الكورسات
export const getAllCourses = () => {
  return coursesData;
};

// دالة للحصول على كورس معين بواسطة slug
export const getCourseBySlug = (slug) => {
  return coursesData.find(course => course.slug === slug);
};

// دالة للحصول على الكورسات المميزة
export const getFeaturedCourses = () => {
  return coursesData.slice(0, 4);
};

// دالة للبحث في الكورسات
export const searchCourses = (searchTerm) => {
  if (!searchTerm) return coursesData;
  
  return coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// دالة للحصول على كورسات حسب الفئة
export const getCoursesByCategory = (categoryName) => {
  if (!categoryName) return coursesData;
  
  return coursesData.filter(course => course.category === categoryName);
};
