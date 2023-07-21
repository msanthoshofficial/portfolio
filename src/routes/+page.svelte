<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center pt-[12rem]">
		
		<div class="grid grid-cols-1 gap-4">
			<div class="grid grid-cols-3 gap-4 h-fit items-center">
				<div class="text-start col-span-2">
					<h1 class="h1 mb-2 text-5xl font-bold">Hey there! I'm Santhosh</h1>
					<p class="h2 mb-2 ">A passionate and dedicated Full-Stack Software Engineer</p>
					<button type="button" class="btn variant-filled">Contact Me</button>
				</div>
				<figure>
					<section class="img-bg" />
					<img src="images/engineer.png" alt="">
				</figure>
			</div>
		
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure img,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>