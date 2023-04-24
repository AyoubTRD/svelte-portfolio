import type { Project } from './project';

export const socialMedia: Project = {
	id: 'social-media',
	thumbnail: '/projects/social-media/trd-network-logo.jpg',
	tags: ['web', 'backend', 'frontend'],
	images: [],
	name: 'Social Media Platform',
	techStack: [
		'PHP',
		'MySQL',
		'NodeJS (for realtime messaging)',
		'Vue.JS',
		'TailwindCSS',
		'Semantic UI'
	],
	features: [
		'User authentication',
		'Create a company & manage its staff and their permissions',
		'Comment on posts',
		'Like posts and comments',
		'Customer profile with a profile picture and cover photo',
		'See the profile of other users and their posts',
		'Realtime chat with other users'
	],
	shortDescription: 'This is a website inspired by Facebook.',
	description: `<p>This is a website inspired by Facebook. 
    I decided to create this project to strengthen my problem solving skills and learn new technologies
     such as TailwindCSS and SQL, not knowing it would make me fall in love with TailwindCSS and never look back. 
     </p>
    <p>Developed during the lockdown in 2020</p>`,
	previewUrl: 'https://social-media.ayoubtrd.com',
	sourceCode: [
		{
			label: 'Social Media PHP server',
			url: 'https://github.com/AyoubTRD/social-media-php'
		},
		{
			label: 'Realtime Node.JS server',
			url: 'https://github.com/AyoubTRD/social-media-node-server'
		}
	],
	completed: true
};
