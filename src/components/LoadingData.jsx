import { useEffect, useState } from "react";

export default function LoadingData() {

    const [users, setUsers] = useState();
    const [trigger, setTrigger] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        const promise = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await promise.json();
        setUsers(json);
        console.log(json);

    }

    useEffect(() => {

        if (trigger) {
            setTimeout(() => {
                getData();
                setIsLoading(false);
            }, 2000);
        }
    }, [trigger])

    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false);
            setTrigger(false);
            setUsers(null);
        } else {
            setIsVisible(true);
            setTrigger(true);
            setIsLoading(true);
        }
    }

    return (
        <section className="container my-5">
            <h2>Lista utenti</h2>

            <button className="btn btn-primary" onClick={handleClick}>
                {!isVisible ? 'Carica utenti' : 'Nascondi utenti'}
            </button>
            {isLoading && <p>Loading data...</p>}
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