<template>
    <div class="page-wrapper">

    <!-- HERO -->
    <div class="hero-card">
      <div class="avatar-wrap">
        <img src="../assets/image/Nita.jpeg" alt="Avatar"/>
        <div class="avatar-badge"><i class="fa-solid fa-check" aria-hidden="true"></i></div>
      </div>
      <div class="hero-info">
        <div class="hero-name">តាន់ នីតា</div>
        <div class="hero-role">Frontend Developer</div>
        <div class="hero-meta">
          <span class="meta-item"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ភ្នំពេញ</span>
          <span class="meta-item"><i class="fa-solid fa-envelope" aria-hidden="true"></i> tannita@nextgenacademy.io</span>
          <span class="meta-item"><i class="fa-solid fa-calendar-days" aria-hidden="true"></i> ចូលរួមនៅ ខែមករា ឆ្នាំ2024</span>
        </div>
        <div class="hero-actions">
          <button class="btn-primary-custom"><i class="fa-solid fa-pen" aria-hidden="true"></i> កែប្រែ Profile</button>
          <button class="btn-outline-custom"><i class="fa-solid fa-share-nodes" aria-hidden="true"></i> ចែករំលែក</button>
          <button class="btn-outline-custom"><i class="fa-solid fa-gear" aria-hidden="true"></i> ការកំណត់</button>
        </div>
      </div>
      <div class="hero-right">
        <div class="level-badge"><i class="fa-solid fa-star" aria-hidden="true"></i>អ្នកសិក្សាដែលល្អ</div>
      </div>
    </div>

    <!-- STATS -->
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-label"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> បានចុះឈ្មោះ</div>
        <div class="stat-value">12</div>
        <div class="stat-sub">វគ្គសិក្សាសរុប</div>
      </div>
      <div class="stat-card">
        <div class="stat-label"><i class="fa-solid fa-trophy" aria-hidden="true"></i> បានបញ្ចប់</div>
        <div class="stat-value">7</div>
        <div class="stat-sub"><span class="stat-accent">+2</span>ខែនេះ។</div>
      </div>
      <div class="stat-card">
        <div class="stat-label"><i class="fa-regular fa-clock" aria-hidden="true"></i> ម៉ោងរៀន</div>
        <div class="stat-value">148</div>
        <div class="stat-sub">វគ្គសិក្សាទាំងអស់</div>
      </div>
      <div class="stat-card">
        <div class="stat-label"><i class="fa-solid fa-certificate" aria-hidden="true"></i> វិញ្ញាបនបត្រ</div>
        <div class="stat-value">5</div>
        <div class="stat-sub"><span class="stat-accent">1</span>កំពុងរង់ចាំ</div>
      </div>
    </div>

    <!-- ROW 1 -->
    <div class="two-col">

      <!-- IN PROGRESS -->
      <div class="section-card">
        <div class="section-header">
          <span class="section-title">កំពុងដំណើរការ</span>
          <a class="see-all" href="#">មើលទាំងអស់<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div class="course-item">
          <div class="course-thumb" style="background: var(--primary-50);">
            <i class="fa-brands fa-js" style="color: var(--primary-600);" aria-hidden="true"></i>
          </div>
          <div class="course-info">
            <div class="course-name">Advanced JavaScript</div>
            <div class="course-instructor">បង្រៀនដោយ Sarah Johnson</div>
            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width: 72%;"></div></div>
          </div>
          <span class="course-pct">72%</span>
        </div>

        <div class="course-item">
          <div class="course-thumb" style="background: var(--accent-50);">
            <i class="fa-brands fa-react" style="color: var(--accent-600);" aria-hidden="true"></i>
          </div>
          <div class="course-info">
            <div class="course-name">React — The Full Guide</div>
            <div class="course-instructor">បង្រៀនដោយ Maximilian S.</div>
            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width: 38%; background: var(--accent-600);"></div></div>
          </div>
          <span class="course-pct" style="color: var(--accent-600);">38%</span>
        </div>

        <div class="course-item">
          <div class="course-thumb" style="background: var(--warning-light);">
            <i class="fa-solid fa-database" style="color: #b45309;" aria-hidden="true"></i>
          </div>
          <div class="course-info">
            <div class="course-name">SQL for Data Analysis</div>
            <div class="course-instructor">បង្រៀនដោយ David Kim</div>
            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width: 55%; background: var(--warning);"></div></div>
          </div>
          <span class="course-pct" style="color: #b45309;">55%</span>
        </div>
      </div>

      <!-- RECENT ACTIVITY -->
      <div class="section-card">
        <div class="section-header">
          <span class="section-title">សកម្មភាពថ្មីៗ</span>
        </div>

        <div class="activity-item">
          <div class="act-icon" style="background: var(--primary-50);">
            <i class="fa-solid fa-play" style="color: var(--primary-600);" aria-hidden="true"></i>
          </div>
          <div>
            <div class="act-text">បានមើល <strong>Closures & Scope</strong> in Advanced JS</div>
            <div class="act-time">2 hours ago</div>
          </div>
        </div>

        <div class="activity-item">
          <div class="act-icon" style="background: var(--accent-50);">
            <i class="fa-solid fa-check" style="color: var(--accent-600);" aria-hidden="true"></i>
          </div>
          <div>
            <div class="act-text">បានបញ្ចប់ quiz in <strong>SQL for Data Analysis</strong></div>
            <div class="act-time">ម្សិលមិញ ម៉ោង 9:14 PM</div>
          </div>
        </div>

        <div class="activity-item">
          <div class="act-icon" style="background: var(--warning-light);">
            <i class="fa-solid fa-certificate" style="color: #b45309;" aria-hidden="true"></i>
          </div>
          <div>
            <div class="act-text">ទទួលបានវិញ្ញាបនបត្រនៅក្នុង <strong>CSS Mastery</strong></div>
            <div class="act-time">3 ថ្ងៃមុន</div>
          </div>
        </div>

        <div class="activity-item">
          <div class="act-icon" style="background: var(--primary-50);">
            <i class="fa-solid fa-book-open" style="color: var(--primary-600);" aria-hidden="true"></i>
          </div>
          <div>
            <div class="act-text">បានចុះឈ្មោះចូលរៀន <strong>React — The Full Guide</strong></div>
            <div class="act-time">5 ថ្ងៃមុន</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="two-col">

      <!-- SKILLS -->
      <div class="section-card">
        <div class="section-header">
          <span class="section-title">ជំនាញដែលទទួលបាន</span>
        </div>
        <div class="skills-wrap">
          <span class="skill-tag earned"><i class="fa-solid fa-check" aria-hidden="true"></i> HTML5</span>
          <span class="skill-tag earned"><i class="fa-solid fa-check" aria-hidden="true"></i> CSS3</span>
          <span class="skill-tag earned"><i class="fa-solid fa-check" aria-hidden="true"></i> JavaScript</span>
          <span class="skill-tag earned"><i class="fa-solid fa-check" aria-hidden="true"></i> Git</span>
          <span class="skill-tag earned"><i class="fa-solid fa-check" aria-hidden="true"></i> SQL basics</span>
          <span class="skill-tag"><i class="fa-solid fa-lock" aria-hidden="true"></i> React</span>
          <span class="skill-tag"><i class="fa-solid fa-lock" aria-hidden="true"></i> TypeScript</span>
          <span class="skill-tag"><i class="fa-solid fa-lock" aria-hidden="true"></i> Node.js</span>
        </div>
      </div>

      <!-- CERTIFICATES -->
      <div class="section-card">
        <div class="section-header">
          <span class="section-title">វិញ្ញាបនបត្រ</span>
          <a class="see-all" href="#">មើលទាំងអស់  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div class="cert-item">
          <div class="cert-icon"><i class="fa-solid fa-certificate" aria-hidden="true"></i></div>
          <div class="cert-info">
            <div class="cert-name">CSS Mastery</div>
            <div class="cert-date">Issued May 2025</div>
          </div>
          <a class="cert-dl" href="#"><i class="fa-solid fa-download" aria-hidden="true"></i> PDF</a>
        </div>

        <div class="cert-item">
          <div class="cert-icon"><i class="fa-solid fa-certificate" aria-hidden="true"></i></div>
          <div class="cert-info">
            <div class="cert-name">HTML Fundamentals</div>
            <div class="cert-date">Issued Mar 2025</div>
          </div>
          <a class="cert-dl" href="#"><i class="fa-solid fa-download" aria-hidden="true"></i> PDF</a>
        </div>

        <div class="cert-item">
          <div class="cert-icon"><i class="fa-solid fa-certificate" aria-hidden="true"></i></div>
          <div class="cert-info">
            <div class="cert-name">Git & GitHub Essentials</div>
            <div class="cert-date">Issued Feb 2025</div>
          </div>
          <a class="cert-dl" href="#"><i class="fa-solid fa-download" aria-hidden="true"></i> PDF</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

/* ===== PAGE ===== */
    .page-wrapper {
      max-width: 920px;
      margin: 2rem auto;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    /* ===== HERO CARD ===== */
    .hero-card {
      background: var(--background);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.75rem 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
    }

    .avatar-wrap { position: relative; flex-shrink: 0; }

    .avatar-wrap img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      object-fit: cover;
      border: 2.5px solid var(--primary-100);
    }

    .avatar-badge {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 22px;
      height: 22px;
      background: var(--primary-600);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2.5px solid var(--background);
    }

    .avatar-badge i { color: var(--text-on-dark); font-size: 11px; }

    .hero-info { flex: 1; }

    .hero-name {
      font-size: 22px;
      font-weight: 600;
      color: var(--text-primary);
    }

    .hero-role {
      font-size: 13.5px;
      color: var(--text-secondary);
      margin-top: 4px;
    }

    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 12px;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 13px;
      color: var(--text-secondary);
    }

    .meta-item i { font-size: 15px; }

    .hero-actions {
      display: flex;
      gap: 8px;
      margin-top: 16px;
      flex-wrap: wrap;
    }

    .btn-primary-custom {
      font-family: 'Sora', sans-serif;
      font-size: 13px;
      font-weight: 500;
      background: var(--primary-600);
      color: var(--text-on-dark);
      border: none;
      border-radius: 8px;
      padding: 8px 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s;
    }

    .btn-primary-custom:hover { background: var(--primary-800); }

    .btn-outline-custom {
      font-family: 'Sora', sans-serif;
      font-size: 13px;
      font-weight: 400;
      background: transparent;
      color: var(--text-secondary);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 8px 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
    }

    .btn-outline-custom:hover {
      background: var(--surface);
      color: var(--text-primary);
      border-color: var(--primary-200);
    }

    .hero-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      flex-shrink: 0;
    }

    .level-badge {
      background: var(--primary-50);
      color: var(--primary-600);
      font-size: 12.5px;
      font-weight: 500;
      padding: 5px 14px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 5px;
      border: 1px solid var(--primary-100);
    }

    .level-badge i { font-size: 13px; }

    .streak-text {
      font-size: 12px;
      color: var(--text-secondary);
    }

    /* ===== STATS ROW ===== */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .stat-card {
      background: var(--background);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.1rem 1.25rem;
    }

    .stat-label {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .stat-label i { font-size: 15px; }

    .stat-value {
      font-size: 26px;
      font-weight: 600;
      color: var(--text-primary);
      line-height: 1;
    }

    .stat-sub {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 5px;
    }

    .stat-accent { color: var(--primary-600); font-weight: 500; }

    /* ===== TWO COL ===== */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    /* ===== SECTION CARD ===== */
    .section-card {
      background: var(--background);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.25rem 1.5rem;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .section-title {
      font-size: 14.5px;
      font-weight: 500;
      color: var(--text-primary);
    }

    .see-all {
      font-size: 13px;
      color: var(--primary-600);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 3px;
      transition: opacity 0.15s;
    }

    .see-all:hover { opacity: 0.75; }
    .see-all i { font-size: 13px; }

    /* ===== COURSES ===== */
    .course-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 11px 0;
      border-bottom: 1px solid var(--divider);
    }

    .course-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .course-item:first-child { padding-top: 0; }

    .course-thumb {
      width: 40px;
      height: 40px;
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .course-thumb i { font-size: 20px; }

    .course-info { flex: 1; min-width: 0; }

    .course-name {
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .course-instructor {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 2px;
    }

    .progress-bar-wrap {
      background: var(--surface);
      border-radius: 10px;
      height: 5px;
      margin-top: 7px;
    }

    .progress-bar-fill {
      height: 5px;
      border-radius: 10px;
      background: var(--primary-600);
    }

    .course-pct {
      font-size: 12px;
      font-weight: 500;
      color: var(--primary-600);
      flex-shrink: 0;
    }

    /* ===== ACTIVITY ===== */
    .activity-item {
      display: flex;
      align-items: flex-start;
      gap: 11px;
      padding: 10px 0;
      border-bottom: 1px solid var(--divider);
    }

    .activity-item:last-child { border-bottom: none; }
    .activity-item:first-child { padding-top: 0; }

    .act-icon {
      width: 34px;
      height: 34px;
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .act-icon i { font-size: 17px; }

    .act-text {
      font-size: 13px;
      color: var(--text-primary);
      line-height: 1.5;
    }

    .act-time {
      font-size: 11.5px;
      color: var(--text-secondary);
      margin-top: 3px;
    }

    /* ===== SKILLS ===== */
    .skills-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-tag {
      display: flex;
      align-items: center;
      gap: 5px;
      background: var(--surface);
      color: var(--text-secondary);
      font-size: 13px;
      font-family: 'Sora', sans-serif;
      padding: 6px 13px;
      border-radius: 20px;
      border: 1px solid var(--border);
    }

    .skill-tag.earned {
      background: var(--primary-50);
      color: var(--primary-600);
      border-color: var(--primary-100);
    }

    .skill-tag i { font-size: 13px; }

    /* ===== CERTIFICATES ===== */
    .cert-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      border-bottom: 1px solid var(--divider);
    }

    .cert-item:last-child { border-bottom: none; }
    .cert-item:first-child { padding-top: 0; }

    .cert-icon {
      width: 38px;
      height: 38px;
      border-radius: 9px;
      background: var(--primary-50);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .cert-icon i { font-size: 20px; color: var(--primary-600); }

    .cert-info { flex: 1; }

    .cert-name {
      font-size: 13.5px;
      font-weight: 500;
      color: var(--text-primary);
    }

    .cert-date {
      font-size: 12px;
      color: var(--text-secondary);
      margin-top: 2px;
    }

    .cert-dl {
      font-size: 12.5px;
      color: var(--primary-600);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: opacity 0.15s;
    }

    .cert-dl:hover { opacity: 0.7; }
    .cert-dl i { font-size: 14px; }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .stats-row { grid-template-columns: repeat(2, 1fr); }
      .two-col { grid-template-columns: 1fr; }
      .hero-card { flex-wrap: wrap; }
      .hero-right { align-items: flex-start; }
    }

    @media (max-width: 480px) {
      .stats-row { grid-template-columns: 1fr 1fr; }
      .hero-name { font-size: 18px; }
    }
</style>