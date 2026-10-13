import { Link, useLoaderData } from "react-router";

export default function Posts() {

    const posts = useLoaderData();

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Posts</h1>

                <h2 className="mb-4">Lista dei post:</h2>

                <ul className="list-group">
                    {posts.map((post) => {
                        return (
                            <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center gap-3">
                                <span>{post.title}</span>

                                <Link to={`/posts/${post.id}`} className="btn btn-primary btn-sm">
                                    Detail
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}