import styles from "./Header.module.css";

export default function Header() {
    return (
        <header
            className={`${styles.hero} relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6 py-20 text-center sm:px-10`}
        >
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6">

                <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300">
                    ✨ Esplora il mondo Pokémon
                </span>

                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Benvenuto nel mio{" "}
                    <span className={styles.gradientText}>
                        Pokédex
                    </span>
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                    Scopri i Pokémon, esplora le loro evoluzioni
                    e conosci le loro abilità.
                </p>

                <a
                    href="#pokemon-section"
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white no-underline shadow-lg shadow-indigo-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white hover:no-underline"
                >
                    Scopri i Pokémon ↓
                </a>
            </div>
        </header>
    );
}
