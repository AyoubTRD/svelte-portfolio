import { writable } from 'svelte/store';

export type NavLink = {
	label: string;
	href: string;
	active: boolean;
};

export const defaultNavLinks: NavLink[] = [
	{
		label: 'About',
		href: '/#about',
		active: false
	},
	{
		label: 'Portfolio',
		href: '/#portfolio',
		active: false
	},
	{
		label: 'Contact',
		href: '/#contact',
		active: false
	}
];

export const navLinksStore = writable<NavLink[]>(defaultNavLinks);
