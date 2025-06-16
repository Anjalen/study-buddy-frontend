import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zuydkpkihdmlsdtscgpt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1eWRrcGtpaGRtbHNkdHNjZ3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjc2MTcsImV4cCI6MjA2NTYwMzYxN30.ho7H0WEp4-GCk7U-U1gDBjahesXGWdONrGkXLFZZ5Yw";

export const supabase = createClient(supabaseUrl, supabaseKey);
