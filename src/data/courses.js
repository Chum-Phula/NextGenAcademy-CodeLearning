// Shared course catalogue data used by the Courses list and the
// dynamic Course Detail page.

import vueImg from '../assets/image/courses/vue js.jpeg'
import flutterImg from '../assets/image/courses/Flutter.jpeg'
import fastapiImg from '../assets/image/courses/FastAPI.jpeg'
import bootstrapImg from '../assets/image/courses/bootstrap.jpeg'
import laravelImg from '../assets/image/courses/laravel.jpeg'
import gitImg from '../assets/image/courses/git and github.jpeg'
import htmlImg from '../assets/image/courses/httml.jpg'
import cssImg from '../assets/image/courses/css.png'
import jsImg from '../assets/image/courses/Javascript.jpeg'
import reactImg from '../assets/image/home/react js.jpeg'
import swiftImg from '../assets/image/home/Swift.jpeg'
import nodeImg from '../assets/image/home/Node JS.jpeg'
import postgresImg from '../assets/image/courses/postgresql.jpg'
import mysqlImg from '../assets/image/courses/mySQL.jpeg'

export const courses = [
  {
    slug: 'vue',
    title: 'Vue.js 3: The Progressive Framework',
    detailTitle: 'Vue.js 3 Ecosystem',
    image: vueImg,
    badge: 'Web Development',
    badgeClass: 'badge-web',
    rating: 4.9,
    instructor: 'David Chen',
    description:
      'បង្កើតកម្មវិធីខាងមុខទំនើបដែលអាចធ្វើមាត្រដ្ឋានបានជាមួយនឹងក្របខ័ណ្ឌ JavaScript ដែលកំពុងរីកចម្រើន។',
    hours: '12 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to VUE',
    episodes: [
      { url: 'https://www.youtube.com/embed/Kt2E8nblvXU', title: 'Learn Vue.js – Tutorial for Beginners', duration: '98 min' },
      { url: 'https://www.youtube.com/embed/nhBVL41-_Cw', title: 'Vue.js Explained in 100 Seconds', duration: '2 min' },
      { url: 'https://www.youtube.com/embed/YrxBCBibVo0', title: 'Vue JS 3 Tutorial for Beginners #1 - Introduction', duration: '13 min' },
      { url: 'https://www.youtube.com/embed/WXCu4ddEiHs', title: 'Vue 3 Tutorial for Beginners (Part 1) - Learn Vue from Scratch | 2026', duration: '13 min' },
      { url: 'https://www.youtube.com/embed/VeNfHj6MhgA', title: 'Vue.js Crash Course', duration: '176 min' }
    ]
  },
  {
    slug: 'flutter',
    title: 'Flutter for Beginners',
    detailTitle: 'Flutter for Beginners',
    image: flutterImg,
    badge: 'Mobile',
    badgeClass: 'badge-mobile',
    rating: 4.8,
    instructor: 'Sarah Jenkins',
    description:
      'បង្កើតកម្មវិធីដ៏ស្រស់ស្អាត ដែលបានបង្កើតឡើងដោយ native compilation សម្រាប់ mobile, web, និង desktop ពី codebase តែមួយ។',
    hours: '18 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Getting Started with Flutter',
    episodes: [
      { url: 'https://www.youtube.com/embed/1ukSR1GRtMU?si=G86Xxfr1f3CRTEtp', title: 'Flutter Tutorial for Beginners #1 - Intro & Setup', duration: '12 min' },
      { url: 'https://www.youtube.com/embed/bKueYVtV0eA?si=k41coi_hlAHaetds', title: 'Flutter Tutorial for Beginners #2 - Flutter Overview', duration: '4 min' },
      { url: 'https://www.youtube.com/embed/LtlsX_lCfK4?si=75k40xrPLVXI4nR4', title: 'New Flutter Masterclass Course!', duration: '3 min' },
      { url: 'https://www.youtube.com/embed/FLQ-Vhw1NYQ?si=k1muJtbXFqr33PI4', title: 'Flutter Tutorial for Beginners #3 - Dart Primer', duration: '27 min' },
      { url: 'https://www.youtube.com/embed/TSIhiZ5jRB0?si=69gTNCHuGwc3GgnE', title: 'Flutter Tutorial for Beginners #4 - Creating a Flutter App', duration: '13 min' }
    ]
  },
  {
    slug: 'fastapi',
    title: 'High-Performance APIs with FastAPI',
    detailTitle: 'FastAPI for High-Performance APIs',
    image: fastapiImg,
    badge: 'Backend',
    badgeClass: 'badge-backend',
    rating: 4.7,
    instructor: 'Michael Ross',
    description:
      'រៀនបង្កើត API ដែលមានប្រសិទ្ធភាពខ្ពស់ដោយប្រើ Python និង FastAPI ដែលជាក្របខ័ណ្ឌទំនើប និងមានល្បឿនលឿនសម្រាប់ការអភិវឌ្ឍ Web API។',
    hours: '15 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to FASTAPI',
    episodes: [
      { url: 'https://www.youtube.com/embed/iWS9ogMPOI0', title: 'Python FastAPI Tutorial: Build a REST API in 15 Minutes', duration: '15 min' },
      { url: 'https://www.youtube.com/embed/umbU5Pk03CM', title: 'FastAPI explained in 2 minutes', duration: '2 min' },
      { url: 'https://www.youtube.com/embed/tLKKmouUams', title: 'FastAPI Course for Beginners', duration: '64 min' },
      { url: 'https://www.youtube.com/embed/SR5NYCdzKkc', title: 'Learn Fast API With This ONE Project', duration: '125 min' },
      { url: 'https://www.youtube.com/embed/nWWPlEO0he8', title: 'FastAPI Crash Course 2025: Python Tutorial for Absolute Beginners', duration: '42 min' }
    ]
  },
  {
    slug: 'bootstrap',
    title: 'Responsive Design with Bootstrap 5',
    detailTitle: 'Advanced Bootstrap 5 Techniques',
    image: bootstrapImg,
    badge: 'Web Frontend',
    badgeClass: 'badge-web',
    rating: 4.9,
    instructor: 'Elena Rodriguez',
    description:
      "រៀនរចនា និងប្ដូរតាមបំណងគេហទំព័របែប Mobile-First ដែលមានការឆ្លើយតប (Responsive) យ៉ាងរហ័ស ដោយប្រើ Bootstrap ដែលជាប្រអប់ឧបករណ៍ Front-end ដ៏ពេញនិយមបំផុតមួយ។",
    hours: '20 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to BOOTSTRAP',
    episodes: [
      { url: 'https://www.youtube.com/embed/eow125xV5-c', title: 'Learn Bootstrap in less than 20 minutes - Responsive Website Tutorial', duration: '18 min' },
      { url: 'https://www.youtube.com/embed/MyCvTSjkD74', title: 'What is Bootstrap? / Beginner CSS Framework', duration: '8 min' },
      { url: 'https://www.youtube.com/embed/yalxT0PEx8c', title: 'Learn Bootstrap in 5 minutes | Responsive Website Tutorial', duration: '5 min' },
      { url: 'https://www.youtube.com/embed/Jyvffr3aCp0', title: 'Bootstrap 5 Crash Course', duration: '71 min' },
      { url: 'https://www.youtube.com/embed/g9b4LjYrsUQ', title: 'Learn How to Code Using Bootstrap 5 Tutorial 2023!', duration: '19 min' }
    ]
  },
  {
    slug: 'laravel',
    title: 'Laravel for Web Artisans',
    detailTitle: 'Laravel Enterprise Patterns',
    image: laravelImg,
    badge: 'backend',
    badgeClass: 'badge-web',
    rating: 4.6,
    instructor: "Liam O'Connell",
    description:
      'ស្វែងយល់ និងស្ទាត់ជំនាញលើ Framework PHP ដ៏មានប្រសិទ្ធភាពសម្រាប់ការអភិវឌ្ឍគេហទំព័រ។ បង្កើត Web Applications ដែលមានភាពរឹងមាំ និងងាយស្រួលថែទាំ ដោយប្រើប្រាស់វាក្យសម្ពន្ធដ៏សាមញ្ញ និងទំនើប។',
    hours: '10 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to LARAVEL',
    episodes: [
      { url: 'https://www.youtube.com/embed/cDEVWbz2PpQ', title: 'Laravel Tutorial For Beginners (Simple User CRUD App)', duration: '76 min' },
      { url: 'https://www.youtube.com/embed/rIfdg_Ot-LI', title: 'Laravel in 100 Seconds', duration: '2 min' },
      { url: 'https://www.youtube.com/embed/DKnn8TlJ4MA', title: 'Laravel Tutorial for Beginners #1 - Introduction & Setup', duration: '15 min' },
      { url: 'https://www.youtube.com/embed/ImtZ5yENzgE', title: 'Laravel PHP Framework Tutorial - Full Course for Beginners (2019)', duration: '265 min' },
      { url: 'https://www.youtube.com/embed/MOLZOXqaomM', title: 'Learn Laravel from Scratch [FULL BOOTCAMP COURSE]', duration: '123 min' }
    ]
  },
  {
    slug: 'git',
    title: 'Git & GitHub for Developers',
    detailTitle: 'Advanced Git Workflows',
    image: gitImg,
    badge: 'Code Manage',
    badgeClass: 'badge-backend',
    rating: 4.8,
    instructor: 'Marcus Thorne',
    description:
      'ស្វែងយល់ពីជំនាញការគ្រប់គ្រងកំណត់ត្រា ដើម្បីរួមធ្វើការនៅលើគម្រោង និងគ្រប់គ្រង codebase របស់អ្នក ដោយប្រើ Git និង GitHub។',
    hours: '14 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to GIT',
    episodes: [
      { url: 'https://www.youtube.com/embed/8JJ101D3knE', title: 'Git Tutorial for Beginners: Learn Git in 1 Hour', duration: '69 min' },
      { url: 'https://www.youtube.com/embed/mJ-qvsxPHpY', title: 'Git Tutorial For Dummies', duration: '19 min' },
      { url: 'https://www.youtube.com/embed/tRZGeaHPoaw', title: 'Git and GitHub Tutorial for Beginners', duration: '46 min' },
      { url: 'https://www.youtube.com/embed/e9lnsKot_SQ', title: 'How Git Works: Explained in 4 Minutes', duration: '4 min' },
      { url: 'https://www.youtube.com/embed/hwP7WQkmECE', title: 'Git Explained in 100 Seconds', duration: '1 min' }
    ]
  },
  {
    slug: 'html',
    title: 'HTML Fundamentals',
    detailTitle: 'HTML Fundamentals',
    image: htmlImg,
    badge: 'Web Development',
    badgeClass: 'badge-web',
    rating: 4.9,
    instructor: 'Sarah Jenkins',
    description:
      'ចំណុចចាប់ផ្តើមដ៏សំខាន់សម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ។ ស្វែងយល់ពីរចនាសម្ព័ន្ធ និងអត្ថន័យនៃគេហទំព័រ។',
    hours: '8 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to HTML',
    episodes: [
      { url: 'https://www.youtube.com/embed/ok-plXXHlWw', title: 'HTML in 100 Seconds', duration: '2 min' },
      { url: 'https://www.youtube.com/embed/UB1O30fR-EE', title: 'HTML Crash Course For Absolute Beginners', duration: '60 min' },
      { url: 'https://www.youtube.com/embed/pQN-pnXPaVg', title: 'HTML Full Course - Build a Website Tutorial', duration: '120 min' },
      { url: 'https://www.youtube.com/embed/aRVtoK0zJLM', title: 'HTML5 Semantic Tags', duration: '15 min' },
      { url: 'https://www.youtube.com/embed/fNcJuPIZ2EQ', title: 'HTML Forms Tutorial', duration: '25 min' }
    ]
  },
  {
    slug: 'css',
    title: 'CSS Mastery',
    detailTitle: 'CSS Mastery',
    image: cssImg,
    badge: 'Web Development',
    badgeClass: 'badge-web',
    rating: 4.8,
    instructor: 'David Chen',
    description:
      'រៀនបង្កើតគេហទំព័រដែលមានការរចនាស្រស់ស្អាត និងអាចឆ្លើយតប (Responsive) បានល្អ។ ស្វែងយល់អំពី Selectors, Flexbox, CSS Grid និងបច្ចេកទេស CSS ទំនើប ដើម្បីបង្កើតបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ល្អប្រសើរ។',
    hours: '14 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to CSS',
    episodes: [
      { url: 'https://www.youtube.com/embed/OEV8gMkCHXQ', title: 'CSS in 100 Seconds', duration: '2 min' },
      { url: 'https://www.youtube.com/embed/1Rs2ND1ryYc', title: 'CSS Tutorial - Zero to Hero (Complete Course)', duration: '360 min' },
      { url: 'https://www.youtube.com/embed/fYq5JZgSksY', title: 'Flexbox Tutorial', duration: '45 min' },
      { url: 'https://www.youtube.com/embed/jV8B24rSN5o', title: 'CSS Grid Tutorial', duration: '50 min' },
      { url: 'https://www.youtube.com/embed/YszONjKpgg4', title: 'CSS Animations', duration: '30 min' }
    ]
  },
  {
    slug: 'js',
    title: 'JavaScript Essentials',
    detailTitle: 'JavaScript Essentials',
    image: jsImg,
    badge: 'Web Development',
    badgeClass: 'badge-web',
    rating: 4.9,
    instructor: 'Alex Rivers',
    description:
      'ធ្វើឱ្យគេហទំព័ររបស់អ្នកមានជីវិត។ ស្វែងយល់ពីមូលដ្ឋានគ្រឹះនៃភាសាសរសេរកម្មវិធីពេញនិយមបំផុតសម្រាប់គេហទំព័រ។',
    hours: '20 Hours',
    level: 'កម្រិតដំបូង',
    moduleTitle: 'Introduction to JAVASCRIPT',
    episodes: [
      { url: 'https://www.youtube.com/embed/DHjqpvDnNGE', title: 'JavaScript in 100 Seconds', duration: '2 min' },
      { url: 'https://www.youtube.com/embed/W6NZfCO5SIk', title: 'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour', duration: '60 min' },
      { url: 'https://www.youtube.com/embed/jS4aFq5-91M', title: 'JavaScript Full Course', duration: '420 min' },
      { url: 'https://www.youtube.com/embed/y17RuWUpclg', title: 'JavaScript DOM Manipulation', duration: '45 min' },
      { url: 'https://www.youtube.com/embed/YxWeI4bC5rM', title: 'Async JavaScript & Fetch API', duration: '35 min' }
    ]
  },
  {
    slug: 'react',
    title: 'Master Modern React: From Basics to Advanced',
    detailTitle: 'Master Modern React',
    image: reactImg,
    badge: 'Web Development',
    badgeClass: 'badge-web',
    rating: 4.9,
    instructor: 'David Chen',
    description:
      'សិក្សាអំពី React យ៉ាងស៊ីជម្រៅ ចាប់ពី Components និង Hooks ដល់ការគ្រប់គ្រង State និង Server Components សម្រាប់ការអភិវឌ្ឍកម្មវិធីទំនើប។',
    hours: '24 Hours',
    level: 'កម្រិតមធ្យម',
    moduleTitle: 'Introduction to REACT',
    episodes: [
      { url: 'https://www.youtube.com/embed/SqcY0GlETPk', title: 'React Tutorial for Beginners', duration: '80 min' },
      { url: 'https://www.youtube.com/embed/s2skans2dP4', title: 'React JS Explained In 10 Minutes', duration: '10 min' },
      { url: 'https://www.youtube.com/embed/hn80mWvP-9g', title: 'React tutorial for beginners', duration: '20 min' },
      { url: 'https://www.youtube.com/embed/TtPXvEcE11E', title: 'React Tutorial Full Course - Beginner to Pro (React 19, 2025)', duration: '692 min' },
      { url: 'https://www.youtube.com/embed/OA5JAmTcTz4', title: 'React JS Tutorial For Beginners 2025', duration: '20 min' }
    ]
  },
  {
    slug: 'swift',
    title: 'iOS App Development with Swift & SwiftUI',
    detailTitle: 'iOS App Development with Swift & SwiftUI',
    image: swiftImg,
    badge: 'Mobile',
    badgeClass: 'badge-mobile',
    rating: 4.8,
    instructor: 'Sarah Jenkins',
    description:
      'បង្កើតកម្មវិធីដ៏ស្រស់ស្អាត វិចារណញាណ និងដំណើរការខ្ពស់សម្រាប់ iPhone, iPad និងគ្រប់វេទិកា Apple ។',
    hours: '32 Hours',
    level: 'កម្រិតមធ្យម',
    moduleTitle: 'Introduction to SWIFT',
    episodes: [
      { url: 'https://www.youtube.com/embed/nAchMctX4YA', title: 'Swift in 100 Seconds', duration: '2 min' },
      { url: 'https://www.youtube.com/embed/LADXkBN6jn0', title: 'Want to become an iOS Developer in 2025? | Roadmap', duration: '5 min' },
      { url: 'https://www.youtube.com/embed/-VC3hIEL7eQ', title: 'SwiftUI Course for Beginners – Create an iOS App from Scratch', duration: '236 min' },
      { url: 'https://www.youtube.com/embed/yr2Ccr7rUNM', title: 'iOS Dev Vs. Web Dev — Thoughts After Building First iOS App', duration: '3 min' },
      { url: 'https://www.youtube.com/embed/ghEkisvF0Bo', title: 'Welcome SwiftUI', duration: '5 min' }
    ]
  },
  {
    slug: 'node',
    title: 'Node.js Microservices: Architecture & Scaling',
    detailTitle: 'Node.js Microservices: Architecture & Scaling',
    image: nodeImg,
    badge: 'Backend',
    badgeClass: 'badge-backend',
    rating: 4.9,
    instructor: 'Mark Thompson',
    description:
      'រៀនរចនា បង្កើត និងដាក់ពង្រាយសេវាកម្មផ្នែកខាងក្រោយដែលអាចធ្វើមាត្រដ្ឋានបានដោយប្រើ Node.js និងស្ថាបត្យកម្ម microservices ។',
    hours: '28 Hours',
    level: 'កម្រិតខ្ពស់',
    moduleTitle: 'Introduction to NODE',
    episodes: [
      { url: 'https://www.youtube.com/embed/TlB_eWDSMt4', title: 'Node.js Tutorial for Beginners: Learn Node in 1 Hour', duration: '78 min' },
      { url: 'https://www.youtube.com/embed/ENrzD9HAZK4', title: "Node.js Ultimate Beginner's Guide in 7 Easy Steps", duration: '16 min' },
      { url: 'https://www.youtube.com/embed/KOutPbKc9UM', title: 'Intro to Backend Web Development – Node.js & Express Tutorial', duration: '146 min' },
      { url: 'https://www.youtube.com/embed/P-fDVxjSXEw', title: 'What is Node.js? JavaScript Back-End Tutorial', duration: '8 min' },
      { url: 'https://www.youtube.com/embed/FPJzYFgexJA', title: 'Node JS Tutorial for Beginners 2026', duration: '136 min' }
    ]
  },
  {
  slug: 'postgresql',
  title: 'PostgreSQL Database: From Beginner to Advanced',
  detailTitle: 'PostgreSQL Database: Complete Guide',
  image: postgresImg,
  badge: 'Database',
  badgeClass: 'badge-database',
  rating: 4.9,
  instructor: 'David Miller',
  description:
    'រៀនពីរបៀបប្រើ PostgreSQL ចាប់ពីមូលដ្ឋានគ្រឹះ រហូតដល់ការរចនា Database, SQL Queries, Relationships, Indexes និង Performance Optimization សម្រាប់ការអភិវឌ្ឍន៍ Web Application ។',
  hours: '30 Hours',
  level: 'មធ្យម',
  moduleTitle: 'Introduction to PostgreSQL',
  episodes: [
    {
      url: 'https://www.youtube.com/embed/qw--VYLpxG4',
      title: 'PostgreSQL Tutorial for Beginners',
      duration: '90 min'
    },
    {
      url: 'https://www.youtube.com/embed/SpfIwlAYaKk',
      title: 'Learn PostgreSQL in One Video',
      duration: '120 min'
    },
    {
      url: 'https://www.youtube.com/embed/xaWlS9HtWYw',
      title: 'PostgreSQL Crash Course',
      duration: '60 min'
    },
    {
      url: 'https://www.youtube.com/embed/WFT5MaZN6gQ',
      title: 'PostgreSQL Full Course for Beginners',
      duration: '180 min'
    },
    {
      url: 'https://www.youtube.com/embed/VXQmlUQJ1h4',
      title: 'Advanced PostgreSQL Tutorial',
      duration: '95 min'
    }
  ]
},
{
  slug: 'mysql',
  title: 'MySQL Database: SQL & Relational Design',
  detailTitle: 'MySQL Database: Complete Guide',
  image: mysqlImg,
  badge: 'Database',
  badgeClass: 'badge-database',
  rating: 4.8,
  instructor: 'David Miller',
  description:
    'រៀន MySQL ចាប់ពី SQL មូលដ្ឋាន រហូតដល់ការរចនាតារាង, Relationships, Joins, Indexes, Stored Procedures និងការគ្រប់គ្រង Database សម្រាប់ Web Application ។',
  hours: '26 Hours',
  level: 'កម្រិតដំបូង',
  moduleTitle: 'Introduction to MySQL',
  episodes: [
    {
      url: 'https://www.youtube.com/embed/HXV3zeQKqGY',
      title: 'SQL Tutorial - Full Database Course for Beginners',
      duration: '257 min'
    },
    {
      url: 'https://www.youtube.com/embed/7S_tz1z_5bA',
      title: 'MySQL Crash Course',
      duration: '57 min'
    },
    {
      url: 'https://www.youtube.com/embed/yPu6qV5byu4',
      title: 'MySQL Tutorial for Beginners',
      duration: '77 min'
    },
    {
      url: 'https://www.youtube.com/embed/5OdVJbNCSso',
      title: 'MySQL Database Design Tutorial',
      duration: '46 min'
    },
    {
      url: 'https://www.youtube.com/embed/2HVMiPPuPIM',
      title: 'MySQL Joins, Keys, and Relationships',
      duration: '35 min'
    }
  ]
}
]

export function getCourseBySlug(slug) {
  return courses.find((c) => c.slug === slug)
}
