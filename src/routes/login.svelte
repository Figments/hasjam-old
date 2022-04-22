<script>
	import { github, twitter } from '../db/auth';
</script>

<div class="max-w-sm mx-auto h-full mt-72">
	<h2 class="text-2xl mr-4 text-center">has<span class="font-bold text-red-500">JAM</span></h2>
	<p class="font-bold text-3xl text-center mb-4">Sign in to your account</p>
	<form class="w-full mb-4">
		<label for="email" class="block">E-mail</label>
		<input
			type="email"
			name="email"
			id="email"
			class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-visible:outline focus-visible:outline-4 outline-offset-2 focus-visible:outline-blue-500 mb-4"
		/>
		<button class="bg-red-500 social-button w-full hover:bg-red-600">Log in</button>
	</form>
	<div
		class="before:content-[''] before:flex-1 before:h-px before:border-t-[1px] before:border-gray-300 before:mr-3  after:content-[''] after:flex-1 after:h-px after:border-t-[1px] after:border-gray-300 after:ml-3 flex items-center text-xs text-gray-400 mb-4"
	>
		or continue with
	</div>
	<div class="flex space-x-3">
		<button on:click={github} class="bg-gray-900 social-button hover:bg-gray-700 flex-1">
			Log in with Github</button
		>
		<button on:click={twitter} class="bg-blue-400 social-button hover:bg-blue-500 flex-1">
			Log in with Twitter</button
		>
	</div>
</div>
