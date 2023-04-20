import { quintIn } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

export function rotate(
	node: Element,
	{
		from = 0,
		to,
		delay = 0,
		duration = 500,
		easing = quintIn
	}: {
		from?: number;
		to: number;
		delay?: number;
		duration?: number;
		easing?: EasingFunction;
	}
): TransitionConfig {
	return {
		easing,
		duration,
		delay,
		css: (t, u) => `transform: rotate(${from + t * (to - from)}deg)`
	};
}
