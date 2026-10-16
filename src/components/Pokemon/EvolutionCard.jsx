export default function EvolutionCard({ evolution }) {
    return (
        <div className="flex h-full min-w-0">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <figure className="m-0 flex h-56 shrink-0 items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-5">
                    <img
                        src={evolution.image}
                        className="h-full w-full object-contain"
                        alt={evolution.name}
                    />
                </figure>

                <div className="flex flex-1 flex-col gap-4 p-6">

                    <h3 className="m-0 text-2xl font-bold text-slate-900">
                        {evolution.name}
                    </h3>

                    <p className="m-0 text-sm leading-relaxed text-slate-600">
                        {evolution.description}
                    </p>

                </div>
            </div>
        </div>
    );
}
