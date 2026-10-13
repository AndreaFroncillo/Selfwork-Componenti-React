import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detail() {

    const { id } = useParams();
    const [post, setPosts] = useState();

    useEffect(
        () => {
            const getData = async () => {
                const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const json = await promise.json();
                setPosts(json);
            }

            getData();
        }, [id]
    )

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Detail page</h1>

                <h2 className="mb-4">ID: {id}</h2>

                {post && (
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                {post.title}
                            </h3>

                            <p className="card-text">
                                {post.body}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}