
export default function Register() {

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Registrati</h1>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nome</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Inserisci il tuo nome"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="registerEmail" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="registerEmail"
                                            placeholder="Inserisci la tua email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="registerPassword" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="registerPassword"
                                            placeholder="Inserisci una password"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Conferma password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            placeholder="Conferma la password"
                                        />
                                    </div>

                                    <button type="button" className="btn btn-primary">
                                        Registrati
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
