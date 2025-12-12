// Newspaper Typography Family - StyleCard Demo Component
// 报纸排版家族 - StyleCard 展示组件

export const newspaperDemoHTML = `
  <div class="newspaper-demo">
    <div class="newspaper-header">
      <div class="newspaper-masthead">THE TIMES</div>
      <div class="newspaper-date">November 6, 2025</div>
    </div>
    <div class="newspaper-grid">
      <div class="newspaper-column">
        <h3 class="newspaper-headline">Breaking News</h3>
        <p class="newspaper-dropcap">
          <span class="dropcap">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="newspaper-column">
        <h3 class="newspaper-headline">Technology</h3>
        <p class="newspaper-text">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
`;

export const newspaperDemoStyles = `
  .newspaper-demo {
    background: #FAF8F5;
    padding: 1.5rem;
    font-family: 'Georgia', 'Times New Roman', serif;
    color: #000;
  }

  .newspaper-header {
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
    padding: 0.75rem 0;
    margin-bottom: 1rem;
    text-align: center;
  }

  .newspaper-masthead {
    font-size: 1.75rem;
    font-weight: 900;
    letter-spacing: 0.15em;
    color: #1E3A8A;
    margin-bottom: 0.25rem;
  }

  .newspaper-date {
    font-size: 0.75rem;
    color: #6B7280;
    font-style: italic;
  }

  .newspaper-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    column-gap: 1.5rem;
  }

  .newspaper-column {
    border-right: 1px solid #E5E7EB;
    padding-right: 1rem;
  }

  .newspaper-column:last-child {
    border-right: none;
    padding-right: 0;
  }

  .newspaper-headline {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #1E3A8A;
    border-bottom: 2px solid #1E3A8A;
    padding-bottom: 0.25rem;
  }

  .newspaper-dropcap {
    font-size: 0.8rem;
    line-height: 1.6;
    text-align: justify;
  }

  .dropcap {
    float: left;
    font-size: 3rem;
    line-height: 1;
    font-weight: bold;
    margin-right: 0.25rem;
    color: #1E3A8A;
  }

  .newspaper-text {
    font-size: 0.8rem;
    line-height: 1.6;
    text-align: justify;
  }

  @media (max-width: 640px) {
    .newspaper-grid {
      grid-template-columns: 1fr;
    }
    .newspaper-column {
      border-right: none;
      padding-right: 0;
      border-bottom: 1px solid #E5E7EB;
      padding-bottom: 1rem;
    }
    .newspaper-column:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;
