import { Link, useLoaderData } from "react-router";

export default function Detail() {

    const [post, comments] = useLoaderData();

    return (
        <>
            <section className="mx-auto my-12 max-w-5xl px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <Link
                        to="/posts"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 no-underline transition-colors hover:text-indigo-500"
                    >
                        ← Torna ai post
                    </Link>
                </div>

                <div className="mb-8 text-center">
                    <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                        Post #{post.id}
                    </span>

                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Dettaglio post
                    </h1>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

                    <div className="border-b border-indigo-100 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 sm:p-10">
                        <h2 className="m-0 text-2xl font-bold text-slate-900 sm:text-3xl">
                            {post.title}
                        </h2>
                    </div>

                    <div className="p-6 sm:p-10">
                        <p className="m-0 text-base leading-8 text-slate-700">
                            {post.body}
                        </p>
                    </div>

                </div>

            </section>

            <section className="mx-auto mb-16 max-w-5xl px-4 sm:px-6 lg:px-8">

                <div className="mb-8 flex items-center gap-3">
                    <h2 className="m-0 text-2xl font-bold text-slate-900 sm:text-3xl">
                        Commenti
                    </h2>

                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                        {comments.length}
                    </span>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">

                    {comments.map((comment) => {
                        return (
                            <div
                                key={comment.id}
                                className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg"
                            >
                                <div className="mb-4 flex items-center gap-3">

                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-600">
                                        {comment.email.charAt(0).toUpperCase()}
                                    </span>

                                    <h3 className="m-0 min-w-0 break-all text-sm font-semibold text-slate-900">
                                        {comment.email}
                                    </h3>

                                </div>

                                <p className="m-0 text-sm leading-7 text-slate-600">
                                    {comment.body}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </section>
        </>
    );
}
