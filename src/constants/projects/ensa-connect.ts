import type { Project } from './project';

export const ensaConnect: Project = {
	name: 'ENSA Connect',
	completed: false,
	thumbnail: '/projects/ensa-connect/ensa-connect-logo.jpg',
	images: new Array(9).fill(1).map((_, i) => `/projects/ensa-connect/${i + 1}.jpg`),
	tags: ['mobile', 'frontend', 'backend'],
	shortDescription: 'A social network for the students of my national school ENSA.',
	description: `
			<p>This is a project I started working on since I got accepted at my current engineering school ENSA. 
			It is a social network to connect the ENSA engineering students across the whole country, allowing
			people to chat, create group chats, share news, experiences, resources and even host events and meetings
			right from the application.
			<br>
			In addition to that, it allows professors to log into their own separate workspace where they could
			share resources for students to use, host online classes and make announcements.
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
	previewUrl: null,
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
