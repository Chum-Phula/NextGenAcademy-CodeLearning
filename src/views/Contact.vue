<template>


  <header class="py-5 bg-white">
    <div class="container text-center pt-3">
      <nav class="d-flex justify-content-center mb-2" aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-text">
          <li class="breadcrumb-item">
            <router-link to="/home" class="text-decoration-none text-muted">ទំព័រដើម</router-link>
          </li>
          <li class="breadcrumb-item active fw-semibold" style="color: var(--text-primary)" aria-current="page">
            ទំនាក់ទំនង
          </li>
        </ol>
      </nav>
      <h1 class="display-5 fw-bold mb-3 text-dark">ទំនាក់ទំនង</h1>
      <p class="text-secondary mx-auto mb-0" style="max-width: 540px">
       មានសំណួរអំពីវិញ្ញាបនប័ត្របច្ចេកទេសរបស់យើង ឬត្រូវការជំនួយជាមួយផ្លូវសិក្សារបស់អ្នក?
        ក្រុមរបស់យើងនៅទីនេះដើម្បីជួយអ្នកក្នុងការពង្រីកជំនាញ IT របស់អ្នក។
      </p>
    </div>
  </header>

  <main class="pb-5 bg-white">
    <div class="container">
      <div class="row g-4 mb-5">

        <!-- Contact Form -->
        <div class="col-lg-7">
          <div class="border rounded-4 p-4 bg-white shadow-sm h-100">
            <form @submit.prevent="handleSubmit">
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label class="form-label">ឈ្មោះពេញ</label>
                  <input v-model="form.name" type="text" class="form-control" placeholder="តាន់ នីតា" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label">អាសយដ្ឋានអ៊ីមែល</label>
                  <input v-model="form.email" type="email" class="form-control" placeholder="nitakhmer@example.com" required />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">ប្រធានបទ</label>
                <select v-model="form.subject" class="form-select text-dark">
                  <option value="" selected>ជ្រើសរើសប្រធានបទ</option>
                  <option>ការសាកសួរវគ្គសិក្សា</option>
                  <option>ការគាំទ្រវេទិកា</option>
                  <option>បញ្ហាវិក័យប័ត្រ</option>
                  <option>មតិកែលម្អ</option>
                </select>
              </div>

              <div class="mb-4">
                <label class="form-label">សារ</label>
                <textarea
                  v-model="form.message"
                  class="form-control"
                  rows="5"
                  placeholder="តើយើងអាចជួយអ្នកនៅថ្ងៃនេះដោយរបៀបណា?"
                  required
                ></textarea>
              </div>

              <div v-if="submitted" class="alert alert-success mb-3" role="alert">
                <i class="fa-solid fa-circle-check me-2"></i> Message sent! We'll be in touch soon.
              </div>

              <button type="submit" class="btn btn-brand-solid px-4 d-inline-flex align-items-center gap-2">
                ផ្ញើសារ <i class="fa-solid fa-paper-plane small"></i>
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Info Panels -->
        <div class="col-lg-5 d-flex flex-column gap-3">
          <div class="info-card shadow-sm" style="border-left: 4px solid var(--primary-600)">
            <div class="icon-box bg-primary-subtle text-primary">
              <i class="fa-solid fa-envelope fs-5"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1 text-dark">អ៊ីមែលមកយើង</h6>
              <p class="text-secondary small mb-0">support@nextgenacademy.edu</p>
              <p class="text-secondary small mb-0">admissions@nextgenacademy.edu</p>
            </div>
          </div>

          <div class="info-card shadow-sm" style="border-left: 4px solid var(--accent-600)">
            <div class="icon-box bg-success-subtle text-success">
              <i class="fa-solid fa-phone fs-5"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1 text-dark">លេខទំនាក់ទំនងយើង</h6>
              <p class="text-secondary small mb-0">+1 (555) 234-5678</p>
              <p class="text-secondary text-muted small mb-0">Mon - Fri, 9am - 6pm EST</p>
            </div>
          </div>

          <div class="info-card shadow-sm" style="border-left: 4px solid var(--warning)">
            <div class="icon-box bg-warning-subtle text-warning">
              <i class="fa-solid fa-location-dot fs-5"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-1 text-dark">ទីតាំង</h6>
              <p class="text-secondary small mb-0">ន័រតុន, ភ្នំពេញ</p>
              <p class="text-secondary small mb-0">ប្រទេសកម្ពុជា</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div
        class="d-flex media-placeholder rounded-4 mt-5 text-center flex-column p-5 text-dark border border-2 border-dashed"
        style="height: 300px; background-color: var(--surface)"
      >
        <div class="p-3 bg-white rounded-circle shadow-sm mb-2" style="color: var(--primary-600); width: fit-content; margin: 0 auto">
          <i class="fa-solid fa-map-location-dot fa-2x"></i>
        </div>
        <h6 class="fw-bold mb-0">ធាតុផែនទីទីតាំងរបស់យើង មើលកន្លែងដាក់</h6>
        <!-- <small class="text-secondary-custom">Interactive Map Canvas API Integration Area Frame</small> -->
      </div>
    </div>
  </main>

</template>

<script setup>
import { ref, reactive } from 'vue'


const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => (submitted.value = false), 5000)
}
</script>
