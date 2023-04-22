export type Project = {
	id: string;
	name: string;
	shortDescription: string;
	description: string;
	tags: string[];
	completed: boolean;
	images: string[];
	techStack: string[];
	features: string[];
	previewUrl: string | null;
	sourceCode: { label: string; url: string }[];
	thumbnail: string;
};

export const projects: Project[] = [
	{
		id: 'social-media',
		thumbnail: '/projects/social-media/trd-network-logo.jpg',
		tags: ['web', 'backend', 'frontend'],
		images: ['/projects/social-media/1.png', '/projects/social-media/2.png'],
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
			'Create posts using text and images',
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
	},
	{
		name: 'ENSA Connect',
		completed: false,
		thumbnail: '/projects/ensa-connect/ensa-connect-logo.jpg',
		images: [],
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
		previewUrl: 'https://ensa-connect.ayoubtrd.com',
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
	},
	{
		id: 'schoonect',
		name: 'Schoonect',
		shortDescription: 'Student engagement platform.',
		description:
			'Schoonect is a platform bringing the distanced aspect of education, allowing students and teachers to have better communication fully remotely.',
		thumbnail: '/projects/schoonect/schoonect-logo.png',
		completed: true,
		features: [
			'User authentication',
			'Create and manage schools',
			'Manage school students and teachers',
			'Ability for a teacher to create a classroom containing a set of students from a school',
			'Create graded and non graded assignments and quizzes',
			'Challenge Library: A huge library of ready to use questions and quizzes to use for assignments',
			'Internationalization, support for multiple languages'
		],
		images: [],
		previewUrl: null,
		sourceCode: [],
		tags: ['web', 'frontend'],
		techStack: ['React', 'Material UI', 'GraphQL', 'MongoDB', 'Node.JS']
	},
	{
		id: 'catalytic-database',
		name: 'Catalytic Database',
		shortDescription: 'Catalytic market explorer and catalytic business management system.',
		previewUrl: 'https://www.catalyticdatabase.com/welcome',
		sourceCode: [],
		completed: true,
		description: `
			A huge database of over 70,000 catalytics, allowing the exploration all sorts of information about
			catalytics including the history of the price of each catalytic over time for any time period.
			<br />
			In addition to that, it provides the ability to manage your organization by including other members 
			on the team and tracking your customers, order history, creating invoices, etc...
		`,
		features: [
			'User authentication',
			'User memberships and payments',
			"Search the catalytics' database",
			"Visualize a catalytic's price over time",
			'Create an invoice for an order related to a customer',
			'Create a customer',
			'Generate a pdf for invoices',
			'Manage organization members'
		],
		images: [],
		tags: ['web', 'frontend'],
		techStack: ['React', 'TailwindCSS', 'GraphQL', 'Node.JS', 'MongoDB'],
		thumbnail: '/projects/catalytic-database/catalytic-database-logo.jpg'
	}
];
