const Textinput = (props) => {
  let [a, b] = props.label;
  let handleForm = props.handleForm;
  return (
    <div>
      <label htmlFor={b} className="form-label" style={{ marginTop: 20 }}>
        {a + b}
        <input
          type="text"
          className="form-control"
          name={b}
          id={b}
          required
          onChange={handleForm}
        ></input>
      </label>
    </div>
  );
};
export default Textinput;
