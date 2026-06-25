# Figma Import Kit - NextGenAcademy

ឯកសារនេះរៀបចំ UI ទាំងអស់ពី Vue app សម្រាប់យកចូល Figma។

## Screenshots

Screenshots រក្សាទុកនៅ៖

```text
figma-export/screenshots/
```

| File | Page | Route |
| --- | --- | --- |
| `01-login.png` | Login | `#/login` |
| `02-home.png` | Home | `#/home` |
| `03-courses.png` | Courses | `#/courses` |
| `04-course-detail.png` | Course Detail | `#/course-enroll/vue` |
| `05-instructors.png` | Instructors | `#/instructors` |
| `06-faq.png` | FAQ | `#/faq` |
| `07-contact.png` | Contact | `#/contact` |
| `08-signup.png` | Sign Up | `#/signup` |
| `09-profile.png` | Profile | `#/profile` |

## Import PNG ចូល Figma

1. បើក Figma file ថ្មី។
2. Drag files ពី `figma-export/screenshots/` ចូល canvas។
3. ជ្រើសរូបមួយៗ ហើយចុច `Frame selection` ដើម្បីបំលែងជា frame។
4. Rename frame តាមឈ្មោះ page ដូចជា `Login`, `Home`, `Courses`។

វិធីនេះលឿន និងស្រួលសម្រាប់ presentation/mockup ប៉ុន្តែ layers នៅក្នុងរូបភាពមិនអាច edit ដាច់ៗបានទេ។

## Import ជា Editable Layers

បើចង់បាន UI ជា Figma layers ដែល edit បាន៖

1. Run app locally:

```bash
npm run dev
```

2. បើក Figma ហើយ install/use plugin `html.to.design`។
3. Import URL នីមួយៗពី local server, ឧទាហរណ៍៖

```text
http://localhost:5173/#/login
http://localhost:5173/#/home
http://localhost:5173/#/courses
http://localhost:5173/#/course-enroll/vue
http://localhost:5173/#/instructors
http://localhost:5173/#/faq
http://localhost:5173/#/contact
http://localhost:5173/#/signup
http://localhost:5173/#/profile
```

សម្រាប់ Figma layers ស្អាតជាងនេះ សូមប្រាកដថា browser/local app អាច load CDN assets ក្នុង `index.html` បាន ដូចជា Bootstrap, Font Awesome, Tabler Icons, Google Fonts, AOS និង Lottie។

## Verified Export

Screenshots ត្រូវបាន export ពី production preview នៅទំហំ desktop:

- `01-login.png`: 1440 x 1400
- `02-home.png` ដល់ `09-profile.png`: 1440 x 2000

