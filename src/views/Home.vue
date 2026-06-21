<template>
  <main>
    <!-- Hero -->
    <section class="pt-5 pb-5 bg-white">
      <div class="container py-lg-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 pe-lg-5">
            <h1 class="display-4 fw-bolder mb-3 text-dark" style="letter-spacing: -1px;">
              សិក្សាកូដជាភាសាខ្មែរជាមួយ
              <span style="color: var(--primary-600)">NextGenAcademy</span>
            </h1>
            <p class="fs-5 text-secondary mb-4" style="line-height: 1.7;">
              បច្ចេកវិទ្យាដែលមានតម្រូវការច្រើនបំផុតជាមួយអ្នកជំនាញ។ កម្មវិធីសិក្សាដែលមានរចនាសម្ព័ន្ធ និងគម្រោងដោយដៃរបស់យើងរៀបចំអ្នកសម្រាប់អាជីពដែលមានប្រាក់ខែខ្ពស់ក្នុងវិស័យបច្ចេកវិទ្យា។
            </p>
            <div class="d-flex gap-3 mt-2">
              <router-link to="/courses" class="btn btn-brand-solid rounded-pill px-4 py-2.5 shadow-sm fw-medium">
              រកមើលវគ្គសិក្សា
              </router-link>
              <button class="btn btn-light border rounded-pill px-4 py-2.5 shadow-sm fw-medium text-dark">ស្វែងយល់បន្ថែម</button>
            </div>
          </div>
          <div class="col-lg-6 position-relative">
            <div class="rounded-4 overflow-hidden" style="height: 400px">
              <iframe src="https://lottie.host/embed/199003e5-2314-4e25-8c72-3b8e84f5276c/Icak2JPreG.lottie" style="width: 100%; height: 100%" frameborder="0" allowfullscreen></iframe>
            </div>
            <div
              class="position-absolute bottom-0 start-0 m-4 p-3 bg-white shadow-lg rounded-4 d-flex align-items-center gap-3 border-0 float-anim"
            >
              <div
                class="p-2 rounded-circle d-flex align-items-center justify-content-center"
                style="background: #f8fafc; color: var(--primary-600); width: 45px; height: 45px;"
              >
                <i class="fa-solid fa-bolt fs-5"></i>
              </div>
              <div class="pe-2">
                <h6 class="mb-0 fw-bold text-dark">វគ្គសរសេរកូដផ្ទាល់</h6>
                <small class="text-muted fw-medium">150+ សប្តាហ៍នេះ។</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-5 bg-surface border-top border-bottom">
      <div class="container">
        <div class="row text-center g-4">
          <div v-for="stat in stats" :key="stat.label" class="col-6 col-md-3">
            <h2 class="fw-bold mb-1" style="color: var(--primary-600)">{{ stat.value }}</h2>
            <p class="text-uppercase small tracking-wider text-secondary-custom mb-0">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore Categories -->
    <section class="py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <h2 class="fw-bold">ស្វែងរក​ប្រភេទ</h2>
          <p class="text-secondary-custom">ស្វែងរកផ្លូវត្រឹមត្រូវសម្រាប់ដំណើរបច្ចេកទេសរបស់អ្នក។</p>
        </div>
        <div class="row g-4">
          <div v-for="cat in categories" :key="cat.title" class="col-md-3">
            <div class="cat-card">
              <div class="cat-icon" :style="{ background: cat.bg, color: cat.color }">
                <i :class="cat.icon"></i>
              </div>
              <h5 class="fw-bold mb-1">{{ cat.title }}</h5>
              <p class="text-secondary-custom small mb-0">{{ cat.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Courses -->
    <section class="py-5 bg-surface border-top">
      <div class="container py-3">
        <div class="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 class="fw-bold mb-1">វគ្គសិក្សាពេញនិយម</h2>
            <p class="text-secondary-custom mb-0">
             កម្មវិធីវាយតម្លៃខ្ពស់ ជ្រើសរើសដោយអ្នកសិក្សារាប់ពាន់នាក់។
            </p>
          </div>
          <router-link
            to="/courses"
            class="text-decoration-none fw-semibold"
            style="color: var(--primary-600); cursor: pointer">
            មើលវគ្គសិក្សាទាំងអស់។ <i class="fa-solid fa-arrow-right ms-1"></i>
          </router-link>
        </div>
        <div class="row g-4">
          <div v-for="course in popularCourses" :key="course.slug" class="col-md-4">
            <div class="custom-card h-100 shadow-sm bg-white">
              <div class="media-placeholder text-white" style="height: 180px">
                <img :src="course.image" alt="" class="img-course" />
              </div>
              <div class="p-4">
                <span class="badge mb-2 px-2 py-1" :class="course.badgeClass">{{ course.badge }}</span>
                <h5 class="fw-bold mb-3 text-dark">{{ course.title }}</h5>
                <div class="d-flex align-items-center gap-2 border-top pt-3">
                  <div class="rounded-circle media-placeholder" style="width: 30px; height: 30px">
                    <i class="fa-solid fa-user small"></i>
                  </div>
                  <span class="small font-medium text-dark">{{ course.instructor }}</span>
                  <span class="ms-auto small text-secondary-custom">
                    <i class="fa-regular fa-clock me-1"></i>{{ course.hours }}
                  </span>
                  <span class="small fw-bold" style="color: var(--warning)">
                    <i class="fa-solid fa-star me-1"></i>{{ course.rating }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-5 bg-white">
      <div class="container py-4">
        <div class="text-center mb-5">
          <h2 class="fw-bold">ហេតុអ្វីជ្រើសរើសយើង</h2>
          <p class="text-secondary-custom">វេទិកាល្អបំផុតសម្រាប់ការរីកចម្រើនផ្នែកបច្ចេកទេសរបស់អ្នក។</p>
        </div>
        <div class="row g-4">
          <div v-for="item in whyChooseUs" :key="item.title" class="col-md-3 text-center">
            <div class="p-3 mx-auto rounded-circle media-placeholder mb-3" style="width: 60px; height: 60px">
              <i :class="item.icon + ' fs-4'"></i>
            </div>
            <h5 class="fw-bold">{{ item.title }}</h5>
            <p class="text-secondary-custom small">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-5 bg-surface border-top">
      <div class="container py-3">
        <div class="text-center mb-5">
          <h2 class="fw-bold">អ្វីដែលសិស្សរបស់យើងនិយាយ</h2>
          <p class="text-secondary-custom">មតិពិតពីសិស្ស ដែលបានបញ្ចប់ការសិក្សា</p>
        </div>
        <div class="row g-4">
          <div v-for="t in testimonials" :key="t.name" class="col-md-4">
            <div class="p-4 rounded-3 border bg-white h-100 shadow-sm">
              <div class="text-warning mb-3">
                <i class="fa-solid fa-star" v-for="n in 5" :key="n"></i>
              </div>
              <p class="fst-italic text-secondary-custom small">"{{ t.quote }}"</p>
              <div class="d-flex align-items-center gap-3 mt-4 border-top pt-3">
                <div class="rounded-circle media-placeholder" style="width: 40px; height: 40px">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div>
                  <h6 class="mb-0 fw-bold">{{ t.name }}</h6>
                  <small class="text-secondary-custom text-sm">{{ t.role }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { courses } from '../data/courses.js'

const stats = [
  { value: '10,000+', label: 'សិស្ស' },
  { value: '50+', label: 'វគ្គសិក្សា' },
  { value: '20+', label: 'គ្រូបង្រៀន' },
  { value: '4', label: 'IT Tracks' }
]

const categories = [
  { title: 'Web Dev', subtitle: 'Frontend & Fullstack', icon: 'fa-solid fa-code', bg: 'var(--primary-50)', color: 'var(--primary-400)' },
  { title: 'Mobile', subtitle: 'iOS & Android', icon: 'fa-solid fa-mobile-screen-button', bg: '#e6fcf5', color: 'var(--accent-400)' },
  { title: 'Backend', subtitle: 'Node, Python & Laravel', icon: 'fa-solid fa-server', bg: '#fff9db', color: 'var(--warning)' },
  { title: 'Database', subtitle: 'SQL & NoSQL Systems', icon: 'fa-solid fa-database', bg: '#f3f0ff', color: '#845ef7' }
]

// Pull three featured courses (matching the original hand-picked set)
const popularCourses = [
  courses.find((c) => c.slug === 'react'),
  courses.find((c) => c.slug === 'swift'),
  courses.find((c) => c.slug === 'node')
]

const whyChooseUs = [
  { title: 'Expert Instructors', icon: 'fa-solid fa-graduation-cap', text: 'រៀនពីអ្នកជំនាញដែលមានបទពិសោធន៍ជាច្រើនឆ្នាំនៅក្នុងក្រុមហ៊ុនបច្ចេកវិទ្យាកំពូលៗ' },
  { title: 'Flexible Learning', icon: 'fa-solid fa-rotate', text: 'ចូលរៀនវគ្គសិក្សារបស់អ្នកគ្រប់ពេលវេលា គ្រប់ទីកន្លែង នៅលើឧបករណ៍ណាមួយតាមល្បឿនរបស់អ្នក។.' },
  { title: 'Certificate', icon: 'fa-solid fa-certificate', text: 'ទទួលបានវិញ្ញាបនបត្រទទួលស្គាល់នៅពេលបញ្ចប់បទនីមួយៗ' },
  { title: 'Community Support', icon: 'fa-solid fa-users', text: 'ចូលរួមជាមួយ Discord ឯកជនរបស់យើង ដើម្បីភ្ជាប់បណ្តាញ និងទទួលបានជំនួយពីមិត្តនិស្សិត' }
]

const testimonials = [
  { name: 'Alex Rivera', role: 'Frontend Student', quote: 'ខ្ញុំពិតជាពេញចិត្តចំពោះវគ្គសិក្សានេះណាស់។ មេរៀនមានការពន្យល់ច្បាស់លាស់ ងាយយល់ និងមានឧទាហរណ៍ជាក់ស្តែង ដែលជួយឱ្យខ្ញុំយល់អំពីការសរសេរកូដបានកាន់តែប្រសើរ។ វគ្គសិក្សានេះបានជួយបង្កើនចំណេះដឹង និងជំនាញរបស់ខ្ញុំយ៉ាងច្រើន។ សូមអរគុណដល់គ្រូបង្រៀន និងក្រុមការងារដែលបានរៀបចំមាតិកាល្អៗបែបនេះ។' },
  { name: 'Emma Watts', role: 'Mobile Dev Graduate', quote: 'វគ្គសិក្សាអនឡាញនេះមានគុណភាពល្អ មេរៀនរៀបចំបានល្អ និងងាយស្រួលក្នុងការតាមដាន។ ខ្ញុំបានរៀនជំនាញសរសេរកូដថ្មីៗជាច្រើន ហើយអាចយកទៅអនុវត្តក្នុងការអភិវឌ្ឍគម្រោងផ្ទាល់ខ្លួនបាន។ ខ្ញុំសូមណែនាំវគ្គសិក្សានេះដល់អ្នកដែលចង់ចាប់ផ្តើមរៀន Programming។' },
  { name: 'Jordan Smith', role: 'Backend Student', quote: 'ខ្ញុំមានការពេញចិត្តយ៉ាងខ្លាំងចំពោះវគ្គសិក្សានេះ។ ការបង្រៀនមានភាពច្បាស់លាស់ ងាយយល់ និងមានលំហាត់អនុវត្តដែលជួយឱ្យខ្ញុំអភិវឌ្ឍជំនាញសរសេរកូដបានយ៉ាងមានប្រសិទ្ធភាព។ សូមអរគុណចំពោះវគ្គសិក្សាដ៏មានតម្លៃនេះ។' }
]
</script>

<style scoped>
.float-anim {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.btn-brand-solid {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-brand-solid:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.2) !important;
}

.btn-light {
  transition: all 0.2s ease;
}
.btn-light:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1 !important;
  transform: translateY(-2px);
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05) !important;
}
</style>
