<template>
  <footer>
    <div class="container">
      <div class="row g-4 mb-4">
        <div class="col-lg-4">
          <h5 class="fw-bold mb-3" style="color: var(--primary-600)">NextGenAcademy</h5>
          <p class="text-secondary-custom small mb-3">
           អភិវឌ្ឍជំនាញ បង្កើនចំណេះដឹង និងត្រៀមខ្លួនសម្រាប់អាជីពបច្ចេកវិទ្យានាពេលអនាគត។
          </p>
          <div class="d-flex gap-3 fs-5">
            <a href="#"><i class="fa-brands fa-globe"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-discord"></i></a>
            <a href="#"><i class="fa-regular fa-envelope"></i></a>
          </div>
        </div>
        <div class="col-md-3 col-6 col-lg-2 offset-lg-1">
          <h6 class="fw-bold mb-3 small text-uppercase tracking-wider">តំណរហ័ស</h6>
          <ul class="list-unstyled d-flex flex-column gap-2 small">
            <li><router-link to="/home">ទំព័រដើម</router-link></li>
            <li><router-link to="/courses">វគ្គសិក្សា</router-link></li>
            <li><router-link to="/faq">សំណួរដែលគេសួរញឹកញាប់</router-link></li>
          </ul>
        </div>
        <div class="col-md-3 col-6 col-lg-2">
          <h6 class="fw-bold mb-3 small text-uppercase tracking-wider">វគ្គសិក្សា</h6>
          <ul class="list-unstyled d-flex flex-column gap-2 small">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Development</a></li>
            <li><a href="#">Cloud Computing</a></li>
            <li><a href="#">Cybersecurity</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-lg-3">
          <h6 class="fw-bold mb-3 small text-uppercase tracking-wider">ទំនាក់ទំនង</h6>
          <ul class="list-unstyled d-flex flex-column gap-2 small text-secondary-custom">
            <li><i class="fa-solid fa-location-dot me-2 text-muted"></i> ន័រតុន , ភ្នំពេញ</li>
            <li><i class="fa-solid fa-phone me-2 text-muted"></i> +(885) 97-000-1234</li>
            <li><i class="fa-solid fa-envelope me-2 text-muted"></i> hello@nextgenacademy.com</li>
          </ul>
        </div>
      </div>
      <div
        class="border-top pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary-custom"
      >
        <p class="mb-2 mb-md-0">&copy; 2026 NextGenAcademy. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        <div class="d-flex gap-4">
          <a href="#">គោលការណ៍ឯកជនភាព</a>
          <a href="#">លក្ខខណ្ឌនៃសេវាកម្ម</a>
        </div>
      </div>
    </div>
  </footer>
</template>
