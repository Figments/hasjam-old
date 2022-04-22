import { supabase } from '../supabase';

export const github = async () => {
	await supabase.auth.signIn({ provider: 'github' });
};
