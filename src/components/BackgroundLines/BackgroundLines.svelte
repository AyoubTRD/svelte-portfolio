<div class="-z-10 pointer-events-none">
	{#each ['', '', '', '', '', '', ''] as _, i}
		<div
			class="-z-10 absolute scale-x-150 top-0 right-0 h-[2px] bg-typography bg-opacity-10 rotate-[39deg] origin-left"
			style="width: {i * 6 + 'rem'};"
		/>
	{/each}

	{#each ['', '', '', '', '', '', ''] as _, i}
		<div
			class="absolute scale-x-150 top-0 right-0 h-[2px] bg-typography bg-opacity-20 rotate-[40deg] origin-left"
			style="width: {i * 6 + 'rem'}"
		/>
	{/each}
</div>
