<template>

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
      <h2 class="fw-bold mb-2 text-dark">ជួបជាមួយ គ្រូបង្រៀន</h2>
      <p class="text-secondary mx-auto mb-0" style="max-width: 600px">
       ទទួលបានចំណេះដឹង និងបទពិសោធន៍ពីអ្នកជំនាញដែលមានបទពិសោធន៍ការងារពិតប្រាកដជាច្រើនឆ្នាំ។


      </p>
    </div>
  </header>

  <main class="pb-5 bg-white">
    <div class="container">
      <!-- Instructor Grid -->
      <div class="row g-4 mb-5">
        <div v-for="inst in instructors" :key="inst.slug" class="col-md-3">
          <div class="instructor-card shadow-sm">
            <div class="avatar-placeholder">
              <i :class="inst.icon + ' fa-3x'"></i>
            </div>
            <h5 class="fw-bold text-dark mb-1">{{ inst.name }}</h5>
            <p
              class="text-uppercase small fw-bold tracking-wider mb-3"
              style="color: var(--primary-600); font-size: 0.78rem"
            >
              {{ inst.role }}
            </p>
            <p class="text-secondary small mb-4">{{ inst.bio }}</p>
            <div class="d-flex justify-content-between align-items-center small text-muted border-top pt-3">
              <span>{{ inst.courses }} Courses</span>
              <span style="color: var(--warning)"><i class="fa-solid fa-star me-1"></i>{{ inst.rating }}</span>
            </div>
            <router-link
              :to="`/instructors/${inst.slug}`"
              class="btn btn-brand-outline w-100 mt-4 btn-sm text-decoration-none"
            >
       មើលប្រវត្តិរូប
            </router-link>
          </div>
        </div>
      </div>

      <!-- Instructor Spotlight -->
      <div class="spotlight-box shadow-sm mt-5 mb-5">
        <div class="row g-0 align-items-stretch">
          <div class="col-md-4">
            <div class="spotlight-media h-100">
              <i class="fa-solid fa-user-tie fa-5x opacity-50"></i>
            </div>
          </div>
          <div class="col-md-8 p-4 p-md-5 d-flex flex-column justify-content-center">
            <div class="mb-3">
              <span
                class="badge text-uppercase tracking-wider px-3 py-1.5 rounded-1"
                style="background-color: var(--primary-600); font-size: 0.75rem">
              ការយកចិត្តទុកដាក់របស់គ្រូ
              </span>
            </div>
            <h3 class="fw-bold text-dark mb-2">Michael Ross</h3>
            <p class="text-secondary mb-4" style="line-height: 1.6">
              Michael គឺជាវិស្វករ Backend លំដាប់ពិភពលោកដែលមានបទពិសោធន៍ជាង 15 ឆ្នាំនៅ
              ក្រុមហ៊ុនបច្ចេកវិទ្យាលំដាប់កំពូល។ គាត់បានជួយប្រព័ន្ធខ្នាតសម្រាប់អ្នកប្រើប្រាស់រាប់លាននាក់ ហើយឥឡូវនេះ
              ចែករំលែកចំណេះដឹងផ្នែក Code ដ៏ជ្រាលជ្រៅរបស់គាត់ទាំងស្រុងនៅលើ NextGenAcademy ។
            </p>
            <div class="row g-3 text-start border-top pt-4">
              <div class="col-4">
                <h4 class="fw-bold text-dark mb-0">12</h4>
                <small class="text-uppercase text-muted small tracking-wider" style="font-size: 0.72rem">វគ្គសិក្សា</small>
              </div>
              <div class="col-4">
                <h4 class="fw-bold text-dark mb-0">50k+</h4>
                <small class="text-uppercase text-muted small tracking-wider" style="font-size: 0.72rem">សិស្ស</small>
              </div>
              <div class="col-4">
                <h4 class="fw-bold text-dark mb-0">4.9/5</h4>
                <small class="text-uppercase text-muted small tracking-wider" style="font-size: 0.72rem">ការវាយតម្លៃ</small>
              </div>
              <div class="col-12 mt-4">
                <a href="#" class="btn btn-brand-solid">មើលប្រវត្តិរូបពេញ</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center p-5 rounded-4 mt-5 text-white shadow-sm" style="background-color: var(--primary-600)">
        <h4 class="fw-bold mb-2">ក្លាយជាគ្រូបង្រៀន</h4>
        <p class="mb-4 opacity-75 mx-auto" style="max-width: 540px">
         ចូលរួមជាមួយសហគមន៍សកលរបស់យើងនៃអ្នកអប់រំជំនាញ និងជួយបង្កើតមនុស្សជំនាន់ក្រោយ
          ទេពកោសល្យបច្ចេកទេស។
        </p>
        <button class="btn btn-white btn-light fw-semibold px-4 py-2" style="color: var(--primary-600) !important">
       ដាក់ពាក្យឥឡូវនេះ
        </button>
      </div>
    </div>
  </main>

</template>

<script setup>


const instructors = [
  {
    slug: 'alex-rivers',
    name: 'Alex Rivers',
    role: 'Senior Web Developer',
    bio: 'ឯកទេសក្នុងការប្រើប្រាស់ React និងបច្ចេកទេស CSS ទំនើបសម្រាប់ការអភិវឌ្ឍគេហទំព័រ...',
    courses: 12,
    rating: '5.0',
    icon: 'fa-solid fa-user-tie'
  },
  {
    slug: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Mobile Architect',
    bio: 'អ្នកជំនាញផ្នែក Swift និង Flutter។ សារ៉ា មានបទពិសោធន៍ក្នុងការដឹកនាំ និងអភិវឌ្ឍគម្រោងកម្មវិធីទូរស័ព្ទជាច្រើន...',
    courses: 8,
    rating: '4.9',
    icon: 'fa-solid fa-user-graduate'
  },
  {
    slug: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Backend Lead',
    bio: 'ឯកទេសផ្នែក Distributed Systems និង Backend Development...',
    courses: 15,
    rating: '5.0',
    icon: 'fa-solid fa-user-ninja'
  },
  {
    slug: 'elena-rodriguze',
    name: 'Elena Rodriguez',
    role: 'Database Expert',
    bio: 'អ្នកជំនាញផ្នែក PostgreSQL និងការរចនាស្ថាបត្យកម្មទិន្នន័យសម្រាប់ Cloud...',
    courses: 10,
    rating: '4.8',
    icon: 'fa-solid fa-user-astronaut'
  }
]
</script>

<style scoped>
.instructor-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.instructor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.avatar-placeholder {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-50), var(--primary-100));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-600);
  margin: 0 auto 1.25rem auto;
  border: 3px solid var(--white);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.spotlight-box {
  border: 1px solid var(--border);
  border-radius: 16px;
  background-color: var(--white);
  overflow: hidden;
}
.spotlight-media {
  background: linear-gradient(135deg, var(--primary-900), var(--primary-800));
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-100);
}
</style>
