export default function Input({ id, type, label, placeholder, onchange }) {
    return (
        <div className="col-12 col-md-6">
            <label htmlFor={id} className="form-label">
                {label}
            </label>

            <input
                id={id}
                type={type}
                className="form-control"
                placeholder={placeholder}
                onChange={onchange}
                required
            />
        </div>
    );
}