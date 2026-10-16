export default function Button({ children, onclick, type = "button" }) {
    return (
        <div className="mt-4 flex justify-center md:col-span-2">
            <button
                type={type}
                className="inline-flex min-w-40 items-center justify-center rounded-xl border-0 bg-indigo-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-lg"
                onClick={onclick}
            >
                {children}
            </button>
        </div>
    );
}
