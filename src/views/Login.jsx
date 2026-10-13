
export default function Login() {

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Login</h1>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Inserisci la tua email"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Inserisci la tua password"
                                        />
                                    </div>

                                    <button type="button" className="btn btn-primary">
                                        Accedi
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
