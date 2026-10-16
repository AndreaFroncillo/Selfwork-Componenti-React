import Input from "./Input";
import Button from "./Button";
import UserCard from "./UserCard";

export default function Form({ children, onsubmit }) {

    return (
        <section className="mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 shadow-lg sm:p-10">

                <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">

                    <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
                        Form Utente
                    </h2>

                    <form
                        className="grid grid-cols-1 gap-5 md:grid-cols-2"
                        onSubmit={onsubmit}
                    >
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
