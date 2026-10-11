export default function EvolutionCard({ evolution }) {
    return (
        <div className="col-12 col-md-6">
            <div className="card h-100">
                <img
                    src={evolution.image}
                    className="card-img-top"
                    alt={evolution.name}
                />

                <div className="card-body">
                    <h3 className="card-title fw-bold">
                        {evolution.name}
                    </h3>

                    <p className="card-text">
                        {evolution.description}
                    </p>
                </div>
            </div>
        </div>
    );
}