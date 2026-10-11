export default function UserForm() {
    return (
      <div>
        <h1 className="title-custom">Il mio primo esercizio React</h1>

        <label htmlFor="userName" className="label-custom">
          Nome utente
        </label>

        <input
          type="text"
          id="userName"
          className="input-custom"
          placeholder="Inserisci il tuo nome"
        />
      </div>
    )
}