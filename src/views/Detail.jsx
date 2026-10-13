import { useLoaderData } from "react-router";


export default function Detail() {

    const [post, comments] = useLoaderData();

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Detail page</h1>

                <h2 className="mb-4">ID: {post.id}</h2>

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
            </div>

            <div className="container py-5">
                <h2 className="text-center mb-4">Commenti:</h2>

                {comments.map((comment) => {
                    return (
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title mb-3">
                                    {comment.email}
                                </h4>

                                <p className="card-text">
                                    {comment.body}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}