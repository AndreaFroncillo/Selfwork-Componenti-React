
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";

export default function Register() {

    const { register } = useContext(UserContext);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.id === "name") {
            setUserName(e.target.value);
        } else if (e.target.id === "registerEmail") {
            setUserEmail(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName && userEmail) {
            register({
                name: userName,
                email: userEmail
            });

            navigate("/");
        }
    };

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Registrati</h1>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nome</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Inserisci il tuo nome"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="registerEmail" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="registerEmail"
                                            placeholder="Inserisci la tua email"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Registrati
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
