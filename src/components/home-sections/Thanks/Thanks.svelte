<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { socialLinks } from '../../../constants/socialLinks';
	import { expoOut } from 'svelte/easing';

	let animate = false;
	let currentYear = new Date().getFullYear();

	onMount(() => {
		animate = true;
	});

	const footerLinks = [
		{ label: 'About', href: '/#about' },
		{ label: 'Skills', href: '/#skills' },
		{ label: 'Portfolio', href: '/#portfolio' },
		{ label: 'Contact', href: '/#contact' }
	];

	const quickContact = [
		{ label: 'Email', value: 'taouarda.ayoub@outlook.com', href: 'mailto:taouarda.ayoub@outlook.com' },
		{ label: 'Phone', value: '+212 602-781142', href: 'tel:+212602781142' },
		{ label: 'Location', value: 'Marrakech, Morocco', href: null }
	];
</script>

<footer id="thanks" class="footer-main">
	{#if animate}
		<!-- Top accent line with animation -->
		<div class="footer-accent-top" in:slide={{ axis: 'x', duration: 1000, easing: expoOut }}></div>

		<div class="footer-container">
			<!-- Footer grid -->
			<div class="footer-grid">
				<!-- Column 1: Branding & Quote -->
				<div class="footer-column brand-column" in:fade={{ duration: 600, delay: 200 }}>
					<div class="footer-brand">
						<div class="brand-monogram">AT</div>
						<div class="brand-text">
							<span class="brand-name">Ayoub Taouarda</span>
							<span class="brand-title">Full-Stack Developer</span>
						</div>
					</div>
					<p class="footer-quote">
						Building modern web experiences with precision, creativity, and a commitment to excellence.
					</p>
				</div>

				<!-- Column 2: Navigation -->
				<div class="footer-column nav-column" in:fade={{ duration: 600, delay: 400 }}>
					<h3 class="footer-heading">Navigation</h3>
					<nav class="footer-nav">
						{#each footerLinks as link}
							<a href={link.href} class="footer-nav-link">
								<span class="nav-arrow">→</span>
								{link.label}
							</a>
						{/each}
					</nav>
				</div>

				<!-- Column 3: Quick Contact -->
				<div class="footer-column contact-column" in:fade={{ duration: 600, delay: 600 }}>
					<h3 class="footer-heading">Get In Touch</h3>
					<div class="footer-contacts">
						{#each quickContact as contact}
							{#if contact.href}
								<a href={contact.href} class="footer-contact-item">
									<span class="contact-label">{contact.label}</span>
									<span class="contact-value">{contact.value}</span>
								</a>
							{:else}
								<div class="footer-contact-item">
									<span class="contact-label">{contact.label}</span>
									<span class="contact-value">{contact.value}</span>
								</div>
							{/if}
						{/each}
					</div>
				</div>

				<!-- Column 4: Social & Newsletter -->
				<div class="footer-column social-column" in:fade={{ duration: 600, delay: 800 }}>
					<h3 class="footer-heading">Connect</h3>
					<div class="footer-social">
						{#each socialLinks as social}
							<a href={social.href} target="_blank" rel="noopener noreferrer" class="social-link">
								<ion-icon name={social.iconName}></ion-icon>
							</a>
						{/each}
					</div>
					<div class="availability-badge">
						<span class="availability-dot"></span>
						<span class="availability-text">Available for projects</span>
					</div>
				</div>
			</div>

			<!-- Footer bottom bar -->
			<div class="footer-bottom" in:fade={{ duration: 600, delay: 1000 }}>
				<div class="footer-bottom-line"></div>
				<div class="footer-bottom-content">
					<div class="copyright">
						<span>© {currentYear} Ayoub Taouarda</span>
						<span class="separator">·</span>
						<span>All rights reserved</span>
					</div>
					<div class="credits">
						<span>Designed & Built with</span>
						<span class="heart">♥</span>
						<span>in Morocco</span>
					</div>
				</div>
			</div>
		</div>
	{/if}
</footer>

<style lang="postcss">
	/* Footer main */
	.footer-main {
		background: linear-gradient(180deg, #2a2b2e 0%, #1f2023 100%);
		border-top: 1px solid rgba(255, 200, 106, 0.2);
		position: relative;
		overflow: hidden;
	}

	/* Top accent line */
	.footer-accent-top {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, transparent 0%, #ffc86a 50%, transparent 100%);
	}

	/* Footer container */
	.footer-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 5rem 2rem 2rem;
	}

	@media (max-width: 768px) {
		.footer-container {
			padding: 3rem 1.5rem 1.5rem;
		}
	}

	/* Footer grid */
	.footer-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		margin-bottom: 4rem;
	}

	@media (min-width: 768px) {
		.footer-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 3rem;
		}
	}

	@media (min-width: 1024px) {
		.footer-grid {
			grid-template-columns: 1.5fr 1fr 1.2fr 1fr;
			gap: 4rem;
		}
	}

	/* Footer column */
	.footer-column {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* Brand column */
	.footer-brand {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.brand-monogram {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 2rem;
		font-weight: 400;
		color: #ffc86a;
		letter-spacing: -0.05em;
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 200, 106, 0.1);
		border: 2px solid rgba(255, 200, 106, 0.3);
		flex-shrink: 0;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.brand-name {
		font-family: 'DM Serif Display', Georgia, serif;
		font-size: 1.25rem;
		font-weight: 400;
		color: #ffc86a;
		letter-spacing: -0.02em;
	}

	.brand-title {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: rgba(228, 228, 229, 0.5);
	}

	.footer-quote {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: rgba(228, 228, 229, 0.7);
		max-width: 320px;
		margin: 0;
	}

	/* Footer heading */
	.footer-heading {
		font-family: 'Montserrat', sans-serif;
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #ffc86a;
		margin: 0;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid rgba(255, 200, 106, 0.2);
	}

	/* Navigation column */
	.footer-nav {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer-nav-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9375rem;
		font-weight: 500;
		color: rgba(228, 228, 229, 0.7);
		text-decoration: none;
		transition: all 0.3s ease;
		padding: 0.25rem 0;
	}

	.nav-arrow {
		color: rgba(255, 200, 106, 0.5);
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.footer-nav-link:hover {
		color: #ffc86a;
		transform: translateX(4px);
	}

	.footer-nav-link:hover .nav-arrow {
		transform: translateX(4px);
		color: #ffc86a;
	}

	/* Contact column */
	.footer-contacts {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.footer-contact-item {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
		text-decoration: none;
		transition: transform 0.3s ease;
	}

	.footer-contact-item:hover {
		transform: translateX(4px);
	}

	.contact-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(228, 228, 229, 0.5);
	}

	.contact-value {
		font-size: 0.9375rem;
		font-weight: 600;
		color: rgba(228, 228, 229, 0.85);
		transition: color 0.3s ease;
	}

	a.footer-contact-item:hover .contact-value {
		color: #ffc86a;
	}

	/* Social column */
	.footer-social {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.social-link {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 200, 106, 0.1);
		border: 1px solid rgba(255, 200, 106, 0.3);
		color: #ffc86a;
		font-size: 1.25rem;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.social-link:hover {
		background: rgba(255, 200, 106, 0.2);
		border-color: #ffc86a;
		transform: translateY(-4px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
	}

	/* Availability badge */
	.availability-badge {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: rgba(0, 255, 136, 0.05);
		border-left: 3px solid #00ff88;
		margin-top: 0.5rem;
	}

	.availability-dot {
		width: 10px;
		height: 10px;
		background: #00ff88;
		border-radius: 50%;
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		box-shadow: 0 0 12px rgba(0, 255, 136, 0.6);
		flex-shrink: 0;
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

	.availability-text {
		font-size: 0.875rem;
		font-weight: 600;
		color: #00ff88;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* Footer bottom */
	.footer-bottom {
		padding-top: 2rem;
	}

	.footer-bottom-line {
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, transparent 0%, rgba(255, 200, 106, 0.2) 50%, transparent 100%);
		margin-bottom: 2rem;
	}

	.footer-bottom-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	@media (min-width: 768px) {
		.footer-bottom-content {
			flex-direction: row;
			justify-content: space-between;
			text-align: left;
		}
	}

	.copyright,
	.credits {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: rgba(228, 228, 229, 0.5);
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (min-width: 768px) {
		.copyright,
		.credits {
			justify-content: flex-start;
		}
	}

	.separator {
		color: rgba(255, 200, 106, 0.3);
	}

	.heart {
		color: #ff6b6b;
		animation: heartbeat 1.5s ease-in-out infinite;
	}

	@keyframes heartbeat {
		0%,
		100% {
			transform: scale(1);
		}
		10%,
		30% {
			transform: scale(1.1);
		}
		20%,
		40% {
			transform: scale(1);
		}
	}
</style>
