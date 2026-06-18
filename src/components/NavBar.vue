<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">
        <img
          src="../assets/image/logoweb.png"
          alt="NextGen Logo"
          style="height: 45px; width: auto; object-fit: contain"
        />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">ទំព័រដើម</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/courses">វគ្គសិក្សា</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/instructors">គ្រូបង្រៀន</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq">សំណួរសួរញឹកញាប់</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">ទំនាក់ទំនង</router-link>
          </li>
        </ul>

        <div class="d-flex align-items-center">
          <div class="dropdown">
            <button
              class="profile-pill dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src=".././assets/image/Nita.jpeg"
                alt="Avatar"
                class="profile-avatar"
              />
              <span class="profile-name">តាន់ នីតា</span>
              <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </button>
            <ul class="dropdown-menu profile-dropdown dropdown-menu-end">
              <li>
                <div class="dd-header">
                  <div class="dd-header-name">តាន់ នីតា</div>
                  <div class="dd-header-email">tannita@nextgenacademy.io</div>
                </div>
              </li>
              <li>
                <router-link class="dropdown-item" to="/profile">
                  <i class="fa-solid fa-user" aria-hidden="true"></i> ប្រូហ្វាល់
                </router-link>
              </li>
              <!-- <li>
                <a class="dropdown-item" href="#">
                  <i class="fa-solid fa-book" aria-hidden="true"></i> My courses
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="fa-solid fa-gear" aria-hidden="true"></i> Settings
                </a>
              </li> -->
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button type="button" class="dropdown-item logout" data-bs-toggle="modal" data-bs-target="#logoutModal">
                  <i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i> ចាកចេញ
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Logout Confirmation Modal -->
  <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content logout-modal-content">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title" id="logoutModalLabel">បញ្ជាក់ការចេញ</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center py-4 px-5">
          <div class="logout-modal-icon mb-3">
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <p class="logout-modal-text mb-4">
            រាល់ការផ្លាស់ប្តូរដែលមិនបានរក្សាទុកអាចនឹងត្រូវបាត់បង់។
          </p>
        </div>
        <div class="modal-footer border-0 px-5 pb-4 pt-0 justify-content-between">
          <button type="button" class="btn btn-outline-secondary btn-cancel" data-bs-dismiss="modal">បោះបង់</button>
          <button type="button" class="btn btn-danger btn-confirm" @click="confirmLogout">ចាកចេញ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function confirmLogout() {
  const modalElement = document.getElementById('logoutModal')
  if (window.bootstrap && modalElement) {
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement) || new window.bootstrap.Modal(modalElement)
    modalInstance.hide()
  }
  router.push('/login')
}
</script>

<style scoped>
.logout-modal-content {
  border: none;
  border-radius: 24px;
  box-shadow: 0 24px 68px rgba(15, 23, 42, 0.18);
  overflow: hidden;
}

.logout-modal-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(220, 38, 38, 0.12);
  color: #dc2626;
  font-size: 1.45rem;
}

.logout-modal-text {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.75;
  margin: 0 auto;
  max-width: 320px;
}

.btn-cancel,
.btn-confirm {
  min-width: 110px;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  font-weight: 600;
}

.btn-cancel {
  color: #4b5563;
  border-color: #d1d5db;
}

.btn-confirm {
  box-shadow: 0 10px 24px rgba(220, 38, 38, 0.18);
}

.modal-backdrop.show {
  background: rgba(15, 23, 42, 0.5);
}
</style>
