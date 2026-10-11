export default function Button({ children, onclick, type = "button" }) {
    return (
        <div className="col-12 text-center mt-4">
            <button
                type={type}
                className="btn btn-primary px-4"
                onClick={onclick}
            >
                {children}
            </button>
        </div>
    );
}