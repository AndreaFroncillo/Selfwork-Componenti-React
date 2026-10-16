import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    }

    const decrement = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 shadow-xl sm:py-16">

                <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">

                    <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
                        Contatore interattivo
                    </span>

                    <h2 className="m-0 text-3xl font-bold text-white sm:text-4xl">
                        Contatore
                    </h2>

                    <h3 className="m-0 min-w-32 rounded-2xl border border-slate-700 bg-slate-800 px-8 py-5 text-5xl font-bold tabular-nums text-white">
                        {counter}
                    </h3>

                    <div className="flex items-center justify-center gap-4">
                        <button
                            id="increment"
                            type="button"
                            className="btn btn-primary btn-lg rounded-xl bg-indigo-600 text-white hover:bg-indigo-500"
                            onClick={increment}
                        >
                            +
                        </button>

                        <button
                            id="decrement"
                            type="button"
                            className="btn btn-outline btn-lg rounded-xl border-slate-500 text-white hover:bg-slate-700"
                            onClick={decrement}
                        >
                            −
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
