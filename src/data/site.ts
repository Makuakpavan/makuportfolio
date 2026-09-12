export type Stop = {
  name: string
  note: string
  current?: boolean
}

export type Project = {
  id: string
  kind: string
  title: string
  href?: string
  body: string
  build: string
  links?: { label: string; href: string }[]
  status: { label: string; live?: boolean }
}

export const profile = {
  name: 'Maku Akpavan',
  fullName: 'Maku Akpavan Paul',
  eyebrow: 'Frontend developer, Jos, Nigeria',
  headline:
    'I build software that moves people, parcels and money across African cities.',
  sub: 'Six of my last eight projects were logistics, mobility or payments products. React and TypeScript on the front, Node or Django on the back, and Naira handled properly.',
  email: 'makuakpavan021@gmail.com',
}

export const stops: Stop[] = [
  { name: 'Jos, Plateau State', note: 'Home base, West Africa Time' },
  { name: 'nHub Nigeria', note: 'Frontend intern since April 2026' },
  { name: 'University of Jos', note: 'B.Sc. Computer Science, 2027' },
  { name: 'Open to remote', note: 'Available now, any timezone', current: true },
]

export const projects: Project[] = [
  {
    id: 'unipulse',
    kind: 'Campus social platform',
    title: 'UniPulse',
    href: 'https://unipulse-frontend-2.vercel.app',
    body: 'A social network scoped to a single campus, so students only see posts, events and listings from their own institution. It has a campus feed, anonymous posts that pass through admin approval, real-time chat, a marketplace and a follow system with notifications. Four roles: student, verified student, institution admin, super admin.',
    build:
      'Frontend in React, TypeScript and Tailwind on Vercel. Backend in Express and MongoDB Atlas with Socket.IO for chat, Redis on Upstash for caching, Cloudinary for uploads and JWT for auth, deployed on Render.',
    links: [
      { label: 'Live site', href: 'https://unipulse-frontend-2.vercel.app' },
      {
        label: 'Backend repo',
        href: 'https://github.com/Makuakpavan/UNIPULSE-BACKEND',
      },
    ],
    status: { label: 'Live', live: true },
  },
  {
    id: 'swende',
    kind: 'Mobility super-app',
    title: 'Swende',
    body: 'Ride-hailing and multi-modal transport for African cities in one app. The hard part was the roles: passengers, drivers, delivery riders and admins each get a dashboard built around what they actually do, sharing one component library without turning into four different apps.',
    build:
      'React, Vite and Tailwind, with React Router for the role-based routing and Framer Motion for transitions between dashboard states.',
    status: { label: 'In development' },
  },
  {
    id: 'dropsync',
    kind: 'Proof of delivery',
    title: 'DropSync',
    href: 'https://drop-sync-liart.vercel.app/',
    body: 'A delivery platform under the Waybill Logistics brand, covering the full journey from marketing site to daily operations: a company and driver login split, signup with email verification, then an operations dashboard with overview, deliveries, live tracking and settings.',
    build:
      'React, Tailwind and React Router with lucide-react icons, on a dark slate and amber design system with a navbar that changes state on scroll.',
    links: [{ label: 'Live site', href: 'https://drop-sync-liart.vercel.app/' }],
    status: { label: 'Live', live: true },
  },
  {
    id: 'anali',
    kind: 'Logistics platform',
    title: 'Anali Transport System',
    body: 'A transport and freight platform I used to learn backend depth the hard way: I built the same API twice, once in Python and once in Java, against one React frontend. It handles trip and consignment management with Naira cost calculation, and both versions ship documented endpoints.',
    build:
      'React and Vite frontend against two interchangeable backends: Django REST Framework with drf-spectacular on Render, and Spring Boot 3.3 on Java 17 with JWT role-based access and PostgreSQL.',
    status: { label: 'Two backends, one frontend' },
  },
  {
    id: 'naijadash',
    kind: 'Product for sale',
    title: 'NaijaDash',
    body: 'An admin dashboard template for Nigerian startups, built because most templates on the market assume dollars, US address formats and Western sample data. This one ships with Naira formatting and realistic local data, so a fintech or logistics team can start from something that already fits. Sold on Gumroad at two tiers.',
    build:
      'Built from scratch in Vite, React, TypeScript and Tailwind, with Recharts for the analytics views. Delivered as a ZIP.',
    status: { label: 'Shipping on Gumroad', live: true },
  },
  {
    id: 'deliverify',
    kind: 'Field operations app',
    title: 'DeliVerify',
    body: 'Every delivery, verified. A mobile proof-of-delivery app where the rider captures a digital signature, a photo and a GPS point at the doorstep, syncs it in real time, and the office sees it land on a management dashboard. Currently building the component library and auth flows.',
    build:
      'React and Tailwind, with a design-to-code workflow through the Figma connector.',
    status: { label: 'In development' },
  },
]

export const alsoBuilt = [
  {
    name: 'GrowLearn',
    text: 'an AI-assisted learning platform scaffolded end to end in TypeScript, using TanStack Query for server state, Zustand for client state, Radix UI for accessible primitives, and Zod with React Hook Form for validation.',
  },
  {
    name: 'Expense Tracker',
    text: 'a full-stack money app in React, Express and MongoDB with JWT auth. Amounts are stored in kobo as integers and formatted to Naira at the edge, so floating-point rounding never touches the balance.',
  },
]

export const stackGroups = [
  {
    title: 'Frontend',
    note: 'Where I spend most of my time.',
    items: [
      'React and TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Vite',
      'React Router',
      'Framer Motion',
      'Recharts',
    ],
  },
  {
    title: 'Backend',
    note: 'Enough to design the API I need instead of waiting for one.',
    items: [
      'Node.js and Express',
      'Django REST Framework',
      'Spring Boot, Java 17',
      'MongoDB and PostgreSQL',
      'JWT and role-based access',
      'Socket.IO and Redis',
      'REST design, Swagger docs',
    ],
  },
  {
    title: 'Shipping',
    note: 'Getting it off my machine and in front of people.',
    items: [
      'Git and GitHub',
      'Vercel and Render',
      'Docker',
      'MongoDB Atlas, Upstash',
      'Cloudinary',
      'Ubuntu Linux, daily driver',
    ],
  },
]

export const aboutParagraphs = [
  "I'm Maku, a frontend developer in Jos, Plateau State. I'm in my final years of a Computer Science degree at the University of Jos and working as a frontend developer intern at nHub Nigeria.",
  'Most of what I build is for African teams, and that shapes the work more than it sounds like it should. Currency has to be stored in kobo and formatted in Naira. Deliveries happen at addresses that are not in any database. Connections drop halfway through an upload. Those constraints are why I keep ending up in logistics, mobility and fintech, and why I care about the parts of a product that only show up under real conditions.',
  'I also sell React templates, because building something once and shipping it to strangers teaches you things that a private repo never will: what documentation people actually need, and where they get stuck.',
  "Right now I'm looking for remote frontend work, contract or full time. If you're building for a market that the standard tooling wasn't designed for, that's the work I want.",
]

export const facts = [
  { label: 'Currently', value: 'Frontend developer intern, nHub Nigeria' },
  {
    label: 'Studying',
    value: 'B.Sc. Computer Science, University of Jos, expected 2027',
  },
  { label: 'Based in', value: 'Jos, Plateau State, Nigeria (WAT, UTC+1)' },
  {
    label: 'Available for',
    value: 'Remote contract and full-time frontend roles',
  },
  { label: 'Focus areas', value: 'Logistics, mobility, fintech, e-commerce' },
]

export const elsewhere = [
  { label: 'GitHub', href: 'https://github.com/Makuakpavan' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maku-akpavan-a6222a400',
  },
  { label: 'Previous portfolio', href: 'https://maku-akpavanport.vercel.app' },
]
