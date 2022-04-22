import { supabase } from '../supabase';

export const logout = async () => {
	try {
		await supabase.auth.signOut();
	} catch (e) {
		console.error(e);
	}
};
