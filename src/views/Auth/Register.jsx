import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

export default function Register() {

    const { register } = useContext(UserContext);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.id === "name") {
            setUserName(e.target.value);
        } else if (e.target.id === "registerEmail") {
            setUserEmail(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName && userEmail) {
            register({
                name: userName,
                email: userEmail
            });

            navigate("/");
        }
    };

    return (
        <>
            <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

                <div className="w-full max-w-md">

                    <div className="mb-8 text-center">
                        <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                            Crea un account
                        </span>

                        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                            Registrati
                        </h1>

                        <p className="mt-3 text-slate-600">
                            Entra a far parte di ReactSpace.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">

                        <form
                            className="flex flex-col gap-5"
                            onSubmit={handleSubmit}
                        >

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Nome
                                </label>

                                <input
                                    type="text"
                                    className="input h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
                                    id="name"
                                    placeholder="Inserisci il tuo nome"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="registerEmail"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="input h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
                                    id="registerEmail"
                                    placeholder="Inserisci la tua email"
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-3 w-full rounded-xl border-0 bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg"
                            >
                                Registrati
                            </button>

                        </form>

                    </div>

                </div>

            </section>
        </>
    );
}
