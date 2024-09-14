const Selectinput = (props) => {
  let provincias = props.provincias;
  const listaProvincias = provincias.map((prov) => (
    <option key={prov.codigo}>{prov.provincia}</option>
  ));
  let [a, b] = props.label;
  let handleForm = props.handleForm;
  return (
    <div>
      <label htmlFor={b} style={{ marginTop: 20 }}>
        {a + b}
        <select
          onChange={handleForm}
          required
          name={b}
          id={b}
          className="form-select"
          style={{ width: 400, textAlign: "center" }}
          defaultValue=""
        >
          <option value="" disabled>
            ---
          </option>
          {listaProvincias}
        </select>
      </label>
    </div>
  );
};
export default Selectinput;
