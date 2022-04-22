<script lang="ts">
	import '../app.scss';
	import { Nav } from '../lib/ui/nav';
</script>

<header>
	<Nav />
</header>
<main class="h-full">
	<slot />
</main>
