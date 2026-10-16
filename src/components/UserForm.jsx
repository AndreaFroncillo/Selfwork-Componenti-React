export default function UserForm() {
  return (
    <div className="mx-auto my-10 flex max-w-md flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">

      <h1 className="text-2xl font-bold text-slate-900">
        Il mio primo esercizio React
      </h1>

      <label
        htmlFor="userName"
        className="text-sm font-semibold text-slate-700"
      >
        Nome utente
      </label>

      <input
        type="text"
        id="userName"
        className="input w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:border-indigo-500 focus:outline-none"
        placeholder="Inserisci il tuo nome"
      />

    </div>
  );
}
