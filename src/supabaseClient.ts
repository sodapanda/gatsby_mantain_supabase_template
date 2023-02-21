import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bawxyctqxrnbexautnbi.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhd3h5Y3RxeHJuYmV4YXV0bmJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2MjU1ODQsImV4cCI6MTk5MjIwMTU4NH0.8KqE-6Yd0_s_xc7k3uMDn4UdK6-oxE6g2zf9MbEGa0w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
