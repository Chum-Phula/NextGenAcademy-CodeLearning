<template>
  <div class="container-fluid p-0">
    <div class="row g-0 min-vh-100">
      <!-- Welcome Column (Hidden on mobile/tablet) -->
      <div class="col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center p-5 position-relative overflow-hidden" style="background: linear-gradient(135deg, var(--primary-900), var(--primary-600));">
        
        <!-- Decorative Background Elements -->
        <div class="position-absolute rounded-circle" style="width: 400px; height: 400px; background: rgba(255,255,255,0.05); top: -100px; right: -100px; filter: blur(40px);"></div>
        <div class="position-absolute rounded-circle" style="width: 300px; height: 300px; background: rgba(255,255,255,0.05); bottom: -50px; left: -50px; filter: blur(30px);"></div>

        <div class="mx-auto position-relative z-1" style="max-width: 500px">
          <router-link to="/home" class="d-inline-block mb-5 text-white text-decoration-none">
             <h3 class="fw-bold d-flex align-items-center gap-2"><i class="fa-solid fa-graduation-cap"></i> NextGenAcademy</h3>
          </router-link>

          <h1 class="display-5 fw-bold mb-3 text-white">ចូលរួមជាមួយពួកយើងថ្ងៃនេះ</h1>
          <p class="fs-5 mb-5 text-white opacity-75" style="line-height: 1.6;">
            បង្កើតគណនីឥតគិតថ្លៃ ហើយចាប់ផ្តើមរៀនបច្ចេកវិទ្យាចុងក្រោយបំផុតជាមួយវគ្គសិក្សាដែលដឹកនាំដោយអ្នកជំនាញ និងភ្ជាប់ខ្លួនទៅកាន់សហគមន៍អ្នកសិក្សាជាង 50,000 នាក់នៅទូទាំងពិភពលោក។
          </p>
          <div class="row g-4">
            <div class="col-sm-6">
              <div class="glass-card p-4 h-100 rounded-4">
                <div class="d-flex align-items-center justify-content-center mb-3 rounded-circle bg-white bg-opacity-25" style="width: 50px; height: 50px;">
                  <i class="fa-solid fa-layer-group text-white fs-4"></i>
                </div>
                <h6 class="text-uppercase text-white opacity-75 fw-bold mb-1" style="font-size: 0.8rem; letter-spacing: 1px;">វគ្គសិក្សា</h6>
                <h2 class="fw-bold mb-0 text-white">450+</h2>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="glass-card p-4 h-100 rounded-4">
                <div class="d-flex align-items-center justify-content-center mb-3 rounded-circle bg-white bg-opacity-25" style="width: 50px; height: 50px;">
                  <i class="fa-solid fa-users text-white fs-4"></i>
                </div>
                <h6 class="text-uppercase text-white opacity-75 fw-bold mb-1" style="font-size: 0.8rem; letter-spacing: 1px;">សិស្ស</h6>
                <h2 class="fw-bold mb-0 text-white">50K+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sign-up form column -->
      <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4 p-md-5 bg-white">
        <div class="w-100" style="max-width: 440px;">
          <form @submit.prevent="handleSignUp" class="fade-in-scale">
            <!-- Show Welcome on Mobile only -->
            <div class="text-center mb-5 d-lg-none">
              <div class="d-flex justify-content-center mb-3">
                 <div class="p-3 bg-primary bg-opacity-10 rounded-circle text-primary">
                    <i class="fa-solid fa-graduation-cap fs-2"></i>
                 </div>
              </div>
              <h2 class="fw-bold mb-2">ចូលរួមជាមួយពួកយើង</h2>
              <p class="text-secondary-custom">បង្កើតគណនីដើម្បីចាប់ផ្តើមការសិក្សារបស់អ្នក។</p>
            </div>

            <h2 class="fw-bold mb-1 d-none d-lg-block text-dark">បង្កើតគណនីថ្មី</h2>
            <p class="text-secondary mb-4 d-none d-lg-block">សូមបំពេញព័ត៌មានលម្អិតរបស់អ្នកដើម្បីចុះឈ្មោះ</p>

            <div class="mb-3">
              <label class="form-label fw-medium text-dark">ឈ្មោះពេញ</label>
              <input v-model="fullName" type="text" autocomplete="name" placeholder="តាន់ នីតា" class="form-control form-control-lg custom-input" required />
            </div>

            <div class="mb-3">
              <label class="form-label fw-medium text-dark">អាសយដ្ឋានអ៊ីមែល</label>
              <input v-model="email" type="email" autocomplete="email" placeholder="username@example.com" class="form-control form-control-lg custom-input" required />
            </div>

            <div class="mb-3">
              <label class="form-label fw-medium text-dark">ពាក្យសំងាត់</label>
              <div class="position-relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  autocomplete="new-password"
                  placeholder="••••••••"
                  class="form-control form-control-lg custom-input password-input"
                  minlength="8"
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

            <div class="mb-2">
              <label class="form-label fw-medium text-dark">បញ្ជាក់ពាក្យសំងាត់</label>
              <div class="position-relative">
                <input
                  v-model="confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  autocomplete="new-password"
                  placeholder="••••••••"
                  class="form-control form-control-lg custom-input password-input"
                  required
                />
                <button
                  type="button"
                  class="btn password-toggle"
                  :aria-label="showConfirmPassword ? 'Hide password' : 'Show password'"
                  @click="showConfirmPassword = !showConfirmPassword"
                >
                  <i :class="showConfirmPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
                </button>
              </div>
            </div>
            <p v-if="passwordError" class="text-danger small mb-2">{{ passwordError }}</p>

            <div class="form-check mb-4 mt-3">
              <input v-model="agreeTerms" type="checkbox" class="form-check-input custom-checkbox" id="agreeTerms" required />
              <label class="form-check-label text-secondary small" for="agreeTerms">
                ខ្ញុំយល់ព្រមតាម
                <a href="#" class="text-decoration-none fw-semibold" style="color: var(--primary-600)">លក្ខខណ្ឌប្រើប្រាស់</a>
                និង
                <a href="#" class="text-decoration-none fw-semibold" style="color: var(--primary-600)">គោលការណ៍ឯកជនភាព</a>
              </label>
            </div>

            <button type="submit" class="btn btn-brand-solid btn-lg w-100 fw-bold mb-4 shadow-sm" style="padding: 0.8rem;">បង្កើតគណនី</button>

            <div class="position-relative mb-4 text-center">
              <hr class="text-muted opacity-25" />
              <span class="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small fw-medium">ឬចុះឈ្មោះជាមួយ</span>
            </div>

            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
              <a href="#" @click.prevent="handleSignUp" class="btn social-btn w-100 d-flex align-items-center justify-content-center py-2.5">
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" style="width: 20px; height: 20px;" class="me-2"/> Google
              </a>
              <a href="#" @click.prevent="handleSignUp" class="btn social-btn w-100 d-flex align-items-center justify-content-center py-2.5">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width: 20px; height: 20px;" class="me-2"/> GitHub
              </a>
            </div>

            <div class="text-center mt-3">
              <span class="text-secondary">មានគណនីរួចហើយ?</span>
              <router-link to="/login" class="text-decoration-none fw-bold ms-2" style="color: var(--primary-600)">ចូលគណនី</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const agreeTerms = ref(false)
const passwordError = ref('')
const router = useRouter()

function handleSignUp() {
  if (password.value !== confirmPassword.value) {
    passwordError.value = 'ពាក្យសំងាត់ និងការបញ្ជាក់ពាក្យសំងាត់មិនត្រូវគ្នា'
    return
  }
  passwordError.value = ''
  router.push('/home')
}
</script>

<style scoped>
.custom-input {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.custom-input:focus {
  background-color: #ffffff;
  border-color: var(--primary-400);
  box-shadow: 0 0 0 4px var(--primary-50);
}

.password-input {
  padding-right: 3.5rem;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  color: #94a3b8;
  border: 0;
  padding: 0.5rem;
  transition: color 0.2s ease;
}

.password-toggle:hover,
.password-toggle:focus {
  color: var(--primary-600);
  background: transparent;
}

.social-btn {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  color: #334155;
  font-weight: 500;
  border-radius: 10px;
  transition: all 0.2s ease;
}

.social-btn:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.12);
}

.custom-checkbox {
  width: 1.1em;
  height: 1.1em;
  margin-top: 0.2em;
  cursor: pointer;
}
.custom-checkbox:checked {
  background-color: var(--primary-600);
  border-color: var(--primary-600);
}
</style>
