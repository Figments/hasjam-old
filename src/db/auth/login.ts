import { supabase } from '../supabase';

export const github = async () => {
	try {
		await supabase.auth.signIn({ provider: 'github' });
	} catch (e) {
		console.error(e);
	}
};

export const twitter = async () => {
	try {
		await supabase.auth.signIn({ provider: 'twitter' });
	} catch (e) {
		console.error(e);
	}
};

export const email = async (event) => {
	try {
		let email = event?.target?.elements[0].value;
		await supabase.auth.signIn({ email });
	} catch (e) {
		console.error(e);
	}
};
