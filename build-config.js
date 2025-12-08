const fs=require('fs');

const content = `window.SUPABASE_URL="${process.env.SUPABASE_URL}"; 
window.SUPABASE_ANON_KEY="${process.env.SUPABASE_ANON_KEY}";`;

fs.writeFileSync('./public/config.js',content);