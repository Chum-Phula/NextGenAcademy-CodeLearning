<template>


  <!-- Header -->
  <header class="py-5 bg-white">
    <div class="container text-center pt-3">
      <nav class="d-flex justify-content-center mb-2" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-text">
          <li class="breadcrumb-item">
            <router-link to="/home" class="text-decoration-none text-muted">ទំព័រដើម</router-link>
          </li>
          <li class="breadcrumb-item active fw-semibold" style="color: var(--text-primary)" aria-current="page">
            វគ្គសិក្សាទាំងអស់
          </li>
        </ol>
      </nav>
      <h1 class="display-5 fw-bold mb-3 text-dark">ស្វែងរក វគ្គសិក្សាទាំងអស់</h1>
      <p class="text-secondary mx-auto mb-4" style="max-width: 600px">
      គ្រប់គ្រងជំនាញបច្ចេកទេសតាមតម្រូវការបំផុតជាមួយនឹងវគ្គសិក្សាដែលដឹកនាំដោយអ្នកជំនាញរបស់យើងដែលបានរចនាឡើងសម្រាប់អ្នក
        កំណើនអាជីព។
      </p>

      <!-- Category filter pills -->
      <div class="d-flex flex-wrap justify-content-center gap-2 mt-4">
        <button
          v-for="cat in categories"
          :key="cat"
          class="btn filter-pill"
          :class="{ active: activeFilter === cat }"
          @click="activeFilter = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>
  </header>

  <!-- Course Grid -->
  <main class="py-5 bg-surface border-top">
    <div class="container">
      <div class="row g-4">
        <div v-for="course in filteredCourses" :key="course.slug" class="col-md-4 fade-in-scale">
          <div class="course-card shadow-sm h-100 d-flex flex-column">
            <div class="media-placeholder">
              <img :src="course.image" :alt="course.title" class="img-course" />
            </div>
            <div class="p-4 flex-grow-1 d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge px-2.5 py-1 rounded small" :class="course.badgeClass">{{ course.badge }}</span>
                <span class="small fw-bold" style="color: var(--warning)">
                  <i class="fa-solid fa-star me-1"></i>{{ course.rating }}
                </span>
              </div>
              <h5 class="fw-bold text-dark mb-1">{{ course.title }}</h5>
              <div class="d-flex align-items-center gap-2 mb-3">
                <div
                  class="rounded-circle bg-light d-flex align-items-center justify-content-center"
                  style="width: 24px; height: 24px"
                >
                  <i class="fa-solid fa-user text-muted small"></i>
                </div>
                <span class="text-muted small">{{ course.instructor }}</span>
              </div>
              <p class="text-secondary small mb-4">{{ course.description }}</p>
              <div class="d-flex justify-content-between text-muted small border-top pt-3 mt-auto mb-3">
                <span><i class="fa-regular fa-clock me-1"></i>{{ course.hours }}</span>
                <span><i class="fa-solid fa-chart-simple me-1"></i>{{ course.level }}</span>
              </div>
              <router-link :to="`/course-enroll/${course.slug}`" class="btn btn-brand-solid w-100 mt-2">
              ចុះឈ្មោះឥឡូវនេះ<i class="fa-solid fa-arrow-right enroll-arrow ms-1"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="d-flex justify-content-center align-items-center gap-2 mt-5">
        <a href="#" class="page-circle text-muted" style="pointer-events: none; opacity: 0.5">
          <i class="fa-solid fa-chevron-left"></i>
        </a>
        <a href="#" class="page-circle active">1</a>
        <a href="#" class="page-circle">2</a>
        <a href="#" class="page-circle">3</a>
        <span class="px-1 text-muted">...</span>
        <a href="#" class="page-circle">12</a>
        <a href="#" class="page-circle"><i class="fa-solid fa-chevron-right"></i></a>
      </div>
    </div>
  </main>

</template>

<script setup>
import { ref, computed } from 'vue'
import { courses } from '../data/courses.js'

const categories = ['All', 'Web Development', 'Mobile', 'Backend', 'Database']
const activeFilter = ref('All')

function matches(course, filter) {
  if (filter === 'All') return true
  const badge = course.badge.toLowerCase()
  switch (filter) {
    case 'Web Development':
      return badge.includes('web') || badge.includes('frontend')
    case 'Backend':
      return badge.includes('backend') || badge.includes('code manage')
    case 'Database':
      return badge.includes('database') || badge.includes('db') || badge.includes('frontend')
    case 'Mobile':
      return badge.includes('mobile')
    default:
      return badge === filter.toLowerCase()
  }
}

const filteredCourses = computed(() =>
  courses.filter((c) => matches(c, activeFilter.value))
)
</script>
