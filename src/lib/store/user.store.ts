import { readable } from 'svelte/store';
import { supabase } from '../../db/supabase';

export const user = readable(supabase.auth.user(), (set) => {
	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') {
			set(session.user);
		}
		if (event == 'SIGNED_OUT') {
			set(null);
		}
	});
});
