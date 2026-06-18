<template>
  <div class="course-detail-page">
    <!-- NAVIGATION BAR -->
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home">
          <img src="../assets/image/logoweb.png" alt="NextGen Logo" style="height: 45px; width: auto; object-fit: contain" />
        </router-link>

        <div class="d-flex align-items-center gap-3 ms-auto">
          <router-link to="/courses" class="nav-link">
            <i class="fa-solid fa-arrow-left me-1"></i>ត្រឡប់ទៅ វគ្គសិក្សា វិញ
          </router-link>
          <div class="dropdown">
            <button
              class="profile-pill dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="background: transparent; border: 1px solid var(--border); padding: 0.3rem 0.8rem; border-radius: 50px; display: flex; align-items: center; gap: 0.5rem"
            >
              <img
                src=".././assets/image/Nita.jpeg"
                alt="Profile"
                style="width: 28px; height: 28px; border-radius: 50%"
              />
              <span style="font-size: 0.85rem; font-weight: 500">តាន់ នីតា</span>
              <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </button>
            <ul class="dropdown-menu profile-dropdown dropdown-menu-end">
              <li>
                <div class="dd-header">
                  <div class="dd-header-name">តាន់ នីតា</div>
                  <div class="dd-header-email">tannita@nextgenacademy.io</div>
                </div>
              </li>
              <li><router-link class="dropdown-item" to="/profile"><i class="fa-solid fa-user"></i> ប្រូហ្វាល់</router-link></li>
              <li><a class="dropdown-item" href="#"><i class="fa-solid fa-book"></i> វគ្គសិក្សាខ្ញុំ</a></li>
              <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear"></i> ការកំណត់</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><button type="button" class="dropdown-item logout" data-bs-toggle="modal" data-bs-target="#logoutModal"><i class="fa-solid fa-right-from-bracket"></i> ចាកចេញ</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div v-if="course" class="course-container">
      <!-- LEFT SIDEBAR -->
      <aside class="sidebar">
        <div class="w-100">
          <div class="sidebar-header">
            <div class="course-title-header">
              <h4>{{ course.detailTitle }}</h4>
              <router-link to="/courses" class="btn-close-course"><i class="fa-solid fa-xmark"></i></router-link>
            </div>
          </div>

          <div class="module-list">
            <div class="module-item active">
              <div class="module-header" @click="moduleOpen = !moduleOpen">
                <span class="module-number">Module 1</span>
                <span class="module-title">{{ course.moduleTitle }}</span>
                <i class="fa-solid fa-chevron-up module-toggle" :class="{ 'rotate-180': !moduleOpen }"></i>
              </div>

              <div class="module-content" :style="{ display: moduleOpen ? 'block' : 'none' }">
                <ul class="ep-list pt-2">
                  <li
                    v-for="(ep, i) in course.episodes"
                    :key="ep.url"
                    class="ep-item"
                    :class="{ active: activeEpisode === i }"
                    @click="selectEpisode(i)"
                  >
                    <div class="ep-icon"><i class="fa-solid fa-pen" style="color: #9ca3af; font-size: 0.9rem"></i></div>
                    <div class="ep-details">
                      <div class="ep-title">{{ ep.title }}</div>
                      <div class="ep-meta">Video • {{ ep.duration }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- RIGHT MAIN CONTENT -->
      <main class="main-content">
        <div class="video-container">
          <iframe
            :src="currentEpisode.url"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div class="video-info-bar">
          <h2 class="video-title">{{ currentEpisode.title }}</h2>
          <div class="video-actions">
            <button class="btn-save-note"><i class="fa-regular fa-bookmark"></i> Save note</button>
            <button class="btn-next-item" @click="nextEpisode">
              Go to next item <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Course Details Section -->
        <div class="course-details mt-4 bg-white p-4 p-md-5 rounded-3 border">
          <h4 class="fw-bold mb-4">អំពីវគ្គសិក្សានេះ។</h4>
          <p class="text-secondary small mb-4" style="line-height: 1.6">
            សូមស្វាគមន៍មកកាន់វគ្គសិក្សាដ៏ទូលំទូលាយនេះ! តាមរយៈមេរៀន និងម៉ូឌុលផ្សេងៗ អ្នកនឹងទទួលបានការយល់ដឹងយ៉ាងស៊ីជម្រៅអំពីគោលគំនិតស្នូល ការអនុវត្តល្អបំផុតសម័យទំនើប និងជំនាញអនុវត្តជាក់ស្តែងដែលចាំបាច់សម្រាប់ការស្ទាត់ជំនាញលើបច្ចេកវិទ្យានេះ។ វគ្គសិក្សានេះត្រូវបានរៀបចំឡើងសម្រាប់ទាំងអ្នកចាប់ផ្តើម និងអ្នកសិក្សាកម្រិតមធ្យម ដោយភ្ជាប់ចំណេះដឹងទ្រឹស្តីជាមួយនឹងការអនុវត្តក្នុងគម្រោង និងស្ថានភាពជាក់ស្តែង។
          </p>

          <h5 class="fw-bold mb-3">អ្វីដែលអ្នកនឹងរៀន</h5>
          <div class="row g-3 mb-4">
            <div class="col-md-6 d-flex gap-2">
              <i class="fa-solid fa-check text-success mt-1"></i>
              <span class="text-secondary small">អភិវឌ្ឍកម្មវិធីដែលមានប្រសិទ្ធភាពខ្ពស់ និងអាចពង្រីកសមត្ថភាពបានតាមតម្រូវការ ចាប់ពីដំណាក់កាលដំបូង។</span>
            </div>
            <div class="col-md-6 d-flex gap-2">
              <i class="fa-solid fa-check text-success mt-1"></i>
              <span class="text-secondary small">រៀនពីគោលគំនិតសំខាន់ៗ ចាប់ពីមូលដ្ឋានរហូតដល់កម្រិតជំនាញខ្ពស់។</span>
            </div>
            <div class="col-md-6 d-flex gap-2">
              <i class="fa-solid fa-check text-success mt-1"></i>
              <span class="text-secondary small">ប្រើប្រាស់ការអនុវត្តល្អបំផុត និងស្តង់ដារវិជ្ជាជីវៈក្នុងការអភិវឌ្ឍកម្មវិធី។</span>
            </div>
            <div class="col-md-6 d-flex gap-2">
              <i class="fa-solid fa-check text-success mt-1"></i>
              <span class="text-secondary small">ដាក់ឱ្យដំណើរការគម្រោងជាក់ស្តែង និងបង្កើត Portfolio ដ៏គួរឱ្យទាក់ទាញសម្រាប់អាជីពរបស់អ្នក។</span>
            </div>
          </div>

          <h5 class="fw-bold mb-3">តម្រូវការជាមុន</h5>
          <ul class="text-secondary small ps-3 mb-0" style="line-height: 1.6">
            <li class="mb-2">កុំព្យូទ័រដែលមានអ៊ីនធឺណិត និងចំណេះដឹងអំពីការដំឡើងកម្មវិធី។</li>
            <li class="mb-2">វគ្គសិក្សានេះមិនទាមទារចំណេះដឹងកម្រិតខ្ពស់ពីមុនទេ ទោះបីជាការមានមូលដ្ឋានគ្រឹះផ្នែកសរសេរកម្មវិធីខ្លះៗអាចជាអត្ថប្រយោជន៍ក៏ដោយ។</li>
            <li class="mb-0">មានឆន្ទៈក្នុងការរៀន អនុវត្ត និងសរសេរកូដ!</li>
          </ul>
        </div>
      </main>
    </div>

    <div v-else class="container py-5 text-center">
      <h3>រកមិនឃើញវគ្គសិក្សាទេ។</h3>
      <router-link to="/courses" class="btn btn-brand-solid mt-3">ត្រឡប់ទៅ វគ្គសិក្សា វិញ</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getCourseBySlug } from '../data/courses.js'

const route = useRoute()
const moduleOpen = ref(true)
const activeEpisode = ref(0)

const course = computed(() => getCourseBySlug(route.params.slug))
const currentEpisode = computed(() => course.value?.episodes[activeEpisode.value] ?? {})

function selectEpisode(i) {
  activeEpisode.value = i
}
function nextEpisode() {
  if (!course.value) return
  activeEpisode.value = (activeEpisode.value + 1) % course.value.episodes.length
}

// Reset to first episode whenever the user navigates to a different course
watch(
  () => route.params.slug,
  () => {
    activeEpisode.value = 0
    moduleOpen.value = true
  }
)
</script>

<style scoped>
.course-detail-page {
  background-color: var(--surface);
  min-height: 100vh;
}

/* Course Detail Layout */
.course-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  height: calc(100vh - 62px);
  overflow: hidden;
}

/* Sidebar Styling */
.sidebar {
  width: 380px;
  flex-shrink: 0;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}
.sidebar::-webkit-scrollbar {
  width: 6px;
}
.sidebar::-webkit-scrollbar-track {
  background: transparent;
}
.sidebar::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 10px;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--white);
  z-index: 10;
  width: 100%;
}

.course-title-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}
.course-title-header h4 {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0;
  padding-right: 1rem;
}

.btn-close-course {
  color: var(--text-secondary);
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.btn-close-course:hover {
  color: var(--text-primary);
}

/* Accordion Modules */
.module-item {
  border-bottom: 1px solid var(--border);
}
.module-header {
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
}
.module-header:hover {
  background-color: var(--surface);
}
.module-number {
  font-size: 0.8rem;
  color: var(--primary-600);
  font-weight: 500;
  margin-bottom: 0.2rem;
}
.module-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  padding-right: 1.5rem;
}
.module-toggle {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  transition: transform 0.2s ease;
}
.module-toggle.rotate-180 {
  transform: translateY(-50%) rotate(180deg);
}

.module-content {
  padding: 0 0 1rem 0;
}

/* Episode List */
.ep-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.ep-item {
  display: flex;
  gap: 1rem;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  transition: background 0.15s;
}
.ep-item:hover {
  background-color: var(--surface);
}
.ep-item.active {
  background-color: var(--primary-50);
  border-left: 4px solid var(--primary-600);
  padding-left: calc(1.5rem - 4px);
  position: relative;
}

.ep-icon {
  width: 20px;
  display: flex;
  justify-content: center;
  padding-top: 3px;
}
.ep-details {
  flex: 1;
}
.ep-title {
  font-size: 0.88rem;
  color: var(--text-primary);
  font-weight: 500;
  margin-bottom: 0.2rem;
  line-height: 1.4;
}
.ep-item.active .ep-title {
  font-weight: 600;
}
.ep-meta {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Main Video Area */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  border-radius: 12px;
  padding-bottom: 2rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border);
  margin-bottom: 1.5rem;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-info-bar {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--white);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.video-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.video-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.btn-save-note {
  background: transparent;
  border: none;
  color: var(--primary-600);
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
}
.btn-save-note:hover {
  text-decoration: underline;
}

.btn-next-item {
  background: transparent;
  border: 1px solid var(--primary-600);
  color: var(--primary-600);
  font-weight: 500;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.btn-next-item:hover {
  background: var(--primary-50);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .course-container {
    flex-direction: column;
    height: auto;
    overflow: visible;
  }
  .sidebar {
    width: 100%;
    max-height: 400px;
  }
  .main-content {
    height: auto;
  }
  .video-info-bar {
    flex-direction: column;
    gap: 1rem;
  }
  .video-actions {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
