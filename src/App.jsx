
import { useState } from "react";
import "./App.css";

// COURSE DATA
const courses = [
  {
    id: 1,
    title: "Artificial Intelligence",
    category: "AI",
    level: "Beginner",
    lessons: 18,
    duration: "4 weeks",
    icon: "🤖",
    color: "purple",
    description: "Understand AI fundamentals and discover how intelligent machines work.",
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Programming",
    level: "Beginner",
    lessons: 24,
    duration: "6 weeks",
    icon: "🐍",
    color: "blue",
    description: "Learn Python from the basics and start writing real programs.",
  },
  {
    id: 3,
    title: "Machine Learning",
    category: "AI",
    level: "Intermediate",
    lessons: 20,
    duration: "5 weeks",
    icon: "🧠",
    color: "pink",
    description: "Teach computers to learn patterns and make predictions from data.",
  },
  {
    id: 4,
    title: "React Development",
    category: "Programming",
    level: "Beginner",
    lessons: 22,
    duration: "5 weeks",
    icon: "⚛️",
    color: "cyan",
    description: "Build modern and interactive websites using React.",
  },
  {
    id: 5,
    title: "Large Language Models",
    category: "AI",
    level: "Advanced",
    lessons: 16,
    duration: "4 weeks",
    icon: "✨",
    color: "orange",
    description: "Explore LLMs, tokens, transformers, prompting and APIs.",
  },
  {
    id: 6,
    title: "Web Development",
    category: "Programming",
    level: "Beginner",
    lessons: 26,
    duration: "7 weeks",
    icon: "🌐",
    color: "green",
    description: "Create websites with HTML, CSS and JavaScript.",
  },
];

// NAVIGATION COMPONENT
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">AI</span>
        <span>AI Hub<span className="logo-dot">.</span></span>
      </a>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      </div>

      <a href="#courses" className="nav-button">
        Start Learning <span>→</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

// HERO COMPONENT
function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-content">
        <div className="announcement">
          <span className="announcement-dot"></span>
          YOUR JOURNEY INTO AI STARTS HERE
        </div>

        <h1>
          Learn Today.
          <br />
          <span>Build Tomorrow.</span>
        </h1>

        <p>
          Explore artificial intelligence, master programming,
          and develop the skills to build the technology of tomorrow.
          Your future starts with one lesson.
        </p>

        <div className="hero-buttons">
          <a href="#courses" className="primary-button">
            Explore Courses <span>→</span>
          </a>
          <a href="#about" className="secondary-button">
            Discover AI <span>↗</span>
          </a>
        </div>

        <div className="hero-trust">
          <div className="avatar-stack">
            <span>D</span>
            <span>A</span>
            <span>H</span>
            <span>+</span>
          </div>
          <div>
            <strong>Learn at your own pace</strong>
            <small>Start with the basics. Grow your skills.</small>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow"></div>

        <div className="floating-tag tag-top">
          <span>✦</span> Explore AI
        </div>

        <div className="ai-orb">
          <div className="orb-ring ring-one"></div>
          <div className="orb-ring ring-two"></div>
          <div className="orb-core">AI</div>
          <span className="orb-star star-one">✦</span>
          <span className="orb-star star-two">✧</span>
        </div>

        <div className="floating-tag tag-bottom">
          <span className="online-dot"></span> Your future is now
        </div>
      </div>
    </section>
  );
}

// STATISTICS COMPONENT
function Stats() {
  return (
    <section className="stats section-container">
      <div className="stat">
        <strong>06+</strong>
        <span>Learning paths</span>
      </div>
      <div className="stat">
        <strong>100%</strong>
        <span>Beginner friendly</span>
      </div>
      <div className="stat">
        <strong>24/7</strong>
        <span>Learn anytime</span>
      </div>
      <div className="stat">
        <strong>∞</strong>
        <span>Possibilities</span>
      </div>
    </section>
  );
}

// INDIVIDUAL COURSE CARD COMPONENT
function CourseCard({ course, isSaved, onToggleSave }) {
  return (
    <article className="course-card">
      <div className={`course-art ${course.color}`}>
        <span className="course-icon">{course.icon}</span>

        <button
          className={`bookmark-button ${isSaved ? "saved" : ""}`}
          onClick={() => onToggleSave(course.id)}
          aria-label={isSaved ? "Remove bookmark" : "Save course"}
          title={isSaved ? "Remove bookmark" : "Save course"}
        >
          {isSaved ? "♥" : "♡"}
        </button>

        <span className="course-category">{course.category}</span>
      </div>

      <div className="course-info">
        <div className="course-meta">
          <span>{course.level}</span>
          <span>•</span>
          <span>{course.duration}</span>
        </div>

        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-bottom">
          <span>▤ {course.lessons} lessons</span>
          <button
            className="course-link"
            onClick={() => alert(`${course.title} course coming soon!`)}
          >
            Explore <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

// COURSES SECTION COMPONENT
function CoursesSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [savedCourses, setSavedCourses] = useState([]);

  const categories = ["All", "AI", "Programming"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  function toggleSave(courseId) {
    if (savedCourses.includes(courseId)) {
      setSavedCourses(savedCourses.filter((id) => id !== courseId));
    } else {
      setSavedCourses([...savedCourses, courseId]);
    }
  }

  return (
    <section className="courses-section section-container" id="courses">
      <div className="section-heading">
        <div>
          <span className="eyebrow">EXPLORE & LEARN</span>
          <h2>Discover your next <span>skill.</span></h2>
          <p>Choose a learning path and start building your future.</p>
        </div>

        <div className="saved-count">
          ♥ {savedCourses.length} saved
        </div>
      </div>

      <div className="course-controls">
        <div className="search-box">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && (
            <button onClick={() => setSearch("")} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isSaved={savedCourses.includes(course.id)}
              onToggleSave={toggleSave}
            />
          ))
        ) : (
          <div className="empty-state">
            <span>🔎</span>
            <h3>No courses found</h3>
            <p>Try another search or select a different category.</p>
            <button
              className="primary-button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ABOUT COMPONENT
function About() {
  return (
    <section className="about-section section-container" id="about">
      <div className="about-icon">✦</div>
      <div>
        <span className="eyebrow">WHY AI HUB?</span>
        <h2>Technology is changing.<br /><span>Be part of the future.</span></h2>
        <p>
          AI Hub is a learning space for curious minds.
          Learn practical skills, explore new ideas, and turn
          your knowledge into real projects.
        </p>
        <a href="#courses" className="primary-button">
          Start your journey →
        </a>
      </div>
    </section>
  );
}

// FOOTER COMPONENT
function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-content">
        <a href="#home" className="logo">
          <span className="logo-icon">AI</span>
          <span>AI Hub<span className="logo-dot">.</span></span>
        </a>

        <p>Learn AI. Explore Technology. Build the Future.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
        </div>

        <small>© {new Date().getFullYear()} AI Hub. Built for curious minds.</small>
      </div>
    </footer>
  );
}

// MAIN APP COMPONENT
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CoursesSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
