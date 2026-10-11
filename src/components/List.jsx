export default function List({ pokemon }) {

    console.log(pokemon);
    return (
        <div className="container my-5">
            <div className="row">

                {pokemon.map((pokemon) => {
                    return (
                        <div key={pokemon.id} className="col-12 col-md-4">
                            <div className="card h-100">
                                <img
                                    src={pokemon.image}
                                    className="card-img-top"
                                    alt={pokemon.name}
                                />

                                <div className="card-body">
                                    <h3 className="card-title fw-bold">
                                        {pokemon.name}
                                    </h3>

                                    <p className="card-text">
                                        <strong>Tipo:</strong> {pokemon.type}
                                    </p>

                                    <p className="card-text">
                                        {pokemon.description}
                                    </p>

                                    <h5>Mosse</h5>

                                    <ul>

                                        {pokemon.moves.map((move) => {
                                            return (
                                                <li key={move.name}>
                                                    <strong>{move.name}:</strong>
                                                    <p>{move.description}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <button className="btn btn-primary">
                                        Evoluzioni
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}