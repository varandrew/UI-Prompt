// Modern Newspaper Editorial - Full Page Preview
// 现代报纸编辑风格 - 全页预览

export const modernEditorialFullPageHTML = `
<!-- Newspaper Full Page -->
<div class="newspaper-page">
  <!-- Masthead Header -->
  <header class="newspaper-header-full">
    <div class="newspaper-topbar">
      <span class="newspaper-vol">Vol. XCIV, No. 310</span>
      <span class="newspaper-price">$2.50</span>
    </div>
    <h1 class="newspaper-title">THE DAILY CHRONICLE</h1>
    <div class="newspaper-subtitle">All The News Worth Reading</div>
    <div class="newspaper-date-full">Monday, November 6, 2025 | New York Edition</div>
  </header>

  <!-- Main Content Grid -->
  <main class="newspaper-content">
    <!-- Main Story -->
    <article class="newspaper-main-story">
      <h2 class="newspaper-main-headline">Technology Reshapes Global Economy</h2>
      <p class="newspaper-byline">By John Smith | Staff Reporter</p>
      <p class="newspaper-lead">
        <span class="lead-dropcap">I</span>n a groundbreaking development that is reshaping industries worldwide,
        technology companies have announced unprecedented innovations that promise to transform how we work,
        communicate, and interact with the digital world.
      </p>
      <div class="newspaper-columns-3">
        <p>The latest advancements in artificial intelligence and machine learning have created new opportunities
        for businesses to optimize their operations and deliver better services to customers. Industry leaders
        are investing billions of dollars in research and development to stay ahead of the curve.</p>

        <p>Experts predict that these technological shifts will create millions of new jobs while also requiring
        significant workforce retraining. Educational institutions are already adapting their curricula to prepare
        students for this new economic landscape.</p>

        <p>Meanwhile, regulatory bodies around the world are working to establish frameworks that balance innovation
        with consumer protection and data privacy. The challenge lies in creating policies that encourage growth
        without stifling creativity and entrepreneurship.</p>

        <p>Small and medium-sized enterprises are also benefiting from these technological advances, with cloud
        computing and software-as-a-service solutions making enterprise-grade tools accessible to businesses of all sizes.</p>

        <p>As we move forward into this new era, collaboration between government, industry, and academia will be
        crucial in ensuring that technological progress benefits society as a whole. The coming years will undoubtedly
        bring both challenges and opportunities that we cannot yet fully anticipate.</p>
      </div>
    </article>

    <!-- Sidebar -->
    <aside class="newspaper-sidebar">
      <!-- Inside Today Box -->
      <div class="newspaper-box">
        <h3 class="box-title">Inside Today</h3>
        <ul class="box-list">
          <li class="box-item">
            <span class="box-section">Business</span>
            <span class="box-page">Page 4</span>
          </li>
          <li class="box-item">
            <span class="box-section">Technology</span>
            <span class="box-page">Page 8</span>
          </li>
          <li class="box-item">
            <span class="box-section">Opinion</span>
            <span class="box-page">Page 12</span>
          </li>
          <li class="box-item">
            <span class="box-section">Sports</span>
            <span class="box-page">Page 15</span>
          </li>
          <li class="box-item">
            <span class="box-section">Culture</span>
            <span class="box-page">Page 18</span>
          </li>
        </ul>
      </div>

      <!-- Statistics Box -->
      <div class="newspaper-box statistics-box">
        <h3 class="box-title">Market Watch</h3>
        <div class="stat-row">
          <span class="stat-label">DOW</span>
          <span class="stat-value up">+245.67</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">S&P 500</span>
          <span class="stat-value up">+18.45</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">NASDAQ</span>
          <span class="stat-value down">-12.34</span>
        </div>
      </div>

      <!-- Quick News -->
      <div class="newspaper-box">
        <h3 class="box-title">Brief Updates</h3>
        <div class="brief-item">
          <h4 class="brief-headline">Climate Summit Concludes</h4>
          <p class="brief-text">World leaders reach new agreements on emissions.</p>
        </div>
        <div class="brief-item">
          <h4 class="brief-headline">Innovation Awards</h4>
          <p class="brief-text">Tech startups recognized for breakthrough solutions.</p>
        </div>
        <div class="brief-item">
          <h4 class="brief-headline">Education Reform</h4>
          <p class="brief-text">New curriculum focuses on digital literacy.</p>
        </div>
      </div>
    </aside>
  </main>

  <!-- Secondary Articles -->
  <section class="newspaper-secondary">
    <article class="secondary-article">
      <h3 class="secondary-headline">Global Markets React to Policy Changes</h3>
      <p class="secondary-text">
        <span class="secondary-dropcap">F</span>inancial markets around the world experienced significant
        volatility following announcements of new monetary policies. Investors are closely monitoring central
        bank decisions as they navigate economic uncertainty.
      </p>
    </article>

    <article class="secondary-article">
      <h3 class="secondary-headline">Innovation in Healthcare Delivery</h3>
      <p class="secondary-text">
        <span class="secondary-dropcap">T</span>elemedicine platforms are transforming patient care,
        making healthcare more accessible to remote communities. New technologies enable real-time consultations
        and remote monitoring of chronic conditions.
      </p>
    </article>

    <article class="secondary-article">
      <h3 class="secondary-headline">Cultural Events This Week</h3>
      <p class="secondary-text">
        <span class="secondary-dropcap">A</span>rt galleries and museums are showcasing innovative
        exhibitions that blend traditional techniques with digital media. The intersection of technology
        and creativity continues to push artistic boundaries.
      </p>
    </article>
  </section>

  <!-- Footer -->
  <footer class="newspaper-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4 class="footer-heading">About Us</h4>
        <p class="footer-text">The Daily Chronicle - Since 1925</p>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Contact</h4>
        <p class="footer-text">newsroom@chronicle.com</p>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Subscribe</h4>
        <p class="footer-text">Digital & Print Available</p>
      </div>
    </div>
    <div class="footer-copyright">
      © 2025 The Daily Chronicle. All rights reserved.
    </div>
  </footer>
</div>
`;

export const modernEditorialFullPageStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #FAF8F5;
  color: #000;
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.6;
}

/* Page Container */
.newspaper-page {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

/* Header / Masthead */
.newspaper-header-full {
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  padding: 1.5rem 0;
  margin-bottom: 2rem;
}

.newspaper-topbar {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #6B7280;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #E5E7EB;
}

.newspaper-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.2em;
  color: #1E3A8A;
  margin: 1rem 0;
  text-transform: uppercase;
}

.newspaper-subtitle {
  text-align: center;
  font-size: 0.875rem;
  font-style: italic;
  color: #6B7280;
  margin-bottom: 0.5rem;
}

.newspaper-date-full {
  text-align: center;
  font-size: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #E5E7EB;
  color: #374151;
}

/* Main Content Grid */
.newspaper-content {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Main Story */
.newspaper-main-story {
  border-right: 2px solid #1E3A8A;
  padding-right: 2rem;
}

.newspaper-main-headline {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  color: #1E3A8A;
  margin-bottom: 0.75rem;
  border-bottom: 3px solid #1E3A8A;
  padding-bottom: 0.5rem;
}

.newspaper-byline {
  font-size: 0.875rem;
  color: #6B7280;
  font-style: italic;
  margin-bottom: 1rem;
}

.newspaper-lead {
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.lead-dropcap {
  float: left;
  font-size: 4.5rem;
  line-height: 0.85;
  font-weight: 900;
  color: #1E3A8A;
  margin-right: 0.15rem;
  margin-top: 0.1rem;
}

.newspaper-columns-3 {
  column-count: 3;
  column-gap: 1.5rem;
  column-rule: 1px solid #E5E7EB;
  text-align: justify;
  font-size: 0.9375rem;
}

.newspaper-columns-3 p {
  margin-bottom: 1rem;
  break-inside: avoid;
}

/* Sidebar */
.newspaper-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.newspaper-box {
  border: 2px solid #1E3A8A;
  padding: 1rem;
  background: #F9FAFB;
}

.box-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1E3A8A;
  color: #1E3A8A;
}

.box-list {
  list-style: none;
}

.box-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px dotted #D1D5DB;
  font-size: 0.875rem;
}

.box-item:last-child {
  border-bottom: none;
}

.box-section {
  font-weight: 600;
  color: #374151;
}

.box-page {
  color: #6B7280;
}

/* Statistics Box */
.statistics-box {
  background: #EFF6FF;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #DBEAFE;
  font-size: 0.875rem;
}

.stat-row:last-child {
  border-bottom: none;
}

.stat-label {
  font-weight: 600;
  color: #1F2937;
}

.stat-value {
  font-weight: bold;
  font-family: 'Courier New', monospace;
}

.stat-value.up {
  color: #059669;
}

.stat-value.down {
  color: #DC2626;
}

/* Brief Updates */
.brief-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid #E5E7EB;
}

.brief-item:last-child {
  border-bottom: none;
}

.brief-headline {
  font-size: 0.9375rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #1E3A8A;
}

.brief-text {
  font-size: 0.8125rem;
  color: #4B5563;
  line-height: 1.5;
}

/* Secondary Articles */
.newspaper-secondary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 2rem;
  border-top: 3px double #1E3A8A;
  margin-bottom: 2rem;
}

.secondary-article {
  padding: 1rem 0;
}

.secondary-headline {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #1E3A8A;
  border-bottom: 2px solid #1E3A8A;
  padding-bottom: 0.25rem;
}

.secondary-text {
  font-size: 0.875rem;
  text-align: justify;
  line-height: 1.6;
}

.secondary-dropcap {
  float: left;
  font-size: 2.5rem;
  line-height: 1;
  font-weight: bold;
  color: #1E3A8A;
  margin-right: 0.15rem;
}

/* Footer */
.newspaper-footer {
  border-top: 3px solid #000;
  padding-top: 1.5rem;
  margin-top: 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-heading {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1E3A8A;
}

.footer-text {
  font-size: 0.875rem;
  color: #6B7280;
}

.footer-copyright {
  text-align: center;
  font-size: 0.75rem;
  color: #9CA3AF;
  padding-top: 1rem;
  border-top: 1px solid #E5E7EB;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .newspaper-content {
    grid-template-columns: 1fr;
  }

  .newspaper-main-story {
    border-right: none;
    padding-right: 0;
    border-bottom: 2px solid #1E3A8A;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }

  .newspaper-columns-3 {
    column-count: 2;
  }

  .newspaper-secondary {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .newspaper-page {
    padding: 1rem;
  }

  .newspaper-title {
    font-size: 2rem;
    letter-spacing: 0.1em;
  }

  .newspaper-columns-3 {
    column-count: 1;
  }

  .newspaper-main-headline {
    font-size: 1.5rem;
  }

  .lead-dropcap {
    font-size: 3rem;
  }
}

/* Print Styles */
@media print {
  body {
    background: white;
  }

  .newspaper-page {
    box-shadow: none;
    max-width: 100%;
  }

  .newspaper-box {
    break-inside: avoid;
  }
}
`;
