export default function UserCard({ name, mail, onclick }) {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <h3>Dati utente</h3>
                <p>Nome: {name}</p>
                <p>Email: {mail}</p>

                <button
                    className="btn btn-info px-4"
                    onClick={onclick}
                >
                    Chiudi
                </button>
            </div>
        </div>
    );
}