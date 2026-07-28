// All editable site copy lives here, so updating text never means
// touching component code.

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Progress', href: '#progress' },
  { label: 'Events', href: '#events' },
  { label: 'Giving', href: '#giving' },
  { label: 'Contact', href: '#contact' },
]

export const announcement = {
  text: 'Registration for the HSMH Orlando Fundraising Evening is now live',
  date: 'Saturday, August 22, 2026',
  place: 'Marriott Orlando Downtown',
  cta: 'Reserve your seat',
  href: '#events',
}

export const hero = {
  eyebrow: 'A Sadqa Jaria under construction',
  title: 'A hospital rising in Malir, built to turn no one away.',
  body:
    "Hasan Suleman Memorial Hospital is under construction along the National Highway in Karachi's Malir District — a 312-bed tertiary care hospital for one of the city's most underserved communities. Free treatment for those who can't afford it, cost-based care for those who can.",
  stats: [
    { value: '312', label: 'beds planned' },
    { value: '2M+', label: 'people reached' },
    { value: '24/7', label: 'emergency & trauma care' },
  ],
  primaryCta: { label: 'Donate now', href: '#giving' },
  secondaryCta: { label: 'See our progress', href: '#progress' },
  openingLabel: 'Planned opening',
  openingDate: 'December 25, 2026',
}

export const mission = {
  eyebrow: 'Honoring your loved ones',
  title: 'Sponsor a room. Carry a name forward.',
  body:
    'Honor your parents or loved ones by sponsoring a hospital room in their name — a lasting Sadqa-e-Jaria, Fi-Sabilillah, that keeps benefiting patients and bringing reward with every life it touches, by the will and blessings of our Creator.',
  cta: { label: 'Learn about room sponsorship', href: '#giving' },
}

export const progress = {
  eyebrow: 'From grey structure to open doors',
  title: "Alhumdulillah, the hospital's grey structure is complete.",
  body:
    "What remains is interior finishing, medical equipment, staffing, and the operational systems that turn a finished building into a functioning hospital. Here's where things stand.",
  stages: [
    {
      label: 'Grey structure',
      detail: 'Core building complete',
      status: 'done',
    },
    {
      label: 'Interior finishing',
      detail: 'Underway now',
      status: 'active',
    },
    {
      label: 'Medical equipment',
      detail: 'Procurement in progress',
      status: 'upcoming',
    },
    {
      label: 'Staffing & systems',
      detail: 'Clinical & operational teams',
      status: 'upcoming',
    },
    {
      label: 'Opening day',
      detail: 'December 25, 2026',
      status: 'upcoming',
    },
  ],
}

export const services = [
  {
    title: 'Treatment wards',
    body: 'Safe, fully equipped beds for patients in need of immediate and ongoing care.',
  },
  {
    title: 'Emergency treatment',
    body: '24/7 life-saving treatment when every second matters the most.',
  },
  {
    title: 'Free healthcare',
    body: 'Quality medical care for families who cannot afford treatment.',
  },
]

export const givingIntro = {
  eyebrow: 'Your Zakat and donations have the power to save lives',
  title: 'Every contribution moves us from a building to a hospital.',
  body:
    'With your support, Friends of Hasan Suleman Memorial Hospital will soon provide quality healthcare to marginalized communities. Every gift — big or small — helps secure a better future for the people who need it most.',
}

export const givingOptions = [
  {
    title: 'Zakat',
    body: 'Your Zakat is at the right place, directed to those who need it most.',
  },
  {
    title: 'Sadqa',
    body: 'Be part of a cause that keeps giving — a Sadqa that impacts many lives.',
  },
  {
    title: 'General donation',
    body: 'Assist those who need access to medical care, or honor a loved one.',
  },
]

export const events = {
  eyebrow: 'Upcoming events, 2026',
  title: 'Join us in person',
  items: [
    {
      city: 'Chicago',
      name: 'Chicago Fundraising Dinner',
      cta: 'Buy tickets for Chicago',
    },
    {
      city: 'Orlando',
      name: 'Orlando Fundraising Dinner',
      date: 'Saturday, August 22, 2026',
      venue: 'Marriott Orlando Downtown',
      cta: 'Buy tickets for Orlando',
      featured: true,
    },
  ],
  pastNote:
    'In 2025, our community came together across several cities to support this project wholeheartedly.',
}

export const footer = {
  email: 'info@friendsofhsmh.org',
  address: '185 Old Westbury Road, Old Westbury, NY 11568',
  phone: '1-516-350-3150',
  links: [
    { label: 'Events', href: '#events' },
    { label: 'News & Updates', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Documents', href: '#' },
    { label: 'Audit Reports', href: '#' },
    { label: 'Certification', href: '#' },
    { label: 'Payment Partner', href: '#' },
  ],
  copyright: '© Copyright 2026. All rights reserved by HSMH.',
  credit: 'Powered by V4Ideas Inc.',
}