export default function Input({ id, type, label, placeholder, onchange }) {
    return (
        <div className="flex w-full flex-col gap-2">
            <label
                htmlFor={id}
                className="text-sm font-semibold text-slate-700"
            >
                {label}
            </label>

            <input
                id={id}
                type={type}
                className="input h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                placeholder={placeholder}
                onChange={onchange}
                required
            />
        </div>
    );
}
