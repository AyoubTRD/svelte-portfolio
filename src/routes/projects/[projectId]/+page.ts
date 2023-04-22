import { error } from '@sveltejs/kit';
import { projects } from '../../../constants/projects.js';

export const load = ({ params, url }) => {
	const project = projects.find((p) => p.id === params.projectId);

	if (!project) {
		throw error(404, { message: 'Project not found' });
	}

	return {
		project,
		delay: url.searchParams.get('delay') ? parseInt(url.searchParams.get('delay') as string) : 0
	};
};
