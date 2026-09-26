import blog from '../../images/blog.png'
import optidetect from '../../images/optidetect.svg'
import resqconnect from '../../images/resqconnect.svg'
import studyplanner from '../../images/studyplanner.svg'

/**
 * Selected work: the blog platform carried over from the original site, plus
 * the three projects listed on the résumé. `focus` and `tags` restate each
 * project's own stack and scope — nothing is invented.
 *
 * The three cover graphics are drawn placeholders (images/*.svg). To use a real
 * screenshot instead: drop the file into `images/`, change the import above and
 * set `position` to the framing you want.
 */
export const projects = [
  {
    id: 'blog-web-application',
    index: '01',
    title: 'Blog web application',
    description:
      'A full-stack blogging platform built with Node.js, Express.js, EJS, and PostgreSQL. It allows users to create, edit, and delete posts while demonstrating clean backend structure, dynamic rendering, and persistent data management.',
    focus: 'Full-stack · CRUD, server-side rendering, PostgreSQL',
    date: 'Dec 2024',
    image: blog,
    position: 'right top',
    tags: ['Node.js', 'Express.js', 'EJS', 'PostgreSQL'],
    links: [
      {
        icon: 'globe',
        label: 'Live site',
        href: 'https://blog-web-application-8gda.onrender.com',
      },
      {
        icon: 'file',
        label: 'Documentation',
        href: 'https://docs.google.com/document/d/1JQPchxshOY8zTngutbXipYS0qOWIqYRiE2IrLZ1FAOw/edit?usp=sharing',
      },
      {
        icon: 'github',
        label: 'Source code',
        href: 'https://github.com/Gokul-sami/Blog-web-application',
      },
    ],
  },
  {
    id: 'optidetect',
    index: '02',
    title: 'OptiDetect — AI-powered pediatric eye screening',
    description:
      'A smartphone application for early screening of leukocoria and strabismus using deep learning and geometric ocular alignment analysis. The Efficient-ResNet Attention Fusion architecture reaches 98.67% sensitivity and 97.11% accuracy on leukocoria detection, while a training-free module computes inter-iris-to-nose asymmetry from MediaPipe facial landmarks to flag misalignment.',
    focus: 'AI · deep learning screening for leukocoria and strabismus',
    date: 'Jul 2025 – Apr 2026',
    image: optidetect,
    position: 'center',
    tags: ['Python', 'Deep learning', 'EfficientNetB0', 'MediaPipe', 'Mobile app'],
    links: [
      {
        icon: 'github',
        label: 'Source code',
        href: 'https://github.com/Gokul-sami/OptiDetect',
      },
    ],
  },
  {
    id: 'resqconnect',
    index: '03',
    title: 'ResQConnect — rescue coordination platform',
    description:
      'A coordination system that connects NGOs, volunteers and rescue teams around one live view of every request, with real-time tracking so field teams always know where help is needed. Backend microservices own the request lifecycle, data validation and the secure channel between parties.',
    focus: 'Backend · microservices and real-time request tracking',
    date: 'Jul 2025 – Aug 2025',
    image: resqconnect,
    position: 'center',
    tags: ['Microservices', 'Real-time tracking', 'Backend'],
    links: [
      {
        icon: 'github',
        label: 'Source code',
        href: 'https://github.com/Gokul-sami/ResQConnect',
      },
    ],
  },
  {
    id: 'studyplanner',
    index: '04',
    title: 'StudyPlanner — cross-platform study planner',
    description:
      'A cross-platform study planning application covering task scheduling, automated reminders and resource tracking, with Firebase authentication and real-time database sync so a plan stays consistent across devices.',
    focus: 'Cross-platform · scheduling, reminders and Firebase sync',
    date: 'Jul 2024',
    image: studyplanner,
    position: 'center',
    tags: ['Firebase', 'Cross-platform', 'Task scheduling'],
    links: [
      {
        icon: 'github',
        label: 'Source code',
        href: 'https://github.com/Gokul-sami/MystudyPlan',
      },
    ],
  },
]
