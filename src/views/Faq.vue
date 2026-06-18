<template>


  <header class="py-5 bg-white">
    <div class="container text-center pt-3">
      <nav class="d-flex justify-content-center mb-2" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-text">
          <li class="breadcrumb-item">
            <router-link to="/home" class="text-decoration-none text-muted">Home</router-link>
          </li>
          <li class="breadcrumb-item active fw-semibold" style="color: var(--text-primary)" aria-current="page">FAQ</li>
        </ol>
      </nav>
      <h1 class="display-5 fw-bold mb-3 text-dark">សំណួរដែលសួរញឹកញាប់</h1>
      <p class="text-secondary mx-auto mb-0" style="max-width: 620px">
       ស្វែងរកចម្លើយចំពោះសំណួរទូទៅអំពីវេទិកា វគ្គសិក្សា និងបច្ចេកទេសរបស់យើង។
        តម្រូវការ។ យើងនៅទីនេះដើម្បីជួយអ្នកឱ្យជោគជ័យក្នុងដំណើរ IT របស់អ្នក។
      </p>

      <div class="d-flex flex-wrap justify-content-center gap-2 mt-4">
        <button
          v-for="cat in categories"
          :key="cat"
          class="btn filter-pill"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>
  </header>

  <main class="pb-5 bg-white">
    <div class="container" style="max-width: 820px">
      <div class="accordion" id="faqGrid">
        <div
          v-for="item in faqs"
          :key="item.id"
          class="accordion-item"
          :class="{ 'active-item': openId === item.id }"
        >
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              :class="{ collapsed: openId !== item.id }"
              type="button"
              @click="toggle(item.id)"
            >
              {{ item.question }}
            </button>
          </h2>
          <div class="accordion-collapse collapse" :class="{ show: openId === item.id }">
            <div class="accordion-body">{{ item.answer }}</div>
          </div>
        </div>
      </div>

      <!-- Assistance Banner -->
      <div
        class="mt-5 p-4 bg-light rounded-3 border d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start gap-3"
      >
        <div>
          <h5 class="fw-bold mb-1 text-dark">នៅតែមានសំណួរ?</h5>
          <p class="text-secondary small mb-0">
           រកមិនឃើញចម្លើយដែលអ្នកកំពុងស្វែងរកមែនទេ? សូមជជែកជាមួយក្រុមមិត្តភាពរបស់យើង។
          </p>
        </div>
        <router-link to="/contact" class="btn btn-brand-solid px-4" style="white-space: nowrap">
          ទំនាក់ទំនង ពួកយើង
        </router-link>
      </div>
    </div>
  </main>

</template>

<script setup>
import { ref } from 'vue'

const categories = ['វគ្គសិក្សា', 'ការបង់ប្រាក់', 'វិញ្ញាបនប័ត្រ', 'ជំនួយបច្ចេកទេស']
const activeCategory = ref('Courses')

const faqs = [
  {
    id: 'f1',
    question: 'តើខ្ញុំចុះឈ្មោះចូលរៀនដោយរបៀបណា?',
    answer:
      'ការចុះឈ្មោះគឺសាមញ្ញ។ រកមើលកាតាឡុកវគ្គសិក្សារបស់យើង ជ្រើសរើសវគ្គសិក្សាដែលអ្នកចាប់អារម្មណ៍ ហើយចុចប៊ូតុង "ចុះឈ្មោះឥឡូវនេះ" ។ អនុវត្តតាមដំណើរការពិនិត្យចេញ ដើម្បីទទួលបានការចូលប្រើភ្លាមៗទៅកាន់ផ្ទាំងគ្រប់គ្រង និងសម្ភារៈសិក្សារបស់អ្នក។'
  },
  {
    id: 'f2',
    question: 'តើវិធីសាស្រ្តទូទាត់អ្វីខ្លះត្រូវបានទទួលយក?',
    answer:
      'យើងទទួលយកកាតឥណទានសំខាន់ៗទាំងអស់ ABA, AC និងប្រព័ន្ធប្រតិបត្តិការជំនួសក្នុងស្រុក អាស្រ័យទាំងស្រុងលើតំបន់នៃការចូលប្រើរបស់អ្នក។'
  },
  {
    id: 'f3',
    question: 'តើខ្ញុំនឹងទទួលបានវិញ្ញាបនបត្របន្ទាប់ពីបញ្ចប់ការសិក្សាទេ?',
    answer:
      'បាទ/ចាស អ្នកនឹងទទួលបានវិញ្ញាបនបត្រឌីជីថលដែលទទួលស្គាល់ដោយឧស្សាហកម្មភ្លាមៗនៅពេលបញ្ចប់ការសិក្សា និងគម្រោងទាំងអស់ដោយជោគជ័យ។'
  },
  {
    id: 'f4',
    question: 'តើខ្ញុំអាចចូលរៀនវគ្គសិក្សានៅលើ ទូរស័ព្ទ បានទេ?',
    answer:
      'បាទ! គេហទំព័ររបស់យើងមានការរចនាបែប Responsive ដែលអាចដំណើរការ និងផ្តល់បទពិសោធន៍ប្រើប្រាស់បានយ៉ាងរលូននៅលើកុំព្យូទ័រ Tablet និងស្មាតហ្វូនគ្រប់ប្រភេទ។'
  },
  {
    id: 'f5',
    question: 'តើខ្ញុំអាចចូលប្រើខ្លឹមសារវគ្គសិក្សាបានរយៈពេលប៉ុន្មាន?',
    answer:
      'រាល់ថ្នាក់កញ្ចប់វគ្គសិក្សាផ្ទាល់នីមួយៗមានព័ត៌មានបច្ចុប្បន្នភាពពេញមួយជីវិត ប៉ារ៉ាម៉ែត្របរិបទនៃទម្រង់ការអនុញ្ញាត។'
  },
  {
    id: 'f6',
    question: 'ចុះបើខ្ញុំត្រូវការជំនួយបច្ចេកទេស?',
    answer:
      'ក្រុមគាំទ្រផ្នែកបច្ចេកទេស និងវិស្វកម្មរបស់យើងមានសេវាកម្មជួយដោះស្រាយបញ្ហា ២៤ ម៉ោងក្នុងមួយថ្ងៃ និង ៧ ថ្ងៃក្នុងមួយសប្តាហ៍ ដើម្បីធានាថាការដាក់ឱ្យដំណើរការ និងការប្រើប្រាស់ប្រព័ន្ធរបស់អ្នកប្រព្រឹត្តទៅដោយរលូន។'
  }
]

const openId = ref('f1')

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>
