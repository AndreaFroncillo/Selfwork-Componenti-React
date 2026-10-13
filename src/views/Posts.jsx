import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Posts() {

    const [posts, setPosts] = useState();

    useEffect(
        () => {
            const getData = async () => {
                const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
                const json = await promise.json();
                setPosts(json);
            }

            getData();
        }, []
    )

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Posts</h1>

                <h2 className="mb-4">Lista dei post:</h2>

                <ul className="list-group">
                    {posts && posts.map((post) => {
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