import type { Project } from './project';

export const asylumTix: Project = {
  id: 'asylum-tix',
  name: 'AsylumTix',
  shortDescription: 'Event ticketing platform.',
  previewUrl: null,
  sourceCode: [],
  completed: false,
  description: `
			<p>
				A robust ticketing platform allowing venue owners to manage venues, events, customers and sell tickets online through the front office and on-site using the box office mobile app.
			</p>
			<p>
				Led the team to project success, released the functional MVP 1 week ahead of deadline, released major features in a timely manner and proposed effective solutions to issues like “Ticket Hold system” for ticket availability assurance.
			</p>
		`,
  features: [
    'Setup venue information, events, tickets, discounts, additional products, etc...',
    'Sell tickets through the front office or using the mobile app.',
    'Refund tickets, check customers in/out.',
    'Conduct reports on events sales and attendance.',
    '...'
  ],
  images: [
    '/projects/asylumtix/1.png',
    '/projects/asylumtix/2.png',
    '/projects/asylumtix/3.png',
    '/projects/asylumtix/4.png',
    '/projects/asylumtix/5.png',
    '/projects/asylumtix/6.png',
    '/projects/asylumtix/7.png',
    '/projects/asylumtix/8.png',
    '/projects/asylumtix/9.png',
    '/projects/asylumtix/10.png'
  ],
  imagesAspectRatio: '16/10',
  tags: ['web', 'frontend', 'backend'],
  techStack: [
    'Angular',
    'TailwindCSS',
    'Angular Material',
    'Capacitor',
    'GraphQL',
    'Node.JS',
    'ExpressJS',
    'MongoDB',
    'Redis'
  ],
  thumbnail: '/projects/asylumtix/asylumtix-logo.jpg',
  tasksWorkedOn: [
    'Initial boxoffice mobile application from scratch using Capacitor',
    "Setup venue information, events, tickets, discounts, additional products, etc...",
    "Sell tickets through the frontoffice or using the mobile app.",
    "Refund tickets, check customers in/out.",
    "Conduct reports on events sales and attendance.",
    "Refactored the old codebase, fixing type-safety issues with Typescript, stabilized the old state management solution with NgRX by using best practices, re-implemented the Frontoffice to minimize network requests by over 50% and refactored the Backend to use GraphQL codegen to ensure type-safety.",
    "Conceptualized and developed a queuing system (Ticket Hold System) to queue tickets for purchase to guarantee ticket availability once payment is processed using Redis in high simultaneous usage scenarios.",
    "Collaborated with clients to help fix deployment and setup issues including a DNS and domain issue with DigitalOcean",
    "Conceptualized daily sales reports scheduling with Redis and BullMQ.",
    "Integrated Stripe payments and refunds.",
    "Implemented e-ticket generation with Puppeteer."
  ]
};
