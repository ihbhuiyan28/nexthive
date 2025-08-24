import supabase from '@/lib/supabase';

export async function GET() {
    const posts = await supabase.from('posts').select();
    return Response.json(posts);
}

export async function POST(request: Request) {
    const res = await request.json();
    const post = await supabase.from('posts').insert(res);
    return Response.json(post);
}
