
import { useState } from "react";
import useFetch from "../hooks/useFetch";

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
        <section className="container my-5">
            <h2>Lista utenti</h2>

            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                {!isVisible ? "Carica utenti" : "Nascondi utenti"}
            </button>

            <ul>
                {isVisible && users && users.map((user) => {
                    return (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
