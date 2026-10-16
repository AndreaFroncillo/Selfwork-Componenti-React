export default function UserCard({ name, mail, onclick }) {
    return (
        <div className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-lg">

            <div className="flex flex-col gap-5 p-6 sm:p-8">

                <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl text-indigo-600">
                        ✓
                    </span>

                    <h3 className="m-0 text-2xl font-bold text-slate-900">
                        Dati utente
                    </h3>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <p className="mb-3 text-sm text-slate-700">
                        <strong className="text-slate-900">Nome:</strong> {name}
                    </p>

                    <p className="m-0 text-sm text-slate-700">
                        <strong className="text-slate-900">Email:</strong> {mail}
                    </p>
                </div>

                <button
                    type="button"
                    className="self-start rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                    onClick={onclick}
                >
                    Chiudi
                </button>

            </div>
        </div>
    );
}
