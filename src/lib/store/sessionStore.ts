import { writable } from 'svelte/store';
import { supabase } from '../../db/supabase';

const currentUser = supabase.auth.user();

export const user = writable(currentUser);
