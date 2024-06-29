export type Project = {
	id: string;
	name: string;
	shortDescription: string;
	description: string;
	tags: string[];
	completed: boolean;
	images: string[];
	imagesAspectRatio?: string;
	techStack: string[];
	features: string[];
	previewUrl: string | null;
	sourceCode: { label: string; url: string }[];
	thumbnail: string;

	tasksWorkedOn?: string[];
};
