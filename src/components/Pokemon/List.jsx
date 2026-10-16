import Card from "./Card";
import EvolutionCard from "./EvolutionCard";

export default function List({ children }) {
    return (
        <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
                {children}
            </div>
        </div>
    );
}

List.Card = Card;
List.EvolutionCard = EvolutionCard;
