import type { Project } from './project';

export const ensaConnect: Project = {
	name: 'ENSA Connect',
	completed: false,
	thumbnail: '/projects/ensa-connect/ensa-connect-logo.jpg',
	images: new Array(9).fill(1).map((_, i) => `/projects/ensa-connect/${i + 1}.jpg`),
	tags: ['mobile', 'frontend', 'backend'],
	shortDescription: 'A social network for the students of my national engineering school ENSA.',
	description: `
			<p>
			A social media platform destined to the students and professors of ENSA schools in Morocco, where everyone can communicate and manage school lectures etc... 
			</p>
		`,
	features: [
		'User authentication',
		'Create posts',
		'React to posts',
		'Comment on posts',
		'Reply to comments',
		"Customize the app's theme and colors",
		'Join a global chat of all ENSA students',
		'Join the chat of the ENSA of your city',
		'Join the chat of your current school year in your city',
		'Chat with other students and professors',
		'Create custom group chats',
		'Start meetings inside of chats',
		'Professor Spaces (Manage online classes, make announcements, distribute resources for students to use for study',
		'Club spaces private to club members',
		'Manage clubs',
		'Apply to join clubs',
		'Private chat posts, events and chat',
		'Make public announcements and events city-wide'
	],
	id: 'ensa-connect',
	previewUrl: 'https://asylumtix.com/kazem',
	sourceCode: [
		{
			label: 'Flutter Application',
			url: 'https://github.com/AyoubTRD/ensa_flutter_app'
		},
		{
			label: 'GraphQL API',
			url: 'https://github.com/AyoubTRD/ENSAConnect-api'
		}
	],
	techStack: ['Flutter', 'ReactiveX', 'Node.JS', 'MongoDB', 'Typescript', 'GraphQL']
};
