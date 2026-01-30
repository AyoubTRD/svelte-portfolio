<script lang="ts">
	import { inview } from 'svelte-inview';
	import Typography from '../../shared/Typography/Typography.svelte';
	import HorizontalSocialLinks from './HorizontalSocialLinks.svelte';
	import { reveal } from '../../../transitions/reveal';
	import { defaultNavLinks, navLinksStore } from '../../../stores/navLinksStore';

	let animate = false;

	function updateNavLinks() {
		navLinksStore.set(
			defaultNavLinks.map((link) => ({ ...link, active: link.label === 'Contact' }))
		);
	}

	const contactMethods = [
		{
			type: 'Email',
			value: 'taouarda.ayoub@outlook.com',
			href: 'mailto:taouarda.ayoub@outlook.com',
			icon: 'mail-outline'
		},
		{
			type: 'Phone',
			value: '+212 602-781142',
			href: 'tel:+212602781142',
			icon: 'call-outline'
		},
		{
			type: 'Location',
			value: 'Marrakech, Morocco',
			href: null,
			icon: 'location-outline'
		}
	];
</script>

<section
	id="contact"
	class="relative"
	use:inview={{ rootMargin: '-20%' }}
	on:inview_enter={(event) => {
		animate = event.detail.inView;
		updateNavLinks();
	}}
>
	{#if animate}
		<div class="container mx-auto">
			<div class="editorial-contact">
				<!-- Section number -->
				<div class="section-number-wrapper">
					<span class="section-number" in:reveal={{ duration: 800, y: 24, start: 0.96 }}>04</span>
				</div>

				<!-- Architectural header -->
				<div class="contact-header">
					<div class="header-line left" />
					<div class="header-content" in:reveal={{ duration: 700, delay: 200, y: 16, start: 0.96 }}>
						<span class="header-label">Let's Talk</span>
						<Typography type="title">
							<h2 class="editorial-title">Get In Touch</h2>
						</Typography>
					</div>
					<div class="header-line right" />
				</div>

				<!-- Contact grid - brutalist layout -->
				<div class="contact-grid">
					{#each contactMethods as method, i}
						<div
							class="contact-card"
							in:reveal={{
								duration: 700,
								delay: 360 + i * 130,
								y: 24,
								start: 0.96
							}}
						>
							{#if method.href}
								<a href={method.href} class="contact-link">
									<div class="contact-icon-wrapper">
										<ion-icon class="contact-icon" name={method.icon} />
									</div>
									<div class="contact-info">
										<span class="contact-type">{method.type}</span>
										<span class="contact-value">{method.value}</span>
									</div>
									<div class="contact-arrow">→</div>
								</a>
							{:else}
								<div class="contact-link static">
									<div class="contact-icon-wrapper">
										<ion-icon class="contact-icon" name={method.icon} />
									</div>
									<div class="contact-info">
										<span class="contact-type">{method.type}</span>
										<span class="contact-value">{method.value}</span>
									</div>
								</div>
							{/if}
						</div>
					{/each}
				</div>

				<!-- Social links section -->
				<div class="social-section" in:reveal={{ duration: 700, delay: 820, y: 12 }}>
					<div class="social-header">
						<div class="social-line" />
						<span class="social-label">Connect</span>
						<div class="social-line" />
					</div>
					<HorizontalSocialLinks delay={1000} />
				</div>

				<!-- CTA Block -->
				<div class="cta-block" in:reveal={{ duration: 800, delay: 980, y: 12 }}>
					<div class="cta-content">
						<span class="cta-text">Available for freelance opportunities</span>
						<div class="cta-indicator">
							<span class="indicator-dot" />
							<span class="indicator-text">Open to work</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="container mx-auto">
			<div class="md:h-96 h-[600px]" />
		</div>
	{/if}
</section>

<style lang="postcss">
	.editorial-contact {
		position: relative;
		padding: 3.5rem 0 3rem;
		overflow: visible;
	}

	/* Section number */
	.section-number-wrapper {
		position: absolute;
		top: -3rem;
		right: 10%;
		z-index: 1;
	}

	.section-number {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: clamp(8rem, 15vw, 12rem);
		font-weight: 400;
		line-height: 0.8;
		color: rgba(255, 200, 106, 0.08);
		display: block;
		letter-spacing: -0.05em;
		user-select: none;
	}

	/* Architectural header */
	.contact-header {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-bottom: 4rem;
		position: relative;
		z-index: 10;
	}

	@media (max-width: 768px) {
		.contact-header {
			flex-direction: column;
			gap: 1rem;
		}
	}

	.header-line {
		flex: 1;
		height: 2px;
		background: linear-gradient(90deg, transparent 0%, #ffc86a 50%, transparent 100%);
		animation: scaleInX 800ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}

	.header-line.left {
		transform-origin: left;
		animation-delay: 100ms;
	}

	.header-line.right {
		transform-origin: right;
		animation-delay: 100ms;
	}

	@keyframes scaleInX {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}

	.header-content {
		text-align: center;
		white-space: nowrap;
		padding: 0 1rem;
	}

	.header-label {
		display: block;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: rgba(228, 228, 229, 0.5);
		margin-bottom: 0.5rem;
	}

	.editorial-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		line-height: 0.95;
		letter-spacing: -0.03em;
		margin: 0;
		text-transform: uppercase;
		font-weight: 400;
	}

	/* Contact grid */
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-bottom: 3rem;
		position: relative;
		z-index: 10;
	}

	@media (min-width: 768px) {
		.contact-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* Contact card */
	.contact-card {
		background: rgba(61, 62, 66, 0.4);
		border: 1px solid rgba(228, 228, 229, 0.1);
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.contact-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: #ffc86a;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.contact-card:hover::before {
		transform: scaleX(1);
	}

	.contact-card:hover {
		background: rgba(61, 62, 66, 0.7);
		border-color: rgba(255, 200, 106, 0.3);
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	/* Contact link */
	.contact-link {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 2rem;
		text-decoration: none;
		color: inherit;
		position: relative;
	}

	.contact-link.static {
		cursor: default;
	}

	/* Icon wrapper */
	.contact-icon-wrapper {
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 200, 106, 0.1);
		border: 1px solid rgba(255, 200, 106, 0.3);
		flex-shrink: 0;
		transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.contact-card:hover .contact-icon-wrapper {
		background: rgba(255, 200, 106, 0.2);
		border-color: rgba(255, 200, 106, 0.6);
		transform: rotate(5deg) scale(1.1);
	}

	.contact-icon {
		font-size: 1.5rem;
		color: #ffc86a;
	}

	/* Contact info */
	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		flex: 1;
	}

	.contact-type {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: rgba(228, 228, 229, 0.5);
	}

	.contact-value {
		font-size: 1rem;
		font-weight: 600;
		color: #ffffff;
		line-height: 1.3;
	}

	/* Contact arrow */
	.contact-arrow {
		font-size: 1.5rem;
		color: #ffc86a;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		flex-shrink: 0;
	}

	.contact-link:hover .contact-arrow {
		transform: translateX(6px);
	}

	/* Social section */
	.social-section {
		margin-bottom: 2rem;
		position: relative;
		z-index: 10;
	}

	.social-header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.social-line {
		flex: 1;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(228, 228, 229, 0.2) 50%,
			transparent 100%
		);
	}

	.social-label {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: rgba(228, 228, 229, 0.5);
	}

	/* CTA Block */
	.cta-block {
		background: linear-gradient(135deg, rgba(255, 200, 106, 0.1) 0%, rgba(237, 149, 0, 0.05) 100%);
		border-left: 4px solid #ffc86a;
		padding: 2rem;
		position: relative;
		z-index: 10;
	}

	.cta-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.cta-text {
		font-size: 1.125rem;
		font-weight: 600;
		color: #ffffff;
		letter-spacing: -0.01em;
	}

	.cta-indicator {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.indicator-dot {
		width: 12px;
		height: 12px;
		background: #00ff88;
		border-radius: 50%;
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		box-shadow: 0 0 12px rgba(0, 255, 136, 0.6);
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.indicator-text {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #00ff88;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.cta-content {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
