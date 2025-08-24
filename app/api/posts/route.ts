import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_URL;

const supabase = createClient(supabaseUrl!, supabaseKey!);

export async function GET() {
    const posts = await supabase.from('posts').select();
    return Response.json(posts);
}

export async function POST(request: Request) {
    const res = await request.json();
    const post = await supabase.from('posts').insert(res);
    return Response.json(post);
}
