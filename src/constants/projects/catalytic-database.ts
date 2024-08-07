import type { Project } from './project';

export const catalyticDatabase: Project = {
  id: 'catalytic-database',
  name: 'Catalytic Database',
  shortDescription: 'Catalytic market explorer and catalytic business management system.',
  // previewUrl: 'https://www.catalyticdatabase.com/welcome',
  previewUrl: null,
  sourceCode: [],
  completed: true,
  description: `
			A huge database of over 70,000 catalytics, allowing the exploration of all sorts of information about
			catalytics including the history of the price of each catalytic over time for any time period.
			<br />
			In addition to that, it provides the ability to manage your organization by including other members 
			on the team and tracking your customers, order history, creating invoices, etc...
		`,
  tasksWorkedOn: [
    "Design system setup and implement pixel perfect design from Figma using React and TailwindCSS.",
    "Developed authentication system using NextAuth.",
    "Developed catalytic search capability, with the ability to view prices change over time.",
    "Implemented invoicing and customer tracking system.",
  ],
  features: [
    'Search a large database of catalytic converters.',
    'View the evolution of a catalytic converter’s price over time.',
    'Manage customers, invoices and organization members.'
  ],
  images: [
    '/projects/catalytic-database/landing.jpg',
    '/projects/catalytic-database/login.jpg',
    '/projects/catalytic-database/search.jpg',
    '/projects/catalytic-database/customers.jpg',
    '/projects/catalytic-database/client.jpg',
    '/projects/catalytic-database/invoices.jpg',
    '/projects/catalytic-database/invoice-mode.jpg',
    '/projects/catalytic-database/settings.jpg'
  ],
  imagesAspectRatio: '16/9',
  tags: ['web', 'frontend'],
  techStack: ['React', 'Next.js', 'TailwindCSS', 'GraphQL', 'Node.JS', 'MongoDB'],
  thumbnail: '/projects/catalytic-database/catalytic-database-logo.jpg'
};
