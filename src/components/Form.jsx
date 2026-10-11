//Un componente Form che mostri un form con 2 campi di input (uno per il nome ed una per la mail). Al submit del form deve apparire una card che mostri il contenuto dei due campi input. Attenzione! Per far ciò sarà necessario lavorare sull’OnSubmit da passare al tag form (proprio come con OnChange o OnClick), catturando l’evento submit sarà necessario aggiungere il metodo preventDefault per impedire che si ricarichi la pagina => e.preventDefault()

import { useState } from "react";

export default function Form() {

    const [name, setName] = useState("");

    const [mail, setMail] = useState("");

    const [isShowed, setIsShowed] = useState(false);

    const handleName = (onChange) => {
        setName(onChange.target.value);
    }

    const handleMail = (onChange) => {
        setMail(onChange.target.value);
    }

    const showData = (onSubmit) => {
        onSubmit.preventDefault();

        setIsShowed(true);
    }

    const hiddenData = () => {
        setIsShowed(false);
    }

    let card = null;

    if (isShowed === true) {
        card = (
            <>
                <div className="card-body">
                    <h3>Dati utente</h3>
                    <p>Nome: {name}</p>
                    <p>Email: {mail}</p>
                </div>
                <button className="btn btn-info px-4" onClick={hiddenData}>Chiudi</button>
            </>
        );
    }

    return (
        <section className="container my-5 bg-dark-subtle">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <h2 className="text-center fw-bold mb-4">
                        Form Utente
                    </h2>

                    <form className="row g-3" onSubmit={showData}>

                        <div className="col-12 col-md-6">
                            <label htmlFor="name" className="form-label">
                                Nome Utente
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                                placeholder="Inserisci il tuo nome"
                                onChange={handleName}
                                required
                            />
                        </div>

                        <div className="col-12 col-md-6">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Inserisci la tua email"
                                onChange={handleMail}
                                required
                            />
                        </div>

                        <div className="col-12 text-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary px-4"
                            >
                                Invia
                            </button>
                        </div>

                    </form>
                    <div className="card">
                        {card}
                    </div>
                </div>
            </div>
        </section>
    );
}