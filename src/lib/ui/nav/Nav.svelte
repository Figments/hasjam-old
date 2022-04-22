<script>
	import { user } from '$lib/store/user.store';
	import { logout } from '../../../db/auth';
</script>

<nav class="w-full px-4 py-6 bg-zinc-700 text-white flex items-center">
	<h1 class="text-2xl mr-4">has<span class="font-bold text-red-500">JAM</span></h1>
	<a href="/">Home</a>
	<a href="pastjams">Past Jams</a>
	<a href="about">About</a>
	{#if $user}
		<div class="ml-auto flex items-center gap-4">
			<h2>Hey, {$user?.user_metadata?.preferred_username ?? $user?.email}</h2>
			<button on:click={logout} class="bg-red-500 p-2 rounded">sign out</button>
		</div>
	{:else}
		<ul class="ml-auto">
			<li>
				<a href="/login">Login</a>
			</li>
		</ul>
	{/if}
</nav>

<style lang="scss">
	nav {
		a {
			@apply px-4 py-2 rounded-md hover:bg-zinc-300/40 relative top-0.5;
			font-family: var(--ui-text);
		}
	}
</style>
