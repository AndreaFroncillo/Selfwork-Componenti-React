import Card from "./Card";
import EvolutionCard from "./EvolutionCard";

export default function List({ children }) {
    return (
        <div className="container my-5">
            <div className="row g-4">
                {children}
            </div>
        </div>
    );
}

List.Card = Card;
List.EvolutionCard = EvolutionCard;