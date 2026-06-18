<template>
  <div class="container-fluid form p-0">
    <div class="row g-0 min-vh-100">
      <!-- Welcome Column (Hidden on mobile/tablet) -->
      <div class="col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center welcome p-5">
        <div class="mx-auto" style="max-width: 500px">
          <h1 class="display-5 fw-bold mb-3">ស្វាគមន៍ ការត្រឡប់មកវិញ</h1>
          <p class="fs-5 text-secondary-custom mb-5">
           រៀនបច្ចេកវិទ្យាចុងក្រោយបំផុតជាមួយវគ្គសិក្សាដែលដឹកនាំដោយអ្នកជំនាញ និងភ្ជាប់ខ្លួនទៅកាន់សហគមន៍អ្នកសិក្សាជាង 50,000 នាក់នៅទូទាំងពិភពលោក។
          </p>
          <div class="row g-4">
            <div class="col-sm-6">
              <div class="card p-4 h-100 border-0 shadow-sm">
                <i class="fa-solid fa-layer-group primary fs-3 mb-3"></i>
                <h6 class="text-uppercase text-muted fw-bold mb-1" style="font-size: 0.8rem; letter-spacing: 1px;">វគ្គសិក្សា</h6>
                <h3 class="fw-bold mb-0">450+</h3>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card p-4 h-100 border-0 shadow-sm">
                <i class="fa-solid fa-users primary fs-3 mb-3"></i>
                <h6 class="text-uppercase text-muted fw-bold mb-1" style="font-size: 0.8rem; letter-spacing: 1px;">សិស្ស</h6>
                <h3 class="fw-bold mb-0">50K+</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Login form column -->
      <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4 p-md-5">
        <div class="w-100" style="max-width: 420px;">
          <form @submit.prevent="handleLogin">
            <!-- Show Welcome on Mobile only -->
            <div class="text-center mb-5 d-lg-none">
              <h2 class="fw-bold mb-2">ស្វាគមន៍ ការត្រឡប់មកវិញ</h2>
              <p class="text-secondary-custom">ចូលទៅគណនីរបស់អ្នកដើម្បីបន្ត។</p>
            </div>

            <h2 class="fw-bold mb-4 d-none d-lg-block">ចូលគណនីរបស់អ្នក</h2>
            <div class="mb-3">
              <label class="form-label fw-medium">អាសយដ្ឋានអ៊ីមែល</label>
              <input v-model="email" type="email" placeholder="username@example.com" class="form-control form-control-lg bg-surface" required />
            </div>
            <div class="mb-4">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <label class="form-label fw-medium mb-0">ពាក្យសំងាត់</label>
                <a href="#" class="forget text-decoration-none small fw-medium">ភ្លេចពាក្យសំងាត់?</a>
              </div>
              <div class="position-relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  class="form-control form-control-lg bg-surface password-input"
                  required
                />
                <button
                  type="button"
                  class="btn password-toggle"
                  :aria-label="showPassword ? 'Hide password' : 'Show password'"
                  @click="showPassword = !showPassword"
                >
                  <i :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
                </button>
              </div>
            </div>
            <button type="submit" class="btn btn-sign btn-lg w-100 fw-semibold mb-4">ចូលគណនី</button>
            
            <div class="position-relative mb-4 text-center">
              <hr class="text-muted opacity-25" />
              <span class="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">ឬចូលជាមួយ</span>
            </div>
            
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="#" @click.prevent="handleLogin" class="nav-link signUp w-100 d-flex align-items-center justify-content-center py-2">
                <i class="fa-brands fa-google me-2"></i> Google
              </a>
              <a href="#" @click.prevent="handleLogin" class="nav-link signUp w-100 d-flex align-items-center justify-content-center py-2">
                <i class="fa-brands fa-github me-2"></i> GitHub
              </a>
            </div>

            <!-- Sign-up button link -->
            <div class="text-center mt-4 mb-2">
              <span class="text-secondary-custom small">មិនទាន់មានគណនីមែនទេ?</span>
            </div>
            <router-link to="/signup" class="btn btn-outline-primary btn-lg w-100 fw-semibold">
              បង្កើតគណនីថ្មី
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const router = useRouter()

function handleLogin() {
  router.push('/home')
}
</script>

<style scoped>
.password-input {
  padding-right: 3rem;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  color: #6c757d;
  border: 0;
  padding: 0.25rem;
  line-height: 1;
}

.password-toggle:hover,
.password-toggle:focus {
  color: var(--bs-primary);
}
</style>
