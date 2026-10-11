import Input from "./Input";
import Button from "./Button";
import UserCard from "./UserCard";

export default function Form({ children, onsubmit }) {

    return (
        <section className="container my-5 bg-dark-subtle">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <h2 className="text-center fw-bold mb-4">
                        Form Utente
                    </h2>

                    <form className="row g-3" onSubmit={onsubmit}>
                        {children}
                    </form>

                </div>
            </div>
        </section>
    );
}

Form.Input = Input;
Form.Button = Button;
Form.UserCard = UserCard;