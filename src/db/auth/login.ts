import { supabase } from '../supabase';

export const github = async () => {
	try {
		await supabase.auth.signIn({ provider: 'github' });
	} catch (e) {
		console.error(e);
	}
};
