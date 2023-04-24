import type { Project } from './project';

export const asylumTix: Project = {
	id: 'asylum-tix',
	name: 'AsylumTix',
	shortDescription: 'Event ticketing platform.',
	previewUrl: null,
	sourceCode: [],
	completed: false,
	description: `
			A ticketing platform for event performers and eventgoers, provides the ability to set up an event 
			taking place in a certain venue, and allowing people reserve tickets to attend the event.
		`,
	features: [
		'Company staff management with permissions',
		'Manage venues and events under a company',
		'Track all sales data on a dashboard',
		'Sell tickets to events',
		'Generate reports for an event/company',
		'...'
	],
	images: [],
	tags: ['web', 'frontend'],
	techStack: ['Angular', 'TailwindCSS', 'Angular Material', 'GraphQL', 'Node.JS', 'MongoDB'],
	thumbnail: '/projects/asylumtix/asylumtix-logo.jpg',
	tasksWorkedOn: [
		'Fixed bugs',
		'Made tech decisions on approaches to fix problems and to implement new features',
		'State management refactoring to RxJS',
		'Event creation & editing pages',
		'Ticket purchasing and payment',
		'Platform UI design system refactoring',
		'Discount Code creation/edit and application on purchase',
		'Company staff management',
		'Financial Reports'
	]
};
