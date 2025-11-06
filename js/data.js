export const galleryImages = [
  './public/scholarhive.jpg',
  './public/photopayimg.png',
  './public/soedepartment.png',
  './public/clarifaya-img.jpeg'
];

export const tools = [
  "Python", "FastAPI", "React", "Next.js", "Tailwind", "Postgres",
  "Google Cloud", "AWS", "Supabase", "Firebase", "Django", "Solana",
  "Git", "Github", "Node.js", "Prompt Engineering", "C++", "Docker"
];

export const projects = [
  {
    id: "photopay",
    title: "Photopay",
    subtitle: "Featured — Sanctum Gateway Hackathon",
    description: "A marketplace built with solana, google cloud storage bucket and sanctum gateway that allows creators to sell photos and allows collectors buy them by simply connecting their solana wallets",
    image: "./public/photopayimg.png",
    live: "https://photochain-pi.vercel.app/",
    github: "https://github.com/WisdomEhirim06/photopay_backend",
    featured: true
  },
  {
    id: "scholarhive",
    title: "ScholarHive",
    subtitle: "Hackathon- Hack4FUTO 3.0",
    description: "Decentralized platform that connects students with scholarhsips, and helps providers manage applications effectively. Designed th backend system with Django and postgreSQL",
    image: "./public/scholarhive.jpg",
    live: "https://github.com/WisdomEhirim06/ScholarHive",
    github: "https://github.com/WisdomEhirim06/ScholarHive"
  },
  {
    id: "clarifaya",
    title: "Clarifaya",
    subtitle: "Personal",
    description: "An audio learning tool, that allows users upload their text or topics and have the system quiz them in back and forth conversations. ",
    image: "./public/clarifaya-img.jpeg",
    live: "https://github.com/WisdomEhirim06/Clarifaya",
    github: "https://github.com/WisdomEhirim06/Clarifaya"
  },
  {
    id: "student",
    title: "University Departmental Information System",
    subtitle: "School Project",
    description: "Built with FastAPI and JavaScript; this system allows students to view dannouncements made by the staff on time. ",
    image: "./public/soedepartment.png",
    live: "https://soedesigngrp3.vercel.app/",
    github: "https://github.com/WisdomEhirim06/student-board-backend"
  },
  
]

export const timeline = [
  { id:1, type:'experience', title:'Backend Developer Intern', org:'HNG Internship', date:'Jul 2024 - Sep 2024', desc:'Built REST APIs and collaborated on product features.' },
  { id:2, type:'education', title:'CS50: Harvards Intro to Computer Science', org:'Harvard University (Online)', date:'2023', desc: "Completed Harvard's renowned introductory course covering algorithms, data structures, and foundational programming concepts Created a final project implementing a real-time web-chat application using flask and socketIo" },
  { id:3, type:'hackathon', title:'Sanctum Gateway — Photopay', org:'Hackathon', date:'2025', desc:'Built with Solana and FastAPI with sanctum Gateway RPC for fast creator-to-collector payments. Images were stored on the cloud' },
  { id:4, type:'education', title:'Python Development Program', org:'NIIT Port Harcourt', date:'2022', desc:'Completed training in programming fundamentals and practicals. Completed mini tasks in Webscrapping and Third-party APIs. Developed a Currency Converter using Tkinter and Openexchange API as final project.' },
  { id:5, type:'hackathon', title:'Hack4Futo 3.0', org:'Team ScholarHive', date:'Nov 2024', desc:'🏆5th Place - Led a team to develop a decentralized educational platform addressing the issues in involved in receiving scholarships and grants.' },
  { id:6, type:'experience', title:'Software', org:'NAMA (Nigerian Airspace Management Agency)', date:'Jan 2025 - Feb 2025', desc:'Interned at the Surveillance department. Learnt techniques needed in the maintenance and troubleshooting of IT systems and infrastructure within the agency. Assisted in daily data archivals, Labelled media with archived data' },
  { id:8, type:'education', title:'B.Tech. Software Engineering', org:'Federal University of Technology, Owerri (FUTO)', date:'2022-2027', desc:'Principles of software process; touching key areas of software production such as capstone research methodology, software architecture, Quality Assurance, Testing...' },
  { id:9, type:'hackathon', title:'Hack4Futo 4.0', org:'Team Finda', date:'Aug 2025', desc:'Led my team to develop a product that uses algorithms and AI to find the right products and services that a user needs' }

];
