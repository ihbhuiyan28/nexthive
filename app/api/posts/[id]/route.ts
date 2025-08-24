import supabase from '@/lib/supabase';

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const post = await supabase.from('posts').select().eq('id', id);
    return Response.json(post);
}

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const post = await supabase.from('posts').delete().eq('id', id);
    return Response.json(post);
}
