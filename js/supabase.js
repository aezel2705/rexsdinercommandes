const SUPABASE_URL = 'https://ztjqzohprboirwxzfbbn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0anF6b2hwcmJvaXJ3eHpmYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNjU2ODAsImV4cCI6MjA5NDk0MTY4MH0.vlg9v_a9_c4gzKOdhcUn0HSp3wBbFu5osyQC4fxevYM';
var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = supabase;