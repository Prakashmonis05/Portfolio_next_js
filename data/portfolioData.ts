export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  images: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
  credential: string;
}

export interface SocialHandle {
  name: string;
  url: string;
  icon: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'E-vote',
    description: 'A secure election management web app that helps organizations create, manage, and conduct elections with controlled access, smooth voting flow, and instant result visibility — built for low to mid-scale enterprise use.',
    technologies: ['Next.js', 'Express', 'Prisma', 'Javascript',  'PostgreSQL'],
    github: '#',
    demo: 'https://evote.prakashm.dev',
    images: [
      '/images/evote1.png',
      '/images/evote2.png',
      '/images/evote3.png',
      '/images/evote4.png',
      '/images/evote5.png'
    ]
  },
  {
    title: 'AgriReach',
    description: 'An AI-powered support platform for farmers that provides smart problem resolution, real-time weather insights, and easy access to government schemes — designed to improve decision-making and productivity.',
    technologies: ['Flask', 'SqlAlchemy', 'HTML', 'CSS', 'SQLite'],
    github: 'https://github.com/Prakashmonis05/AgriReach.git',
    demo: 'https://agrireach.prakashm.dev',
    images: [
      '/images/agri1.png',
      '/images/agri2.png',
      '/images/agri3.png',
      '/images/agri4.png',
      '/images/agri5.png',
      '/images/agri6.png'
    ]
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance tracker that allows users to record expenses, categorize spending, and monitor budgets with a clean dashboard — helping users stay in control of money with clarity and consistency.',
    technologies: ['Flask', 'SqlAlchemy', 'HTML', 'CSS', 'PostgreSQL'],
    github: 'https://github.com/Prakashmonis05/Expense_Tracker_flask_app.git',
    demo: 'https://expense.prakashm.dev',
    images: [
      '/images/ex1.png',
      '/images/ex2.png',
      '/images/ex3.png'
    ]
  },
  {
    title: 'Veyro',
    description: 'Veyro is a modern e-commerce platform that enables users to discover, browse, and purchase products across multiple categories. It provides a seamless shopping experience with product management, secure authentication, cart functionality, and order processing.',
    technologies: ['Reactjs', 'Nodejs', 'Expressjs', 'MongoDB'],
    github: 'https://github.com/Prakashmonis05/E-vote.git',
    demo: 'https://veyro.prakashm.dev',
    images: [
      '/images/shop1.png',
      '/images/shop2.png',
      '/images/shop3.png',
      '/images/shop4.png',
       '/images/shop5.png'
    ]
  },
  {
    title: 'WordWander (Frontend Version)',
    description: 'A lightweight frontend-only book selling UI built using HTML, CSS, and JavaScript — focused on clean design, responsive layout, and smooth user interaction.',
    technologies: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/Prakashmonis05/WordWander-HTML-Version.git',
    demo: 'https://wordwander.prakashm.dev',
    images: [
      '/images/wand1.png',
      '/images/wand2.png',
      '/images/wand3.png'
    ]
  }
];

export const SKILLS_CATEGORIES: Record<string, string[]> = {
  Frontend: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Bootstrap',
    'Responsive Design'
  ],

  Backend: [
    'Node.js',
    'Express.js',
    'Python',
    'Flask',
    'PHP',
    'REST APIs',
    'JWT Authentication',
    'API Integration'
  ],

  Database: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'SQLite',
    'Prisma ORM',
    'SQLAlchemy',
    'Database Design'
  ],

  'DevOps & Tools': [
    'Git',
    'GitHub',
    'Docker',
    'Vercel',
    'Render',
    'Postman',
    'VS Code'
  ],

  'Core CS': [
    'Data Structures & Algorithms',
    'Problem Solving',
    'Object-Oriented Programming',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'System Design'
  ]
};

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Python Internship at Besant Technologies',
    issuer: 'Besant Technologies',
    year: '2025',
    description: 'Completed a Python internship focused on developing practical programming skills, problem-solving, and application development.',
    image: '/images/Internship1.jpeg',
    credential: '#'
  },
  {
    title: 'Python (Basic)',
    issuer: 'Hackerrank',
    year: '2025',
    description: 'Demonstrated proficiency in Python fundamentals, including syntax, data types, control flow, functions, and basic problem-solving.',
    image: '/images/python1.jpg',
    credential: 'https://www.hackerrank.com/certificates/bf9f91041d9d'
  },
  {
    title: 'Python for Beginners',
    issuer: 'Simplilearn',
    year: '2025',
    description: 'Completed foundational Python training covering core syntax, functions, loops, and real-world problem solving — strengthening programming fundamentals for backend development and automation.',
    image: '/images/python.jpg',
    credential: 'https://simpli-web.app.link/e/yjds4trrpUb'
  },
  {
    title: 'JavaScript for Beginners',
    issuer: 'Simplilearn',
    year: '2025',
    description: 'Built strong JavaScript fundamentals including DOM manipulation, events, and interactive web logic — enabling dynamic frontend development and clean UI behavior.',
    image: '/images/javascript.jpg',
    credential: 'https://simpli-web.app.link/e/Jp4GPVwrpUb'
  },
  {
    title: 'Demystifying AI/ML Roles: How to Build a Career in AI',
    issuer: 'Scaler',
    year: '2025',
    description: 'Attended an industry-focused masterclass on AI/ML career paths, required skill sets, and real-world role expectations — gaining clarity on roadmap and learning strategy.',
    image: '/images/certificate3.png',
    credential: '#'
  },
  {
    title: 'What It Takes to Be a Data Scientist at Microsoft',
    issuer: 'Scaler',
    year: '2025',
    description: 'Learned practical insights into data science workflows, business problem framing, and model-building mindset used in top product companies — with focus on impact-driven analytics.',
    image: '/images/certificate2.png',
    credential: '#'
  },
  {
    title: 'Fundamentals of Docker and Kubernetes',
    issuer: 'Scaler',
    year: '2025',
    description: 'Covered containerization and orchestration basics including Docker images, containers, and Kubernetes concepts — improving deployment understanding and DevOps fundamentals.',
    image: '/images/certificate1.png',
    credential: '#'
  },
  
];

export const SOCIAL_HANDLES: SocialHandle[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/prakashmonis05',
    icon: '💻',
    description: 'Follow me on GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/prakashmonis005',
    icon: '💼',
    description: 'Follow me on LinkedIn'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918867252705',
    icon: '💬',
    description: 'Message me on WhatsApp'
  },
  {
    name: 'Email',
    url: 'mailto:prakashmonis06@gmail.com',
    icon: '📧',
    description: 'Send me an Email'
  }
];

export const CONTACT_INFO = {
  email: 'Prakashmonis06@gmail.com',
  phone: '+91 8867252705',
  location: 'Mangalore, Karnataka, India',
  whatsappUrl: 'https://wa.me/918867252705?text=Hi%20Prakash,%20I%20want%20to%20connect%20with%20you%20regarding%20a%20project.',
  emailUrl: 'mailto:Prakashmonis06@gmail.com?subject=Project%20Inquiry&body=Hi%20Prakash,%0A%0AI%20want%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks,'
};
