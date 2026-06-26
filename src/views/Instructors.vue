<template>
  <div class="page-transition-wrapper">
    <!-- Sub Header -->
    <header class="py-5 bg-white">
      <div class="container text-center pt-3">
        <nav class="d-flex justify-content-center mb-2" aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-text">
            <li class="breadcrumb-item">
              <router-link to="/home" class="text-decoration-none text-muted">ទំព័រដើម</router-link>
            </li>
            <li class="breadcrumb-item active fw-semibold" style="color: var(--text-primary)" aria-current="page">
              គ្រូបង្រៀន
            </li>
          </ol>
        </nav>
        <h1 class="display-5 fw-bold mb-3 text-dark">ជួបជាមួយ គ្រូបង្រៀន</h1>
        <p class="text-secondary mx-auto mb-0" style="max-width: 640px">
          ទទួលបានចំណេះដឹង និងបទពិសោធន៍ពីអ្នកជំនាញដែលមានបទពិសោធន៍ការងារពិតប្រាកដជាច្រើនឆ្នាំ។
        </p>
      </div>
    </header>

    <main class="pb-5 bg-white">
      <div class="container">
        <!-- Instructor Grid -->
        <div class="row g-4 mb-5">
          <div v-for="inst in enrichedInstructors" :key="inst.slug" class="col-sm-6 col-lg-3 fade-in-scale">
            <article class="instructor-card shadow-sm h-100">
              <div class="avatar-placeholder" :class="inst.avatarClass">
                <span>{{ inst.initials }}</span>
              </div>
              <h2 class="h5 fw-bold text-dark mb-1">{{ inst.name }}</h2>
              <p class="instructor-role text-uppercase mb-3">
                {{ inst.role }}
              </p>
              <p class="text-secondary small mb-4 instructor-bio">{{ inst.bio }}</p>
              <div class="d-flex justify-content-between align-items-center small text-muted border-top pt-3 mt-auto">
                <span>{{ inst.courseCount }} Courses</span>
                <span class="rating-text"><i class="fa-solid fa-star me-1"></i>{{ inst.rating }}</span>
              </div>
              <button class="btn btn-brand-outline w-100 mt-4 btn-sm" type="button" @click="openProfile(inst)">
                មើលប្រវត្តិរូប
              </button>
            </article>
          </div>
        </div>
      </div>
    </main>

    <Teleport to="body">
      <div v-if="selectedInstructor" class="profile-modal-backdrop" @click.self="closeProfile">
        <section
          class="profile-modal shadow-lg"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${selectedInstructor.slug}-title`"
        >
          <button class="modal-close" type="button" aria-label="Close profile modal" @click="closeProfile">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="modal-header-content">
            <div class="avatar-placeholder modal-avatar" :class="selectedInstructor.avatarClass">
              <span>{{ selectedInstructor.initials }}</span>
            </div>
            <div>
              <h2 :id="`${selectedInstructor.slug}-title`" class="fw-bold text-dark mb-1">
                {{ selectedInstructor.name }}
              </h2>
              <p class="instructor-role mb-2">{{ selectedInstructor.role }}</p>
              <div class="d-flex flex-wrap gap-2">
                <span class="rating-pill"><i class="fa-solid fa-star"></i>{{ selectedInstructor.rating }}</span>
                <span class="mini-pill"><i class="fa-solid fa-location-dot"></i>{{ selectedInstructor.location }}</span>
              </div>
            </div>
          </div>

          <p class="text-secondary modal-bio mb-4">{{ selectedInstructor.bio }}</p>

          <div class="info-grid mb-4">
            <div>
              <span>{{ selectedInstructor.experience }}</span>
              <small>បទពិសោធន៍</small>
            </div>
            <div>
              <span>{{ selectedInstructor.studentCount }}</span>
              <small>សិស្ស</small>
            </div>
            <div>
              <span>{{ selectedInstructor.courseCount }}</span>
              <small>វគ្គសិក្សា</small>
            </div>
          </div>

          <div class="mb-4">
            <h3 class="section-label">ជំនាញបង្រៀន</h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="skill in selectedInstructor.skills" :key="skill" class="skill-pill">{{ skill }}</span>
            </div>
          </div>

          <div class="mb-4">
            <h3 class="section-label">វគ្គសិក្សារបស់គ្រូ</h3>
            <div v-if="selectedInstructor.courses.length" class="course-list">
              <router-link
                v-for="course in selectedInstructor.courses"
                :key="course.slug"
                :to="`/course-enroll/${course.slug}`"
                class="course-link"
                @click="closeProfile"
              >
                <span>{{ course.title }}</span>
                <i class="fa-solid fa-arrow-right"></i>
              </router-link>
            </div>
            <p v-else class="text-secondary small mb-0">មិនទាន់មានវគ្គសិក្សាដែលបានបង្ហាញ។</p>
          </div>

          <div class="contact-row border-top pt-3">
            <span><i class="fa-regular fa-envelope me-2"></i>{{ selectedInstructor.email }}</span>
            <span><i class="fa-solid fa-location-dot me-2"></i>{{ selectedInstructor.location }}</span>
          </div>
        </section>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { courses } from '../data/courses.js'

const instructors = [
  {
    slug: 'david-chen',
    name: 'David Chen',
    initials: 'DC',
    role: 'Frontend Engineering Mentor',
    bio: 'អ្នកណែនាំផ្នែក Vue, React និង CSS ដែលផ្តោតលើការបង្កើត UI ឲ្យស្អាត រហ័ស និងងាយស្រួលថែទាំ។',
    experience: '9 ឆ្នាំ',
    studentCount: '24k+',
    rating: '4.9',
    skills: ['Vue.js', 'React', 'CSS Grid', 'UI Architecture'],
    email: 'david@nextgen.academy',
    location: 'Phnom Penh',
    avatarClass: 'avatar-blue'
  },
  {
    slug: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    initials: 'SJ',
    role: 'Mobile App Instructor',
    bio: 'គ្រូបង្រៀន Mobile Development ដែលជួយសិស្សបង្កើតកម្មវិធី iOS និង cross-platform ពីមូលដ្ឋានដល់ production។',
    experience: '8 ឆ្នាំ',
    studentCount: '18k+',
    rating: '4.8',
    skills: ['Flutter', 'SwiftUI', 'Dart', 'Mobile UX'],
    email: 'sarah@nextgen.academy',
    location: 'Siem Reap',
    avatarClass: 'avatar-green'
  },
  {
    slug: 'michael-ross',
    name: 'Michael Ross',
    initials: 'MR',
    role: 'Backend API Specialist',
    bio: 'អ្នកជំនាញ Backend ដែលបង្រៀនការរចនា API មានល្បឿនលឿន សុវត្ថិភាព និងអាចពង្រីកបានសម្រាប់ app ទំនើប។',
    experience: '12 ឆ្នាំ',
    studentCount: '21k+',
    rating: '4.7',
    skills: ['FastAPI', 'Python', 'REST API', 'System Design'],
    email: 'michael@nextgen.academy',
    location: 'Remote',
    avatarClass: 'avatar-amber'
  },
  {
    slug: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    initials: 'ER',
    role: 'Responsive Design Coach',
    bio: 'គ្រូបង្រៀនផ្នែក responsive web design និង Bootstrap ដែលផ្តោតលើ layout ស្អាត និងប្រើប្រាស់ល្អលើគ្រប់អេក្រង់។',
    experience: '10 ឆ្នាំ',
    studentCount: '16k+',
    rating: '4.9',
    skills: ['Bootstrap', 'Design System', 'Accessibility', 'Frontend'],
    email: 'elena@nextgen.academy',
    location: 'Battambang',
    avatarClass: 'avatar-purple'
  },
  {
    slug: 'liam-oconnell',
    name: "Liam O'Connell",
    initials: 'LO',
    role: 'Laravel Web Developer',
    bio: 'អ្នកអភិវឌ្ឍ Laravel ដែលបង្ហាញពីរបៀបបង្កើត web application រឹងមាំ មានរចនាសម្ព័ន្ធល្អ និងងាយស្រួលថែទាំ។',
    experience: '11 ឆ្នាំ',
    studentCount: '14k+',
    rating: '4.6',
    skills: ['Laravel', 'PHP', 'MVC', 'Database Design'],
    email: 'liam@nextgen.academy',
    location: 'Remote',
    avatarClass: 'avatar-rose'
  },
  {
    slug: 'marcus-thorne',
    name: 'Marcus Thorne',
    initials: 'MT',
    role: 'Developer Workflow Mentor',
    bio: 'គ្រូណែនាំការប្រើ Git និង GitHub សម្រាប់ការងារជាក្រុម ការគ្រប់គ្រង codebase និង workflow អាជីព។',
    experience: '13 ឆ្នាំ',
    studentCount: '19k+',
    rating: '4.8',
    skills: ['Git', 'GitHub', 'Code Review', 'Team Workflow'],
    email: 'marcus@nextgen.academy',
    location: 'Phnom Penh',
    avatarClass: 'avatar-slate'
  },
  {
    slug: 'alex-rivers',
    name: 'Alex Rivers',
    initials: 'AR',
    role: 'JavaScript Fundamentals Coach',
    bio: 'គ្រូបង្រៀន JavaScript ដែលធ្វើឲ្យមូលដ្ឋានគ្រឹះ programming ងាយយល់ តាមរយៈឧទាហរណ៍ជាក់ស្តែង។',
    experience: '7 ឆ្នាំ',
    studentCount: '15k+',
    rating: '4.9',
    skills: ['JavaScript', 'DOM', 'Async JS', 'Frontend Logic'],
    email: 'alex@nextgen.academy',
    location: 'Kampot',
    avatarClass: 'avatar-cyan'
  },
  {
    slug: 'mark-thompson',
    name: 'Mark Thompson',
    initials: 'MT',
    role: 'Node.js Architecture Lead',
    bio: 'អ្នកជំនាញ Node.js និង microservices ដែលបង្រៀនសិស្សឲ្យរចនា backend services ដែលអាច scale បាន។',
    experience: '14 ឆ្នាំ',
    studentCount: '22k+',
    rating: '4.9',
    skills: ['Node.js', 'Microservices', 'Express', 'Scalability'],
    email: 'mark@nextgen.academy',
    location: 'Remote',
    avatarClass: 'avatar-indigo'
  }
]

const enrichedInstructors = computed(() =>
  instructors.map((instructor) => {
    const instructorCourses = courses.filter((course) => course.instructor === instructor.name)
    return {
      ...instructor,
      courses: instructorCourses,
      courseCount: instructorCourses.length
    }
  })
)

const selectedInstructor = ref(null)

function openProfile(instructor) {
  selectedInstructor.value = instructor
}

function closeProfile() {
  selectedInstructor.value = null
}
</script>

<style scoped>
.instructor-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.instructor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border-color: var(--border);
}

.avatar-placeholder {
  width: 110px;
  min-width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 auto 1.25rem auto;
  border: 3px solid var(--white);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), inset 0 -18px 30px rgba(0, 0, 0, 0.12);
}

.avatar-blue { background: linear-gradient(135deg, #1d4ed8, #1393ff); }
.avatar-green { background: linear-gradient(135deg, #059669, #10b981); }
.avatar-amber { background: linear-gradient(135deg, #d97706, #f59e0b); }
.avatar-purple { background: linear-gradient(135deg, #7048e8, #9b7bff); }
.avatar-rose { background: linear-gradient(135deg, #be123c, #fb7185); }
.avatar-slate { background: linear-gradient(135deg, #334155, #64748b); }
.avatar-cyan { background: linear-gradient(135deg, #0891b2, #22d3ee); }
.avatar-indigo { background: linear-gradient(135deg, #4338ca, #6366f1); }

.instructor-role {
  color: var(--primary-600);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
}

.rating-text {
  color: var(--warning);
}

.instructor-bio {
  line-height: 1.65;
}

.profile-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 32, 96, 0.5);
  padding: 1rem;
}

.profile-modal {
  width: min(720px, 100%);
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  position: relative;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.75rem;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--white);
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.modal-close:hover {
  background: var(--primary-50);
  border-color: var(--primary-200);
  color: var(--primary-600);
}

.modal-header-content {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-right: 2.5rem;
  margin-bottom: 1.5rem;
}

.modal-avatar {
  width: 92px;
  min-width: 92px;
  height: 92px;
  margin: 0;
}

.modal-bio {
  line-height: 1.75;
}

.rating-pill {
  border-radius: 999px;
  background: var(--warning-light);
  color: var(--warning-dark);
  font-size: 0.78rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.3rem 0.55rem;
}

.mini-pill {
  border-radius: 999px;
  background: var(--primary-50);
  color: var(--primary-600);
  font-size: 0.78rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.55rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.info-grid div {
  padding: 0.8rem 0.55rem;
  text-align: center;
  background: var(--surface);
  border-right: 1px solid var(--border);
}

.info-grid div:last-child {
  border-right: 0;
}

.info-grid span {
  display: block;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 0.95rem;
}

.info-grid small {
  color: var(--text-secondary);
  font-size: 0.72rem;
}

.section-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.7rem;
}

.skill-pill {
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-secondary);
  background: var(--white);
  padding: 0.35rem 0.7rem;
  font-size: 0.78rem;
  font-weight: 500;
}

.course-list {
  display: grid;
  gap: 0.55rem;
}

.course-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.7rem 0.8rem;
  font-size: 0.82rem;
  font-weight: 600;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.course-link:hover {
  background: var(--primary-50);
  border-color: var(--primary-200);
  color: var(--primary-600);
}

.course-link i {
  font-size: 0.75rem;
  flex: 0 0 auto;
}

.contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1rem;
  color: var(--text-secondary);
  font-size: 0.78rem;
}

@media (max-width: 767.98px) {
  .instructor-card {
    padding: 1.15rem;
  }

  .profile-modal {
    padding: 1.25rem;
  }

  .modal-header-content {
    align-items: flex-start;
    flex-direction: column;
    padding-right: 2.5rem;
  }

  .modal-avatar {
    width: 82px;
    min-width: 82px;
    height: 82px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .info-grid div {
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  .info-grid div:last-child {
    border-bottom: 0;
  }
}
</style>
