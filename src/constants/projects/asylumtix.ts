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
				Led the team to project success, released the functional MVP 1 week ahead of deadline, released major features in a timely manner and proposed effective solutions to issues like “Ticket Hold” for ticket availability assurance.
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
