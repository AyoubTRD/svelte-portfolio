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
	techStack: ['Angular', 'TailwindCSS', 'Angular Material', 'GraphQL', 'Node.JS', 'MongoDB'],
	thumbnail: '/projects/asylumtix/asylumtix-logo.jpg',
	tasksWorkedOn: [
		'Made tech decisions on approaches to fix problems and to implement new features',
		'State management refactoring to RxJS',
		'Event creation & management pages',
		'Ticket purchasing and payment',
		'Platform UI design system refactoring',
		'Discount Code creation/edit and application on purchase',
		'Company staff management',
		'Financial Reports',
		'Reports'
	]
};
