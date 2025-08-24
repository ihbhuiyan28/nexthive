'use client';

import { useQuery } from '@tanstack/react-query';

export default function PostsPage() {
    const query = useQuery({
        queryKey: ['posts'],
        queryFn: async function () {
            const res = await fetch(`/api/posts`);
            return res.json();
        }
    });

    if (query.isPending) {
        return <>Loading...</>
    }

    if (query.isError) {
        return <>Error: {query.error.message}</>
    }

    return (
        <div>
            <h1>Posts Page</h1>
            {query.data.data.map(function (post: { id: string, title: string }) {
               return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                    </div>
                ); 
            })}
        </div>
    );
}
