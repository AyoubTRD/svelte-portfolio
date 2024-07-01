import type { Project } from './project';

export const ensaCampus: Project = {
	name: 'ENSA Connect 2.0',
	completed: false,
	thumbnail: '/projects/ensa-campus/logo.jpg',
	images: new Array(10).fill(1).map((_, i) => `/projects/ensa-campus/${i + 1}.jpg`),
	tags: ['mobile', 'frontend', 'UI/UX design'],
	shortDescription: 'A social network for the students of my national engineering school ENSA.',
	description: `
			<p>
				A new and improved version of ENSA Connect, with more features and a better UI/UX design.  It is a social network to connect the ENSA engineering students across the whole country, allowing people to chat, create group chats, share news, experiences, resources and even host events and meetings right from the application.
			</p>
			<p>
				This version is a result of re-branding and re-architecture of ENSA Connect by learning from the mistakes made in the previous version, issues with codebase structure and maintainability, UI and the direction of the app.
			</p>
		`,
	features: [
		'Join a global chat of all ENSA students',
		'Chat with other students and professors',
		'Start meetings inside of chats',
		'Professor Spaces (Manage online classes, make announcements, distribute resources for students to use for study)',
		'Club spaces private to club members',
		'Manage clubs',
		'Apply to join clubs',
		'Private club posts, events and chat',
		'Publish announcements and events to targeted groups',
		'Administration space to manage students, announcements, modules, groups, etc...'
	],
	id: 'ensa-campus',
	previewUrl: null,
	sourceCode: [
		{
			label: 'Flutter Application',
			url: 'https://github.com/AyoubTRD/ensa_campus'
		}
		// {
		// 	label: 'GraphQL API',
		// 	url: 'https://github.com/AyoubTRD/ENSAConnect-api'
		// }
	],
	techStack: ['Flutter', 'Clean Architecture', 'Supabase', 'GraphQL', 'Figma']
};
