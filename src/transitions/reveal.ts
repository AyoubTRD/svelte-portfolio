import { cubicOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

type RevealParams = {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	y?: number;
	x?: number;
	start?: number;
	opacity?: number;
};

export function reveal(
	node: Element,
	{
		delay = 0,
		duration = 700,
		easing = cubicOut,
		y = 16,
		x = 0,
		start = 0.98,
		opacity
	}: RevealParams = {}
): TransitionConfig {
	const computedOpacity = Number(getComputedStyle(node).opacity) || 1;
	const targetOpacity = opacity ?? computedOpacity;

	return {
		delay,
		duration,
		easing,
		css: (t) => {
			const translateX = (1 - t) * x;
			const translateY = (1 - t) * y;
			const scale = start + t * (1 - start);
			return `transform: translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}); opacity: ${
				t * targetOpacity
			};`;
		}
	};
}
