import type { Project } from './project';

export const schoonect: Project = {
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
};
