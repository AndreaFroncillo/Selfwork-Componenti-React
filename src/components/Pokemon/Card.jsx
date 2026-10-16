import { useState } from "react";

export default function Card({ pokemon, onclick }) {

    const [showMoves, setShowMoves] = useState(false);

    const toggleMoves = () => {
        if (showMoves === true) {
            setShowMoves(false);
        } else {
            setShowMoves(true);
        }
    };

    return (
        <div className="min-w-0">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <figure className="m-0 flex h-56 shrink-0 items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-5">
                    <img
                        src={pokemon.image}
                        className="h-full w-full object-contain"
                        alt={pokemon.name}
                    />
                </figure>

                <div className="flex flex-1 flex-col gap-4 p-6">

                    <h3 className="m-0 text-2xl font-bold text-slate-900">
                        {pokemon.name}
                    </h3>

                    <p className="m-0 text-sm font-medium text-slate-600">
                        <strong>Tipo:</strong> {pokemon.type}
                    </p>

                    <p className="m-0 min-h-20 text-sm leading-relaxed text-slate-600">
                        {pokemon.description}
                    </p>

                    <button
                        type="button"
                        onClick={toggleMoves}
                        aria-expanded={showMoves}
                        className="flex w-full items-center justify-between rounded-xl border-0 bg-slate-100 px-4 py-3 font-semibold text-slate-800 transition-colors hover:bg-indigo-50"
                    >
                        <span>Mosse</span>
                        <span>{showMoves ? "−" : "+"}</span>
                    </button>

                    {showMoves && (
                        <ul className="m-0 flex flex-col gap-2 p-0 list-none">
                            {pokemon.moves.map((move) => {
                                return (
                                    <li
                                        key={move.name}
                                        className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700"
                                    >
                                        <strong className="text-indigo-600">
                                            {move.name}:
                                        </strong>

                                        <p className="mt-1 mb-0">
                                            {move.description}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <button
                        type="button"
                        onClick={onclick}
                        className="mt-auto flex w-full items-center justify-center rounded-xl border-0 bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-colors hover:bg-indigo-500"
                    >
                        Evoluzioni
                    </button>

                </div>
            </div>
        </div>
    );
}
