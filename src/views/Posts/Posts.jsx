import { Link, useLoaderData } from "react-router";

export default function Posts() {

    const posts = useLoaderData();

    return (
        <>
            <section className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-10 text-center">
                    <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                        ReactSpace Blog
                    </span>

                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Posts
                    </h1>

                    <p className="mt-3 text-slate-600">
                        Esplora tutti i post disponibili.
                    </p>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                    Lista dei post:
                </h2>

                <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">

                    {posts.map((post) => {
                        return (
                            <li
                                key={post.id}
                                className="flex min-w-0 flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div>
                                    <span className="mb-4 inline-block rounded-lg bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
                                        Post #{post.id}
                                    </span>

                                    <h3 className="m-0 text-lg font-bold text-slate-900">
                                        {post.title}
                                    </h3>
                                </div>

                                <Link
                                    to={`/posts/${post.id}`}
                                    className="inline-flex items-center justify-center self-start rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-indigo-500 hover:text-white"
                                >
                                    Leggi il post →
                                </Link>
                            </li>
                        );
                    })}

                </ul>

            </section>
        </>
    );
}
