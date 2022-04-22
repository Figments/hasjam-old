<script>
	import '../app.scss';
	import { Nav } from '../lib/ui/nav';

	import { user } from '$lib/store/sessionStore';
	import { supabase } from '../db/supabase';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<header>
	<Nav />
</header>
<main>
	<slot />
</main>
