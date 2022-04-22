<script>
	import { github } from '../db/auth';
</script>

<div class="flex justify-center mt-10">
	<button
		on:click={github}
		class="bg-gray-900 text-white px-5 py-3 rounded-md text-xs uppercase font-bold border-none focus-visible:outline focus-visible:outline-4 outline-offset-2 focus-visible:outline-blue-500 hover:bg-gray-700"
	>
		Log in with Github</button
	>
</div>
