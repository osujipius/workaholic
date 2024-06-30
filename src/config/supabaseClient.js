import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nymefivjauqorlzqfosx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55bWVmaXZqYXVxb3JsenFmb3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxODY5NjAsImV4cCI6MjAzMzc2Mjk2MH0.fZV4h766j7Yuxm6h3jFUmp3jxC_P1qAkgB5GjAUhXLM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
