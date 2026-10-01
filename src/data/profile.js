/**
 * Single-page content. Everything here is carried over from the original site
 * (index.html, pages/about.html) — nothing invented, the "focus" lines are
 * restatements of each project's own description.
 */

export const person = {
  name: 'Gokul Sami',
  initials: 'GS',
  roles: ['Full-stack developer', 'Backend & AI systems'],
  tagline:
    'I build web apps end to end — React and Vite on the front, Java, Spring Boot and Node behind them.',
  summary:
    'I finished my B.E. in Computer Science at LICET in 2026 and I am now a trainee developer at Straive in Chennai. I learn by building, so the projects below are how I picked up Spring Boot, React, Node and more recently deep learning. The work I enjoy most is backend — APIs, data modelling, and getting AI models into applications people actually use.',
}

/**
 * Hero colophon — replaced the portrait. Every value is taken from the résumé,
 * so the hero stays factual now that the photo is gone.
 */
export const heroFacts = [
  { label: 'Now', value: 'Trainee Developer at Straive' },
  { label: 'Based in', value: 'Chennai, India' },
  { label: 'Focus', value: 'Java · Spring Boot · React · AI integration' },
  { label: 'Graduated', value: 'B.E. CSE, LICET · 2026 · CGPA 8.32' },
]

/** In-page navigation (scroll-spy targets). */
export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const socials = {
  github: 'https://github.com/Gokul-sami',
  linkedin: 'https://www.linkedin.com/in/gokul-sami/',
  hackerrank: 'https://www.hackerrank.com/profile/gokulpandiyan6',
  email: 'gokulpandiyan6@gmail.com',
  resume:
    'https://drive.google.com/file/d/1_fnC7nIyHBOhbWHUcHJqH6WaFbB-KwXo/view?usp=sharing',
}

/**
 * The hero contact line: plain destinations, not calls to action. Email first,
 * because it is the one a recruiter actually uses.
 */
export const heroLinks = [
  { id: 'email', icon: 'mail', label: socials.email, href: `mailto:${socials.email}` },
  { id: 'github', icon: 'github', label: 'GitHub', href: socials.github },
  { id: 'linkedin', icon: 'linkedin', label: 'LinkedIn', href: socials.linkedin },
  { id: 'resume', icon: 'file', label: 'Résumé', href: socials.resume },
]

/** Headline numbers, all traceable to the résumé. */
export const stats = [
  { value: '06', label: 'Shipped projects' },
  { value: '03', label: 'Industry internships' },
  { value: '26', label: 'Technologies in use' },
]

/** The same numbers as one sentence, so the hero reads as a CV line. */
export const statsLine = stats.map((stat) => `${stat.value} ${stat.label.toLowerCase()}`).join(' · ')

/** Grouped for the capabilities bento grid — the current résumé skill list. */
export const skillGroups = [
  {
    id: 'frameworks',
    index: '01',
    title: 'Frameworks & web',
    blurb: 'Services, interfaces and the APIs that connect them.',
    items: [
      'Spring Boot',
      'React',
      'Node.js',
      'Express.js',
      'EJS',
      'Vite',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    id: 'languages',
    index: '02',
    title: 'Languages',
    blurb: 'What I write production code in, day to day.',
    items: ['Java', 'JavaScript', 'Python', 'SQL', 'C', 'HTML/CSS'],
  },
  {
    id: 'ai',
    index: '03',
    title: 'AI & language models',
    blurb: 'Getting models into real workflows and applications.',
    items: ['Deep learning', 'Prompt engineering', 'LLM workflows', 'AI integration'],
  },
  {
    id: 'data',
    index: '04',
    title: 'Data & storage',
    blurb: 'Schema design, querying and hosted persistence.',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    id: 'tools',
    index: '05',
    title: 'Cloud & workflow',
    blurb: 'Ship it, automate it, keep it running.',
    items: ['AWS', 'Azure', 'Git', 'Jenkins'],
  },
]

export const about = {
  facts: [
    {
      label: 'Education',
      value: 'B.E. Computer Science & Engineering, LICET — graduated 2026',
    },
    { label: 'CGPA', value: '8.32' },
    {
      label: 'Core strengths',
      value: 'Problem-solving, product thinking, and creative implementation',
    },
    {
      label: 'Frameworks & tools',
      value: 'Spring Boot, React, Node.js, Express.js, Vite',
    },
    {
      label: 'Data & platforms',
      value: 'MySQL, MongoDB, PostgreSQL, AWS, Firebase',
    },
    {
      label: 'Interests',
      value: 'Cloud computing, game development, and building useful software',
    },
  ],
}

/**
 * Contact rows. `hint` keeps the hover feedback of the original About page,
 * `kind` maps to the icon and accent used for each destination.
 */
export const contactLinks = [
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    meta: 'Code & repositories',
    href: socials.github,
    hint: 'Visit my GitHub profile!',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    meta: 'Connect & message',
    href: socials.linkedin,
    hint: 'Connect with me on LinkedIn!',
  },
  {
    id: 'hackerrank',
    icon: 'code',
    label: 'HackerRank',
    meta: 'Practice & challenges',
    href: socials.hackerrank,
    hint: 'Check out my Hackerrank profile',
  },
  {
    id: 'resume',
    icon: 'file',
    label: 'Résumé',
    meta: 'View the PDF',
    href: socials.resume,
    hint: 'View my resume!',
  },
]
