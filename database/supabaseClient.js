import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://anxvdgqqcqmuiwomkbwg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueHZkZ3FxY3FtdWl3b21rYndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNzI5NzYsImV4cCI6MjA0Mjg0ODk3Nn0.wd_7PKQMkHV2qC5QtP2HbVAqOKVhAw8_dLYJMVHLKwo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;