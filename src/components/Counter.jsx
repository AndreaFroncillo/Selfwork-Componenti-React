import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    }

    const decrement = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <section className="container my-5 bg-info-subtle">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center">

                    <h2 className="fw-bold mb-3">Contatore</h2>

                    <h3 className="mb-4">{counter}</h3>

                    <div className="d-flex justify-content-center gap-3">
                        <button id="increment" className="btn btn-primary px-3 py-2" onClick={increment}>
                            +
                        </button>
                        <button id="decrement" className="btn btn-outline-secondary px-3 py-2" onClick={decrement}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}