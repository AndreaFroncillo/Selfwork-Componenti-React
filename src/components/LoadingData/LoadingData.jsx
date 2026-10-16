import { useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function LoadingData() {

    const [trigger, setTrigger] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const users_url = "https://jsonplaceholder.typicode.com/users";

    const users = useFetch(
        trigger ? users_url : null,
        trigger
    );

    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false);
            setTrigger(false);
        } else {
            setIsVisible(true);
            setTrigger(true);
        }
    };

    return (
        <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50 p-6 shadow-lg sm:p-10">

                <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

                    <div>
                        <span className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                            Dati API
                        </span>

                        <h2 className="m-0 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Lista utenti
                        </h2>

                        <p className="mt-3 mb-0 text-sm text-slate-600">
                            Visualizza gli utenti recuperati tramite API.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="rounded-xl border-0 bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-indigo-500"
                        onClick={handleClick}
                    >
                        {!isVisible ? "Carica utenti" : "Nascondi utenti"}
                    </button>

                </div>

                <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-3">

                    {isVisible && users && users.map((user) => {
                        return (
                            <li
                                key={user.id}
                                className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-600">
                                    {user.name.charAt(0)}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="m-0 text-base font-bold text-slate-900">
                                        {user.name}
                                    </h3>

                                    <p className="mt-1 mb-0 break-all text-sm text-slate-600">
                                        {user.email}
                                    </p>
                                </div>
                            </li>
                        );
                    })}

                </ul>

            </div>
        </section>
    );
}
