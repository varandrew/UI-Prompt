export const outlineStyleElearningHTML = `
  <nav class="outline-elearn-nav">
    <div class="outline-elearn-nav-container">
      <div class="outline-elearn-logo">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="5" y="5" width="30" height="30" fill="none" stroke="#3B82F6" stroke-width="2" rx="4"/>
          <path d="M 15 15 L 25 15 M 15 20 L 25 20 M 15 25 L 20 25" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round"/>
          <circle cx="28" cy="12" r="3" fill="none" stroke="#10B981" stroke-width="2"/>
        </svg>
        <span>LearnHub</span>
      </div>

      <div class="outline-elearn-nav-links">
        <a href="javascript:void(0)" class="outline-elearn-nav-link active">Courses</a>
        <a href="javascript:void(0)" class="outline-elearn-nav-link">Instructors</a>
        <a href="javascript:void(0)" class="outline-elearn-nav-link">My Learning</a>
        <a href="javascript:void(0)" class="outline-elearn-nav-link">About</a>
      </div>

      <div class="outline-elearn-nav-actions">
        <div class="outline-elearn-search">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="8" cy="8" r="6" fill="none" stroke="#000" stroke-width="2"/>
            <path d="M 13 13 L 18 18" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <input type="text" placeholder="Search courses...">
        </div>
        <button class="outline-elearn-btn-primary">Sign In</button>
      </div>
    </div>
  </nav>

  <main class="outline-elearn-main">
    <!-- Hero Section -->
    <section class="outline-elearn-hero">
      <div class="outline-elearn-hero-content">
        <div class="outline-elearn-hero-text">
          <h1>Unlock Your Potential with Expert-Led Courses</h1>
          <p>Join thousands of learners mastering new skills in technology, design, business, and creative arts.</p>
          <div class="outline-elearn-hero-cta">
            <button class="outline-elearn-btn-hero">Start Learning</button>
            <button class="outline-elearn-btn-secondary">Browse Catalog</button>
          </div>
          <div class="outline-elearn-hero-stats">
            <div class="outline-elearn-stat-item">
              <span class="outline-elearn-stat-number">12,000+</span>
              <span class="outline-elearn-stat-label">Students</span>
            </div>
            <div class="outline-elearn-stat-item">
              <span class="outline-elearn-stat-number">350+</span>
              <span class="outline-elearn-stat-label">Courses</span>
            </div>
            <div class="outline-elearn-stat-item">
              <span class="outline-elearn-stat-number">98%</span>
              <span class="outline-elearn-stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div class="outline-elearn-hero-illustration">
          <svg width="400" height="300" viewBox="0 0 400 300">
            <!-- Books Stack -->
            <rect x="80" y="180" width="100" height="15" fill="none" stroke="#3B82F6" stroke-width="2"/>
            <rect x="75" y="165" width="110" height="15" fill="none" stroke="#8B5CF6" stroke-width="2"/>
            <rect x="85" y="150" width="90" height="15" fill="none" stroke="#10B981" stroke-width="2"/>

            <!-- Laptop -->
            <rect x="200" y="160" width="140" height="90" fill="none" stroke="#000" stroke-width="2" rx="4"/>
            <rect x="195" y="250" width="150" height="10" fill="none" stroke="#000" stroke-width="2"/>
            <path d="M 220 180 L 320 180 M 220 200 L 300 200 M 220 220 L 310 220" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>

            <!-- Floating Icons -->
            <circle cx="100" cy="80" r="20" fill="none" stroke="#EF4444" stroke-width="2"/>
            <path d="M 90 80 L 100 90 L 110 70" fill="none" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

            <circle cx="320" cy="90" r="15" fill="none" stroke="#10B981" stroke-width="2"/>
            <path d="M 310 90 L 330 90 M 320 80 L 320 100" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>

            <!-- Light Bulb -->
            <circle cx="60" cy="130" r="18" fill="none" stroke="#F59E0B" stroke-width="2"/>
            <path d="M 55 148 L 65 148 M 57 153 L 63 153" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
            <path d="M 60 112 L 60 100" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="outline-elearn-categories">
      <h2>Explore by Category</h2>
      <div class="outline-elearn-category-tags">
        <button class="outline-elearn-tag outline-elearn-tag-blue">Technology</button>
        <button class="outline-elearn-tag outline-elearn-tag-purple">Design</button>
        <button class="outline-elearn-tag outline-elearn-tag-green">Business</button>
        <button class="outline-elearn-tag outline-elearn-tag-yellow">Creative</button>
        <button class="outline-elearn-tag outline-elearn-tag-red">Marketing</button>
        <button class="outline-elearn-tag outline-elearn-tag-gray">All Courses</button>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="outline-elearn-courses">
      <h2>Popular Courses</h2>
      <div class="outline-elearn-courses-grid">

        <!-- Course Card 1 -->
        <div class="outline-elearn-course-card">
          <div class="outline-elearn-course-cover">
            <svg width="100%" height="160" viewBox="0 0 300 160">
              <rect width="300" height="160" fill="#EFF6FF"/>
              <path d="M 60 80 L 100 60 L 140 90 L 180 50 L 220 80 L 240 60" fill="none" stroke="#3B82F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="60" cy="80" r="4" fill="#3B82F6"/>
              <circle cx="100" cy="60" r="4" fill="#3B82F6"/>
              <circle cx="140" cy="90" r="4" fill="#3B82F6"/>
              <circle cx="180" cy="50" r="4" fill="#3B82F6"/>
              <circle cx="220" cy="80" r="4" fill="#3B82F6"/>
              <circle cx="240" cy="60" r="4" fill="#3B82F6"/>
            </svg>
            <span class="outline-elearn-difficulty outline-elearn-difficulty-blue">Beginner</span>
          </div>
          <div class="outline-elearn-course-content">
            <h3>Introduction to Data Science</h3>
            <p>Master the fundamentals of data analysis, visualization, and machine learning.</p>
            <div class="outline-elearn-course-meta">
              <div class="outline-elearn-instructor">
                <div class="outline-elearn-avatar outline-elearn-avatar-blue">DS</div>
                <span>Dr. Sarah Chen</span>
              </div>
              <div class="outline-elearn-rating">
                <svg width="80" height="16" viewBox="0 0 80 16">
                  <path d="M 8 2 L 10 6 L 14 6 L 11 9 L 12 13 L 8 11 L 4 13 L 5 9 L 2 6 L 6 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 24 2 L 26 6 L 30 6 L 27 9 L 28 13 L 24 11 L 20 13 L 21 9 L 18 6 L 22 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 40 2 L 42 6 L 46 6 L 43 9 L 44 13 L 40 11 L 36 13 L 37 9 L 34 6 L 38 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 56 2 L 58 6 L 62 6 L 59 9 L 60 13 L 56 11 L 52 13 L 53 9 L 50 6 L 54 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 72 2 L 74 6 L 78 6 L 75 9 L 76 13 L 72 11 L 68 13 L 69 9 L 66 6 L 70 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                </svg>
                <span>4.9 (2.3k)</span>
              </div>
            </div>
            <div class="outline-elearn-progress">
              <div class="outline-elearn-progress-label">
                <span>Progress</span>
                <span>65%</span>
              </div>
              <div class="outline-elearn-progress-bar">
                <div class="outline-elearn-progress-fill outline-elearn-progress-blue" style="width: 65%"></div>
              </div>
            </div>
            <button class="outline-elearn-course-btn outline-elearn-course-btn-blue">Continue Learning</button>
          </div>
        </div>

        <!-- Course Card 2 -->
        <div class="outline-elearn-course-card">
          <div class="outline-elearn-course-cover">
            <svg width="100%" height="160" viewBox="0 0 300 160">
              <rect width="300" height="160" fill="#FAF5FF"/>
              <circle cx="80" cy="60" r="30" fill="none" stroke="#8B5CF6" stroke-width="2"/>
              <rect x="140" y="40" width="40" height="40" fill="none" stroke="#8B5CF6" stroke-width="2"/>
              <path d="M 200 50 L 230 70 L 215 90 Z" fill="none" stroke="#8B5CF6" stroke-width="2"/>
            </svg>
            <span class="outline-elearn-difficulty outline-elearn-difficulty-purple">Intermediate</span>
          </div>
          <div class="outline-elearn-course-content">
            <h3>UI/UX Design Masterclass</h3>
            <p>Create beautiful, user-centered designs with industry-standard tools and workflows.</p>
            <div class="outline-elearn-course-meta">
              <div class="outline-elearn-instructor">
                <div class="outline-elearn-avatar outline-elearn-avatar-purple">MJ</div>
                <span>Maria Johnson</span>
              </div>
              <div class="outline-elearn-rating">
                <svg width="80" height="16" viewBox="0 0 80 16">
                  <path d="M 8 2 L 10 6 L 14 6 L 11 9 L 12 13 L 8 11 L 4 13 L 5 9 L 2 6 L 6 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 24 2 L 26 6 L 30 6 L 27 9 L 28 13 L 24 11 L 20 13 L 21 9 L 18 6 L 22 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 40 2 L 42 6 L 46 6 L 43 9 L 44 13 L 40 11 L 36 13 L 37 9 L 34 6 L 38 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 56 2 L 58 6 L 62 6 L 59 9 L 60 13 L 56 11 L 52 13 L 53 9 L 50 6 L 54 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 72 2 L 74 6 L 78 6 L 75 9 L 76 13 L 72 11 L 68 13 L 69 9 L 66 6 L 70 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                </svg>
                <span>4.8 (1.9k)</span>
              </div>
            </div>
            <div class="outline-elearn-progress">
              <div class="outline-elearn-progress-label">
                <span>Progress</span>
                <span>30%</span>
              </div>
              <div class="outline-elearn-progress-bar">
                <div class="outline-elearn-progress-fill outline-elearn-progress-purple" style="width: 30%"></div>
              </div>
            </div>
            <button class="outline-elearn-course-btn outline-elearn-course-btn-purple">Continue Learning</button>
          </div>
        </div>

        <!-- Course Card 3 -->
        <div class="outline-elearn-course-card">
          <div class="outline-elearn-course-cover">
            <svg width="100%" height="160" viewBox="0 0 300 160">
              <rect width="300" height="160" fill="#F0FDF4"/>
              <rect x="80" y="50" width="60" height="80" fill="none" stroke="#10B981" stroke-width="2"/>
              <rect x="90" y="40" width="60" height="80" fill="none" stroke="#10B981" stroke-width="2"/>
              <rect x="100" y="30" width="60" height="80" fill="none" stroke="#10B981" stroke-width="2"/>
              <path d="M 110 60 L 110 90 M 130 60 L 130 90 M 150 60 L 150 90" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span class="outline-elearn-difficulty outline-elearn-difficulty-green">Beginner</span>
          </div>
          <div class="outline-elearn-course-content">
            <h3>Business Strategy & Planning</h3>
            <p>Learn how to develop winning business strategies and execute them effectively.</p>
            <div class="outline-elearn-course-meta">
              <div class="outline-elearn-instructor">
                <div class="outline-elearn-avatar outline-elearn-avatar-green">RP</div>
                <span>Robert Park</span>
              </div>
              <div class="outline-elearn-rating">
                <svg width="80" height="16" viewBox="0 0 80 16">
                  <path d="M 8 2 L 10 6 L 14 6 L 11 9 L 12 13 L 8 11 L 4 13 L 5 9 L 2 6 L 6 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 24 2 L 26 6 L 30 6 L 27 9 L 28 13 L 24 11 L 20 13 L 21 9 L 18 6 L 22 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 40 2 L 42 6 L 46 6 L 43 9 L 44 13 L 40 11 L 36 13 L 37 9 L 34 6 L 38 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 56 2 L 58 6 L 62 6 L 59 9 L 60 13 L 56 11 L 52 13 L 53 9 L 50 6 L 54 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 72 2 L 74 6 L 78 6 L 75 9 L 76 13 L 72 11 L 68 13 L 69 9 L 66 6 L 70 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                </svg>
                <span>4.7 (1.5k)</span>
              </div>
            </div>
            <div class="outline-elearn-progress">
              <div class="outline-elearn-progress-label">
                <span>Not Started</span>
                <span>0%</span>
              </div>
              <div class="outline-elearn-progress-bar">
                <div class="outline-elearn-progress-fill outline-elearn-progress-green" style="width: 0%"></div>
              </div>
            </div>
            <button class="outline-elearn-course-btn outline-elearn-course-btn-green">Start Course</button>
          </div>
        </div>

        <!-- Course Card 4 -->
        <div class="outline-elearn-course-card">
          <div class="outline-elearn-course-cover">
            <svg width="100%" height="160" viewBox="0 0 300 160">
              <rect width="300" height="160" fill="#FFFBEB"/>
              <circle cx="100" cy="70" r="25" fill="none" stroke="#F59E0B" stroke-width="2"/>
              <path d="M 85 70 L 100 85 L 115 60" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="140" y="50" width="80" height="15" fill="none" stroke="#F59E0B" stroke-width="2" rx="7"/>
              <rect x="140" y="75" width="60" height="15" fill="none" stroke="#F59E0B" stroke-width="2" rx="7"/>
              <rect x="140" y="100" width="70" height="15" fill="none" stroke="#F59E0B" stroke-width="2" rx="7"/>
            </svg>
            <span class="outline-elearn-difficulty outline-elearn-difficulty-yellow">Beginner</span>
          </div>
          <div class="outline-elearn-course-content">
            <h3>Creative Writing Workshop</h3>
            <p>Unlock your creativity and master the art of storytelling and narrative.</p>
            <div class="outline-elearn-course-meta">
              <div class="outline-elearn-instructor">
                <div class="outline-elearn-avatar outline-elearn-avatar-yellow">EW</div>
                <span>Emma Wilson</span>
              </div>
              <div class="outline-elearn-rating">
                <svg width="80" height="16" viewBox="0 0 80 16">
                  <path d="M 8 2 L 10 6 L 14 6 L 11 9 L 12 13 L 8 11 L 4 13 L 5 9 L 2 6 L 6 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 24 2 L 26 6 L 30 6 L 27 9 L 28 13 L 24 11 L 20 13 L 21 9 L 18 6 L 22 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 40 2 L 42 6 L 46 6 L 43 9 L 44 13 L 40 11 L 36 13 L 37 9 L 34 6 L 38 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 56 2 L 58 6 L 62 6 L 59 9 L 60 13 L 56 11 L 52 13 L 53 9 L 50 6 L 54 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 72 2 L 74 6 L 78 6 L 75 9 L 76 13 L 72 11 L 68 13 L 69 9 L 66 6 L 70 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                </svg>
                <span>4.9 (2.1k)</span>
              </div>
            </div>
            <div class="outline-elearn-progress">
              <div class="outline-elearn-progress-label">
                <span>Progress</span>
                <span>45%</span>
              </div>
              <div class="outline-elearn-progress-bar">
                <div class="outline-elearn-progress-fill outline-elearn-progress-yellow" style="width: 45%"></div>
              </div>
            </div>
            <button class="outline-elearn-course-btn outline-elearn-course-btn-yellow">Continue Learning</button>
          </div>
        </div>

        <!-- Course Card 5 -->
        <div class="outline-elearn-course-card">
          <div class="outline-elearn-course-cover">
            <svg width="100%" height="160" viewBox="0 0 300 160">
              <rect width="300" height="160" fill="#FEF2F2"/>
              <path d="M 80 100 Q 100 60, 120 100 T 160 100" fill="none" stroke="#EF4444" stroke-width="2"/>
              <path d="M 180 100 Q 200 60, 220 100" fill="none" stroke="#EF4444" stroke-width="2"/>
              <circle cx="100" cy="60" r="8" fill="none" stroke="#EF4444" stroke-width="2"/>
              <circle cx="140" cy="60" r="8" fill="none" stroke="#EF4444" stroke-width="2"/>
              <circle cx="200" cy="60" r="8" fill="none" stroke="#EF4444" stroke-width="2"/>
            </svg>
            <span class="outline-elearn-difficulty outline-elearn-difficulty-red">Advanced</span>
          </div>
          <div class="outline-elearn-course-content">
            <h3>Digital Marketing Strategy</h3>
            <p>Master SEO, content marketing, social media, and analytics for business growth.</p>
            <div class="outline-elearn-course-meta">
              <div class="outline-elearn-instructor">
                <div class="outline-elearn-avatar outline-elearn-avatar-red">DL</div>
                <span>David Lee</span>
              </div>
              <div class="outline-elearn-rating">
                <svg width="80" height="16" viewBox="0 0 80 16">
                  <path d="M 8 2 L 10 6 L 14 6 L 11 9 L 12 13 L 8 11 L 4 13 L 5 9 L 2 6 L 6 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 24 2 L 26 6 L 30 6 L 27 9 L 28 13 L 24 11 L 20 13 L 21 9 L 18 6 L 22 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 40 2 L 42 6 L 46 6 L 43 9 L 44 13 L 40 11 L 36 13 L 37 9 L 34 6 L 38 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 56 2 L 58 6 L 62 6 L 59 9 L 60 13 L 56 11 L 52 13 L 53 9 L 50 6 L 54 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 72 2 L 74 6 L 78 6 L 75 9 L 76 13 L 72 11 L 68 13 L 69 9 L 66 6 L 70 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                </svg>
                <span>4.8 (1.8k)</span>
              </div>
            </div>
            <div class="outline-elearn-progress">
              <div class="outline-elearn-progress-label">
                <span>Progress</span>
                <span>80%</span>
              </div>
              <div class="outline-elearn-progress-bar">
                <div class="outline-elearn-progress-fill outline-elearn-progress-red" style="width: 80%"></div>
              </div>
            </div>
            <button class="outline-elearn-course-btn outline-elearn-course-btn-red">Continue Learning</button>
          </div>
        </div>

        <!-- Course Card 6 -->
        <div class="outline-elearn-course-card">
          <div class="outline-elearn-course-cover">
            <svg width="100%" height="160" viewBox="0 0 300 160">
              <rect width="300" height="160" fill="#EFF6FF"/>
              <rect x="80" y="50" width="50" height="70" fill="none" stroke="#3B82F6" stroke-width="2" rx="3"/>
              <rect x="140" y="60" width="50" height="60" fill="none" stroke="#3B82F6" stroke-width="2" rx="3"/>
              <rect x="200" y="40" width="50" height="80" fill="none" stroke="#3B82F6" stroke-width="2" rx="3"/>
              <path d="M 105 40 L 165 50 L 225 30" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
            </svg>
            <span class="outline-elearn-difficulty outline-elearn-difficulty-blue">Intermediate</span>
          </div>
          <div class="outline-elearn-course-content">
            <h3>Web Development Bootcamp</h3>
            <p>Build modern web applications with HTML, CSS, JavaScript, React, and Node.js.</p>
            <div class="outline-elearn-course-meta">
              <div class="outline-elearn-instructor">
                <div class="outline-elearn-avatar outline-elearn-avatar-blue">JD</div>
                <span>John Davis</span>
              </div>
              <div class="outline-elearn-rating">
                <svg width="80" height="16" viewBox="0 0 80 16">
                  <path d="M 8 2 L 10 6 L 14 6 L 11 9 L 12 13 L 8 11 L 4 13 L 5 9 L 2 6 L 6 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 24 2 L 26 6 L 30 6 L 27 9 L 28 13 L 24 11 L 20 13 L 21 9 L 18 6 L 22 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 40 2 L 42 6 L 46 6 L 43 9 L 44 13 L 40 11 L 36 13 L 37 9 L 34 6 L 38 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 56 2 L 58 6 L 62 6 L 59 9 L 60 13 L 56 11 L 52 13 L 53 9 L 50 6 L 54 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                  <path d="M 72 2 L 74 6 L 78 6 L 75 9 L 76 13 L 72 11 L 68 13 L 69 9 L 66 6 L 70 6 Z" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
                </svg>
                <span>4.9 (3.2k)</span>
              </div>
            </div>
            <div class="outline-elearn-progress">
              <div class="outline-elearn-progress-label">
                <span>Progress</span>
                <span>15%</span>
              </div>
              <div class="outline-elearn-progress-bar">
                <div class="outline-elearn-progress-fill outline-elearn-progress-blue" style="width: 15%"></div>
              </div>
            </div>
            <button class="outline-elearn-course-btn outline-elearn-course-btn-blue">Continue Learning</button>
          </div>
        </div>

      </div>
    </section>

    <!-- Stats Dashboard -->
    <section class="outline-elearn-dashboard">
      <h2>Your Learning Journey</h2>
      <div class="outline-elearn-dashboard-grid">
        <div class="outline-elearn-stat-card outline-elearn-stat-card-blue">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="24" fill="none" stroke="#3B82F6" stroke-width="2"/>
            <path d="M 20 30 L 27 37 L 40 20" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>42 Hours</h3>
          <p>Total Learning Time</p>
        </div>
        <div class="outline-elearn-stat-card outline-elearn-stat-card-purple">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <rect x="15" y="15" width="30" height="30" fill="none" stroke="#8B5CF6" stroke-width="2" rx="4"/>
            <path d="M 25 25 L 35 25 M 25 30 L 35 30 M 25 35 L 30 35" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <h3>8 Courses</h3>
          <p>Completed</p>
        </div>
        <div class="outline-elearn-stat-card outline-elearn-stat-card-green">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M 30 10 L 35 20 L 50 22 L 40 32 L 42 47 L 30 40 L 18 47 L 20 32 L 10 22 L 25 20 Z" fill="none" stroke="#10B981" stroke-width="2" stroke-linejoin="round"/>
          </svg>
          <h3>12 Badges</h3>
          <p>Achievements Earned</p>
        </div>
        <div class="outline-elearn-stat-card outline-elearn-stat-card-yellow">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <rect x="20" y="15" width="20" height="30" fill="none" stroke="#F59E0B" stroke-width="2" rx="2"/>
            <circle cx="30" cy="30" r="6" fill="none" stroke="#F59E0B" stroke-width="2"/>
          </svg>
          <h3>95%</h3>
          <p>Avg. Quiz Score</p>
        </div>
      </div>
    </section>

    <!-- Top Instructors -->
    <section class="outline-elearn-instructors">
      <h2>Top Instructors</h2>
      <div class="outline-elearn-instructors-grid">

        <div class="outline-elearn-instructor-card outline-elearn-instructor-card-blue">
          <div class="outline-elearn-instructor-avatar-large">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill="none" stroke="#3B82F6" stroke-width="2"/>
              <circle cx="40" cy="32" r="10" fill="none" stroke="#3B82F6" stroke-width="2"/>
              <path d="M 20 60 Q 40 50, 60 60" fill="none" stroke="#3B82F6" stroke-width="2"/>
            </svg>
          </div>
          <h3>Dr. Sarah Chen</h3>
          <p class="outline-elearn-instructor-title">Data Science Expert</p>
          <div class="outline-elearn-instructor-stats">
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">15</span>
              <span class="outline-elearn-instructor-stat-label">Courses</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">12k</span>
              <span class="outline-elearn-instructor-stat-label">Students</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">4.9</span>
              <span class="outline-elearn-instructor-stat-label">Rating</span>
            </div>
          </div>
          <button class="outline-elearn-instructor-btn outline-elearn-instructor-btn-blue">View Profile</button>
        </div>

        <div class="outline-elearn-instructor-card outline-elearn-instructor-card-purple">
          <div class="outline-elearn-instructor-avatar-large">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill="none" stroke="#8B5CF6" stroke-width="2"/>
              <circle cx="40" cy="32" r="10" fill="none" stroke="#8B5CF6" stroke-width="2"/>
              <path d="M 20 60 Q 40 50, 60 60" fill="none" stroke="#8B5CF6" stroke-width="2"/>
            </svg>
          </div>
          <h3>Maria Johnson</h3>
          <p class="outline-elearn-instructor-title">UI/UX Design Lead</p>
          <div class="outline-elearn-instructor-stats">
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">12</span>
              <span class="outline-elearn-instructor-stat-label">Courses</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">9.5k</span>
              <span class="outline-elearn-instructor-stat-label">Students</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">4.8</span>
              <span class="outline-elearn-instructor-stat-label">Rating</span>
            </div>
          </div>
          <button class="outline-elearn-instructor-btn outline-elearn-instructor-btn-purple">View Profile</button>
        </div>

        <div class="outline-elearn-instructor-card outline-elearn-instructor-card-green">
          <div class="outline-elearn-instructor-avatar-large">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill="none" stroke="#10B981" stroke-width="2"/>
              <circle cx="40" cy="32" r="10" fill="none" stroke="#10B981" stroke-width="2"/>
              <path d="M 20 60 Q 40 50, 60 60" fill="none" stroke="#10B981" stroke-width="2"/>
            </svg>
          </div>
          <h3>Robert Park</h3>
          <p class="outline-elearn-instructor-title">Business Strategist</p>
          <div class="outline-elearn-instructor-stats">
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">10</span>
              <span class="outline-elearn-instructor-stat-label">Courses</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">8k</span>
              <span class="outline-elearn-instructor-stat-label">Students</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">4.7</span>
              <span class="outline-elearn-instructor-stat-label">Rating</span>
            </div>
          </div>
          <button class="outline-elearn-instructor-btn outline-elearn-instructor-btn-green">View Profile</button>
        </div>

        <div class="outline-elearn-instructor-card outline-elearn-instructor-card-yellow">
          <div class="outline-elearn-instructor-avatar-large">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="35" fill="none" stroke="#F59E0B" stroke-width="2"/>
              <circle cx="40" cy="32" r="10" fill="none" stroke="#F59E0B" stroke-width="2"/>
              <path d="M 20 60 Q 40 50, 60 60" fill="none" stroke="#F59E0B" stroke-width="2"/>
            </svg>
          </div>
          <h3>Emma Wilson</h3>
          <p class="outline-elearn-instructor-title">Creative Writing Coach</p>
          <div class="outline-elearn-instructor-stats">
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">8</span>
              <span class="outline-elearn-instructor-stat-label">Courses</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">7k</span>
              <span class="outline-elearn-instructor-stat-label">Students</span>
            </div>
            <div class="outline-elearn-instructor-stat">
              <span class="outline-elearn-instructor-stat-number">4.9</span>
              <span class="outline-elearn-instructor-stat-label">Rating</span>
            </div>
          </div>
          <button class="outline-elearn-instructor-btn outline-elearn-instructor-btn-yellow">View Profile</button>
        </div>

      </div>
    </section>

    <!-- Testimonials -->
    <section class="outline-elearn-testimonials">
      <h2>What Our Students Say</h2>
      <div class="outline-elearn-testimonials-grid">

        <div class="outline-elearn-testimonial-card">
          <svg class="outline-elearn-quote-icon" width="40" height="40" viewBox="0 0 40 40">
            <path d="M 8 20 Q 8 10, 15 10 Q 20 10, 20 15 Q 20 20, 15 20 L 12 28" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round"/>
            <path d="M 24 20 Q 24 10, 31 10 Q 36 10, 36 15 Q 36 20, 31 20 L 28 28" fill="none" stroke="#3B82F6" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <p class="outline-elearn-testimonial-text">"The Data Science course completely transformed my career. The hands-on projects and expert guidance were invaluable!"</p>
          <div class="outline-elearn-testimonial-author">
            <div class="outline-elearn-testimonial-avatar outline-elearn-avatar-blue">AK</div>
            <div class="outline-elearn-testimonial-info">
              <h4>Alex Kim</h4>
              <p>Data Analyst</p>
            </div>
          </div>
        </div>

        <div class="outline-elearn-testimonial-card">
          <svg class="outline-elearn-quote-icon" width="40" height="40" viewBox="0 0 40 40">
            <path d="M 8 20 Q 8 10, 15 10 Q 20 10, 20 15 Q 20 20, 15 20 L 12 28" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
            <path d="M 24 20 Q 24 10, 31 10 Q 36 10, 36 15 Q 36 20, 31 20 L 28 28" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <p class="outline-elearn-testimonial-text">"Maria's UI/UX course is exceptional! I learned industry-standard tools and built a professional portfolio in just 8 weeks."</p>
          <div class="outline-elearn-testimonial-author">
            <div class="outline-elearn-testimonial-avatar outline-elearn-avatar-purple">ST</div>
            <div class="outline-elearn-testimonial-info">
              <h4>Sophie Taylor</h4>
              <p>Product Designer</p>
            </div>
          </div>
        </div>

        <div class="outline-elearn-testimonial-card">
          <svg class="outline-elearn-quote-icon" width="40" height="40" viewBox="0 0 40 40">
            <path d="M 8 20 Q 8 10, 15 10 Q 20 10, 20 15 Q 20 20, 15 20 L 12 28" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
            <path d="M 24 20 Q 24 10, 31 10 Q 36 10, 36 15 Q 36 20, 31 20 L 28 28" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <p class="outline-elearn-testimonial-text">"The Business Strategy course gave me the frameworks and confidence to launch my own startup. Highly recommended!"</p>
          <div class="outline-elearn-testimonial-author">
            <div class="outline-elearn-testimonial-avatar outline-elearn-avatar-green">MR</div>
            <div class="outline-elearn-testimonial-info">
              <h4>Michael Rodriguez</h4>
              <p>Entrepreneur</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Newsletter -->
    <section class="outline-elearn-newsletter">
      <div class="outline-elearn-newsletter-content">
        <h2>Stay Updated with New Courses</h2>
        <p>Join 50,000+ learners receiving weekly updates on new courses, exclusive offers, and learning tips.</p>
        <form class="outline-elearn-newsletter-form">
          <input type="email" placeholder="Enter your email address" class="outline-elearn-newsletter-input">
          <button type="submit" class="outline-elearn-newsletter-btn">Subscribe</button>
        </form>
      </div>
    </section>

  </main>

  <footer class="outline-elearn-footer">
    <div class="outline-elearn-footer-content">
      <div class="outline-elearn-footer-section">
        <h3>LearnHub</h3>
        <p>Empowering learners worldwide with expert-led online courses.</p>
        <div class="outline-elearn-footer-social">
          <a href="javascript:void(0)" class="outline-elearn-social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="17" cy="7" r="1" fill="currentColor"/>
            </svg>
          </a>
          <a href="javascript:void(0)" class="outline-elearn-social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M 8 3 L 8 12 L 3 21 L 12 21 L 21 3 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="javascript:void(0)" class="outline-elearn-social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>
              <path d="M 9 10 L 15 10 M 9 14 L 15 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="outline-elearn-footer-section">
        <h4>Platform</h4>
        <ul>
          <li><a href="javascript:void(0)">Browse Courses</a></li>
          <li><a href="javascript:void(0)">Become Instructor</a></li>
          <li><a href="javascript:void(0)">Pricing Plans</a></li>
          <li><a href="javascript:void(0)">Business Solutions</a></li>
        </ul>
      </div>

      <div class="outline-elearn-footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="javascript:void(0)">Help Center</a></li>
          <li><a href="javascript:void(0)">Contact Us</a></li>
          <li><a href="javascript:void(0)">System Status</a></li>
          <li><a href="javascript:void(0)">Report Issue</a></li>
        </ul>
      </div>

      <div class="outline-elearn-footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="javascript:void(0)">About Us</a></li>
          <li><a href="javascript:void(0)">Careers</a></li>
          <li><a href="javascript:void(0)">Blog</a></li>
          <li><a href="javascript:void(0)">Press Kit</a></li>
        </ul>
      </div>
    </div>

    <div class="outline-elearn-footer-bottom">
      <p>&copy; 2025 LearnHub. All rights reserved.</p>
      <div class="outline-elearn-footer-links">
        <a href="javascript:void(0)">Privacy Policy</a>
        <a href="javascript:void(0)">Terms of Service</a>
        <a href="javascript:void(0)">Cookie Settings</a>
      </div>
    </div>
  </footer>
`;

export const outlineStyleElearningStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #000000;
    background-color: #FFFFFF;
  }

  /* Navigation */
  .outline-elearn-nav {
    border-bottom: 2px solid #000000;
    background-color: #FFFFFF;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .outline-elearn-nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .outline-elearn-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .outline-elearn-nav-links {
    display: flex;
    gap: 2rem;
  }

  .outline-elearn-nav-link {
    text-decoration: none;
    color: #000000;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  .outline-elearn-nav-link:hover,
  .outline-elearn-nav-link.active {
    border: 2px solid #000000;
  }

  .outline-elearn-nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .outline-elearn-search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 2px solid #E5E7EB;
    transition: border-color 0.3s ease;
  }

  .outline-elearn-search:focus-within {
    border-color: #3B82F6;
  }

  .outline-elearn-search input {
    border: none;
    outline: none;
    font-size: 0.9rem;
    width: 200px;
  }

  .outline-elearn-btn-primary {
    padding: 0.75rem 1.5rem;
    background-color: #FFFFFF;
    border: 2px solid #000000;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .outline-elearn-btn-primary:hover {
    background-color: #000000;
    color: #FFFFFF;
  }

  /* Main Content */
  .outline-elearn-main {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Hero Section */
  .outline-elearn-hero {
    padding: 4rem 0;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .outline-elearn-hero h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }

  .outline-elearn-hero p {
    font-size: 1.25rem;
    color: #4B5563;
    margin-bottom: 2rem;
  }

  .outline-elearn-hero-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .outline-elearn-btn-hero {
    padding: 1rem 2rem;
    background-color: #3B82F6;
    border: 2px solid #3B82F6;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }

  .outline-elearn-btn-hero::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid #3B82F6;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .outline-elearn-btn-hero:hover::after {
    opacity: 1;
    inset: -6px;
  }

  .outline-elearn-btn-secondary {
    padding: 1rem 2rem;
    background-color: #FFFFFF;
    border: 2px solid #000000;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .outline-elearn-btn-secondary:hover {
    background-color: #F9FAFB;
  }

  .outline-elearn-hero-stats {
    display: flex;
    gap: 3rem;
  }

  .outline-elearn-stat-item {
    display: flex;
    flex-direction: column;
  }

  .outline-elearn-stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #3B82F6;
  }

  .outline-elearn-stat-label {
    font-size: 0.9rem;
    color: #6B7280;
  }

  .outline-elearn-hero-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Categories */
  .outline-elearn-categories {
    padding: 3rem 0;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-categories h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .outline-elearn-category-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .outline-elearn-tag {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    background-color: #FFFFFF;
  }

  .outline-elearn-tag-blue {
    border: 2px solid #3B82F6;
    color: #3B82F6;
  }

  .outline-elearn-tag-blue:hover {
    background-color: #3B82F6;
    color: #FFFFFF;
  }

  .outline-elearn-tag-purple {
    border: 2px solid #8B5CF6;
    color: #8B5CF6;
  }

  .outline-elearn-tag-purple:hover {
    background-color: #8B5CF6;
    color: #FFFFFF;
  }

  .outline-elearn-tag-green {
    border: 2px solid #10B981;
    color: #10B981;
  }

  .outline-elearn-tag-green:hover {
    background-color: #10B981;
    color: #FFFFFF;
  }

  .outline-elearn-tag-yellow {
    border: 2px solid #F59E0B;
    color: #F59E0B;
  }

  .outline-elearn-tag-yellow:hover {
    background-color: #F59E0B;
    color: #FFFFFF;
  }

  .outline-elearn-tag-red {
    border: 2px solid #EF4444;
    color: #EF4444;
  }

  .outline-elearn-tag-red:hover {
    background-color: #EF4444;
    color: #FFFFFF;
  }

  .outline-elearn-tag-gray {
    border: 2px solid #6B7280;
    color: #6B7280;
  }

  .outline-elearn-tag-gray:hover {
    background-color: #6B7280;
    color: #FFFFFF;
  }

  /* Courses Grid */
  .outline-elearn-courses {
    padding: 4rem 0;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-courses h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .outline-elearn-courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .outline-elearn-course-card {
    border: 2px solid #000000;
    background-color: #FFFFFF;
    transition: all 0.3s ease;
    position: relative;
  }

  .outline-elearn-course-card::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid #000000;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .outline-elearn-course-card:hover::after {
    opacity: 1;
    inset: -6px;
  }

  .outline-elearn-course-cover {
    position: relative;
    border-bottom: 2px solid #000000;
  }

  .outline-elearn-difficulty {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    background-color: #FFFFFF;
  }

  .outline-elearn-difficulty-blue {
    border: 2px solid #3B82F6;
    color: #3B82F6;
  }

  .outline-elearn-difficulty-purple {
    border: 2px solid #8B5CF6;
    color: #8B5CF6;
  }

  .outline-elearn-difficulty-green {
    border: 2px solid #10B981;
    color: #10B981;
  }

  .outline-elearn-difficulty-yellow {
    border: 2px solid #F59E0B;
    color: #F59E0B;
  }

  .outline-elearn-difficulty-red {
    border: 2px solid #EF4444;
    color: #EF4444;
  }

  .outline-elearn-course-content {
    padding: 1.5rem;
  }

  .outline-elearn-course-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 700;
  }

  .outline-elearn-course-content > p {
    color: #4B5563;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .outline-elearn-course-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-instructor {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .outline-elearn-avatar {
    width: 32px;
    height: 32px;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    background-color: #FFFFFF;
  }

  .outline-elearn-avatar-blue {
    border-color: #3B82F6;
    color: #3B82F6;
  }

  .outline-elearn-avatar-purple {
    border-color: #8B5CF6;
    color: #8B5CF6;
  }

  .outline-elearn-avatar-green {
    border-color: #10B981;
    color: #10B981;
  }

  .outline-elearn-avatar-yellow {
    border-color: #F59E0B;
    color: #F59E0B;
  }

  .outline-elearn-avatar-red {
    border-color: #EF4444;
    color: #EF4444;
  }

  .outline-elearn-instructor span {
    font-size: 0.9rem;
    color: #4B5563;
  }

  .outline-elearn-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #4B5563;
  }

  .outline-elearn-progress {
    margin-bottom: 1.5rem;
  }

  .outline-elearn-progress-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #4B5563;
    font-weight: 600;
  }

  .outline-elearn-progress-bar {
    height: 8px;
    border: 2px solid #E5E7EB;
    background-color: #FFFFFF;
  }

  .outline-elearn-progress-fill {
    height: 100%;
    transition: width 0.3s ease;
  }

  .outline-elearn-progress-blue {
    background-color: #3B82F6;
  }

  .outline-elearn-progress-purple {
    background-color: #8B5CF6;
  }

  .outline-elearn-progress-green {
    background-color: #10B981;
  }

  .outline-elearn-progress-yellow {
    background-color: #F59E0B;
  }

  .outline-elearn-progress-red {
    background-color: #EF4444;
  }

  .outline-elearn-course-btn {
    width: 100%;
    padding: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #FFFFFF;
    position: relative;
  }

  .outline-elearn-course-btn-blue {
    border: 2px solid #3B82F6;
    color: #3B82F6;
  }

  .outline-elearn-course-btn-blue:hover {
    background-color: #3B82F6;
    color: #FFFFFF;
  }

  .outline-elearn-course-btn-purple {
    border: 2px solid #8B5CF6;
    color: #8B5CF6;
  }

  .outline-elearn-course-btn-purple:hover {
    background-color: #8B5CF6;
    color: #FFFFFF;
  }

  .outline-elearn-course-btn-green {
    border: 2px solid #10B981;
    color: #10B981;
  }

  .outline-elearn-course-btn-green:hover {
    background-color: #10B981;
    color: #FFFFFF;
  }

  .outline-elearn-course-btn-yellow {
    border: 2px solid #F59E0B;
    color: #F59E0B;
  }

  .outline-elearn-course-btn-yellow:hover {
    background-color: #F59E0B;
    color: #FFFFFF;
  }

  .outline-elearn-course-btn-red {
    border: 2px solid #EF4444;
    color: #EF4444;
  }

  .outline-elearn-course-btn-red:hover {
    background-color: #EF4444;
    color: #FFFFFF;
  }

  /* Stats Dashboard */
  .outline-elearn-dashboard {
    padding: 4rem 0;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-dashboard h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .outline-elearn-dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .outline-elearn-stat-card {
    padding: 2rem;
    border: 2px solid;
    background-color: #FFFFFF;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
  }

  .outline-elearn-stat-card::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .outline-elearn-stat-card:hover::after {
    opacity: 1;
    inset: -6px;
  }

  .outline-elearn-stat-card-blue {
    border-color: #3B82F6;
  }

  .outline-elearn-stat-card-blue::after {
    border-color: #3B82F6;
  }

  .outline-elearn-stat-card-purple {
    border-color: #8B5CF6;
  }

  .outline-elearn-stat-card-purple::after {
    border-color: #8B5CF6;
  }

  .outline-elearn-stat-card-green {
    border-color: #10B981;
  }

  .outline-elearn-stat-card-green::after {
    border-color: #10B981;
  }

  .outline-elearn-stat-card-yellow {
    border-color: #F59E0B;
  }

  .outline-elearn-stat-card-yellow::after {
    border-color: #F59E0B;
  }

  .outline-elearn-stat-card svg {
    margin: 0 auto 1rem;
  }

  .outline-elearn-stat-card h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .outline-elearn-stat-card p {
    color: #4B5563;
    font-size: 1rem;
  }

  /* Instructors */
  .outline-elearn-instructors {
    padding: 4rem 0;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-instructors h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .outline-elearn-instructors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  .outline-elearn-instructor-card {
    padding: 2rem;
    border: 2px solid;
    background-color: #FFFFFF;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
  }

  .outline-elearn-instructor-card::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .outline-elearn-instructor-card:hover::after {
    opacity: 1;
    inset: -6px;
  }

  .outline-elearn-instructor-card-blue {
    border-color: #3B82F6;
  }

  .outline-elearn-instructor-card-blue::after {
    border-color: #3B82F6;
  }

  .outline-elearn-instructor-card-purple {
    border-color: #8B5CF6;
  }

  .outline-elearn-instructor-card-purple::after {
    border-color: #8B5CF6;
  }

  .outline-elearn-instructor-card-green {
    border-color: #10B981;
  }

  .outline-elearn-instructor-card-green::after {
    border-color: #10B981;
  }

  .outline-elearn-instructor-card-yellow {
    border-color: #F59E0B;
  }

  .outline-elearn-instructor-card-yellow::after {
    border-color: #F59E0B;
  }

  .outline-elearn-instructor-avatar-large {
    margin: 0 auto 1.5rem;
    width: 80px;
    height: 80px;
  }

  .outline-elearn-instructor-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .outline-elearn-instructor-title {
    color: #6B7280;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }

  .outline-elearn-instructor-stats {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.5rem;
    padding: 1.5rem 0;
    border-top: 2px solid #E5E7EB;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-instructor-stat {
    display: flex;
    flex-direction: column;
  }

  .outline-elearn-instructor-stat-number {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .outline-elearn-instructor-stat-label {
    font-size: 0.8rem;
    color: #6B7280;
  }

  .outline-elearn-instructor-btn {
    width: 100%;
    padding: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #FFFFFF;
  }

  .outline-elearn-instructor-btn-blue {
    border: 2px solid #3B82F6;
    color: #3B82F6;
  }

  .outline-elearn-instructor-btn-blue:hover {
    background-color: #3B82F6;
    color: #FFFFFF;
  }

  .outline-elearn-instructor-btn-purple {
    border: 2px solid #8B5CF6;
    color: #8B5CF6;
  }

  .outline-elearn-instructor-btn-purple:hover {
    background-color: #8B5CF6;
    color: #FFFFFF;
  }

  .outline-elearn-instructor-btn-green {
    border: 2px solid #10B981;
    color: #10B981;
  }

  .outline-elearn-instructor-btn-green:hover {
    background-color: #10B981;
    color: #FFFFFF;
  }

  .outline-elearn-instructor-btn-yellow {
    border: 2px solid #F59E0B;
    color: #F59E0B;
  }

  .outline-elearn-instructor-btn-yellow:hover {
    background-color: #F59E0B;
    color: #FFFFFF;
  }

  /* Testimonials */
  .outline-elearn-testimonials {
    padding: 4rem 0;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-testimonials h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .outline-elearn-testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .outline-elearn-testimonial-card {
    padding: 2rem;
    border: 2px solid #000000;
    background-color: #FFFFFF;
    position: relative;
    transition: all 0.3s ease;
  }

  .outline-elearn-testimonial-card::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 2px solid #000000;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .outline-elearn-testimonial-card:hover::after {
    opacity: 1;
    inset: -6px;
  }

  .outline-elearn-quote-icon {
    margin-bottom: 1rem;
  }

  .outline-elearn-testimonial-text {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #1F2937;
  }

  .outline-elearn-testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .outline-elearn-testimonial-avatar {
    width: 48px;
    height: 48px;
    font-size: 1rem;
  }

  .outline-elearn-testimonial-info h4 {
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .outline-elearn-testimonial-info p {
    font-size: 0.9rem;
    color: #6B7280;
  }

  /* Newsletter */
  .outline-elearn-newsletter {
    padding: 4rem 0;
    border-bottom: 2px solid #E5E7EB;
  }

  .outline-elearn-newsletter-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem;
    border: 2px solid #000000;
    background-color: #F9FAFB;
  }

  .outline-elearn-newsletter h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .outline-elearn-newsletter p {
    color: #4B5563;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .outline-elearn-newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  .outline-elearn-newsletter-input {
    flex: 1;
    padding: 1rem;
    border: 2px solid #000000;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .outline-elearn-newsletter-input:focus {
    border-color: #3B82F6;
  }

  .outline-elearn-newsletter-btn {
    padding: 1rem 2rem;
    background-color: #3B82F6;
    border: 2px solid #3B82F6;
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .outline-elearn-newsletter-btn:hover {
    background-color: #2563EB;
    border-color: #2563EB;
  }

  /* Footer */
  .outline-elearn-footer {
    padding: 3rem 2rem 2rem;
    border-top: 2px solid #000000;
    background-color: #F9FAFB;
  }

  .outline-elearn-footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .outline-elearn-footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .outline-elearn-footer-section h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .outline-elearn-footer-section p {
    color: #4B5563;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .outline-elearn-footer-social {
    display: flex;
    gap: 1rem;
  }

  .outline-elearn-social-icon {
    width: 40px;
    height: 40px;
    border: 2px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: #000000;
    text-decoration: none;
  }

  .outline-elearn-social-icon:hover {
    background-color: #000000;
    color: #FFFFFF;
  }

  .outline-elearn-footer-section ul {
    list-style: none;
  }

  .outline-elearn-footer-section li {
    margin-bottom: 0.75rem;
  }

  .outline-elearn-footer-section a {
    color: #4B5563;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .outline-elearn-footer-section a:hover {
    color: #000000;
  }

  .outline-elearn-footer-bottom {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 2px solid #E5E7EB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #6B7280;
    font-size: 0.9rem;
  }

  .outline-elearn-footer-links {
    display: flex;
    gap: 2rem;
  }

  .outline-elearn-footer-links a {
    color: #6B7280;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .outline-elearn-footer-links a:hover {
    color: #000000;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .outline-elearn-hero-content {
      grid-template-columns: 1fr;
    }

    .outline-elearn-hero-illustration {
      order: -1;
    }

    .outline-elearn-courses-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .outline-elearn-footer-content {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .outline-elearn-nav-container {
      flex-direction: column;
      gap: 1rem;
    }

    .outline-elearn-nav-links {
      flex-wrap: wrap;
      justify-content: center;
    }

    .outline-elearn-hero h1 {
      font-size: 2.5rem;
    }

    .outline-elearn-hero-cta {
      flex-direction: column;
    }

    .outline-elearn-courses-grid {
      grid-template-columns: 1fr;
    }

    .outline-elearn-dashboard-grid {
      grid-template-columns: 1fr;
    }

    .outline-elearn-instructors-grid {
      grid-template-columns: 1fr;
    }

    .outline-elearn-testimonials-grid {
      grid-template-columns: 1fr;
    }

    .outline-elearn-newsletter-form {
      flex-direction: column;
    }

    .outline-elearn-footer-content {
      grid-template-columns: 1fr;
    }

    .outline-elearn-footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
`;

// 标準模板對象
export const elearningDemo = {
  id: 'visual-outlineStyle-elearning',
  title: 'styles.outlineStyle.elearningDemo.title',
  description: 'styles.outlineStyle.elearningDemo.description',

  // Demo 預覽 (在 StyleCard 中显示，使用 Demo.js 的內容)
  demoHTML: `<!-- 使用 Demo.js 提供的預覽 -->`,
  customStyles: `/* 使用 Demo.js 提供的樣式 */`,

  // 完整页面預覽
  fullPageHTML: outlineStyleElearningHTML,
  fullPageStyles: outlineStyleElearningStyles,

  // 配色方案
  colorScheme: {
    'zh-CN': '主色藍色 (#3B82F6)、次色綠色 (#10B981)、紫色 (#A855F7)、黃色 (#FBBF24)、紅色 (#EF4444)、黑色线條 (#000000)、白色背景 (#ffffff)',
    'en-US': 'Primary blue (#3B82F6), secondary green (#10B981), purple (#A855F7), yellow (#FBBF24), red (#EF4444), black outlines (#000000), white background (#ffffff)'
  }
};

export default elearningDemo;
