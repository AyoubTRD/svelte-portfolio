import type { Project } from './project';

export const catalyticDatabase: Project = {
	id: 'catalytic-database',
	name: 'Catalytic Database',
	shortDescription: 'Catalytic market explorer and catalytic business management system.',
	previewUrl: 'https://www.catalyticdatabase.com/welcome',
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
		'Design system setup',
		"Search the catalytics' database",
		"Visualize a catalytic's price over time",
		'Create an invoice for an order related to a customer',
		'Create a customer',
		'Generate a pdf for invoices',
		'Manage organization members'
	],
	features: [
		'User authentication',
		'User memberships and payments',
		"Search the catalytics' database",
		"Visualize a catalytic's price over time",
		'Create an invoice for an order related to a customer',
		'Create a customer',
		'Generate a pdf for invoices',
		'Manage organization members',
		'Track PGM prices live',
		'Use custom PGM prices for catalytic price calculation'
	],
	images: [],
	tags: ['web', 'frontend'],
	techStack: ['React', 'Next.js', 'TailwindCSS', 'GraphQL', 'Node.JS', 'MongoDB'],
	thumbnail: '/projects/catalytic-database/catalytic-database-logo.jpg'
};
